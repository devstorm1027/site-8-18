$(function(){

if (navigator.geolocation)
            {
                navigator.geolocation.getCurrentPosition(showCurrentLocation);
            }
            else
            {
               alert("Geolocation API not supported.");
            }

            function showCurrentLocation(position)
            {
                var latitude = position.coords.latitude;
                var longitude = position.coords.longitude;
                var coords = new google.maps.LatLng(latitude, longitude);

                var mapOptions = {
                zoom: 15,
                center: coords,
                mapTypeControl: true,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            //create the map, and place it in the HTML map div
            map = new google.maps.Map(
            document.getElementById("map"), mapOptions
            );

            //place the initial marker
            var marker = new google.maps.Marker({
            position: coords,
            map: map,
            title: "Current location!"
            });
						}
					



	$(window).bind("scroll", function(e) {        
		if (document.documentElement.scrollTop == 0) {
			if (document.body.scrollTop >= 50) {            
				$('.navbar-inverse').addClass('scroll');
			} else {        
				$('.navbar-inverse').removeClass('scroll');
			}
		}
		else{
			if (document.documentElement.scrollTop >= 50) {            
				$('.navbar-inverse').addClass('scroll');
			} else {        
				$('.navbar-inverse').removeClass('scroll');
			}
		}
	});

	$("body").niceScroll({cursorborder:"",cursorwidth:"10px",cursorcolor:"#fd5b0d",background:'rgba(0,0,0,0.1)',cursoropacitymin:5,cursoropacitymax:5,boxzoom:true,cursorborderradius:"5px",scrollspeed: 50,mousescrollstep:50}); // First scrollable DIV
	
	$('body').jpreLoader({		
    loaderVPos: '0px',
    autoClose: true,

	  }, function() {
	   init();
	});

	var init = function(){
	    $('body').addClass('loaded');
	    $('#loading-img .bnner').addClass('init');
	   	$('#loading-img .text p').delay(200).fadeIn(300,function(){$(this).addClass('animated fadeInUp');});
	    $('#loading-img .text h1').delay(400).fadeIn(500,function(){$(this).addClass('animated fadeIn');});
	 	$('#loading-img .text .btn').delay(400).fadeIn(500,function(){$(this).addClass('animated fadeIn');});
	
	};


	var waypoint = new Waypoint({
	    element: document.getElementById('h-about'),
	    handler: function(direction) {
	      if(direction == "down"){
	        $('#h-about .sk-s1-block').addClass('animated fadeInUp');
	        $('#h-about .title').addClass('animate');
	        $('#h-about .intro-icon').addClass('animated rotateIn');
	        $('#h-about .line').delay(200).fadeIn(500,function(){$(this).addClass('animate');});           
	      } 
	      if(direction == "up"){
	        $('#h-about .sk-s1-block').removeClass('animated fadeInUp');
	        $('#h-about .title').removeClass('animate');
	        $('#h-about .intro-icon').removeClass('animated rotateIn');
	        $('#h-about .line').removeClass('animate');           
	       }         
	    },
	    offset: '70%'
	});

	var waypoint = new Waypoint({
	    element: document.getElementById('h-features'),
	    handler: function(direction) {
	      if(direction == "down"){
	      	var count = 0;
	      	$('#h-features .title').addClass('animate');
	        $('#h-features .item-s-1').each(function(){
	        	var e = $(this);
	        	e.delay(count).fadeIn(300,function(){$(this).addClass('animated fadeInUp')});
	        	count+=300;
	        });

	        $('#h-features .btn-primary').delay(2000).fadeIn(500,function(){$(this).addClass('animated fadeIn')});
     	  } 
	      if(direction == "up"){
	      	$('#h-features .title').removeClass('animate');	      	
	        $('#h-features .item-s-1').removeClass('animated fadeInUp'); 
	        $('#h-features .btn-primary').removeClass('animated fadeIn');          
	       }         
	    },
	    offset: '50%'
	});


	var waypoint = new Waypoint({
	    element: document.getElementById('s-shipping'),
	    handler: function(direction) {
	      if(direction == "down"){
	        $('#s-shipping .title').addClass('animate');
	        } 
	      if(direction == "up"){
	        $('#s-shipping .title').removeClass('animate');	                
	       }         
	    },
	    offset: '70%'
	});

	var waypoint = new Waypoint({
	    element: document.getElementById('s-complements'),
	    handler: function(direction) {
	      if(direction == "down"){
	        $('#s-complements .title').addClass('animate');
	        } 
	      if(direction == "up"){
	        $('#s-complements .title').removeClass('animate');	                
	       }         
	    },
	    offset: '70%'
	});

	var waypoint = new Waypoint({
	    element: document.getElementById('h-send-email'),
	    handler: function(direction) {
	    	if(direction == "down"){
	     		 $('#h-send-email .c-form').addClass('animated fadeInUp'); 
	     		 $('#request-demo').delay(500).fadeIn(800,function(){$(this).addClass('animated bounceIn')}); 
	     	} 
	     	if(direction == "up"){
	     		$('#h-send-email .c-form').removeClass('animated fadeInUp');
	     		$('#request-demo').removeClass('animated bounceIn');  
	     	}     
	    },
	    offset: '70%'
	});
	



});

