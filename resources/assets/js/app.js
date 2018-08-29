require('./bootstrap');

import 'babel-polyfill'

window.Vue = require('vue');

import VueRouter  from 'vue-router'
import router     from './router'
import VueWaypoint from 'vue-waypoint'
import VueProgressBar from 'vue-progressbar'
import vueHeadful from 'vue-headful';
import Meta from 'vue-meta';

Vue.use(Meta);


const optionsBar = {
  color: '#f68815',
  failedColor: '#f68816',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'top',
  inverse: false
}

Vue.use(VueProgressBar,optionsBar)
Vue.use(VueWaypoint)
Vue.use(VueRouter)

//components
Vue.component('my-app',require('./components/base.vue'));
Vue.component('section-footer',require('./components/footer.vue'));
Vue.component('section-subscription',require('./components/subscription-form.vue'));
Vue.component('vue-headful', vueHeadful);

Vue.component('msg',require('./components/msg.vue'));

var vm = new Vue({
    router,

    data:{
    	uri: $('meta[name=url-base]').attr('content') + '/',
    	uri_storage : $('meta[name=url-base]').attr('content') +'/'+'storage/', 
        msg:{show:false,text:'',type:''},
        page_class:null,
        sharedata:null,
    },
    created(){
    	this.$on('msgActive',this.msgActive);	
    	this.$on('msgDesactive',this.msgDesactive);	
        this.$on('updateClass',this.updateClass);
    },
      methods:{
    	msgActive:function(type,text){    		
    		var self = this;
    		self.msg = {type:type,text:text,show:true};    		

    		setTimeout(function(){
    			self.msgDesactive();
    		},3000)
    	},
    	msgDesactive:function(){    		
    		this.msg = {show:false};
    	},
      updateClass(clase){
        this.page_class = clase; 
      },
    },
    
}).$mount('#app');


