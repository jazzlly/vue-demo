<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>I'm an awesome User!</p>
    <button @click="changeName()">Change my name!</button>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <!-- 将parent component中的name传递到child中 -->
        <!-- 从语法角度来看 cname是child component的一个attribute-->
        <app-user-detail
          v-bind:cname="name"
          v-bind:userAge="age"
          v-on:nameWasReset="name = $event"
          v-on:resetFn="resetNameCb"
        ></app-user-detail>
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit
         :userAge="age"
         v-on:ageChanged="age = $event"></app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
import UserDetail from "./UserDetail.vue";
import UserEdit from "./UserEdit.vue";

export default {
  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit
  },
  data() {
    return {
      name: "Max",
      age: 28
    };
  },
  methods: {
    changeName() {
      console.log("name changed: " + this.name);
      this.name = "Anna";
    },
    resetNameCb() {
      this.name = "Max";
    }
  }
};
</script>

<style scoped>
div {
  background-color: lightblue;
}
</style>
