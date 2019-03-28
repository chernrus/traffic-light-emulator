import Vue from 'vue';
import VueRouter from 'vue-router';
import TrafficLight from '@/components/TrafficLight';
import NotFound from '@/components/NotFound';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/2'
    },
    {
      path: '*', 
      component: NotFound
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
