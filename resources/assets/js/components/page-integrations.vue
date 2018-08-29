<template>

<section>
	

	<div class="col-sm-12 m-t-lg integrations " style="background: #FFFFFF;">
		<div class="container" style="margin-top:50px">
			<div class="text-center pd-b-xxl">
				<h1 class="title m-b-md">Wherever you sell, however you ship, SkuSuite can help!</h1>
				<p class="t2 m-auto" style="text-justify: left; top-padding: -15px; max-width: 800px; ">
					Maximize your productivity. Our order & shipping solution seamlessly integrate with all of the major marketplaces and eCommerce shopping carts
					platforms enabling you to easily manage and ship your online orders. Whether you’re looking for a small business shipping solution or you are a
					large eCommerce retailer, SkuSuite can help you streamline shipping and eCommerce order fulfillment with one easy-to-use platform.
				</p><br>
			</div>
		</div>
		<div class="container text-center">
			<div class="col-md-12 col-sm-12 marketplaces">
				<ul>
					<li class="col-md-3 col-sm-3"><a href="#"><img width="220px" height="110px" :src="url + 'img/logos/amazon-2_082c6de9457a486af9eb7b65bdeb3636.png'"></a></li>
					<li class="col-md-3 col-sm-3"><a href="#"><img width="220px" height="110px" :src="url + 'img/logos/ebay-2_dc3dd1e8d59f1d8864094538e4553140.png'"></a></li>		
					<li class="col-md-3 col-sm-3"><a href="#"><img width="220px" height="110px" :src="url + 'img/logos/magento_feature.png'"></a></li>
					<li class="col-md-3 col-sm-3"><a href="#"><img width="220px" height="110px" :src="url + 'img/logos/jet_feature.png'"></a></li>
					<li class="col-md-3 col-sm-3"><a href="#"><img width="220px" height="110px" :src="url + 'img/logos/Partner-Release-walmart_feature.png'"></a></li>
					<li class="col-md-3 col-sm-3"><a href="#"><img width="220px" height="110px" :src="url + 'img/logos/etsy-4_71e04c0215bdc777b729c90864090d4a.png'"></a></li>
					<li class="col-md-3 col-sm-3"><a href="#"><img width="220px" height="110px" :src="url + 'img/logos/groupongoods.png'"></a></li>
					<li class="col-md-3 col-sm-3"><a href="#"><img width="220px" height="110px" :src="url + 'img/logos/Partner-Release-newegg_feature.png'"></a></li>
				</ul>
			</div>
			<div class="col-md-12 col-sm-12 marketplaces"> <br><br>
				<ul>
					<li class="col-md-3 col-sm-3"><a href="#"><img width="220px" height="110px" :src="url + 'img/logos/ups.png'"></a></li>
					<li class="col-md-3 col-sm-3"><a href="#"><img width="220px" height="110px" :src="url + 'img/logos/fedex_logo_feature-370x185.png'"></a></li>
					<li class="col-md-3 col-sm-3"><a href="#"><img width="220px" height="110px" :src="url + 'img/logos/dhl.png'"></a></li>
					<li class="col-md-3 col-sm-3"><a href="#"><img width="220px" height="110px" :src="url + 'img/logos/stamps.png'"></a></li>
				</ul>
			</div>
			<div class="col-md-12 col-sm-12 shoppingcarts" style=""><br><br>
				<ul>
					<li class="col-md-3 col-sm-3"><a href="#"><img width="220px" height="110px" :src="url + 'img/logos/shopify-updated-thumb.png'"></a></li>
					<li class="col-md-3 col-sm-3"><a href="#"><img width="220px" height="110px" :src="url + 'img/logos/woocommerce_ce23ca6c8da289f54ff048977668c68d.png'"></a></li>
					<li class="col-md-3 col-sm-3"><a href="#"><img width="220px" height="110px" :src="url + 'img/logos/shopify-plus_feature.png'"></a></li>
				</ul>
			</div>
			<br><br>
			<h3 class="title m-b-sm">Looking for more information about a specific integration? Please contact us!</h3>
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
			this.$root.$emit('updateClass','pageIntegrations');

			
            
		}
	}
</script>