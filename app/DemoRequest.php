<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DemoRequest extends Model
{
    protected $table = "demo_requests";

	protected $fillable = ['firstname','lastname','company','phone','email','no_orders','no_sku','functions','channel','revenue','timeframe'];

}
