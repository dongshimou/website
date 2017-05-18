<template>
    <div id="home">
        <div style="width:30%;">
            <ol>
                <li v-for="item in todo">{{item.label}}</li>
            </ol>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            todo:[
                {'label':'下班'},
                {'label':'打游戏'},
                {'label':'写web'},
                {'label':'等待建设'}
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
