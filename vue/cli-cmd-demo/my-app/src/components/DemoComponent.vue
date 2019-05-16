<template>
  <div>
    {{msg}}
    <div>
      <input type="text" v-model="info">
      <button @click="handleClick">添加</button>
    </div>
    <ul>
      <!-- <todo-item v-for="item in list" :key="item"> -->
      <todo-item v-for="text in dataList">
        <!-- 父组件通过html将html模板传递到子组件中 -->
        <template v-slot:slotName="litem">
          <span :style="{fontSize: '20px', color: litem.checked ? 'blue' : 'red'}">{{text}}</span>
        </template>
      </todo-item>
    </ul>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
  name: "DemoComponent",
  components: {
    TodoItem
  },
  props: {
    msg: String
  },
  data() {
    return {
      info: "",
      dataList: []
    };
  },
  methods: {
    handleClick() {
      this.dataList.push(this.info);
      this.info = "";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
