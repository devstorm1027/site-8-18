<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SubscriptionRequest extends Model
{
    protected $fillable = ['name','phone','email'];
}
