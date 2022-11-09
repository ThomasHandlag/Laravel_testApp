<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Books extends Model
{
   protected $fillable = [
        'id',
        'title',
        'author',
        'price',
        'path_img',
        'decription',
        'category',
        'formated',
        'mass',
        'sizebook',
    ];
    use HasFactory;
}
