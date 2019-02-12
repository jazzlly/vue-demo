<template>
  <div>
    <div class="form-group">
      <label>First Name</label>
      <input type="text" class="form-control" v-bind:value="firstName" 
        v-on:input="nameChanged('first', $event)">
    </div>
    <div class="form-group">
      <label>Last Name</label>
      <input type="text" class="form-control" v-bind:value="lastName" 
        v-on:input="nameChanged('last', $event)">
    </div>
  </div>
</template>

<script>
export default {
    props: ["value"],
    computed: {
        myValue() {
            return this.value
        },
        firstName() {
            return this.myValue.split(" ")[0]
        },
        lastName() {
            return this.myValue.split(" ") [1]
        },
    },
    methods: {
        nameChanged(which, event) {
            let name = ''
            if (which === 'first') {
                name = event.target.value + " " + this.lastName
            } else {
                name = this.firstName + " " + event.target.value
            }
            // this.value = name
            this.$emit('input', name)
        }
    },
};
</script>

<style scoped>
</style>

