<template>
  <div>
  <!-- <li class="item">{{item}}</li> -->
  <li class="item">
    <input type="checkbox" v-model="checked">
    <slot name="slotName" v-bind="{checked}"></slot>
  </li>
  </div>
</template>

<script>
export default {
  props: ["item"],
  data() {
    return {
      checked: true
    }
  },
}
</script>

<style scoped>
.item {
  color: red;
}
</style>
