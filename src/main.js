import Vue from 'vue'
import App from './App.vue'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false;

const URL_BASE = '/assets/';

new Vue({
            store,
            render: h => h(App),
            methods: {
                get_ajax(url, name) {
                    return axios.get(URL_BASE + url)
                        .then((res) => {
                            Vue.set(this, name, res.data);
                            this.$emit('GET_AJAX_COMPLETE');
                        });
                },
                // プロパティ名を指定してデータを取得
                get_data(name) {
                    return this.$data[name];
                }
            }
}).$mount('#app');
