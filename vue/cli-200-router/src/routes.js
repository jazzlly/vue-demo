import User from './components/user/User.vue';
import UserDetail from './components/user/UserDetail.vue';
import UserEdit from './components/user/UserEdit.vue';
import UserStart from './components/user/UserStart.vue';
import Home from './components/Home.vue';

export const routes = [
  { path: "", component: Home, name: "home"},     
  { path: "/user", component: User, name: "user",
    children: [
      {path: '', component: UserStart},     // 如果path添加了/， 会直接append到根url上
      {path: ':id', component: UserDetail, name: "userDetail"},     
      {path: ':id/edit', component: UserEdit, name: "userEdit"},
    ]
  },     
  

]