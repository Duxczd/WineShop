import Vue from 'vue'
import {
  Descriptions,
  DescriptionsItem,
  Drawer,
  Link,
  Cascader,
  Button,
  Form,
  FormItem,
  Input,
  Tooltip,
  TimePicker,
  TimeSelect,
  Progress,
  Popover,
  Steps,
  Step,
  Checkbox,
  Menu,
  Submenu,
  MenuItem,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Carousel,
  CarouselItem,
  InfiniteScroll,
  Loading,
  MessageBox,
  Message,
  Container,
  Header,
  Aside,
  Main,
  Table,
  TableColumn,
  Select,
  Option,
  OptionGroup,
  RadioGroup,
  RadioButton,
  Image,
  Tree,
  Upload,
  Pagination,
  Timeline,
  TimelineItem,
  Badge,
  CheckboxGroup,
  Radio,
  ColorPicker,
  DatePicker,
  Collapse,
  CollapseItem,
  Col,
  Row,
  TabPane,
  Dialog,
  Tabs,
  Tag,
  Switch,
  Breadcrumb,
  BreadcrumbItem,
  InputNumber,
  Empty,
  Autocomplete
} from 'element-ui'
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'
import Scrollbar from 'element-ui/lib/scrollbar'
Vue.component(CollapseTransition.name, CollapseTransition)

const components = [TimeSelect, Autocomplete, DescriptionsItem, Descriptions, Drawer, Link, Button, Cascader, Form, FormItem, Input, Breadcrumb, BreadcrumbItem, Tooltip, TimePicker, Progress, Popover, Steps, Step, Checkbox, Menu, Submenu, MenuItem, Dropdown, DropdownMenu, DropdownItem, InfiniteScroll, Carousel, CarouselItem, CheckboxGroup, Container, Header, Aside, Main, Scrollbar, Table, TableColumn, Select, Option, OptionGroup, RadioGroup, RadioButton, Image, Tree, Upload, Pagination, Timeline, TimelineItem, Badge, Radio, ColorPicker, DatePicker, Collapse, CollapseItem, Col, Row, TabPane, Dialog, Tabs, Tag, Switch, InputNumber, Empty]
components.forEach(v => Vue.use(v))
Vue.use(Loading.directive)
Vue.prototype.$loading = Loading.service
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = (options) => {
  if (options instanceof Object) {
    Message({
      ...options,
      duration: 1520
    })
  } else {
    Message({
      message: options,
      type: 'info',
      duration: 1520
    })
  }
}
Vue.prototype.$message.error = (options) => {
  Message({
    message: options,
    type: 'error',
    duration: 1520
  })
}
Vue.prototype.$message.success = (options) => {
  Message({
    message: options,
    type: 'success',
    duration: 1520
  })
}
Vue.prototype.$message.warning = (options) => {
  Message({
    message: options,
    type: 'warning',
    duration: 1520
  })
}
Vue.prototype.$message.info = (options) => {
  Message({
    message: options,
    type: 'info',
    duration: 1520
  })
}
