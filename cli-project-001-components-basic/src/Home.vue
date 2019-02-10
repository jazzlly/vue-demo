<template>
  <!-- 所有的element都必须在一个div下面 -->
  <div>
    <app-server-status v-for="(server, index) in 5" :key="index"></app-server-status>
  </div>
</template>

<script>

// fixme: import写在export的外面
import ServerStatus from './ServerStatus.vue'

export default {

    components: {
        'app-server-status': ServerStatus
    }
}
</script>