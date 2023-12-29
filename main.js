var vueInstance = new Vue({
    el: '#app',
    data: {
        title: 'Dien thoai samsung'
    },
    methods: {
        say: function(text) {
            return 'Hello' + text;
        }
    }
});
//He thong phan ung. Reactivity
console.log(vueInstance);

setTimeout(() => {
    vueInstance.title = 'Dien thoai Oppo';
}, 3000);