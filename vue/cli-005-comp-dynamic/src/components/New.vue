<template>
    <div>
        <h3>New Quote</h3>
        <p>Counter: {{ counter }}</p>
        <button @click="counter++">Increase Counter!</button>
    </div>
</template>


<script>
export default {
    data() {
        return {
            counter: 0
        }
    },
    created() {
        console.log("New comp created!")
    },
    destroyed() {
        console.log("New comp destroyed!")
    },
    // Lifecycle for dynamic component!
    // activated 当comp显示出来时, activated被调用
    activated() {
        console.log("New comp activated!")
    },
    // deactivated, 当comp消失时，deactivated被调用
    deactivated() {
        console.log("New comp deactivated!")
    }
    
}
</script>

<style scoped>

</style>

