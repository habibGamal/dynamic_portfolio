<?php

namespace App\Filament\Resources\Works\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TagsInput;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Components\Tabs;
use Filament\Schemas\Schema;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Laravel\Facades\Image;
use Livewire\Features\SupportFileUploads\TemporaryUploadedFile;

class WorkForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Tabs::make('Work Details')
                    ->tabs([
                        Tabs\Tab::make('Basic Information')
                            ->schema([
                                Section::make('Project Details')
                                    ->schema([
                                        TextInput::make('name')
                                            ->required()
                                            ->maxLength(255)
                                            ->columnSpanFull(),

                                        Textarea::make('description')
                                            ->required()
                                            ->maxLength(500)
                                            ->rows(3)
                                            ->columnSpanFull()
                                            ->helperText('Brief description of the project'),

                                        Textarea::make('full_description')
                                            ->required()
                                            ->rows(5)
                                            ->columnSpanFull()
                                            ->helperText('Detailed description of the project'),

                                        TextInput::make('role')
                                            ->required()
                                            ->datalist([
                                                'Fullstack Developer',
                                                'Frontend Developer',
                                                'Backend Developer',
                                                'Mobile Developer',
                                                'DevOps Engineer',
                                                'UI/UX Designer',
                                                'Project Manager',
                                            ])
                                            ->columnSpan(1),

                                        TextInput::make('duration')
                                            ->required()
                                            ->maxLength(100)
                                            ->placeholder('e.g., 6 months, 1 year')
                                            ->columnSpan(1),

                                        TextInput::make('team_size')
                                            ->maxLength(100)
                                            ->placeholder('e.g., Solo Developer, 5 members')
                                            ->columnSpan(1),

                                        TextInput::make('order')
                                            ->required()
                                            ->numeric()
                                            ->default(0)
                                            ->minValue(0)
                                            ->helperText('Display order on portfolio')
                                            ->columnSpan(1),
                                    ])
                                    ->columns(2),
                            ]),

                        Tabs\Tab::make('Problem & Solution')
                            ->schema([
                                Section::make('Challenge Overview')
                                    ->schema([
                                        Textarea::make('problem')
                                            ->required()
                                            ->rows(5)
                                            ->columnSpanFull()
                                            ->helperText('Describe the problem or challenge this project addresses'),

                                        Textarea::make('solution')
                                            ->required()
                                            ->rows(5)
                                            ->columnSpanFull()
                                            ->helperText('Explain how you solved the problem'),
                                    ]),
                            ]),

                        Tabs\Tab::make('Contributions')
                            ->schema([
                                Section::make('Your Contributions')
                                    ->schema([
                                        TagsInput::make('contributions')
                                            ->required()
                                            ->placeholder('Add a contribution and press Enter')
                                            ->splitKeys(['Tab', 'Enter'])
                                            ->reorderable()
                                            ->columnSpanFull()
                                            ->helperText('List your specific contributions to the project'),
                                    ]),

                                Section::make('Technical Challenges')
                                    ->schema([
                                        Repeater::make('challenges')
                                            ->schema([
                                                TextInput::make('title')
                                                    ->required()
                                                    ->maxLength(255)
                                                    ->columnSpanFull()
                                                    ->label('Challenge Title'),

                                                Textarea::make('description')
                                                    ->required()
                                                    ->rows(3)
                                                    ->columnSpanFull()
                                                    ->label('Challenge Description'),

                                                Textarea::make('decision')
                                                    // ->required()
                                                    ->rows(3)
                                                    ->columnSpanFull()
                                                    ->label('Solution/Decision Made'),
                                            ])
                                            ->columnSpanFull()
                                            ->itemLabel(fn (array $state): ?string => $state['title'] ?? null)
                                            ->collapsible()
                                            ->reorderable()
                                            ->addActionLabel('Add Challenge')
                                            ->defaultItems(0),
                                    ]),
                            ]),

                        Tabs\Tab::make('Tech Stack')
                            ->schema([
                                Section::make('Technologies Used')
                                    ->schema([
                                        Repeater::make('tech_stack')
                                            ->schema([
                                                Select::make('category')
                                                    ->required()
                                                    ->searchable()
                                                    ->options([
                                                        'Backend' => 'Backend',
                                                        'Frontend' => 'Frontend',
                                                        'Mobile' => 'Mobile',
                                                        'Database' => 'Database',
                                                        'Infrastructure' => 'Infrastructure',
                                                        'Development Tools' => 'Development Tools',
                                                        'DevOps' => 'DevOps',
                                                        'Testing' => 'Testing',
                                                        'Integrations' => 'Integrations',
                                                        'Tools' => 'Tools',
                                                        'Admin' => 'Admin',
                                                        'Other' => 'Other',
                                                    ])
                                                    ->native(false)
                                                    ->columnSpan(1)
                                                    ->live(),

                                                TagsInput::make('items')
                                                    ->required()
                                                    ->placeholder('Add technologies and press Enter')
                                                    ->splitKeys(['Tab', 'Enter'])
                                                    ->reorderable()
                                                    ->columnSpan(1)
                                                    ->label('Technologies'),
                                            ])
                                            ->columns(2)
                                            ->columnSpanFull()
                                            ->itemLabel(fn (array $state): ?string => $state['category'] ?? null)
                                            ->collapsible()
                                            ->reorderable()
                                            ->addActionLabel('Add Category')
                                            ->defaultItems(0),
                                    ]),
                            ]),

                        Tabs\Tab::make('Media & Links')
                            ->schema([
                                Section::make('Images')
                                    ->schema([
                                        FileUpload::make('main_image')
                                            ->image()
                                            ->required()
                                            ->columnSpanFull()
                                            ->imageEditor()
                                            ->maxSize(5120)
                                            ->acceptedFileTypes(['image/jpeg', 'image/png', 'image/webp', 'image/jpg'])
                                            ->disk('public')
                                            ->directory('works/main-images')
                                            ->visibility('public')
                                            ->saveUploadedFileUsing(function ($file, $get) {
                                                return self::convertToWebP($file, 'works/main-images');
                                            })
                                            ->helperText('Main project image (will be optimized to WebP)'),

                                        Repeater::make('images')
                                            ->schema([
                                                FileUpload::make('image')
                                                    ->image()
                                                    ->required()
                                                    ->imageEditor()
                                                    ->maxSize(5120)
                                                    ->acceptedFileTypes(['image/jpeg', 'image/png', 'image/webp', 'image/jpg'])
                                                    ->disk('public')
                                                    ->directory('works/gallery')
                                                    ->visibility('public')
                                                    ->saveUploadedFileUsing(function ($file) {
                                                        return self::convertToWebP($file, 'works/gallery');
                                                    })
                                                    ->columnSpanFull(),
                                            ])
                                            ->itemLabel(fn (array $state): ?string =>
                                                isset($state['image']) && is_string($state['image'])
                                                    ? basename($state['image'])
                                                    : 'Gallery Image'
                                            )
                                            ->collapsible()
                                            ->reorderable()
                                            ->addActionLabel('Add Image')
                                            ->defaultItems(0)
                                            ->columnSpanFull()
                                            ->helperText('Project gallery images (will be optimized to WebP)'),
                                    ]),

                                Section::make('Links & Tags')
                                    ->schema([
                                        TextInput::make('source_code_link')
                                            ->required()
                                            ->url()
                                            ->maxLength(255)
                                            ->placeholder('https://github.com/username/project')
                                            ->columnSpanFull(),

                                        Repeater::make('tags')
                                            ->schema([
                                                Select::make('name')
                                                    ->required()
                                                    ->searchable()
                                                    ->options([
                                                        'laravel' => 'Laravel',
                                                        'react' => 'React',
                                                        'vue' => 'Vue',
                                                        'typescript' => 'TypeScript',
                                                        'javascript' => 'JavaScript',
                                                        'php' => 'PHP',
                                                        'python' => 'Python',
                                                        'tailwind' => 'Tailwind CSS',
                                                        'mysql' => 'MySQL',
                                                        'postgresql' => 'PostgreSQL',
                                                        'mongodb' => 'MongoDB',
                                                        'flutter' => 'Flutter',
                                                        'react-native' => 'React Native',
                                                        'nodejs' => 'Node.js',
                                                        'nextjs' => 'Next.js',
                                                        'filament' => 'Filament',
                                                    ])
                                                    ->native(false)
                                                    ->columnSpan(1),

                                                TextInput::make('color')
                                                    ->required()
                                                    ->datalist([
                                                        'text-red-500',
                                                        'text-blue-500',
                                                        'text-blue-700',
                                                        'text-green-400',
                                                        'text-green-500',
                                                        'text-yellow-500',
                                                        'text-purple-500',
                                                        'text-pink-500',
                                                        'text-indigo-500',
                                                        'text-gray-500',
                                                        'text-orange-500',
                                                        'text-teal-500',
                                                        'text-cyan-500',
                                                        'text-lime-500',
                                                        'text-sky-500',
                                                        'pink-text-gradient',
                                                    ])
                                                    ->placeholder('e.g., text-amber-500')
                                                    ->columnSpan(1),
                                            ])
                                            ->columns(2)
                                            ->columnSpanFull()
                                            ->itemLabel(fn (array $state): ?string => $state['name'] ?? null)
                                            ->collapsible()
                                            ->reorderable()
                                            ->addActionLabel('Add Tag')
                                            ->defaultItems(0),
                                    ]),
                            ]),

                        Tabs\Tab::make('Metrics')
                            ->schema([
                                Section::make('Project Metrics')
                                    ->schema([
                                        Repeater::make('metrics')
                                            ->schema([
                                                TextInput::make('label')
                                                    ->required()
                                                    ->maxLength(100)
                                                    ->placeholder('e.g., Active Users')
                                                    ->columnSpan(1),

                                                TextInput::make('value')
                                                    ->required()
                                                    ->maxLength(100)
                                                    ->placeholder('e.g., 10K+')
                                                    ->columnSpan(1),
                                            ])
                                            ->columns(2)
                                            ->columnSpanFull()
                                            ->itemLabel(fn (array $state): ?string =>
                                                isset($state['label'], $state['value'])
                                                    ? "{$state['label']}: {$state['value']}"
                                                    : null
                                            )
                                            ->collapsible()
                                            ->reorderable()
                                            ->addActionLabel('Add Metric')
                                            ->defaultItems(0)
                                            ->helperText('Optional project statistics or metrics'),
                                    ]),
                            ]),
                    ])
                    ->columnSpanFull(),
            ]);
    }

    /**
     * Convert uploaded image to WebP format for better performance
     */
    protected static function convertToWebP(TemporaryUploadedFile $file, string $directory): string
    {
        // Get original file extension
        $originalExtension = $file->getClientOriginalExtension();

        // Generate unique filename with webp extension
        $filename = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
        $webpFilename = $filename . '_' . uniqid() . '.webp';
        $storagePath = $directory . '/' . $webpFilename;

        // Read the uploaded image
        $image = Image::read($file->getRealPath());

        // Optimize and convert to WebP
        $image->toWebp(quality: 85);

        // Save to storage disk
        Storage::disk('public')->put($storagePath, (string) $image->encode());

        // Return the path for database storage
        return $storagePath;
    }
}
