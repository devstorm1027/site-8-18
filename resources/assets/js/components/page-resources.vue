<template>
	<section>
		
<div id="carousel" class="company carousel slide carousel-fade" data-ride="carousel" data-interval="false" style="height:500px">
  <ol class="carousel-indicators">
      <li data-target="#carousel" data-slide-to="0" class="active"></li>
      <li data-target="#carousel" data-slide-to="1"></li>
      <li data-target="#carousel" data-slide-to="2"></li>
      <li data-target="#carousel" data-slide-to="3"></li>
  </ol>
  
  <!-- Carousel items -->
  <div class="carousel-inner">
    <div class="item active">
      <div class="slide-content">
        <video poster="/img/nycskyline.jpg" webkit-playsinline id="bgvid" loop>
         
        </video>
        <div class="slide-overlay door">
          <div class='title'>About Us</div>
          <div class="description"> Cloud business technology for today’s global workforce</div>
        </div>
      </div>
    </div>
   
 
  
</div></div>


<div class="container" style="padding-top:50px">
	<div class="col-sm-12 col-md-12">
		<p><h1>ABOUT US</h1></p>
		<hr>
		<p style="font-weight: bold">SkuSuite offers complete cloud based software solutions that allow sole proprietors and
businesses (wholesale and retail) to operate in a more efficient manner.</p>
		<p>We help businesses & e-commerce sellers with our cloud-based platform. Wholesalers & distributors will enjoy efficient processing, fulfilling, and shipping orders from all the most popular marketplaces and shopping carts using all the top carriers.</p>
		<p>We come from an e-commerce background and understand the thousands of small tasks that burden online retailers. SkuSuite offers countless user-friendly tools to wholesale and retail businesses to simplify and automate inventory management, order processing, accounting, shipping, and customized reporting. SkuSuite provides the tools and services needed for virtually every business.</p>
		<p>Our core team has close to 30 years of e-commence & digital experience.</p>
	</div>
</div>

<!-- <div class="container" style="padding-top:80px">
	<div class="col-sm-12 col-md-12" style="text-align:center">
		<div class="col-sm-4 col-md-4" style="">
			<h1>15+</h1>
			<p><h4>Years of e-commerce experience</h4></p>
		</div>
		<div class="col-sm-4 col-md-4" style="">
			<h1>Approx $500,000,000+</h1>
			<p><h4>Managed Revenue</h4></p>
		</div>
		<div class="col-sm-4 col-md-4" style="">
			<h1>300,000+</h1>
			<p><h4>Orders Processed & Growing</h4></p>
		</div>
		
	</div>
</div> -->
<div class="container" style="padding-top:80px; padding-bottom:150px">
	<div class="col-sm-12 col-md-12" style="text-align:left">
		<div class="col-sm-6 col-md-6" style="">
			<h3>PEOPLE</h3>
			<p><h4>Above all else, we value the well-being of our staff, clients, and our industry.</h4></p>
		</div>
		<div class="col-sm-6 col-md-6" style="">
			<h3>RELATIONSHIPS</h3>
			<p><h4>We understand that the underpinning of our business is strong, long-term, valuable relationships.</h4></p>
		</div>
		<div class="col-sm-6 col-md-6" style="">
			<h3>EDUCATION</h3>
			<p><h4>We help customers navigate the complex and ever-changing e-commerce industry to overcome sales obstacles and achieve greater success for their businesses.</h4></p>
		</div>
		<div class="col-sm-6 col-md-6" style="">
			<h3>PROFESSIONALISM</h3>
			<p><h4>We take pride in our "can do" attitude, and believe in being professional in all aspects of our business.</h4></p>
		</div>
	</div>
</div>
		
		
	</section>
</template>


<script type="text/javascript">
	export default{

    metaInfo: {
      title: 'WMS/ERP Inventory Management for Wholesalers & Ecommerce Businesses with Shipping & Accounting | Multi Channel',
      titleTemplate: '%s',
      meta: [
        {name: 'description', content: 'Business Inventory Solutions for Wholesalers & Ecommerce Sellers, SkuSuite aims to lead businesses & e-commerce sellers with our cloud-based platform designed to make wholesalers & distributors exceptionally efficient at processing, fulfilling, and shipping their orders from all the most popular marketplaces and shopping carts using all the top carriers.'},
        {name: 'keywords', content:'inventory warehouse management, shipstation alternative, skuvault competitor, warehouse erp, wms order processing, ecommerce shipping, wholesale inventory system, quickbooks inventory alternative, multi channel orders, online shipping system, wms inventory, seller fulfilled prime system, ebay seller inventory, skuvault alternative, skubana alternative, distributor software, sellercloud competitor, saas platform'}
      ]
    },

    props:[],
    data(){
			return{
				url : this.$root.uri
			}
		},
		created(){
			this.$root.$emit('updateClass','pageCompany');

		},
		mounted(){
			if(!/iPhone/i.test(navigator.userAgent)) {
				$('.active > div > video').get(0).play();

				$('#carousel').bind('slide.bs.carousel', function(e) {
				$(e.relatedTarget).find('video').get(0).play();
				});

				$('#carousel').bind('slid.bs.carousel', function(e) {
				$('video').not('.active > div > video').each(function() {
					$(this).get(0).pause();
				});
				});
			}
		}
	}
</script>
