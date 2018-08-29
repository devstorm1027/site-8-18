<template>
	<section>
		<div id="section-module" class="col-sm-12" style="background-color:#ffffff;">
			<div class="container">
				<div class="modal fade" id="myModal_email" role="dialog">
					<div class="modal-dialog">
					
						<!-- Modal content-->
						<div class="modal-content">
							<div class="modal-header">
								<button type="button" class="close" data-dismiss="modal">&times;</button>
								<h4 class="modal-title">Sending Email...</h4>
							</div>
							<div class="modal-body">
								<p>Write the following contents.</p>
								<div class="col-sm-12"></div>
								<input type="text" class="form-control" style="margin-bottom:10px" placeholder="Email Address">
								<input type="text" class="form-control" style="margin-bottom:10px" placeholder="Subject">
								<textarea class="form-control" placeholder="Description" rows="10"></textarea>
							</div>
							<div class="modal-footer">
								<button type="button" class="btn btn-default" data-dismiss="modal">Send</button>
								<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
							</div>
						</div>
					</div>
				</div>
				<div class="modal fade" id="myModal_phone" role="dialog">
					<div class="modal-dialog">
					
						<!-- Modal content-->
						<div class="modal-content">
							<div class="modal-header">
								<button type="button" class="close" data-dismiss="modal">&times;</button>
								<h4 class="modal-title">Calling...</h4>
							</div>
							<div class="modal-body text-center">
								<img style="" width="150px" :src="url + 'img/businessphone.png'">
								<h3>Call Us at  & nbsp 212-452-5011</h3>
							</div>
							<div class="modal-footer">
								<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="container-fluide" style="margin-top:0;">
				<div class="container text-center">
					<h1 class="title m-b-md">Our Customer Support Agents are here to help!</h1>
					<p class="t3 text-center m-auto" style="max-width: 800px; font-size: 28px;">How would you like to contact us?</p> 
					<div class="col-sm-12 col-center" style="margin-top:30px">
						<div class="row">
							<div class="col-sm-4 text-center">
								<a style="cursor: pointer" data-toggle="modal" data-target="#myModal_email">
									<div class="custom-block__icon">
										<i class="fa fa-envelope-o fa-5x" aria-hidden="true"></i>
									</div>
									<h4 class="custom-block__title">EMAIL</h4>
								</a>
							</div>
							<div class="col-sm-4 text-center">
								<a style="cursor: pointer;" data-toggle="modal" data-target="#myModal_phone">
									<div class="custom-block__icon">
										<i class="fa fa-phone fa-5x" aria-hidden="true"></i>
										<i class="fa fa-mobile fa-5x" aria-hidden="true"></i>
									</div>
									<h4 class="custom-block__title">PHONE</h4>
								</a>
							</div>
							<div class="col-sm-4 text-center">
								<a href="#">
									<div class="custom-block__icon">
										<i class="fa fa-weixin fa-5x" aria-hidden="true"></i>
									</div>
									<h4 class="custom-block__title">CHAT</h4>
								</a>
							</div>
						</div>
					</div>
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
			this.$root.$emit('updateClass','pageSupport');

			//document.head.querySelector('meta[name=description]').content = 'SupportMeta';
			
		}
	}
</script>