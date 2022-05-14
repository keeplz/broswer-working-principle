import { Vuepress } from '@vuepress/client'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-20a5f90c","/guide/01.html",{"title":"01 | Chrome架构：仅仅打开了1个页面，为什么有4个进程？"},["/guide/01","/guide/01.md"]],
  ["v-225ad1ab","/guide/02.html",{"title":"02 | TCP协议：如何保证页面文件能被完整送达浏览器？"},["/guide/02","/guide/02.md"]],
  ["v-240faa4a","/guide/03.html",{"title":"03 | HTTP请求流程：为什么很多站点第二次打开速度会很快？"},["/guide/03","/guide/03.md"]],
  ["v-25c482e9","/guide/04.html",{"title":"04 | 导航流程：从输入URL到页面展示，这中间发生了什么？"},["/guide/04","/guide/04.md"]],
  ["v-27795b88","/guide/05.html",{"title":"05 | 渲染流程（上）：HTML、CSS和JavaScript，是如何变成页面的？"},["/guide/05","/guide/05.md"]],
  ["v-292e3427","/guide/06.html",{"title":"06 | 渲染流程（下）：HTML、CSS和JavaScript，是如何变成页面的？"},["/guide/06","/guide/06.md"]],
  ["v-2ae30cc6","/guide/07.html",{"title":"07 | 变量提升：JavaScript代码是按顺序执行的吗？"},["/guide/07","/guide/07.md"]],
  ["v-2c97e565","/guide/08.html",{"title":"08 | 调用栈：为什么JavaScript代码会出现栈溢出？"},["/guide/08","/guide/08.md"]],
  ["v-2e4cbe04","/guide/09.html",{"title":"09 | 块级作用域：var缺陷以及为什么要引入let和const？"},["/guide/09","/guide/09.md"]],
  ["v-53d75bae","/guide/10.html",{"title":"10 | 作用域链和闭包 ：代码中出现相同的变量，JavaScript引擎是如何选择的？"},["/guide/10","/guide/10.md"]],
  ["v-558c344d","/guide/11.html",{"title":"11 | this：从JavaScript执行上下文的视角讲清楚this"},["/guide/11","/guide/11.md"]],
  ["v-57410cec","/guide/12.html",{"title":"12 | 栈空间和堆空间：数据是如何存储的？"},["/guide/12","/guide/12.md"]],
  ["v-58f5e58b","/guide/13.html",{"title":"13 | 垃圾回收：垃圾数据是如何自动回收的？"},["/guide/13","/guide/13.md"]],
  ["v-5aaabe2a","/guide/14.html",{"title":"14 | 编译器和解释器：V8是如何执行一段JavaScript代码的？"},["/guide/14","/guide/14.md"]],
  ["v-77a9ffd9","/guide/intro.html",{"title":"开篇词 | 参透了浏览器的工作原理，你就能解决80%的前端难题"},["/guide/intro","/guide/intro.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: '404',
      path: '/:catchAll(.*)',
      component: Vuepress,
    }
  ]
)
