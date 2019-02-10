<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <!-- 这里的name必须在props中声明 -->
    <p>User Name: {{ switchName() }}</p>

    <button @click="resetName()">Reset Name</button>
  </div>
</template>

<script>
export default {
    // 将parent component中的data传递到child component
    // 从语法角度来看， cname是child component的一个attribute

    // props: ['cname'],    // 一般写法

    // props validation
    props: {
        // cname: [String, Array] // 可以是string或array
        // cname: String,
        cname: {
            type: String,
            required: true,
            dafault: 'Ryan'
        },
    },

    methods: {
        switchName() {
            console.log('name is:' + this.cname)
            return this.cname.split("").reverse().join("")
        },

        resetName() {
            this.cname = 'Max'
            this.$emit('nameWasReset', this.cname)
        },

    },
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
