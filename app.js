const app = Vue.createApp({
    //data, functions
    //template: '<h2>hello, vue!</h2>'

    //函数格式
    data() {
        return{
            url: 'https://www.google.com',
            showAnime: true,
            animes:[
                {title: 'さよなら私のクラマー', author: '新川直司', img: 'assets/さよなら私のクラマー.jpg', isFav: false},
                {title: 'ワンダーエッグ・プライオリティ', author: '野島伸司', img: 'assets/ワンダーエッグ・プライオリティ.jpg', isFav: true},
                {title: 'スーパーカブ', author: 'トネ・コーケン', img: 'assets/スーパーカブ.jpg', isFav: false}
            ]
        }
    },

    //修改datan内部数据
    methods: {
        toggleAnimes(){
            this.showAnime = !this.showAnime
        },
        toggleFav(anime){
            anime.isFav = !anime.isFav
        }
    },

    //对data内部数据计算并输出
    //在html用法和data类似
    computed: {
        filteredAnimes(){
            //js array 语法
            //对每一个元素进行true，false判断，然后返回true的元素
            let filteredAnimes = this.animes.filter((anime) => anime.isFav);
            return filteredAnimes
        }
    }

})


app.mount('#app');