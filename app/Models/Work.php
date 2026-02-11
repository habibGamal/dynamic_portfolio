<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Work extends Model
{
    protected $fillable = [
        'name',
        'description',
        'full_description',
        'problem',
        'solution',
        'role',
        'contributions',
        'tech_stack',
        'challenges',
        'images',
        'metrics',
        'tags',
        'main_image',
        'source_code_link',
        'duration',
        'team_size',
        'order',
    ];

    protected $casts = [
        'contributions' => 'array',
        'tech_stack' => 'array',
        'challenges' => 'array',
        'images' => 'array',
        'metrics' => 'array',
        'tags' => 'array',
    ];

    protected $appends = [
        'main_image_url',
        'image_urls',
    ];

    public function getMainImageUrlAttribute(): string
    {
        return $this->main_image ? url('storage/' . $this->main_image) : url('/images/placeholder.png');
    }

    public function getImageUrlsAttribute(): array
    {
        if (!is_array($this->images)) {
            return [];
        }

        return array_map(function ($item) {
            // Handle new repeater structure: [{"image": "path/to/file.webp"}]
            if (is_array($item) && isset($item['image'])) {
                return url('storage/' . $item['image']);
            }

            // Handle legacy string format for backwards compatibility
            if (is_string($item)) {
                return url('storage/' . $item);
            }

            return url('/images/placeholder.png');
        }, $this->images);
    }
}
