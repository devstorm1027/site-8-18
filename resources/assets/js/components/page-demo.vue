<template>
	<div class="page-container col-xs-12 pd-navbar wrapper" style="float:none;">
		<div class="container">
			<div class="col-sm-7 col-center no-pd parrafo" >			
				<h1 class="text-primary" style="text-align: center; margin-bottom: 0px;">New Account Sign Up</h1>
				<p style="text-align: center; margin-top: -10px; margin-bottom: 3px;">
					Please fill out form below to expedite your onboarding and setup.</b>
					<br>
				</p>
			</div>
			<div class="col-sm-7 col-center container-form">
				<header>
					Account Information
				</header>
				<p style="color:#f00303; font-weight: bold; margin-top: -10px; margin-bottom: 0px;">We respect your privacy and do not tolerate spam. <br>
				We do not sell, trade or loan your information. All data is kept confidential.</p><br><br>
				 <msg :msg="message" v-on:desactive="desactive"></msg> 
				<form>
					<div class="row">
						<div class="col-sm-6 form-group" :class="errors.firstname.length > 0 ? 'has-error':''">
							<label>First Name</label>
							<input type="text" class="form-control" v-model="form.firstname" placeholder="First Name" required>
				      	    <span class="error" v-if="errors.firstname.length > 0">{{errors.firstname}}</span>
                 		</div>
						<div class="col-sm-6 form-group" :class="errors.lastname.length > 0 ? 'has-error':''">
							<label>Last Name</label>
							<input type="text" class="form-control" v-model="form.lastname" placeholder="Last Name" required>
							<span class="error" v-if="errors.lastname.length > 0">{{errors.lastname}}</span>
						</div>
					</div>
					<div class="row">
						<div class="col-xs-12 form-group" :class="errors.company.length > 0 ? 'has-error':''">
							<label>Company</label>
							<input type="text" class="form-control" v-model="form.company" placeholder="Company Name" required>
							<span class="error" v-if="errors.company.length > 0">{{errors.company}}</span>
						</div>
					</div>
					<div class="row">
						<div class="col-xs-12 form-group" :class="errors.website.length > 0 ? 'has-error':''">
							<label>Website</label>
							<input type="text" class="form-control" v-model="form.website" placeholder="Website" required>
							<span class="error" v-if="errors.website.length > 0">{{errors.website}}</span>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-6 form-group" :class="errors.phone.length > 0 ? 'has-error':''">
							<label>Phone</label>
							<input type="text" class="form-control" v-model="form.phone" name="phone" placeholder="Phone Name" required>
							<span class="error" v-if="errors.phone.length > 0">{{errors.phone}}</span>
						</div>
						<div class="col-sm-6 form-group" :class="errors.email.length > 0 ? 'has-error':''">
							<label>Email</label>
							<input type="email" class="form-control" v-model="form.email" placeholder="Email" required>
							<span class="error" v-if="errors.email.length > 0">{{errors.email}}</span>
						</div>
					</div>
					<div class="row">
						<div class="col-xs-12 form-group" :class="errors.functions.length > 0 ? 'has-error':''">
							<label>What is your biggest pain point?</label>
							<div class="container-checkbox-list">
								<ul class="checkbox-list list-unstyled">
									<li class='demo-checkbox'><input type="checkbox" class="check" v-model="form.functions" value="Automate purchase orders" style="float: left;"><span class="m-l-xs">Automate purchase orders</span></li>
									<li class='demo-checkbox'><input type="checkbox" class="check" v-model="form.functions" value="Customer satisfaction" style="float: left;"><span class="m-l-xs">Customer satisfaction</span></li>
									<li class='demo-checkbox'><input type="checkbox" class="check" v-model="form.functions" value="Expanding onto additional marketplaces" style="float: left;"><span class="m-l-xs">Expanding onto additional marketplaces</span></li>
									<li class='demo-checkbox'><input type="checkbox" class="check" v-model="form.functions" value="Finding a total solution" style="float: left;"><span class="m-l-xs">Finding a total solution</span></li>
									<li class='demo-checkbox'><input type="checkbox" class="check" v-model="form.functions" value="Fulfillment & logistics" style="float: left;"><span class="m-l-xs">Fulfillment & logistics</span></li>
									<li class='demo-checkbox'><input type="checkbox" class="check" v-model="form.functions" value="Internationalization" style="float: left;"><span class="m-l-xs">Internationalization</span></li>
									<li class='demo-checkbox'><input type="checkbox" class="check" v-model="form.functions" value="Inventory mgmt across channels" style="float: left;"><span class="m-l-xs">Inventory mgmt across channels</span></li>
									<li class='demo-checkbox'><input type="checkbox" class="check" v-model="form.functions" value="Inventory planning & forecasting" style="float: left;"><span class="m-l-xs">Inventory planning & forecasting</span></li>
									<li class='demo-checkbox'><input type="checkbox" class="check" v-model="form.functions" value="Manage dropship orders (as seller)" style="float: left;"><span class="m-l-xs">Manage dropship orders (as seller)</span></li>
									<li class='demo-checkbox'><input type="checkbox" class="check" v-model="form.functions" value="Manage dropship orders (as vendor)" style="float: left;"><span class="m-l-xs">Manage dropship orders (as vendor)</span></li>
									<li class='demo-checkbox'><input type="checkbox" class="check" v-model="form.functions" value="Manage multiple warehouses" style="float: left;"><span class="m-l-xs">Manage multiple warehouses</span></li>
									<li class='demo-checkbox'><input type="checkbox" class="check" v-model="form.functions" value="Manage seller performance" style="float: left;"><span class="m-l-xs">Manage seller performance</span></li>
									<li class='demo-checkbox'><input type="checkbox" class="check" v-model="form.functions" value="Marketing and SEO" style="float: left;"><span class="m-l-xs">Marketing and SEO</span></li>
									<li class='demo-checkbox'><input type="checkbox" class="check" v-model="form.functions" value="Other" style="float: left;"><span class="m-l-xs">Other</span></li>
									<li class='demo-checkbox'><input type="checkbox" class="check" v-model="form.functions" value="Listings on channels" style="float: left;"><span class="m-l-xs">Listings on channels</span></li>
									<li class='demo-checkbox'><input type="checkbox" class="check" v-model="form.functions" value="Re-pricing" style="float: left;"><span class="m-l-xs">Re-pricing</span></li>
									<li class='demo-checkbox'><input type="checkbox" class="check" v-model="form.functions" value="Reporting & analytics" style="float: left;"><span class="m-l-xs">Reporting & analytics</span></li>
									<li class='demo-checkbox'><input type="checkbox" class="check" v-model="form.functions" value="Too dependent on Amazon" style="float: left;"><span class="m-l-xs">Too dependent on Amazon</span></li>
									<li class='demo-checkbox'><input type="checkbox" class="check" v-model="form.functions" value="Understanding profitabillity" style="float: left;"><span class="m-l-xs">Understanding profitabillity</span></li>
								</ul>
							</div>
							<span class="error" v-if="errors.functions.length > 0">{{errors.functions}}</span>
						</div>
					</div>
					<div class="row">
						<div class="col-xs-12 form-group" :class="errors.channel.length > 0 ? 'has-error':''">
							<label>What sales channels do you sell on?</label>
							<div class="container-checkbox-list" style="height:150px">
								<ul class="checkbox-list list-unstyled" >
									<li class='demo-checkbox'><input type="checkbox" class="check" v-model="form.channel" value="Amazon.com" style="float: left;"><span class="m-l-xs">Amazon</span></li>
									<li class='demo-checkbox'><input type="checkbox" class="check" v-model="form.channel" value="Ebay" style="float: left;"><span class="m-l-xs">Ebay</span></li>
									<li class='demo-checkbox'><input type="checkbox" class="check" v-model="form.channel" value="Groupon" style="float: left;"><span class="m-l-xs">Groupon</span></li>
									<li class='demo-checkbox'><input type="checkbox" class="check" v-model="form.channel" value="Magento" style="float: left;"><span class="m-l-xs">Magento</span></li>
									<li class='demo-checkbox'><input type="checkbox" class="check" v-model="form.channel" value="Walmart" style="float: left;"><span class="m-l-xs">Walmart</span></li>
									<li class='demo-checkbox'><input type="checkbox" class="check" v-model="form.channel" value="Other" style="float: left;"><span class="m-l-xs">Other</span></li>
								</ul>
							</div>
							<span class="error" v-if="errors.channel.length > 0">{{errors.channel}}</span>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-6 form-group" :class="errors.no_orders.length > 0 ? 'has-error':''"> 
							<label>How many orders per month do you fulfill?</label>
							<input type="number" class="form-control" v-model="form.no_orders" placeholder="How many orders per month do you fulfill?">
							<small>Please enter a value greater than or equal to 0.</small>
							<span class="error" v-if="errors.no_orders.length > 0">{{errors.no_orders}}</span>						
						</div>
						<div class="col-sm-6 form-group"  :class="errors.no_sku.length > 0 ? 'has-error':''">
							<label>How many SKU's do you manage?</label>
							<input type="number" class="form-control" v-model="form.no_sku" placeholder="How many SKU's do you manage?">
							<small>Please enter a value greater than or equal to 0.</small>
							<span class="error" v-if="errors.no_sku.length > 0">{{errors.no_sku}}</span>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-6 form-group" :class="errors.revenue.length > 0 ? 'has-error':''">
							<label>What is your annual revenue?</label>
							<select class="form-control" v-model="form.revenue">
								<option value="" selected="selected">What is your annual revenue?</option>
								<option value="Less than 1 Million">Less than 1 Million</option>
								<option value="1M - 3M">1M - 3M</option>
								<option value="3M - 5M">3M - 5M</option>
								<option value="5M - 10M">5M - 10M</option>
								<option value="10M - 30M">10M - 30M</option>
								<option value="30M - 50M">30M - 50M</option>
								<option value="50M - 100M">50M - 100M</option>
								<option value="More than 100 Million">More than 100 Million</option>
							</select>
							<span class="error" v-if="errors.revenue.length > 0">{{errors.revenue}}</span>
						</div>
						<div class="col-sm-6 form-group" :class="errors.timeframe.length > 0 ? 'has-error':''">
							<label>What is your decision timeframe?</label>
							<select name="" class="form-control" v-model="form.timeframe">
								<option value="" selected="selected">What is your decision timeframe?</option>
								<option value="Immediately">Immediately</option>
								<option value="1 Month">1 Month</option>
								<option value="2-3 Months">2-3 Months</option>
								<option value="More than 4 Months">More than 4 Months</option>
								<option value="Just shopping around">Just shopping around</option>
							</select>
							<span class="error" v-if="errors.timeframe.length > 0">{{errors.timeframe}}</span>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-6 col-center">
							<button v-if="!loading" @click.prevent="submit()" class="m-t-xl m-b-xs btn btn-primary btn-block btn-lg black">SUBMIT</button>
							<div class="col-xs-12" v-if="loading" >
								<div class="loading m-t-xl m-b-xs" style="min-height: 44px;"></div>
							</div>
						</div>
					</div>
				</form>	
			</div>
		</div>
	</div>
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
		        form:{firstname:'',lastname:'',company:'',website:'',email:'',phone:'',no_orders:'',no_sku:'',functions:[],channel:[],revenue:'',timeframe:''},
		        errors:{firstname:'',lastname:'',company:'',website:'',email:'',phone:'',no_orders:'',no_sku:'',functions:'',channel:'',revenue:'',timeframe:''},
		        message:{type:'',text:'',show:false},
		        loading:false,
			}
		},
		created(){
			this.$root.$emit('updateClass','pageDemo');
			
			var QueryString = function () {
				// This function is anonymous, is executed immediately and 
				// the return value is assigned to QueryString!
				var query_string = {};
				var query = window.location.search.substring(1);
				var vars = query.split("&");
				for (var i=0;i<vars.length;i++) {
					var pair = vars[i].split("=");
					if (typeof query_string[pair[0]] === "undefined") {
					query_string[pair[0]] = decodeURIComponent(pair[1]);
					} else if (typeof query_string[pair[0]] === "string") {
					var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
					query_string[pair[0]] = arr;
					} else {
					query_string[pair[0]].push(decodeURIComponent(pair[1]));
					}
				} 
				return query_string;
				}();
			this.form.email = QueryString['sharedData'];



		},
		methods:{
			submit(){
				var vm  = this;
				vm.errors = {firstname:'',lastname:'',company:'',website:'',email:'',phone:'',no_orders:'',no_sku:'',functions:'',channel:'',revenue:'',timeframe:''};
				if (vm.validation()) {
			     	vm.loading = true;

					axios.post(this.url+'api/create/demo-request',this.form)
					.then(function(resp){
						
					  if(resp.status == 200){
					    vm.message = {type:'success',text:resp.data.message,show:true};
					    vm.form = {firstname:'',lastname:'',company:'',website:'',email:'',phone:'',no_orders:'',no_sku:'',functions:[],channel:[],revenue:'',timeframe:''};
					  	vm.loading = false;
						$(location).attr('href', '/thankyou');
					  }
					})
					.catch(function(resp){
					    if(resp.response.status == 422){
					      for(var i in resp.response.data){
					        vm.errors[i] = resp.response.data[i];				        
					      }
					    }

					    else if(resp.response.status == 500){
					      vm.message = {type:'danger',text:resp.response.data.message,show:true} 
					    }
					    vm.loading = false;
					});
				}
			},
			validation() {
				var returnflag = true;
				var vm = this;
				var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    			if(!re.test(String(vm.form.email).toLowerCase())) {
    				vm.errors.email = "Email validation error!";
    				returnflag = false;
    			}
    			
    			var re1 = /^\d{3}[\-]\d{3}[\-]\d{4}$/;
				var re2 = /^\d{10}$/;
				var re3 = /^[+][0-9]{1,2}[' ']\d{3}[\-]\d{3}[\-]\d{4}$/;
				if(vm.form.phone.length == 0) {
					vm.errors.phone = "Phone is required";
					returnflag = false;
				}
				
    			if (vm.form.firstname.length < 3 || vm.form.firstname.length > 30 ) {
    				vm.errors.firstname = "Firstname required and Length: 3-30";
    				returnflag = false;
    			}
    			if (vm.form.lastname.length < 3 || vm.form.lastname.length > 30 ) {
    				vm.errors.lastname = "Lastname required and Length: 3-30";
    				returnflag = false;
    			}
    			if (vm.form.company.length < 5 || vm.form.company.length > 30 ) {
    				vm.errors.company = "Company required and Length: 5-30";
    				returnflag = false;
    			}
    			if (vm.form.website.length < 5 || vm.form.website.length > 30 ) {
    				vm.errors.website = "Website required and Length: 5-30";
    				returnflag = false;
    			}
    			if (vm.form.no_orders.length == 0) {
    				vm.errors.no_orders = "No Orders is required";
    				returnflag = false;
    			}
    			if (vm.form.no_sku.length == 0) {
    				vm.errors.no_sku = "No Sku is required";
    				returnflag = false;
    			}
    			if (vm.form.functions.length == 0) {
    				vm.errors.functions = "Functions is required";
    				returnflag = false;
    			}
    			if (vm.form.channel.length == 0) {
    				vm.errors.channel = "Channel is required";
    				returnflag = false;
    			}
    			if (vm.form.revenue.length == 0) {
    				vm.errors.revenue = "Revenue is required";
    				returnflag = false;
    			}
    			if (vm.form.timeframe.length == 0) {
    				vm.errors.timeframe = "Timeframe is required";
    				returnflag = false;
    			}
    			return returnflag;
			},
			desactive(){
      			this.message = {type:'',text:'',show:false}
    		}
		}
	}
</script>
<style>
	.demo-checkbox{
		position: relative;
		width: 100%;
		display: block;
		text-align: left !important;
		float: left !important;
	}
</style>