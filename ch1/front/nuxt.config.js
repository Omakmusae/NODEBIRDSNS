//nuxt에 대한 설정 담당 파일
//vue 파일에서 vuetify를 사용할 수 있게 설정

module.exports = {
    head() {
        return {
            title:'NodeBird'
        }
    },

    modules : [
        '@nuxtjs/axios'
    ],

    buildModules: [
        '@nuxtjs/vuetify',
    ],

    vuetify: {}

};