<template>
	<section>
		
                
        <div class="container" style="padding-top:150px; height:700px">
            <div class="col-sm-10 col-md-10">
                <p><h1>Thank you for filling out our application.</h1></p><hr>
                <p><h3>A customer success manager will contact you shortly to learn more about your business and set you up.</h3></p>                
            </div>
        </div>


	</section>
</template>


<script type="text/javascript">
	export default{
		data(){
			return{
				url : this.$root.uri
			}
		},
		created(){
			this.$root.$emit('updateClass','pageThankyou');

            //document.head.querySelector('meta[name=description]').content = 'ThankyouMeta';
		},
		mounted(){

		}
	}
</script>
