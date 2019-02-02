Vue.component('list-item', {
  props: ['litem'],
  template: '<li>{{ litem.text }}</li>'
})

Vue.component('list-item-test', {
  template: '<li> LOL </li>'
})

var app = new Vue({
	el: '#app',
	data: {
		itemList: [
			{ id: 0, text: 'firstItem hehe'},
			{ id: 1, text: 'secondItem'},
			{ id: 2, text: 'Gegee Dennis :D'}
		],
		message: 'Hello Vue!'
	},
	methods: {
		naisu: function () {
			this.message = 'Good job!'
		}
	}
	
});