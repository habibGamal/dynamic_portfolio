<?php

namespace App\Filament\Resources\Works\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class WorksTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('order')
                    ->label('#')
                    ->numeric()
                    ->sortable()
                    ->width(60),

                ImageColumn::make('main_image')
                    ->label('Image')
                    ->circular()
                    ->defaultImageUrl(url('/images/placeholder.png')),

                TextColumn::make('name')
                    ->searchable()
                    ->sortable()
                    ->weight('bold')
                    ->description(fn ($record): string =>
                        strlen($record->description) > 60
                            ? substr($record->description, 0, 60) . '...'
                            : $record->description
                    ),

                TextColumn::make('role')
                    ->searchable()
                    ->badge()
                    ->color('success'),

                TextColumn::make('duration')
                    ->searchable()
                    ->icon('heroicon-o-clock')
                    ->toggleable(),

                TextColumn::make('team_size')
                    ->searchable()
                    ->icon('heroicon-o-user-group')
                    ->toggleable()
                    ->placeholder('Not specified'),

                TextColumn::make('tags')
                    ->label('Tags')
                    ->badge()
                    ->formatStateUsing(fn ($state): string =>
                        is_array($state) && isset($state[0]['name'])
                            ? $state[0]['name']
                            : ''
                    )
                    ->toggleable(),

                TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),

                TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->recordActions([
                EditAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ])
            ->defaultSort('order', 'asc')
            ->reorderable('order');
    }
}
