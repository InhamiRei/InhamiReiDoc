//侧边栏
// const autosidebar = require('vuepress-auto-sidebar-doumjun')
const { getChildren } = require("vuepress-sidebar-atuo");

module.exports = [
  {
    title: "更新日志",
    collapsable: true,
    children: [["/update/update_v1.x/", "v1.x版本"]],
  },
  {
    title: "JavaScript",
    collapsable: true,
    children: [
      ["/JavaScript/Array/", "Array方法"],
      ["/JavaScript/Math/", "Math方法"],
    ],
  },
  {
    title: "React",
    collapsable: true,
    children: [
      ["/React/LifeCycle/", "生命周期"],
      ["/React/ReactBasic/", "基础知识"],
      ["/React/ResponsiveAndData/", "响应式设计和数据的绑定"],
      ["/React/ComponentValue/", "组件之间传值"],
      ["/React/PropTypes/", "PropTypes校验传递值"],
      ["/React/UseRef/", "Ref的使用方法"],
      ["/React/Plug-in/", "附录1：SimpleReactSnippets插件"],
    ],
  },
  {
    title: "Redux",
    collapsable: true,
    children: [
      ["/Redux/StoreReducer/", "store和reducer"],
      ["/Redux/AddAndDelete/", "添加和删除方法"],
      ["/Redux/OrganizeDocuments/", "整理分离文件"],
      ["/Redux/IimportantPoints/", "常错的三点"],
    ],
  },
  {
    title: "VuePress",
    collapsable: true,
    children: [["/vuePress/stepPit/", "踩坑"]],
  },
  {
    title: "Vue-cli",
    collapsable: true,
    children: [["/vue-cli/environment/", "环境配置"]],
  },
  {
    title: "Git",
    collapsable: true,
    children: [
      ["/Git/GitCommon/", "基本指令"],
      ["/Git/GitOther/", "其他指令"],
      ["/Git/GitPractice/", "合作开发流程"],
    ],
  },
  {
    title: "MarkDown",
    collapsable: true,
    children: [
      ["/MarkDown/BaseUse/", "基本用法"],
      ["/MarkDown/VuePress/", "VuePress拓展"],
    ],
  },
  {
    title: "附录1：芋圆社区部署",
    collapsable: true,
    children: [
      ["/community/OutLine/", "部署前言"],
      ["/community/FinalShell/", "部署"],
      ["/community/Other/", "其他"],
    ],
  },
  {
    title: "附录2：面试题",
    collapsable: true,
    children: [
      ["/interview/1_OutLine/", "简单的面试题"],
      ["/interview/2_This/", "This指向"],
      ["/interview/3_FunctionNow/", "立即执行函数"],
      ["/interview/4_SomeEveryForEach/", "some,every,forEach"],
      ["/interview/5_BoxModel/", "盒子模型"],
      ["/interview/6_VerticalCenter/", "垂直居中方法"],
      ["/interview/7_Position/", "定位的种类"],
      ["/interview/8_CSSPriority/", "CSS优先级"],
      ["/interview/9_ClassPrototype/", "class继承和原型链"],
      ["/interview/10_BFC/", "BFC"],
      ["/interview/11_VariableType/", "JS变量类型"],
      ["/interview/12_CSSInherit/", "CSS中可继承与不可继承属性"],
      ["/interview/13_Closure/", "闭包"],
      ["/interview/14_Bind/", "bind函数"],
      ["/interview/15_Promise/", "promise"],
      ["/interview/16_AsyncAwaitPromise/", "async,await,promise"],
      ["/interview/17_Ajax/", "Ajax"],
      ["/interview/18_HTTPHTTPS/", "HTTP和HTTPS"],
    ],
  },
  {
    title: "附录3：算法题",
    collapsable: true,
    children: [
      ["/Algorithm/1_SumofNums/", "两数之和"],
      ["/Algorithm/2_ReverseList/", "反转链表"],
    ],
  },
  {
    title: "附录4：Emoji",
    collapsable: true,
    children: [
      ["/Emoji/1_Emoji/", "Emoji（1）"],
      ["/Emoji/2_Emoji/", "Emoji（2）"],
      ["/Emoji/3_Emoji/", "Emoji（3）"],
      ["/Emoji/4_Emoji/", "Emoji（4）"],
      ["/Emoji/5_Emoji/", "Emoji（5）"],
      ["/Emoji/6_Emoji/", "Emoji（6）"],
    ],
  },
];
