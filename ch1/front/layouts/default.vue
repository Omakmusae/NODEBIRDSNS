<template>
    <v-app>
        <!-- 네비게이션 툴바 -->
        <nav>
            <v-toolbar dark color="green">
                <v-toolbar-title>
                <nuxt-link to="/">NodeBird</nuxt-link>
                </v-toolbar-title>
                <v-spacer />
                <v-toolbar-items>
                <v-text-field label="검색" hide-details prepend-icon="mdi-magnify" :style="{ display: 'flex', alignItems: 'center' }" />
                <v-btn text nuxt to="/profile" :style="{ display: 'flex', alignItems: 'center' }">
                    <div>프로필</div>
                </v-btn>
                <v-btn text nuxt to="/signup" :style="{ display: 'flex', alignItems: 'center' }">
                    <div>회원가입</div>
                </v-btn>
                </v-toolbar-items>
            </v-toolbar>
        </nav>
        <!-- 그리드 시스템 구성 : 보통은 세로를 12등분으로 분할하여 왼쪽 4칸은 로그인창, 나머지 8칸을 컨텐츠창 -->
        <v-row no-gutters>
            <!-- 로그인창 -->
            <v-col cols="12" md="4">
                <login-form />
            </v-col>
            <!-- 컨텐츠창 -->
            <v-col cols="12" md="8">
                <nuxt />
            </v-col>
        </v-row>
    </v-app>
</template>

<script>
    import LoginForm from '~/components/LoginForm';

    export default {
        head(){
            return {
                title:'NodeBird'
            }
        }, 
        components: {
            LoginForm,
        },
    }
</script>



<style>



</style>