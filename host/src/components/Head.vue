<template>
    <div id="head" class="fix_top">
        <slot></slot>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    props: {
        fixed: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        renders: function () {
            if (this.fixed) {
                this.$el.style.position = 'fixed'
                // document.body.style.transition="0.5s margin-top"
                document.body.style.marginTop = this.$el.clientHeight + 'px';
            } else {
                document.body.style.marginTop = '0px'
                // document.body.style.transition="0s margin-top"
                this.$el.style.position = ''
            }
        }
    },
    mounted() {
        this.renders()
    },
    watch: {
        fixed: function () {
            this.renders()
        }
    }
}
</script>

<style scoped>
#head {
    text-align: center;
}
</style>
<style>
.fix_top {
    width: 100%;
    top: 0px;
    display: grid;
}
</style>

