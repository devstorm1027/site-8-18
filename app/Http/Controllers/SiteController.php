<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\FreeRequest;
use App\DemoRequest;
use App\SubscriptionRequest;
use App\Mail\FreeRequest as MailFreeRequest;
use App\Mail\DemoRequest as MailDemoRequest;
use App\Mail\ContactRequest as MailContactRequest;
use App\Mail\SubscriptionRequest as MailSubscriptionRequest;

class SiteController extends Controller
{
    public function index(){
        return view('website');
    }

    public function features(){
        return view('website');
    }

    public function api_create_demo_request(Request $request){
    
        $this->validate($request,[
            'firstname' => 'required|min:3|max:30',
            'lastname' => 'required|min:3|max:30',
            'company' => 'required|min:5|max:30',
            'website' => 'required|min:2|max:30',
            'email' => 'required|email',
            'phone' => 'required|numeric',
            'no_orders' => 'required',
            'no_sku' => 'required',
            'functions' => 'required',
            'channel' => 'required',
            'revenue' => 'required',
            'timeframe' => 'required'
        ]);

        $string_functions = '';
        foreach ($request->functions as $key => $value) {
            $string_functions .= ($key == 0) ? $value : ', '.$value;
        }

        $string_channel = '';
        foreach ($request->channel as $key => $value) {
            $string_channel .= ($key == 0) ? $value : ', '.$value;
        }

        $request->merge(['functions'=>$string_functions]);

        $request->merge(['channel'=>$string_channel]);


        //$contact = DemoRequest::create($request->only(['firstname','lastname','company','website','email','phone','no_orders','no_sku','revenue','timeframe','functions','channel']));

        Mail::to('support@skusuite.com','Support Skusuite')
                ->send(new MailDemoRequest($request));

                //->bcc('clep2809@gmail.com','Carlos Escorche')
        return response()->json(['message' => 'The data was successfully sent'],200);   
    }


    public function api_create_contact_request(Request $request){
    
        $this->validate($request,[
            'firstname' => 'required|min:3|max:30',
            'lastname' => 'required|min:3|max:30',
            'description' => 'required|min:5|max:30',
            'email' => 'required|email',
            'phone' => 'required|numeric',
        ]);


        //$contact = ContactRequest::create($request->only(['firstname','lastname','description','email','phone']));

        Mail::to('support@skusuite.com','Support Skusuite')
                ->send(new MailContactRequest($request));

                //->bcc('clep2809@gmail.com','Carlos Escorche')
        return response()->json(['message' => 'The data was successfully sent'],200);   
    }



    public function api_create_free_request(Request $request){
    
        $this->validate($request,[
            'email' => 'required|email'
        ]);


        //$contact = FreeRequest::create($request->only(['email']));
        $output = new \Symfony\Component\Console\Output\ConsoleOutput(2);
        $output->writeln('hello');

        Mail::to('support@skusuite.com','Support Skusuite')
          ->send(new MailFreeRequest($request));

        //sleep(2);
          //
        //return view('theMap', json(compact('businesses')));

        return response()->json(['message' => 'The data was successfully sent'],200);   
    }



    function api_create_subscription_request(Request $request){
        
        $this->validate($request,[
            'name' => 'required|min:3|max:30',           
            'email' => 'required|email',
            'phone' => 'required|numeric',           
        ]);

        //$contact = SubscriptionRequest::create($request->only(['name','email','phone']));

        Mail::to('support@skusuite.com','Support Skusuite')
                ->send(new MailSubscriptionRequest($request));
//->bcc('aron@skusuite.com')
        return response()->json(['message' => 'The data was successfully sent'],200);   
    
    }
}
