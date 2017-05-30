new Vue({
    //Connect to DOM
    el: '#app',
    //Store Data to be used
    data: {
        title: 'data title',
        link: 'http://google.com',
        finishedLink: '<a href="http://google.com">Google</a>',
        counter: 0,
        x: 0,
        y: 0,
        MyModel: "This is a model"
    },
    //Dependent Properties
    computed: {
        output: function(){
            return this.counter > 5 ? 'Greater 5' : 'Smaller than 5';
        }
    },
    //Methods of this Vue Instance
    methods: {
        sayHello: function() {
            return 'Method sayHello()';
        },
        printTitle: function() {
            return this.title;
        },
        increase: function(step, event) {
            this.counter += step;
        },
        updateCoordinates: function(event) {
            this.x = event.clientX;
            this.y = event.clientY;
        },
        alertMe: function() {
            alert('Key up!');
        },
        result: function(){
          return this.counter > 5 ? 'Greater 5' : 'Smaller than 5';
        }
    }
});
