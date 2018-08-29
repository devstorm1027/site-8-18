<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="email" content="support@skusuite.com">
  <meta name="author" content="SkuSuite">
  <meta name="category" content="inventory, warehouse, multi channel, wholesale, erp, wms, shipping, saas">
  <meta name="phone" content="1-212-452-5011">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
  <meta http-equiv = "Content-Type"content = "text/html; charset = utf-8"/>
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <meta name="url-base" content="{{ url('/') }}">
  <meta name="google-site-verification" content="bdG91R104PJSZok5ZhAuk2JQ8DdErP1ejSaT2J0EgRs" />
  <link rel="icon" type="image/png" href="{{asset('img/icon.png')}}">
  

  <link rel="stylesheet" href="{{asset('libs/animate.css/animate.min.css')}}" type="text/css" />
  <link rel="stylesheet" href="{{asset('libs/font-awesome/css/font-awesome.min.css')}}" type="text/css" />
  <link rel="stylesheet" href="{{asset('libs/simple-line-icons/css/simple-line-icons.css')}}" type="text/css" />
  <link rel="stylesheet" href="{{asset('libs/bootstrap/dist/css/bootstrap.min.css')}}" type="text/css" />
  <link rel="stylesheet" href="{{asset('libs/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css')}}" type="text/css" />
  <link rel="stylesheet" href="{{asset('/css/website.css')}}" type="text/css"/>
  <!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
  <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
  <![endif]-->
  <script src="//cdn.polyfill.io/v2/polyfill.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/deepstream.io-client-js/2.1.1/deepstream.min.js"></script>

 

  @stack('css')
  
  <script>
      window.Laravel = <?php echo json_encode([
          'csrfToken' => csrf_token(),
      ]); ?>
  </script>
</head>

<body class="@yield('body.class')">
    
    <section id="app">
      
      @yield('base')
    
    </section>
<script src="{{asset('/libs/jquery/dist/jquery.min.js')}}"></script>
<script src="{{asset('/libs/waypoints/lib/jquery.waypoints.min.js')}}"></script>
<script src="{{asset('/js/complements.min.js')}}"></script>
<script src="{{asset('/js/app.js')}}"></script>
<script src="https://maps.googleapis.com/maps/api/js?sensor=true"></script>


<script type="text/javascript">
var $zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq || 
{widgetcode:"0812fefb66fef4040c0d7ecc0f65f009bea4fb08e725c93904f8257e88ae67135d5fe629768af6d9a03793700d9418c2", values:{},ready:function(){}};
var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;
s.src="https://salesiq.zoho.com/widget";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);d.write("<div id='zsiqwidget'></div>");
</script>

@stack('scripts')

</body>
</html>
