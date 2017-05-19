<template>
    <div id="home">
        <div style="width:30%;">
            <ol>
                <li v-for="item in todo">{{item}}</li>
            </ol>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            todo: [
                '下班',
                '打游戏',
                '写web',
                '等待建设'
            ]
        }
    },

}
</script>

<style>
#home {
    text-align: center;
    display: flex;
    justify-content: center;
}
</style>
