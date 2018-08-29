<template>
    <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            </button>
            <router-link :to="{name:'home'}" class="navbar-brand" title="SkuSuite WMS/ERP Multi Channel Inventory Software"><img :src="uri + 'img/logo-black.png'"></router-link>
        </div>
        <div id="navbar" class="collapse navbar-collapse navbar-left">
            <ul class="nav navbar-nav">
            <li class="dropdown" title="Home">
                <router-link :to="{name:'home'}" id="pricing-link" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Home</router-link>
            </li>
            <li class="dropdown" title="Features & Functionalities">
                <router-link :to="{name:'features'}"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" id="feacture-link">Features</router-link>
            </li>
            <li class="dropdown" title="API Integrations">
                <router-link :to="{name:'integrations'}"  id="integrations-link"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Integrations</router-link>
            </li>
            <li class="dropdown" title="SkuSuite Pricing">
                <router-link :to="{name:'pricing'}" id="pricing-link" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Pricing</router-link>
            </li>
            <li class="dropdown" title="About SkuSuite">
                <router-link :to="{name:'resources'}" id="resouces-link"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">COMPANY</router-link>
            </li>
            <li class="dropdown" title="Client Support">
                <router-link :to="{name:'support'}" id="support-link" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Support</router-link>
            </li>
            <li class="dropdown" title="Contact Us">
                <router-link :to="{name:'contact'}" id="contact-link" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Contact Us</router-link>
            </li>
            <li class="dropdown toggle-auth-btn" title="Log In">
                <a href="" onclick="location.href = 'https://ss.skusuite.com';" id="login" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Log In</a>
            </li>
            <li class="dropdown toggle-auth-btn" title="Sign Up">
                <a href="" @click="redirect('demo')" id="signup" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Sign Up</a>
            </li>

            </ul>
            <ul class="nav navbar-nav pull-right">
            <li class="active login">
                <button onclick="location.href = 'https://ss.skusuite.com';" class="btn btn-xs btn-inverted-primary" title="Login to your Dashboard">Login</button>
            </li>
            <li class="demo" style="margin-left: 5px;">
                <button @click="redirect('demo')" class="btn btn-xs btn-primary black" title="Sign up to SkuSuite">SIGN UP FOR FREE</button>
            </li>
            <li class="phone">
                <p><i class="fa fa-phone-square m-r-xs" aria-hidden="true"></i>1-212-452-5011</p> 
            </li>
            </ul>
        </div><!--/.nav-collapse -->
        </div>
    </nav> 
</template>
<script type="text/javascript">
    export default{
      data(){
        return{
            uri:this.$root.uri,
            uri_storage:this.$root.uri_storage
        }
      },
      mounted(){
          if($(window).width() > 800){
            $(".dropdown").mouseenter(function(){          
                    $(this).addClass('open');
                    $(this).find(' > a').attr('aria-expanded',true);
            }).mouseleave(function(){      
                if($(this).hasClass('open')){
                    $(this).removeClass('open');
                    $(this).find('> a').attr('aria-expanded',false);
                } 
            });
          }else if($(window).width() < 768){
            
            
          }
          $('.navbar-nav a').on('click', function () {
             
              if (window.innerWidth <= 768) {
                      $(".navbar-toggle").click();
              }
          });
      },
      methods:{
        redirect(to){
            this.$router.push({ name: to})
        }
      }
    }
</script>

<style>
    .toggle-auth-btn {
      display: none !important;
    }
    @media (max-width: 800px) {
      .toggle-auth-btn {
        display: block !important;
      }
    }
</style>
