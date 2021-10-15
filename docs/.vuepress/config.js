const nav = require('./config/nav.js');
const sidebar = require('./config/sidebar.js');
module.exports = {
    title: '芋圆文档',
    description: '芋圆文档',
    base: "/",
    head: [
        ['link', {
            rel: 'icon',
            href: `/img/logo.png`
        }], ['meta', {
            name: 'keywords',
            content: '芋圆社区的附属文档'
        }]
    ],
    dest: './docs/.vuepress/dist',
    evergreen: true,
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    //导航菜单
    themeConfig: {
        logo: '/img/logo.png',
        nav,
        sidebar,
        //左侧菜单栏
        // 通过 themeConfig.sidebarDepth 来修改它的行为。默认的深度是 1，它将提取到 h2 的标题，设置成 0 将会禁用标题（headers）链接，同时，最大的深度为 2，它将同时提取 h2 和 h3 标题。
        sidebarDepth: 2,
        lastUpdated: '上次更新时间',
        startYear: '2021'
    },
}