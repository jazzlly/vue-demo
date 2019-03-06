<template>
  <div class="counter">
    <button class="btn btn-primary" @click="increment">Increment</button>
    <button class="btn btn-primary" @click="incrementAsync">Increment async</button>
    <button class="btn btn-primary" @click="decrement">Decrement</button>
    <br>
    <input v-model="step" type="number">
    <br>
    <button class="btn btn-primary" @click="incrementByStep">Increment by step</button>
    <br>
    <input v-model="step2" type="number">
    <br>
    <button class="btn btn-primary" @click="incrementByStep2">Increment by step2</button>
    <button class="btn btn-primary" @click="incrementByStepAsync2">Increment by step2 async</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      step: 2,
      step2: 5
    };
  },
  methods: {
    increment() {
      //this.$emit('updated', 1);

      // 直接改变状态也是可以的！
      // this.$store.state.counter++;

      console.log("increment!");
      this.$store.commit("increment");
    },

    incrementAsync() {
      console.log("incrementAsync!");
      this.$store.dispatch("incrementAsync");
    },

    decrement() {
      // this.$emit('updated', -1);

      // 直接改变也是可以的！
      // this.$store.state.counter--;
      console.log("decrement!");
      this.$store.commit("decrement");
    },

    // 传递单个参数
    incrementByStep() {
      console.log("incrementByStep!");
      this.$store.commit("incrementByStep", this.step);
    },

    // 传递多个参数
    incrementByStep2() {
      console.log("incrementByStep2!");

      this.$store.commit({
        type: "incrementByStep2", // mutation name
        amount: this.step2
      });
    },

    incrementByStepAsync2() {
      console.log("incrementByStepAsync2!");

      this.$store.dispatch({
        type: "incrementAsync2", // action name
        amount: this.step2
      });
    },

    testAction() {
      this.$store.dispatch("actionA").then(params => {
          console.log("action callback");
      });
    }
  }
};
</script>

<style scoped>
div {
  margin: 20px;
}
p {
  margin: 30px;
}
input {
  margin: 15px;
}
.counter {
  background-color: black;
}
</style>
