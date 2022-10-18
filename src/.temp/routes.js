const c1 = () => import(/* webpackChunkName: "page--src--pages--dashboard--index-vue" */ "/Users/makane/Desktop/web-builder/src/pages/dashboard/Index.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/makane/Desktop/web-builder/src/pages/About.vue")
const c3 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/makane/Desktop/web-builder/node_modules/gridsome/app/pages/404.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/makane/Desktop/web-builder/src/pages/Index.vue")

export default [
  {
    path: "/dashboard/",
    component: c1
  },
  {
    path: "/about/",
    component: c2
  },
  {
    name: "404",
    path: "/404/",
    component: c3
  },
  {
    name: "home",
    path: "/",
    component: c4
  },
  {
    name: "*",
    path: "*",
    component: c3
  }
]
