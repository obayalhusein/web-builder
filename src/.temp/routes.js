const c1 = () => import(/* webpackChunkName: "page--src--pages--select-plan-vue" */ "/Users/makane/Desktop/web-builder/src/pages/SelectPlan.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--dashboard--index-vue" */ "/Users/makane/Desktop/web-builder/src/pages/dashboard/Index.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/makane/Desktop/web-builder/src/pages/About.vue")
const c4 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/makane/Desktop/web-builder/node_modules/gridsome/app/pages/404.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/makane/Desktop/web-builder/src/pages/Index.vue")

export default [
  {
    path: "/select-plan/",
    component: c1
  },
  {
    path: "/dashboard/",
    component: c2
  },
  {
    path: "/about/",
    component: c3
  },
  {
    name: "404",
    path: "/404/",
    component: c4
  },
  {
    name: "home",
    path: "/",
    component: c5
  },
  {
    name: "*",
    path: "*",
    component: c4
  }
]
