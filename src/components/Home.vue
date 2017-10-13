<template>
    <div id="home">
        <div>
            <h1>{{title}}</h1>
        </div>
        <div style="margin-top:10vh;">
            <p v-for="item in todo">{{item}}</p>
        </div>
        <div style="max-width:30%;min-width:10%;display: inline-block;margin-top:5vh;">
            <a href="http://fuckneusoft.com" target="_blank">
                <p class="label">don't touch me</p>
            </a>
            <!-- <a href="http://sixrevisions.com/css/responsive-background-image/" target="_blank">
                <p class="label">
                    study mark
                </p>
            </a>
            <a href="http://www.shejidaren.com/30-css-hover-effects.html" target="_blank">
                <p class="label">
                    mouse hover
                </p>
            </a> -->
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            todo: [
                '看书,写代码,打游戏',
                '迷茫中...不知道干嘛~~~',
                '随笔在posts,简历在about,魔都找工作中...',
                '<<effective modern c++>>二刷中...'
            ],
            title: "又是一个无聊的一天"
        }
    },

}
</script>
<style lang="scss">
* {
  box-sizing: inherit;
  transition-property: all;
  transition-duration: .6s;
  transition-timing-function: ease;
}
</style>

<style>
#home {
    text-align: center;
    /*display: flex;*/
    /*flex-direction: column;*/
    /*justify-content: center;*/
    overflow-y: hidden;
}
</style>
<style scoped>
p {
    font-size: 19px;
    margin: 10px;
    color:#0EABDE;
}

.label {
    margin: 5px;
    color: #ababab;
    padding: 5px;
    /*border: 1px solid white;*/
    border-radius: 5px;
    box-shadow: 0px 0px 1em #aaa;
}

.label:hover {
    transform: scale(1.1, 1.1);
    transition: 0.3s;
}
</style>

