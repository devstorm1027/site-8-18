<template>
	<section>
		<section class="col-sm-12 pre-footer" style="background-color: #0f0f0f">
			<div class="container">
				<div class="mobileposition center-block" style="width:80%">
					<div class="row footer">
						<div class="col-md-3 col-sm-3 wow animate fadeInLeft" style="visibility: visible; animation-name: fadeInLeft;">
							<div class="c-content-step-1 c-opt-1">
								<div class="c-icon">
									<img :src="uri + 'img/logo-horizontal.png'" class="m-t-sm" width="150px">
									<img :src="uri + 'img/madeinny-white.png'" class="mimgmark" style="margin-left: 50px;margin-top:10px;width: 50px;">
								</div>

							</div>
						</div>
						<div class="col-md-3 col-sm-3 wow animate fadeInLeft" style="visibility: visible; animation-name: fadeInLeft;">
							<div class="c-content-step-1 c-opt-1">
								<div class="c-icon">

								</div>
								<ul aria-labelledby="integrations-link" class="list-unstyled pre-footer">
									<li style="font-weight: bold;">PRODUCT</li>
									<li><a href="/features" class="c-title">Feature Tour</a></li>
									<li><a href="/pricing" class="c-title">Pricing</a></li>
									<li><a href="/integrations" class="c-title">Integrations</a></li>
									<li><a href="/demo" class="c-title">Request Demo</a></li>
								</ul>
							</div>
						</div>
						<div class="col-md-3 col-sm-3 wow animate fadeInLeft" data-wow-delay="0.1s" style="visibility: visible; animation-delay: 0.1s; animation-name: fadeInLeft;">
							<div class="c-content-step-1 c-opt-1">
								<div class="c-icon">

								</div>
								<ul aria-labelledby="integrations-link" class="list-unstyled pre-footer">
									<li style="font-weight: bold;">COMPANY </li>
									<li>
										<router-link :to="{name:'resources'}" class="c-title">About SkuSuite</router-link>
									</li>
									<li>
										<router-link :to="{name:'contact'}" class="c-title">Contact Us</router-link>
									</li>

								</ul>
							</div>
						</div>
						<div class="col-md-3 col-sm-3 wow animate fadeInLeft" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInLeft;">
							<div class="c-content-step-1 c-opt-1">
								<div class="c-icon">

								</div>
								<ul aria-labelledby="integrations-link" class="list-unstyled pre-footer">
									<li style="font-weight: bold;">RESOURCES </li>
									<li><a href="/support" class="c-title">Support</a></li>
									<li><a href="#" class="c-title">Documentation</a></li>
									<li><a href="#" class="c-title">FAQs</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!--</div>-->
			<!--</div>-->
			<footer class="col-sm-12 footer text-center" style="padding-top:0">
				<div class="container" style="display:inline-block">
					<p>
						ALL RIGHTS RESERVED. © 2018 SKUSUITE INC. <router-link :to="{name:'privacy-policy'}" class="privacy-policy">PRIVACY POLICY</router-link>
						<i class="fa m-r-xs" aria-hidden="true" style="padding-left: 2px;"></i><span><b>LET'S TALK: 1-212-452-5011</b></span>
						<br>
						<div class="social-icons">
							<div class="follow-us">FOLLOW US:  </div>
							<div class="" style="float:left;padding-top:30px; text-align:center; padding-top:0px">
								<a href="http://facebook.com/skusuite"><i class="fa fa-facebook-square fa-3" style="font-size:1.8em;color: #ffffff; padding-right:20px"></i></a>
								<a href="https://www.instagram.com/skusuite/"><i class="fa fa-instagram fa-3" style="font-size:1.8em;color: #ffffff; padding-right:20px"></i></a>
								<a href="https://twitter.com/skusuite" target="_blank"><i class="fa fa-twitter-square  fa-3" style="font-size:1.8em;color: #ffffff; padding-right:20px"></i></a>
								<!--<a href="/"><i class="fa fa-youtube  fa-3" style="font-size:1.8em;color: #ffffff; padding-right:20px"></i></a>
								<a href="/"><i class="fa fa-google  fa-3" style="font-size:1.8em;color: #ffffff; padding-right:20px"></i></a>
								<a href="/"><i class="fa fa-paypal  fa-3" style="font-size:1.8em;color: #ffffff; padding-right:20px"></i></a> -->
							</div>
						</div>
					</p>
				</div>
			</footer>
		</section>
	</section>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
           	 uri:this.$root.uri,
          	  uri_storage:this.$root.uri_storage
        	}
		},
		created(){

		}
	}
</script>