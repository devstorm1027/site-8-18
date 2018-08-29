<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FreeRequest extends Model
{
    protected $table = "free_requests";

	protected $fillable = ['email'];

}
