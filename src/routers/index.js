import Vue from 'vue'
import Router from 'vue-router'
import movieRouter from './movie'
import mineRouter from './mine'
import cinemaRouter from './cinema'
import NProgress from "nprogress"; //加载条
import "nprogress/nprogress.css"; //加载条样式
Vue.use(Router)

const appRouter = new Router({
  mode: 'hash',
  //base: process.env.BASE_URL,
  base:'jeasonDemo',
  routes: [
    movieRouter,
    mineRouter,
    cinemaRouter,
    {
      path : '/*',
      redirect : '/movie'
    }
  ]
});

// eslint-disable-next-line
appRouter.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

// eslint-disable-next-line
appRouter.afterEach((to, from) => {
  NProgress.done();
});

export default appRouter;
