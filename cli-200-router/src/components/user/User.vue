<template>
  <div>
    <h1>The User Page</h1>
    <hr>
    <h3>{{ username }} </h3>
    <button type="button" class="btn btn-primary" v-on:click="navToHome">Go Home</button>
    <button type="button" class="btn btn-primary" @click="goBack">Go Back</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  computed: {
    username() {
      // 我们很快就会看到 `params` 是什么
      return this.$route.params.username;
    }
  },
  methods: {
    navToHome() {
      this.$router.push({ name: "home" });
    },

    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    }
  }
};
</script>
