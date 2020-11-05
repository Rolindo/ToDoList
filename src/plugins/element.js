import Vue from 'vue'

import {
    Checkbox,
    Notification,
    Select,
    Option,
    Button,
    Form,
    FormItem,
    Input,
    Message,
    Container,
    Aside,
    Main,
    Tree,
    Header,
    Footer,
    Menu,
    MenuItem,
    Submenu,
    Breadcrumb,
    BreadcrumbItem,
    Card,
    Row,
    Col,
    Table,
    Tag,
    TableColumn,
    Switch,
    Tooltip,
    Pagination,
    Dialog,
    MessageBox
} from 'element-ui'

Vue.use(Checkbox)
Vue.use(Button)
Vue.use(Tag)
Vue.use(Pagination)
Vue.use(Switch)
Vue.use(Dialog)
Vue.use(Row)
Vue.use(Tooltip)
Vue.use(Col)
Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Tree)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)


Vue.prototype.$message = Message
Vue.prototype.$notify = Notification
Vue.prototype.$confirm = MessageBox.confirm