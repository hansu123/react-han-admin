const menuList =
  [

    { key: "/home", title: "首页", path: "/home",icon:"home" },

    {
      key: "/ui", title: "UI", icon:"ant-design",children: [
        { key: "/ui/button", path: "/ui/button", title: "button"}, { key: "/ui/tab", path: "/ui/tab", title: "tab" }
      ]
    },

    { key: "/user", path: "/user", title: "用户",icon:"user" },
    {
      key: "/article", title: "文章",icon:"book", children: [
    { key: "/article/articleList", path: "/article/articleList", title: "文章列表" }, { key: "/article/articleAdd", path: "/article/articleAdd", title: "添加文章" }
      ]
    },
    {
      key: "/chart", title: "图表", icon:"bar-chart",children: [
        { key: "/chart/bar", path: "/chart/bar", title: "柱状图" }, { key: "/chart/pie", path: "/chart/pie", title: "饼图" }
      ]
    },
    {
      key: "/role", title: "角色",icon:"team", children: [
        { key: "/role/manage", path: "/role/manage", title: "权限管理" }, { key: "/role/organize", path: "/role/organize", title: "组织架构" }
      ]
    },

  ]

export default menuList
