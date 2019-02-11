<template>
    <!-- 所有的element都必须在一个div下面 -->
    <div>
        <p>Server status: {{ status }}</p>
        <hr>
        <button @click="changeStatus">change status</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            status: "Critical!"
        }
    },

    methods: {
        changeStatus() {
            this.status = "Normal!"
        }
    },
}
</script>