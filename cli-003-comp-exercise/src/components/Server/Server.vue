<template>
  <li 
    class="list-group-item"
    style="cursor: pointer" 
    v-on:click="sendStat"
    >Server #{{ server.id }}</li>
</template>

<script>
import { eventBus } from '../../main'

export default {
    props: ["server"],
    methods: {
        sendStat() {
            eventBus.sendServerInfo(this.server)
        }
    },

    created() {
        eventBus.$on("serverToNormal", (server) => {
            console.log("Server.vue, server to nomal: " + server.id);
            if (server.id === this.server.id) {
                this.server.status = server.status                
            }
        })
    },
}
</script>

<style>
</style>
