const app = Vue.createApp({
    //data, functions
    //template: '<h2>hello, vue!</h2>'

    //函数格式
    data() {
        return{
            showAnime: true,
            title: '未闻花名',
            author: 'A-1 pictures',
            date: '2012.10.10',
            x: 0,
            y: 0
        }
    },

    methods: {
        changeTitle(title) {
            //this.title = 'Darling in the Franxx';
            this.title = title;
        },
        toggleAnime(){
            this.showAnime = !this.showAnime
        },
        handleEvent(e, data){
            console.log(e.type);
            if(data){
                console.log(data);
            }
        },
        handleMousemove(e){
            this.x = e.offsetX;
            this.y = e.offsetY;
        }
    }
});

app.mount('#app');