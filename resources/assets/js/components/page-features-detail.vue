<template>
	<section id="section-about" class="section col-sm-12 no-pd" style="min-height:700px">
        <div class="back">
            <div class="image col-sm-6 no-pd" :style="'background:url('+url+'img/banner/'+this.posts_img[$route.params.id]+');'"></div>
        </div>
        <div class="front">
            <div class="container">
                <div class="content col-sm-6 col-sm-offset-6 no-pd right">
                    <h2 class="title animate m-b-lg">{{this.posts_title[$route.params.id]}}</h2>
                    <p class="parrafo text-justify">{{this.posts_data[$route.params.id]}}</p>
                    <h2 class="title animate m-b-lg">Benefits for companies</h2>                  
                    <p class="parrafo">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam: 
                    </p>
                    <ul class="list-unstyled parrafo">
                        <li class="m-b-sm">
                            <p><i class="fa fa-check m-r-xs text-primary" aria-hidden="true"></i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                        </li>

                        <li class="m-b-sm">
                            <p><i class="fa fa-check m-r-xs text-primary" aria-hidden="true"></i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </li> 
                        <li class="m-b-sm">
                            <p><i class="fa fa-check m-r-xs text-primary" aria-hidden="true"></i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </li> 
                        <li>
                            <p><i class="fa fa-check m-r-xs text-primary" aria-hidden="true"></i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                        </li> 
                    </ul> 
                </div>
            </div>
        </div>
    </section>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
                url : this.$root.uri,
                posts_img: [
                    '8.jpg',
                    '9.jpg',
                    '2.jpg',
                    '8.jpg',
                    '9.jpg',
                    '2.jpg'
                ],
                posts_title: [
                    'Inventory Management',
                    'Omnichannel',
                    'Vendor Purchase Orders & Receiving',
                    'Advanced Reporting',
                    'Shipping & Logistics',
                    'Accounting & Invoices'
                ],
                posts_data: [
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
                ]
			}
		},
		created(){
			this.$root.$emit('updateClass','pageFeatureDetail');
		}
	}
</script>