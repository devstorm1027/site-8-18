<template>
	  <section id="h-send-email" class="col-sm-12 c-sent-e" >
        <div class="col-sm-12 c-form col-center">
            <p class="t-uppercase text-center" style="font-size:25px;"><b>Lets talk!<br>Take the first step to streamlining your business today</b></p>
            <msg :msg="message" v-on:desactive="desactive"></msg>
        </div>
	      <div class="col-sm-12 col-center form-subscription">
	         <form class="form-inline">
	            <div class="container">
                    <div class="col-sm-12 col-center">
                        <div class="row">
                            <div class="col-xs-3 form-group" :class="errors.name.length > 0 ? 'has-error':''">
                                <input type="text" class="form-control" placeholder="Name" v-model="form.name">
                                <span class="error" v-if="errors.name.length > 0">{{errors.name}}</span>
                            </div>
                            <div class="col-xs-4 form-group no-pd" :class="errors.email.length > 0 ? 'has-error':''">
                               <input type="email" class="form-control" placeholder="Email" v-model="form.email">
                               <span class="error" v-if="errors.email.length > 0">{{errors.email}}</span>
                            </div>
                            <div class="col-xs-3 form-group" :class="errors.phone.length > 0 ? 'has-error':''">
                              <input type="text" class="form-control" placeholder="Phone" v-model="form.phone">
                              <span class="error" v-if="errors.phone.length > 0">{{errors.phone}}</span>
                            </div>

                            <div class="col-xs-2 no-pd">
                                <button v-if="!loading" @click.prevent="subsubmit()" type="submit" class="btn btn-dark">SEND</button>
                                <div v-if="loading" class="col-xs-12"  >
                                    <div class="loading white" style="min-height: 44px;"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </form>
	      </div>
  	</section> 
</template>

<script type="text/javascript">
  export default{
    data(){
      return{
        url : this.$root.uri,
        form:{name:'',email:'',phone:''},
        errors:{name:'',email:'',phone:''},
        message:{type:'',text:'',show:false},
        loading:false,
      }
    },
    methods:{
      subsubmit(){
          var vm  = this;
          vm.errors = {name:'',email:'',phone:''};
          if (vm.validation()) {
            vm.loading = true;

            axios.post(this.url+'api/create/subscription-request',this.form)
            .then(function(resp){
              if(resp.status == 200){
                vm.message = {type:'success',text:resp.data.message,show:true};
                vm.form = {name:'',email:'',phone:''};
                vm.loading = false;
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
          var re2 = /^\d{10}$/;
          var re3 = /^[+][0-9]{1,2}[' ']\d{3}[\-]\d{3}[\-]\d{4}$/;
          if(!re1.test(vm.form.phone) && !re2.test(vm.form.phone) && !re3.test(vm.form.phone)) {

            vm.errors.phone = "Phone validation error. Format is xxx-xxx-xxxx!";
            returnflag = false;
          }
          if (vm.form.name.length < 3 || vm.form.name.length > 30 ) {
            vm.errors.name = "Name is required and Length: 3-30";
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