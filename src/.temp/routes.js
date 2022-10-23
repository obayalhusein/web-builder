const c1 = () => import(/* webpackChunkName: "page--src--pages--setup--store-category-vue" */ "/Users/makane/Desktop/web-builder/src/pages/setup/StoreCategory.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--setup--store-name-vue" */ "/Users/makane/Desktop/web-builder/src/pages/setup/StoreName.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--setup--store-package-vue" */ "/Users/makane/Desktop/web-builder/src/pages/setup/StorePackage.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--setup--store-theme-vue" */ "/Users/makane/Desktop/web-builder/src/pages/setup/StoreTheme.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--dashboard--index-vue" */ "/Users/makane/Desktop/web-builder/src/pages/dashboard/Index.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/makane/Desktop/web-builder/src/pages/About.vue")
const c7 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/makane/Desktop/web-builder/node_modules/gridsome/app/pages/404.vue")
const c8 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/makane/Desktop/web-builder/src/pages/Index.vue")

export default [
  {
    path: "/setup/store-category/",
    component: c1
  },
  {
    path: "/setup/store-name/",
    component: c2
  },
  {
    path: "/setup/store-package/",
    component: c3
  },
  {
    path: "/setup/store-theme/",
    component: c4
  },
  {
    path: "/dashboard/",
    component: c5
  },
  {
    path: "/about/",
    component: c6
  },
  {
    name: "404",
    path: "/404/",
    component: c7
  },
  {
    name: "home",
    path: "/",
    component: c8
  },
  {
    name: "*",
    path: "*",
    component: c7
  }
]
