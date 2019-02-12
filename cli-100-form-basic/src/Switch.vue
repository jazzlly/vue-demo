<template>
    <div>
        <div
                id="on"
                @click="switchValue(true)"
                :class="{active: value}">On</div>
        <div
                id="off"
                @click="switchValue(false)"
                :class="{active: !value}">Off</div>
    </div>
</template>

<script>
    export default {
        // data() {
        //     return {
        //         isOn: true
        //     };
        // },
        props: ['value'],
        methods: {
            switchValue(isOn) {
                // this.value = isOn // 不用在这里修改props value
                // emit事件后， v-model中绑定的vue变量被修改，同时也导致了value的修改
                this.$emit("input", isOn)
            }
        },
    }
</script>

<style scoped>
    #on, #off {
        width: 40px;
        height: 20px;
        background-color: lightgray;
        padding: 2px;
        display: inline-block;
        margin: 10px -2px;
        box-sizing: content-box;
        cursor: pointer;
        text-align: center;
    }

    #on:hover, #on.active {
        background-color: lightgreen;
    }

    #off:hover, #off.active {
        background-color: lightcoral;
    }
</style>