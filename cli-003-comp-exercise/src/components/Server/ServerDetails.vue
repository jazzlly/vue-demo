<template>
  <div class="col-xs-12 col-sm-6">
    <p v-if="!server">Server Details are currently not updated</p>
    <div v-else>
      <p>Server #{{ server.id }}</p>
      <p>Server staus: {{ server.status }}</p>
    </div>
    <button v-on:click="serverToNormal()">Normal</button>
  </div>
</template>

<script>
import { eventBus } from "../../main";
export default {
  data() {
    return {
      server: null
    };
  },
  methods: {
    serverToNormal() {
      if (this.server != null) {
        this.server.status = "Normal";  // 直接修改了全局变量
        // eventBus.$emit("serverToNormal", this.server);
      }
    }
  },

  created() {
    eventBus.$on("sendServerInfo", server => {
      this.server = server;
    });
  }
};
</script>

<style>
</style>
