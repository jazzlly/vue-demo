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
        <app-user-detail v-bind:cname="name" v-on:nameWasReset="name = $event"></app-user-detail>
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit></app-user-edit>
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
      name: "Max"
    };
  },
  methods: {
    changeName() {
      this.name = "Anna";
    },

    nameChange() {
      threadId;
    }
  }
};
</script>

<style scoped>
div {
  background-color: lightblue;
}
</style>
