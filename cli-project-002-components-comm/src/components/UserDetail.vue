<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <!-- 这里的name必须在props中声明 -->
    <p>User Name: {{ myNameFn }}</p>
    <p>User Age(raw props): {{ userAge }}</p>
    <p>User Age(computed): {{ myAge }}</p>

    <button @click="resetName()">Reset Name</button>
    <button @click="resetFn()">Reset Name Callback</button>
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
      dafault: "Ryan"
    },

    userAge: Number,

     // fixme: not working ...
    resetFn: Function, 
  
  },

  computed: {
    myNameFn: function() {
      console.log("myNameFn")
      return this.cname
    },
    myAge() {
      return this.userAge
    }
  },

  methods: {
    resetName() {
      this.$emit('nameWasReset', 'Max')
    }
  }
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
