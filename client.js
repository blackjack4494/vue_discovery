Vue.use(VueNativeSock, 'ws://localhost:9090')

Vue.component('websock', {
  props: ['litem'],
  template: '<li>{{ litem.text }}</li>'
})