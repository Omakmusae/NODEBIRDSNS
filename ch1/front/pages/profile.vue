<template>
    <div>
        <nav>
            <nuxt-link to="/">Home</nuxt-link>
            <nuxt-link to="/profile">Profile</nuxt-link>
            <nuxt-link to="/signup">Signup</nuxt-link>
        </nav>
        profile page
    </div>
</template>

<script>
    export default {
        layout:'admin',
        data() {
            return {
                name:"Nuxt.js",
            }
        },
        head(){
            return {
                title:'프로필'
            }
        },
    }
</script>



<style>



</style>