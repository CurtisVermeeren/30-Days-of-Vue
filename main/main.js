new Vue({  
    el:'#app',  
    data:{ 
        message:'Greetings!',
        greeting:'Hello World!',
        user:'Curtis Vermeeren',
        city:'Toronto',
        alertMessage:'',
        cityImage:'https://bit.ly/2SKJPqJ',
        numbers:[{id:1, value:1},{id:2, value:10},{id:3, value:100},{id:4, value:1000},{id:5, value:10000}],
        km: 0,
        m: 0,
    },
    methods:{
        changeGreeting() {
            this.greeting = this.greeting === 'Hello World!' ? 'What is up!' : 'Hello World!';
        },
        alertMessageGreeting() {
            this.alertMessage = 'You typed something!';
        },
        alertEnterGreeting() {
            this.alertMessage = 'You types and pressed enter!';
        },
        changeCity() {
            if (this.city === 'Toronto') {
                this.city = 'Lagos';
                this.cityImage = 'https://bit.ly/2Rd4gQ3';
            } else {
                this.city = 'Toronto';
                this.cityImage = 'https://bit.ly/2SKJPqJ';
            }
        },
        shuffle() {
            this.numbers = _.shuffle(this.numbers)
        },
        reverseString(string){
            return string.split('').reverse().join('');
        }
    },
    computed: {
        reverseMessage() {
            return this.message.split('').reverse().join('');
        },
    },
    watch: {
        km() {
            // Whenever KM changes this function runs
            this.m = this.km ? this.km * 1000 : 0;
        },
        m() {
            // Whenever M changes this function runs
        this.km = this.m ? this.m / 1000 : 0;
        }
    }
});
