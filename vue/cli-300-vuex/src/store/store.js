import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 100,

    todos: [{
        id: 1,
        text: '...',
        done: true
      },
      {
        id: 2,
        text: '...',
        done: false
      },
    ]
  },

  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done);
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    },
    getTodoById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id)
    }
  },

  mutations: {
    // 函数名称叫"type"
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    incrementByStep(state, step) {
      state.counter += Number(step)
    },
    incrementByStep2(state, payload) {
      state.counter += Number(payload.amount)
    }
  },

  // mutation是同步的操作, action可以提供异步操作
  // 例如： 异步从服务器获取数据，获取后提交到mutation
  actions: {

    // 两种写法
    incrementAsync(context) {
      setTimeout(() => {
        context.commit('increment')
      }, 1000);
    },

    // 两种写法
    decrement({commit}) {
      commit('decrement')
    },

    incrementAsync2(context, payload) {
      setTimeout(() => {
        context.commit({
          type: 'incrementByStep2',
          amount: payload.amount
        })
      }, 1000);
    },

    actionA ({ commit }) {
      return new Promise((resolve, reject) => {
          setTimeout(() => {
              commit('decrement')
              resolve()
          }, 1000)
      })
  }
  }
})

// console.log(store.getters.doneTodos);
// console.log(store.getters.doneTodosCount);
console.log(store.getters.getTodoById(2));