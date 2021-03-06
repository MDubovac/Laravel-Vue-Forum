<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Reply extends Model
{
    // Relationships
    public function question(){
        return $this->belongsTo(Question::class);
    }
    public function user(){
        return $this->belongsTo(User::class);
    }
    public function likes(){
        return $this->hasMany(Like::class);
    }

    protected $guarded = [];

}
