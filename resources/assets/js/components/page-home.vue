<template>
    <section>
      
      <div class="sku-banner">              
          <div class="content">
              <div class="container">
                  <div class="left">                    
                      <div class="text">
                          <h1><span style="font-size:33px;">Streamline & Centralize Your Multi-Channel Order Processing with Real-Time Inventory Tracking</span></h1>
                          <h3><span style="color:#ff9527;">Optimize</span> | <span style="color:#ff9527">Automate</span> | <span style="color:#ff9527">Accelerate Growth</span></h3>
                          <p>Inventory/Warehouse Management • Order Processing • Accounting - Invoices & PO's • Shipping • Returns • Serialization/IMEI Tracking
                          <p style=" font-size:32px; color:#FFFFFF; font-weight: bold; margin-bottom: -8px; padding-bottom: 0px;">SIGN UP FOR FREE TODAY!</p>
                          <msg :msg="message" v-on:desactive="desactive"></msg>
                          <form>
                            <div class="input-group" :class="errors.email.length > 0 ? 'has-error':''">
                              
                              <input type="text" id="emailfield" @keydown.enter.prevent="submit()" class="form-control" v-model="form.email" placeholder="Enter your email to sign up"> 
                              <span style="width:100%" class="error" v-if="errors.email.length > 0">{{errors.email}}</span>                           
                              <span class="input-group-btn">
                                <button v-if="!loading" @click.prevent="submit()" id="sendbtn" class="btn btn-primary black" type="button">Sign Up!</button>
                              </span>
                              
                            </div>
                          </form>
                          <div class="col-xs-12" v-if="loading" >
                              <div class="loading m-t-xl m-b-xs" style="min-height: 40px;">Sending ...</div>
                          </div>
						  
						  <p style="font-size: 12px;">No credit card required!</p>
                          <ul style="margin-top:-5px;" class="list-inline social-link">
                            <li>
                              <a href="https://www.facebook.com/skusuite" target="_blank"><i class="fa fa-facebook-official" title="Follow us on Facebook"></i></a>
                            </li>
                            <li>
                              <a href="https://www.instagram.com/skusuite/" target="_blank"><i class="fa fa-instagram" title="Follow us on Instagram"></i></a>
                            </li>
                            <li>
                              <a href="https://twitter.com/skusuite" target="_blank"><i class="fa fa-twitter-square" title="Follow us on Twitter"></i></a>
                            </li>
                          </ul>
                      </div>
                  </div>
                  <div class="right">
                        <img :src="url + 'img/hero-1.png'">                     
                  </div>
              </div>
          </div>
          <div class="images">
              <div class="img item-1" :style="'background:url('+url+'img/banner/2.jpg);'"></div>  
          </div>
      </div>
        <!-- features -->
      <section id="section-features" class="col-sm-12 st-h-sm bg-white pd-section">
          <div class="container">
            <h2 id="pre-feature">
              <h2>#1 Cloud-Based WMS/ERP Multi-Channel Management Suite.</h2>
			  <p>No matter your size we help both small and large businesses who use SkuSuite for their daily operations.</p>
              <h1>Integrations With <u>Amazon</u>, <u>Ebay</u>, <u>Groupon</u>, <u>Magento</u>, <u>Shopify</u> & <u>More</u></h1>
              <span style="font-size:28px">Optimize & Automate all your business processes with software that prevents human error.</span>
              <br>
              <span style="margin-top:-10px">Were the perfect alternative to <a> Shipstation</a>, <a>Quickbooks</a>, <a>Skuvault</a> 
              and more all built into 1 platform.</span><br>
              Our unparalleled level of service, state of the art technology and cost effective solutions are just the beginning.
            </h2>
            <div id="title-feature" class="text-center pd-t-sm pd-b-sm">
              <h2 class="title m-b-md">FEATURES &amp; FUNCTIONALITIES</h2>                
              <p class="t3 text-center m-auto" style="max-width: 800px; margin-top:-20px">SkuSuite delivers a complete <strong>SUITE</strong> of solutions that streamlines, automates and integrates your business processes and operations all under one roof. See below for some of our widely used funtionality.</p>
            </div>

            <div class="col-xs-12" style="text-align: justify; text-align-last: center;">
                <div class="row row-1">
                    <div class="col-sm-4 col-lg-4 feature">
                      <div class="icon-circle m-auto">
                        <i class="fa fa-cubes" aria-hidden="true" title="WMS/ERP Inventory Management"></i>
                      </div>
                      <a class="body">
                        <h3>WMS/ERP Inventory Management</h3>
                        <p>Real-time Inventory tracking. Location & warehouse based. Barcode and scanning compatible. Full receiving and automation rules can be applied. Unique serialization tracking features to help prevent fraud returns!</p>
                      </a>
                    </div>
                    <div class="col-sm-4 col-lg-4 feature">                        
                      <div class="icon-circle m-auto combined">
                        <i class="fa fa-shopping-cart" aria-hidden="true" title="Multi Channel Automated Order Processing"></i>
                        <div class="comb">
                          <i class="fa fa-refresh" aria-hidden="true"></i> 
                        </div>
                      </div>
                      <a class="body">
                        <h3>Multi-Channel Order Processing</h3>
                        <p>All your orders from multiple channels displayed and imported on one orders list. Wholesale orders, Ecommerce Orders and more now easily managed, processed & shipped.</p>    
                      </a>
                    </div>
                    <div class="col-sm-4 col-lg-4 feature">
                      <div class="icon-circle m-auto combined">
                        <i class="fa fa-truck" aria-hidden="true" title="Integrated Carrer & Shipping Solution"></i>
                        <div class="comb">
                          <i class="fa fa-list-alt" aria-hidden="true"></i>
                        </div>
                      </div>
                      <a class="body">
                        <h3>Integrated Shipping Solution</h3>
                        <p>Complete shipping solution with the leading carriers like USPS, UPS, Fedex, DHL and more. SkuSuite uses your direct account and creates shipping labels all on one platform. Shipping orders made easy!</p>    
                      </a>
                    </div>                    
                </div>
                <div class="row row-2">
                    <div class="col-xs-12 text-center all-center">
                        <div class="esfera-logo all-center">
                          <div class="all-center" >
                            <img :src="url + 'img/icon.png'">
                          </div>
                        </div>
                    </div>
                </div>
                <div class="row row-3">
                  <div class="col-sm-4 col-lg-4 feature">
                    <div class="icon-circle m-auto">                        
                      <i class="fa fa-bar-chart" aria-hidden="true"></i>
                    </div>
                    <a class="body">
                      <h3>Advanced Customized Reporting</h3>
                      <p>SkuSuite has already premade many useful reports for businesses to have a full insight on their day to day operations. Buy smarter & seller faster with our tools. Inventory and accounting reports at your fingertips. Gain insights to your business and supply chain today!</p>    
                    </a>
                      <!-- <a href="#" class="detail">Details</a> -->
                  </div>
                  <div class="col-sm-4 col-lg-4 feature">
                    <div class="icon-circle m-auto combined">
                      <i class="fa fa-list-ol" aria-hidden="true"></i>
                      <div class="comb">
                        <i class="fa fa-truck" aria-hidden="true"></i>
                      </div>
                    </div>

                    <a class="body">
                      <h3>Automation & Streamlining</h3>
                      <p>Our sophisticated system with top notch technology implements many checks and balances that ensures human error is minimized. Our verification system with automations with Picking, Packing and Shipping is superior to the rest! Let SkuSuite show you our proven processes.</p>    
                    </a>
                      
                  </div>
                  <div class="col-sm-4 col-lg-4 feature">
                    <div class="icon-circle m-auto combined">
                      <i class="fa fa-file-text-o" aria-hidden="true"></i>
                      <div class="comb">
                        <i class="fa fa-calculator" aria-hidden="true"></i>
                      </div>
                    </div>

                    <a class="body">
                      <h3>Invoicing Customers</h3>
                      <p>Customized invoicing system that keeps track of all payments and deliveries. Be on top of all customers who have open past dues. Automated accounting tools. Create all your wholesale orders and ecommerce orders all on one platform. Eliminate the manual double entries and have it all in one.</p>    
                    </a>
                      
                  </div>
                </div>
            </div>

            <div class="col-xs-12 text-center m-t-lg">
              <a href="/features" class="btn btn-primary btn-lg black">Explore all features</a>
            </div>
          </div>        
      </section>
      <!-- end features -->
      <section id="section-about" class="section col-sm-12 no-pd">
        <div class="back">
            <div class="image col-sm-6 no-pd" :style="'background:url('+url+'img/banner/8.jpg);'"></div>
        </div>
        <div class="front">
            <div class="container">
                <div class="content col-sm-6 col-sm-offset-6 no-pd right">                   
                    <h2 class="title animate m-b-lg">WHAT IS SKUSUITE</h2>
                    <p class="parrafo text-justify">
                          SkuSuite is a cloud based inventory & warehouse management system that is focused on streamlining business processes. With years of experience selling both Wholesale & Ecommerce, we as sellers on multiple channels were not able to find an ALL-IN-ONE software to help us solve our internal issues. We then decided to build our own system that combines all the great existing softwares out there bringing it all under 1 roof eliminating the need for pretty much anything else needed to run the business.
                    </p>

                    <h2 class="title animate m-b-lg">BENEFITS OUR SERVICE PROVIDES</h2>                  
                    <p class="parrafo">
                          Our focus from day 1 was to develop a multi layered system that makes inventory management & order proccessing simplified. Being a seller selling millions of dollars worth of inventory per month, SkuSuite helps our core clients of business keep track of all their inventory in multiple locations & much much more!
                    </p>

                    <ul class="list-unstyled parrafo">
                      <li class="m-b-sm">
                        <p><i class="fa fa-check m-r-xs text-primary" aria-hidden="true"></i>ERP/WMS - Inventory & Warehouse Management System</p>
                      </li> 

                      <li class="m-b-sm">
                          <p><i class="fa fa-check m-r-xs text-primary" aria-hidden="true"></i>Product Catalog easily synced with multiple marketplaces</p>
                      </li> 
                      <li class="m-b-sm">
                          <p><i class="fa fa-check m-r-xs text-primary" aria-hidden="true"></i>One of a kind Order Processing System</p>
                      </li> 
                      <li>
                          <p><i class="fa fa-check m-r-xs text-primary" aria-hidden="true"></i>Wholesale/Distribution Functionality</p>
                      </li> 
					  <li>
                          <p><i class="fa fa-check m-r-xs text-primary" aria-hidden="true"></i>& Much More</p>
                      </li> 
                    </ul> 
                </div>             
            </div>            
        </div>             
      </section>
      <section class="section col-sm-12 no-pd">
        <div class="back">
            <div class="image col-sm-6 col-sm-offset-6 no-pd" :style="'background:url('+url+'img/banner/9.jpg);'"></div>
        </div>
        <div class="front">
            <div class="container">
                <div class="content col-sm-6 no-pd left">                   
                    <ul class="list-unstyled">
                        <li class="m-b-lg">
                          <div class="col-xs-12 no-pd row-flex m-b-lg">
                          <div class="col-xs-1 all-center">
                              <h1 class="text-primary m-auto" style="font-size: 60px">1</h1>
                          </div>
                          <div class="col-xs-11 pd-l-lg">
                              <h2 style="display: inline-block" class="title animate">Solutions for Wholesalers & Distributors</h2> 
                          </div>
                          </div>                 
                          <p class="parrafo">
                                SkuSuite provides you the tools to make your business process more streamlined for your entire company. Let us show you today how Wholesale & Ecommerce orders are processed with real-time inventory updates for your whole company to have full visbility.
                          </p> 
                        </li> 
                        <li class="m-b-lg">
                          <div class="col-xs-12 no-pd row-flex  m-b-lg">
                          <div class="col-xs-1 all-center">
                              <h1 class="text-primary m-auto" style="font-size: 60px">2</h1>
                          </div>

                          <div class="col-xs-11 pd-l-lg">
                              <h2 style="display: inline-block" class="title animate">Solutions for Ecommerce Sellers</h2> 
                          </div>

                          </div>                 
                          <p class="parrafo">
                                We have implemented some of the leading marketplaces & ecommerce platforms like Amazon, Ebay, Groupon, Magento & Shopify. These API integrations are easily setup with direct with your accounts. SkuSuite manages all your orders from various channels and ships to customers fast and easy. Make your customers happy with flawless fulfillment.
                          </p> 
                        </li>
                        <li>
                          <div class="col-xs-12 no-pd row-flex  m-b-lg">
                          <div class="col-xs-1 all-center">
                              <h1 class="text-primary m-auto" style="font-size: 60px">3</h1>
                          </div>

                          <div class="col-xs-11 pd-l-lg">
                              <h2 style="display: inline-block" class="title animate">Automation = More Profits!</h2> 
                          </div>

                          </div>                 
                          <p class="parrafo">
                                We help business focus on profitability by automating the tedious day to day process and help you spend more time on increasing margins that makes your business money! Stop wasting time being stuck in the old-school ways and move into the cloud. You will be amazed how much more efficient your business can be.
                          </p> 
                        </li>
                    </ul>
                </div>
            </div>
        </div> 
      </section>
      <!--advantages-->
      <section-subscription></section-subscription>
      <!--end-->
      <section class="s-message col-sm-12">
        <div class="col-sm-12 c-form col-center">
          <div class="text-center">
            <div class="col-sm-12 c-form col-center">
                <h1 style="margin-bottom:0px">We are a one-stop solution bringing your entire business</h1>
                <h1 style="margin-top:0px">under one "suite" system or platform.</h1>
            </div>
            <a href="/demo"><button class="btn btn-primary btn-lg m-t-sm"><b>GET STARTED</b></button></a>
          </div>
        </div>
      </section>
    </section>
