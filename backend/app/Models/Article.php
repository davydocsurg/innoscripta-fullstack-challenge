<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'title',
        'description',
        'url',
        'urlToImage',
        'published_at',
        'content',
        'source',
        'author',
        'category',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'published_at' => 'datetime',
    ];

    /**
     * Get the user that searched for the article.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the article's source.
     */
    public static function source()
    {
        return Article::groupBy('source')
            ->orderBy('source', 'asc')
            ->whereNull('source')
            ->where('source', '!=', '')
            ->pluck('source');
    }

    /**
     * Get the article's category.
     */
    public static function category()
    {
        return Article::groupBy('category')
            ->orderBy('category', 'asc')
            ->whereNull('category')
            ->where('category', '!=', '')
            ->pluck('category');
    }

    /**
     * Get the article's author.
     */
    public static function author()
    {
        return Article::groupBy('author')
            ->orderBy('author', 'asc')
            ->whereNull('author')
            ->where('author', '!=', '')
            ->pluck('author');
    }

}
