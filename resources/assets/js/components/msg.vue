<template>	
	<transition name="fade" enter-active-class="fadeIn" leave-active-class="fadeOut">
		<p v-if="msg.show" :class="'alert m-b-md animated' + ' alert-'+msg.type ">
	  		<button type="button" class="close" @click.prevent="desactive"><span aria-hidden="true">&times;</span></button>     
	  		{{msg.text}}  			
	  	</p>  	
  	</transition>
</template>

<script type="text/javascript">
	var settime;

	export default{
		props:['msg'],
		methods:{
			desactive(){
				this.$emit('desactive');
				clearTimeout(settime);
			}
		},
		watch:{
			msg:function(value){				
				var t = this;
				if(value.show == true){
					settime = setTimeout(function(){
						t.$emit('desactive');
					},4000);
				}
			}
		}
	}
</script>