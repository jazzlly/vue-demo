<template>
  <div>
    <p>Counter is: {{ counter }}</p>
    <p>counterAlias is: {{ counterAlias }}</p>
    <p>storePlusLocal is: {{ storePlusLocal }}</p>

    <p>Done Todo count: {{ doneTodosCount }}</p>

    <p>All todos:</p>
    <ul>
      <li v-for="todo in todosAll">{{ todo.id + "," + todo.text + "," + todo.done }}</li>
    </ul>

    <p>Done todos:</p>
    <ul>
      <li v-for="todo in doneTodos">{{ todo.id + "," + todo.text + "," + todo.done }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";

export default {
  // props: ['counter'],

  data() {
    return {
      localCount: 4
    };
  },

  // computed: {
  //     counter() {
  //         return this.$store.state.counter;
  //     }
  // }


  // 和上面的counter函数等效！
  
  computed: mapState({
      counter: state => state.counter,
      counterAlias: "counter",
      storePlusLocal(state) {
        return state.counter + this.localCount;
      },
      todosAll: state => state.todos,
      todos: getters => getters.doneTodos,
      doneTodos(state) {
        return this.$store.getters.doneTodos;
      }
    }),
  
    // ...mapGetters(["doneTodos", "doneTodosCount", "getTodoById"]),


  // 另外更简洁的写法
  //   computed: mapState([
  //       'counter'
  //   ])
};
</script>