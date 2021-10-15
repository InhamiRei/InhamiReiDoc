//侧边栏
// const autosidebar = require('vuepress-auto-sidebar-doumjun')
const { getChildren } = require("vuepress-sidebar-atuo")

module.exports = [
    {
        title: "Vue-cli",
        collapsable: false,
        children: [
            ["/vue-cli/environment/", "环境配置"]
        ]
    },
    {
        title: "Git",
        collapsable: false,
        children: [
            ["/Git/GitCommon/", "基本指令"],
            ["/Git/GitOther/", "其他指令"],
            ["/Git/GitPractice/", "合作开发流程"]
        ]
    },
    {
        title: "更新日志",
        collapsable: false,
        children: [
            ["/update/update_2021/", "2021"]
        ]
    },
]