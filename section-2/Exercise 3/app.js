new Vue({
        el: '#exercise',
        data: {
            value: 0,
            CustomTime: ''
        },
        computed: {
        	result: function()
        	{
        		return this.value != 37 ? 'not there yet' : 'done';
        	},
        },

        watch: {
        	result: function(value)
        	{
        		var vm = this;
        		var _time = this.CustomTime * 1000;
        		setTimeout(function(){
        			vm.value = 0;
        		}, _time);
        	}
        }
    });