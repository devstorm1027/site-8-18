<template>
	<div class="container mth" style="display: table; margin-right: auto; margin-left: auto;">
		
		<div class="row" style="margin-bottom: 50px">
			<div class="col-sm-12">
				<div class="page-container col-xs-12 pd-navbar wrapper">
					<div class="col-sm-12 container">
						<div class="col-sm-12 col-center no-pd parrafo" style="text-align:center;">	
							<h1 class="text-primary">Let's Talk</h1>
							<p style="font-size: 20px; margin-top:-20px;">We want to hear from you!
							</p>
							<p>
								You can call us at 212-452-5011 M-F 9am-6pm EST or feel free to fill out the form below.
							</p>
						</div>
						<div class="col-sm-12 col-center container-form">
							<msg :msg="message" v-on:desactive="desactive"></msg> 
							<form>
								<div class="row">
									<div class="col-sm-6 form-group" :class="errors.firstname.length > 0 ? 'has-error':''">
										<label>First Name</label>
										<input type="text" class="form-control" v-model="form.firstname" placeholder="First Name">
											<span class="error" v-if="errors.firstname.length > 0">{{errors.firstname}}
</span> 
									</div>
									<div class="col-sm-6 form-group" :class="errors.lastname.length > 0 ? 'has-error':''">
										<label>Last Name</label>
										<input type="text" class="form-control" v-model="form.lastname" placeholder="Last Name">
										<span class="error" v-if="errors.lastname.length > 0">{{errors.lastname}}
</span>
									</div>
								</div>
								<div class="row">
									<div class="col-xs-12 form-group" :class="errors.description.length > 0 ? 'has-error':''">
										<label>Description</label>
										<textarea type="text" class="form-control" v-model="form.description" placeholder="Description" style="height: 200px"></textarea>
										<span class="error" v-if="errors.description.length > 0">{{errors.description}}
</span>
									</div>
								</div>
								<div class="row">
									<div class="col-sm-6 form-group" :class="errors.phone.length > 0 ? 'has-error':''">
										<label>Phone</label>
										<input type="text" class="form-control" v-model="form.phone" name="phone" placeholder="Phone Name">
										<span class="error" v-if="errors.phone.length > 0">{{errors.phone}}
</span>
									</div>
									<div class="col-sm-6 form-group" :class="errors.email.length > 0 ? 'has-error':''">
										<label>Email</label>
										<input type="text" class="form-control" v-model="form.email" placeholder="Email">
										<span class="error" v-if="errors.email.length > 0">{{errors.email}}
</span>
									</div>
								</div>
								<div class="row">
									<div class="col-sm-6 col-center">
										<button v-if="!loading" @click.prevent="submit()" class="m-t-xl m-b-xs btn btn-primary btn-block btn-lg black"><h6>SUBMIT</h6></button>
										<div class="col-xs-12" v-if="loading" >
											<div class="loading m-t-xl m-b-xs" style="min-height: 44px;"></div>
										</div>
									</div>
								</div>
							</form>	
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
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
				url : this.$root.uri,
		        form:{firstname:'',lastname:'',description:'',email:'',phone:''},
		        errors:{firstname:'',lastname:'',description:'',email:'',phone:''},
		        message:{type:'',text:'',show:false},
		        loading:false,
			}
		},
		created(){
			this.$root.$emit('updateClass','pageContact');
            

		},
		methods:{
			submit(){
				var vm  = this;
				vm.errors = {firstname:'',lastname:'',description:'',email:'',phone:''};
				if (vm.validation()) {
			     	vm.loading = true;

					axios.post(this.url+'api/create/contact-request',this.form)
					.then(function(resp){
						
					  if(resp.status == 200){
					    vm.message = {type:'success',text:resp.data.message,show:true};
					    vm.form = {firstname:'',lastname:'',company:'',email:'',phone:''};
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
		        console.log(vm.errors);
		        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				if(!re.test(String(vm.form.email).toLowerCase())) {
					vm.errors.email = "Email validation error!";
					returnflag = false;
				}
		          
				var re1 = /^\d{3}[\-]\d{3}[\-]\d{4}$/;
				var re2 = /^\d{12}$/;
				var re3 = /^[+][0-9]{1,2}[' ']\d{12}$/;
				if(vm.form.phone.length == 0) {
					vm.errors.phone = "Phone is required";
					returnflag = false;
				}
				if (vm.form.firstname.length < 3 || vm.form.firstname.length > 30 ) {
					vm.errors.firstname = "Fistname is required and Length: 3-30";
					returnflag = false;
				}
				if (vm.form.lastname.length < 3 || vm.form.lastname.length > 30 ) {
					vm.errors.lastname = "Lastname is required and Length: 3-30";
					returnflag = false;
				}
				if (vm.form.description.length < 5 || vm.form.description.length > 30 ) {
					vm.errors.description = "Description is required and Length: 5-30";
					returnflag = false;
				}
				return returnflag
		      },

			desactive(){
      			this.message = {type:'',text:'',show:false}
    		}
		}
	}
</script>