</template>

<script type="text/javascript">
  export default{

    metaInfo: {
      title: '#1 Cloud-Based WMS/ERP Suite - Inventory Management for Wholesalers & Ecommerce Businesses with Shipping & Accounting | Multi Channel',
      titleTemplate: '%s',
      meta: [
        {name: 'description', content: 'Business Inventory Solutions for Wholesalers & Ecommerce Sellers, SkuSuite aims to lead businesses & e-commerce sellers with our cloud-based platform designed to make wholesalers & distributors exceptionally efficient at processing, fulfilling, and shipping their orders from all the most popular marketplaces and shopping carts using all the top carriers.'},
        {name: 'keywords', content:'inventory warehouse management, shipstation alternative, skuvault competitor, warehouse erp, wms order processing, ecommerce shipping, wholesale inventory system, quickbooks inventory alternative, multi channel orders, online shipping system, wms inventory, seller fulfilled prime system, ebay seller inventory, skuvault alternative, skubana alternative, distributor software, sellercloud competitor, saas platform'}
      ]
    },

    props:[],
    data(){
      return{
        url : this.$root.uri,
        form:{email:''},
		        errors:{email:''},
		        message:{type:'',text:'',show:false},
		        loading:false,
      }      
    },
    created(){  
    	this.$root.$emit('updateClass','pagehome');
      
      
    },

    methods:{

      submit(){
				var vm  = this;
				vm.errors = {email:''};
        //vm.message = {type:'danger',text:resp.response.data.message,show:true} 
        if (vm.validation()) {
          vm.loading = true;
  				axios.post(this.url+'api/create/free-request',this.form)
  				.then(function(resp){			    
              
            
            vm.message = {type:'danger',text:'Sent!', show:true};
  				  if(resp.status == 200){
  				    vm.loading = false;
              vm.$root.sharedata = vm.form.email;
              $(location).attr('href', '/demo?sharedData='+vm.form.email);
            }
  				    // vm.loading = false;
  				})
  				.catch(function(resp){
  				    if(resp.response.status == 422){
  				      for(var i in resp.response.data){
  				        vm.errors[i] = resp.response.data[i];				        
  				      }
  				    }

  				    else if(resp.response.status == 500){
  				      vm.message = {type:'danger',text:"Server Error!",show:true} 
  				    }
  				    vm.loading = false;
  				});
        }
      },
      
      validation(){
        var returnflag = true;
        var vm = this;
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(String(vm.form.email).toLowerCase())) {
          vm.errors.email = "Email validation error!";
          $('#emailfield').addClass('valid-email');

          returnflag = false;
        }
        return returnflag;
      },
      desactive(){
          this.message = {type:'',text:'',show:false}
      },


      animation_banner(){
        $('.sku-banner .left').addClass('active');
        //$('#pre-feature').fadeIn(0).addClass('animated fadeInUp');
        //$('.sku-banner .right').addClass('animated fadeInLeft');
      },
      animation_feature(){
        var waypoint = new Waypoint({
          element: document.getElementById('pre-feature'),
          handler: function(direction) {
            if(direction == 'down'){
              $('#pre-feature').fadeIn(0).addClass('animated fadeInUp');
            }if(direction == 'up'){
              $('#pre-feature').fadeIn(0).removeClass('animated fadeInUp');
            }
          },
          offset:'1000px'
        });
      },
      animation_title_feature(){
        var waypoint = new Waypoint({
          element: document.getElementById('section-features'),
          handler: function(direction) {
              if(direction == 'down'){
                  var delay = 100;
                  $('.esfera-logo').delay(800).fadeIn(0,function(){
                    $(this).addClass('animated bounceIn rotateIn');
                  });
                  $('#section-features .feature').each(function(){
                      var $this = $(this);
                      $this.delay(delay).fadeIn(0,function(){
                        $(this).addClass('animated bounceIn');
                      });
                      delay += 100;
                  });
              }
              if(direction == 'up'){
                  $('.esfera-logo').removeClass('animated  bounceIn rotateIn');
                  $('#section-features .feature').each(function(){
                      var $this = $(this);
                      $this.delay(100).fadeIn(0,function(){
                        $(this).removeClass('animated bounceIn');
                      });
                  });
              }
          },
          offset:'400px'
        });
      }
    },
    mounted(){
      this.animation_banner();
      this.animation_feature();
      this.animation_title_feature();
      
    },
  }
</script>

<style>
  .valid-email {
    margin-top: 20px;
  }
</style>