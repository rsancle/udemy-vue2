new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods:{
        	alertMe:  function(){
        		alert('Button Clicked!');
        	},
        	insertValue: function (event){
        		this.value = event.target.value;
        	}
        }
    });