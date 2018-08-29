<template>
	<div id="section-module" class="col-sm-12">
       
        <div class="container">
            <div class="text-center pd-b-xxl">
             <h2 class="title m-b-md">Check out some of our unique and customizable features!</h2>
             <p class="t2 text-center m-auto" style=" top-padding: -20px; max-width: 800px; ">All of our features and functionalities can be expanded to custom fit your business needs. Many of our clients come to us to deliver something they were not able to find at a much more affordable rate. Each business is unique in their processes - let us help you. SkuSuite helps deliver the perfect customized solution for your business!</p>
            </div>
            <div class="module module-inventory">
                <div class="content col-xs-8">
                    <h1 class="title animate">Inventory Management</h1>
                    <p class="parrafo">
                        Our unique and precise inventory management software allows businesses to track all their items at all locations.
                        One of our unique features is Serialized Item tracking where we can assign individual items a serial number to know exact costs.
                        We follow the FIFO (First In First Out) rule to know exactly what your inventory average costs are.
                        Have all your channel's inventory managed with one (1) source with live up to the minute updates.
                    </p>
                    <a href="/demo"><button class="btn btn-primary"> Try it Free </button></a>
                    <img id="showimgfea" :src="url + 'img/system/inventorymanagement.png'" data-parallax='{"y": -120}' >
                </div>
            </div>
            <div class="module module-orders">
                <div class="content col-xs-8 col-xs-offset-4 left">
                    <h1 class="title animate">Automated Order Processing</h1>
                    <p class="parrafo">
                        We know how hard it is to manage multiple channels of orders and the fast movements within a business.
                        SkuSuite was developed for the main purpose of streamlining the order processes to keep up with your businesses needs.
                        Order rules are configured and set for events to occur. We have an integrated solution to automatically reserve inventory for each order
                        awaiting to be shipped. As orders are processed, inventory is then deducted and all is tracked for each event. SkuSuite fills that void for wholesalers & distributors
                        who also sell online and have no solution for up to the minute inventory changes across all marketplaces and sales channels. Let us help you focus on growing your sales instead
                        of your daily operations. We bring the experience of handling hundreds of millions of dollars in revenue in sales across these types of channels.
                    </p>
                    <a href="/demo"><button class="btn btn-primary"> Try it Free </button></a>
                    <img id="showimgfea" :src="url + 'img/system/2.png'" data-parallax='{"y": -120}'>
                </div>
            </div>
            <div class="module module-shipping">
                <div class="content col-xs-8">
                    <h1 class="title animate">Shipping & Logistics</h1>
                    <p class="parrafo">
                      SkuSuite has integrations with the leading carriers allowing you to ship out all your orders in the
                        most cost effective and efficient way. Our experience shipping hundreds of thoudsands of packages utilizing various shipping
                        focused solutions, allowed us to create our own unique combined methods where shipments go out fast. Our Pick, Pack and Ship process has been tweaked and perfected
                        so that businesses don't have to worry about how this gets done. We have implemented many preventative picking processes to ensure the right
                        items are assigned to the right orders without mistakes. Let us show you how we can help get you more happy customers!
                    </p>
                    <a href="/demo"><button class="btn btn-primary"> Try it Free </button></a>
                    <img id="showimgfea" :src="url + 'img/system/1.png'" data-parallax='{"y": -120}'>                   
                </div>                
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
		export default{

    metaInfo: {
      title: 'SkuSuite Features & Functionalities WMS/ERP for Wholesalers & Ecommerce Businesses',
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
			this.$root.$emit('updateClass','pageFeature');
            
            
		}
	}
</script>