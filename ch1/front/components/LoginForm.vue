<template>
    <v-container>
        <v-card>
            <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
                <v-container>
                    <v-text-field 
                        v-model="email"
                        label="이메일"
                        type="email"
                        :rules="emailRules"
                        required               
                    />
                    <v-text-field 
                        v-model="password"
                        label="비밀번호"
                        type="password"
                        :rules="passwordRules"
                        required                  
                    />
                    <v-btn color="green" type="submit" :disabled="!valid">로그인</v-btn>
                    <v-btn nuxt to="/signup">회원가입</v-btn>
                </v-container>
            </v-form>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                valid:false,
                email:"test@test.co.kr",
                password :'sfd',
                emailRules: [
                    v => !!v || '이메일은 필수입니다.', //v는 입력 받은 값
                    v => /.+@.+/.test(v) || '이메일이 유효하지 않습니다.',
                ],
                passwordRules: [
                    v => !!v || '비밀번호는 필수입니다.',
                ],
            }
        },
        methods: {
            onSubmitForm() {
                this.$refs.validate()
            }
        }
    }
</script>



<style>



</style>