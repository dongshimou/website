<template>
    <div id="http404">
        <img src="../assets/http404.png">
    </div>
</template>

<script>
export default {
    data() {
        return {
            error: {
                message: '悲剧了,没有这个页面!',
            }
        }
    }
}
</script>

<style scoped>
#http404 {
    margin: 0 auto;
    text-align: center;
    /*background-image: url("../assets/http404.png");*/
    max-width: 40vw;
    min-width: 300px;
}

img {
    width: 100%;
    height: auto;
    max-width: 100%;
    display: block;
}
</style>
