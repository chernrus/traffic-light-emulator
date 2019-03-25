import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/components/Home';
import TrafficLight from '@/components/TrafficLight';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/1',
      name: 'Red signal',
      props: { a: 1 },
      component: TrafficLight,
    },
    {
      path: '/2',
      name: 'Yellow signal',
      props: { a: 2 },
      component: TrafficLight
    },
    {
      path: '/3',
      name: 'Green signal',
      props: { a: 3 },
      component: TrafficLight
    }
  ]
});
