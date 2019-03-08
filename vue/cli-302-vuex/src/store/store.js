import Vue from 'vue';
import Vuex from 'vuex';
// import mocha from 'mocha';
// import chai from 'chai';

// https://scrimba.com/playlist/pnyzgAP

Vue.use(Vuex);

const moduleA = {
  state: {
    count: 3
  },
  // 这里使用的本地的state
  mutations: {
    increment(state) {
      state.count++
    }
  },
  // 这里使用的本地的state
  getters: {
    doubleCount(state) {
      return state.count * 2
    }
  },
  actions: {

  }
}

const moduleB = {

  namespaced: true, // 仅仅会过滤namespace的mutation
  modules: {
    subModule: {
      state: {

      },
      mutations: {

      },
      getters: {

      },
      actions: {

      }
    }
  },

  state: {
    count: 8
  },
  mutations: {
    increment(state) {
      state.count++
    }
  },
  getters: {

  },
  actions: {

  }
}

export const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  },

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
    ],
    products: [{
        id: 1,
        title: 'Apple',
        category: 'fruit'
      },
      {
        id: 2,
        title: 'Orange',
        category: 'fruit'
      },
      {
        id: 3,
        title: 'Carrot',
        category: 'vegetable'
      }
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
    },
    someOtherMutation(state, msg) {
      console.log(`someOtherMutation: ${msg}`);
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

    // 两种写法:
    // {commit} === {commit: commit}
    // 实际上传入的是一个context对象，context === {commit: xxx, dispatch: xxx}
    decrement({
      commit
    }) {
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

    actionA({
      commit
    }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('decrement')
          resolve()
        }, 1000)
      })
    },

    // {dispatch,commit}
    // 实际上传入的是一个context对象，context === {commit: xxx, dispatch: xxx}
    actionB({
      dispatch,
      commit
    }) {
      return dispatch('actionA').then(() => {
        commit('someOtherMutation', "actionA done!")
      })
    },

    /*
    async actionC({
      commit
    }) {
      commit('gotData', await getData())
    },
    async actionD({
      dispatch,
      commit
    }) {
      await dispatch('actionC')
      commit('gotOtherData', await getOtherData())
    }
    */
  }
})

// console.log(store.getters.doneTodos);
// console.log(store.getters.doneTodosCount);
console.log(store.getters.getTodoById(2));

// 访问不同module的state!
console.log(`count in moudle A: ${store.state.a.count}`);
console.log(`count in moudle B: ${store.state.b.count}`);
console.log(`count in main store: ${store.state.counter}`);

// 使用module的mutation
store.commit("increment")
console.log('after commit increment!');
console.log(`count in moudle A: ${store.state.a.count}`); // 增加了1
console.log(`count in moudle B: ${store.state.b.count}`);
console.log(`count in main store: ${store.state.counter}`); // 增加了1
//相同名称的mutation会从module中popup到主store中

store.commit("b/increment")
console.log('after commit b/increment!');
console.log(`count in moudle A: ${store.state.a.count}`);
console.log(`count in moudle B: ${store.state.b.count}`); // namespace b中count增加了
console.log(`count in main store: ${store.state.counter}`);


// Testing
/*
mocha.setup('bdd');
let assert = chai.assert;
let expect = chai.expect;

mocha.run();
*/