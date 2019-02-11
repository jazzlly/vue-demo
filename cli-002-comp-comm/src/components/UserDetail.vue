<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <!-- 这里的name必须在props中声明 -->
    <p>User Name: {{ myNameFn }}</p>
    <p>User Age: {{ myAge }}</p>

    <button @click="resetName()">Reset Name</button>
    <button @click="resetFn()">Reset Name Callback</button>
  </div>
</template>

<script>
import { eventBus }  from '../main'

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
    // fixme: not working ...
    resetFn: Function
  },

  data() {
    return {
      myAge: 0,
    }
  },

  computed: {
    myNameFn: function() {
      console.log("myNameFn");
      return this.cname;
    },
  },

  methods: {
    resetName() {
      this.$emit("nameWasReset", "Max");
    }
  },

  created() {
    eventBus.$on('ageChanged', (age) => {
      console.log("age changed: " + age);
      this.myAge = age
    })
  },
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
