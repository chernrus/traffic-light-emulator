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
      props: {
        lightNumber: 1,
        startTime: 10
      },
      component: TrafficLight,
    },
    {
      path: '/2',
      name: 'Yellow signal',
      props: {
        lightNumber: 2,
        startTime: 3
      },
      component: TrafficLight
    },
    {
      path: '/3',
      name: 'Green signal',
      props: {
        lightNumber: 3,
        startTime: 15
      },
      component: TrafficLight
    }
  ]
});
