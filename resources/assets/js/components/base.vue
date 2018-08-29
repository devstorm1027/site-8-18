<template>
	<section :class="page_class">			
 			<vue-progress-bar></vue-progress-bar>
 			<nav-bar></nav-bar>
 				<router-view class="view"></router-view>
 			<section-footer></section-footer>
	</section>
</template>

<script type="text/javascript">
	import navBar from "./navbar.vue";

	export default{
		props:['clase'],
		data(){
			return{
				page_class:this.clase,
			}
		},
		components:{
			navBar:navBar
		},
		mounted(){
			this.$Progress.finish();
		},
		created () {			
			this.$Progress.start()
	    	this.$router.beforeEach((to, from, next) => {
	    	
	      	if (to.meta.progress !== undefined) {
	        	let meta = to.meta.progress
	        	this.$Progress.parseMeta(meta)
	      	}
	      	this.$Progress.start()
	      	next()
	    });
	    
	    this.$router.afterEach((to, from) => {
	      this.$Progress.finish()
	    });
	  },
	  watch:{
	  	clase(clase){
	  		this.page_class = clase
	  	}
	  }
	}
</script>