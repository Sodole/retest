import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import LoginView from '@/views/LoginView.vue';
import JoinView from '@/views/JoinView.vue';
import TimelineView from '@/views/TimelineView.vue';
import ProductView from '@/views/ProductView.vue';
import ProductSmIoServerView from '@/views/ProductSmIoServerView.vue';
import ProductSmwpView from '@/views/ProductSmwpView.vue';
import SolutionView from '@/views/SolutionView.vue';
import SolutionSm2sView from '@/views/SolutionSm2sView.vue';
import SolutionSmHaccpView from '@/views/SolutionSmHaccpView.vue';
import SolutionSmFarmView from '@/views/SolutionSmFarmView.vue';
import ProductQlikSenseView from '@/views/ProductQlikSenseView.vue';
import ProductFactoryIOView from '@/views/ProductFactoryIOView.vue';
import HardwareView from '@/views/HardwareView.vue';
import ApplicationView from '@/views/ApplicationView.vue';
import SupportDownloadView from '@/views/SupportDownloadView.vue';
import SupportQuestionView from '@/views/SupportQuestionView.vue';
import EducationScheduleView from '@/views/EducationScheduleView.vue';
import EducationClassroomView from '@/views/EducationClassroomView.vue';
import EducationClassroomListView from '@/views/EducationClassroomListView.vue';
import EducationClassroomDetailView from '@/views/EducationClassroomDetailView.vue';
import EducationClassroomEditView from '@/views/EducationClassroomEditView.vue';
import ProductWebEQView from '@/views/ProductWebEQView.vue';
import ProjectPracView from '@/views/ProjectPracView.vue';
import MainView from '@/test/MainView.vue';
import AnnouncementView from '@/views/AnnouncementView.vue';
import NewsListView from '@/test/NewsListView.vue';
import AboutView from '@/test/AboutView.vue';
import ServiceFormView from '@/test/SmwpFormView.vue';
import WebeqFormView from '@/test/WebeqFormView.vue';
import NewsView from '@/test/NewsView.vue';
import NewsDetailView from '@/test/NewsDetailView.vue';
import NewsEditView from '@/test/NewsEditView.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    // component: HomeView,
    component: MainView,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
  },
  {
    path: '/join',
    name: 'Join',
    component: JoinView,
  },
  {
    path: '/timeline',
    name: 'Timeline',
    component: TimelineView,
  },
  {
    path: '/customer',
    name: 'Customer',
    component: TimelineView,
  },

  {
    path: '/news',
    name: 'News',
    component: NewsView,
    redirect: {
      name: 'News',
    },
    children: [
      {
        path: 'list',
        name: 'List',
        component: NewsListView,
      },
      {
        path: 'edit',
        name: 'NewsWrite',
        component: NewsEditView,
      },
      {
        path: 'edit/:id',
        name: 'NewsEdit',
        component: NewsEditView,
        props: true,
      },
      {
        path: ':id',
        name: 'NewsDetail',
        component: NewsDetailView,
        props: true,
      },
    ],
  },
  {
    path: '/service',
    children: [
      {
        path: 'product',
        name: 'Product',
        component: ProductView,
        redirect: {
          name: 'ProductWebEQ',
        },
        children: [
          {
            path: '/application',
            name: 'Application',
            component: ApplicationView,
          },
          {
            path: 'prac',
            name: 'ProjectPracView',
            component: ProjectPracView,
          },
          {
            path: 'web-eq',
            name: 'ProductWebEQ',
            component: ProductWebEQView,
          },
          {
            path: 'sm-io-server',
            name: 'ProductSmIoServer',
            component: ProductSmIoServerView,
          },
          {
            path: 'smwp',
            name: 'ProductSmwp',
            component: ProductSmwpView,
          },
          {
            path: 'twiz',
            name: 'ProductTwiz',
            // component: ProductSmwpView,
          },
          // {
          //   path: 'qlik-sense',
          //   name: 'ProductQlikSense',
          //   component: ProductQlikSenseView,
          // },
          // {
          //   path: 'facktoryIO',
          //   name: 'ProductFactoryIO',
          //   component: ProductFactoryIOView,
          // },
        ],
      },
      {
        path: 'solution',
        name: 'Solution',
        component: SolutionView,
        redirect: {
          name: 'SolutionSmHaccp',
        },
        children: [
          {
            path: 'sm-2s',
            name: 'SolutionSm2s',
            component: SolutionSm2sView,
          },
          {
            path: 'sm-haccp',
            name: 'SolutionSmHaccp',
            component: SolutionSmHaccpView,
          },
          {
            path: 'sm-farm',
            name: 'SolutionSmFarm',
            component: SolutionSmFarmView,
          },
          {
            path: 'sm-farm',
            name: 'SolutionSmGmp',
            // component: SolutionSmFarmView,
          },
        ],
      },
      {
        path: 'hardware',
        name: 'Hardware',
        component: HardwareView,
      },
    ],
  },
  {
    path: '/application',
    name: 'Application',
    component: ApplicationView,
  },

  {
    path: '/support',
    redirect: {
      name: 'Download',
    },
    children: [
      {
        path: 'download',
        name: 'Download',
        component: SupportDownloadView,
      },
      {
        path: 'question',
        name: 'Question',
        component: SupportQuestionView,
      },
      {
        path: 'smwpForm',
        name: 'SmwpForm',
        component: ServiceFormView,
      },
      {
        path: 'webeqForm',
        name: 'WebeqForm',
        component: WebeqFormView,
      },
    ],
  },

  {
    path: '/education',
    redirect: {
      name: 'Schedule',
    },
    children: [
      {
        path: 'schedule',
        name: 'Schedule',
        component: EducationScheduleView,
      },
      {
        path: 'announcement',
        name: 'Announcement',
        component: AnnouncementView,
      },
      {
        path: 'classroom',
        name: 'Classroom',
        component: EducationClassroomView,
        redirect: {
          name: 'ClassroomList',
        },
        children: [
          {
            path: 'list',
            name: 'ClassroomList',
            component: EducationClassroomListView,
          },
          {
            path: 'edit',
            name: 'ClassroomWrite',
            component: EducationClassroomEditView,
          },
          {
            path: 'edit/:id',
            name: 'ClassroomEdit',
            component: EducationClassroomEditView,
            props: true,
          },
          {
            path: ':id',
            name: 'ClassroomDetail',
            component: EducationClassroomDetailView,
            props: true,
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior: (to) => {
    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            el: to.hash,
            top: 64,
            behavior: 'smooth',
          });
        }, 150);
      });
    }
    return { top: 0, behavior: 'smooth' };
  },
});

// eslint-disable-next-line no-unused-vars
// router.beforeEach((to, _from, next) => {
//   const { role } = useUser();

//   // 미완성페이지 가드
//   if (
//     role !== 'admin' &&
//     import.meta.env.PROD &&
//     import { NewsView } from '@/test/NewsView.vue';
//to.fullimport { NewsView } from '@/tesst/NewsView.vue';
//Path ==import { WebEQFormView } from '@/test/WebEQFormView.vue';
//= '/service/hardware' || to.fullPath.includes('education');
//   ) {
//     const { popupSnackbar } = useToast();
//     popupSnackbar('warning', '준비 중인 서비스입니다');
//     next(false);
//   } else {
//     next();
//   }
// });

export default router;
