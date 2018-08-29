import VueRouter    from 'vue-router'

//Define route components
const home = require('./components/page-home');
const features = require('./components/page-features');
const features_detail = require('./components/page-features-detail');
const integrations = require('./components/page-integrations');
const pricing = require('./components/page-pricing');
const resources = require('./components/page-resources');
const support = require('./components/page-support');
const demo = require('./components/page-demo');
const contact = require('./components/page-contact');
const thankyou = require('./components/page-thankyou');
const ourteam = require('./components/page-ourteam');
const partners = require('./components/page-partners');
const customers = require('./components/page-customers');
const documentation = require('./components/page-documentation');
const faqs = require('./components/page-faqs');
const privacy_policy = require('./components/page-privacy-policy');


export default new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/', name:'home',component: home, meta: { title: 'Home | Skusuite' }},
        { path: '/features', name:'features',component: features, meta: { title: 'Features | Skusuite' }},
        { path: '/features/detail/:id', name:'features-detail',component: features_detail, meta: { title: 'Detail | Skusuite' }},
        { path: '/integrations', name:'integrations',component: integrations, meta: { title: 'Integrations | Skusuite' }},
        { path: '/pricing', name:'pricing',component: pricing, meta: { title: 'Pricing | Skusuite' }},
        { path: '/company', name:'resources',component: resources, meta: { title: 'Resources | Skusuite' }},
        { path: '/support', name:'support',component: support, meta: { title: 'Support | Skusuite' }},
        { path: '/contact', name:'contact',component: contact, meta: { title: 'Contact | Skusuite' }},
        { path: '/thankyou', name:'thankyou',component: thankyou, meta: { title: 'Thanks | Skusuite' }},
        { path: '/demo', name:'demo',component: demo, meta: { title: 'Demo | Skusuite' }},
        { path: '/ourteam', name:'ourteam',component: ourteam, meta: { title: 'Our team | Skusuite' }},
        { path: '/partners', name:'partners',component: partners, meta: { title: 'Partners | Skusuite' }},
        { path: '/customers', name:'customers',component: customers, meta: { title: 'Customers | Skusuite' }},
        { path: '/documentation', name:'documentation',component: documentation, meta: { title: 'Documentation | Skusuite' }},
        { path: '/faqs', name:'faqs',component: faqs, meta: { title: 'FAQ | Skusuite' }},
        { path: '/privacy-policy', name:'privacy-policy',component: privacy_policy, meta: { title: 'Privacy | Skusuite' }}
    ],
    scrollBehavior (to, from, savedPosition) {	  
	    return { x: 0, y: 0 }	  
    },
    beforeEach(to, from, next) {
        //document.title = to.meta.title
        next()
    }
});