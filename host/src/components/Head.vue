<template>
    <div id="head">
        <h1>{{head_title}}</h1>
    </div>
</template>

<script>
export default {
    data() {
        return {
            head_title: "this is my homepage!"
        }
    }
}
</script>

<style scoped>
#head{
    text-align: center;
}
</style>
