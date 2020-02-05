import Vue from 'vue'
import { Button, Pagination, Dialog, Loading, MessageBox, Message, Menu, Submenu, MenuItem, Input, Checkbox, Select, Option } from 'element-ui'
import '../styles/element-variables.scss'

Vue.prototype.$ELEMENT = { size: 'small', zIndex: 2000 }

Vue
  .use(Button)
  .use(Pagination)
  .use(Dialog)
  .use(Menu)
  .use(Submenu)
  .use(MenuItem)
  .use(Input)
  .use(Checkbox)
  .use(Select)
  .use(Option)

Vue.prototype.$loading = Loading.service
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message

