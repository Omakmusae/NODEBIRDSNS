<template>
    <div>
        Hello {{name}}

    </div>
</template>


<script>
export default {
    //layout 코드를 제거하면 default 로 설정한 내용이 적용됨
    layout:'admin',
    data() {
        return {
            name:"Nuxt.js",
        }
    },
}
</script>






<style>
</style>