import { defineStore } from 'pinia';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useLocale } from 'vuetify';

export default defineStore('menu', () => {
  const MENUS = [
    {
      id: 1,
      level: 1,
      key: 'about',
      children: [
        {
          id: 101,
          level: 2,
          key: 'about',
          name: 'About',
          icon: 'mdi-information',
        },
        {
          id: 102,
          level: 2,
          key: 'customer',
          name: 'Customer',
          icon: 'mdi-map',
          scrollTo: '#location-section',
        },
        // {
        //   id: 103,
        //   level: 2,
        //   key: 'history',
        //   name: 'Timeline',
        //   icon: 'mdi-timeline-text',
        // },
        {
          id: 104,
          level: 2,
          key: 'news',
          name: 'List',
          icon: 'mdi-information',
        },
      ],
    },
    {
      id: 2,
      level: 1,
      key: 'introduce',
      children: [
        {
          id: 201,
          level: 2,
          key: 'product',
          name: 'Product',
          icon: 'mdi-code-braces-box',
        },
        {
          id: 202,
          level: 2,
          key: 'solution',
          name: 'Solution',
          icon: 'mdi-lightbulb-on',
        },
        {
          id: 203,
          level: 2,
          key: 'application',
          name: 'Application',
          icon: 'mdi-lightbulb-on',
        },
        // {
        //   id: 203,
        //   level: 2,
        //   key: 'hardware',
        //   name: 'Hardware',
        //   icon: 'mdi-expansion-card',
        // },
      ],
    },
    // {
    //   id: 3,
    //   level: 1,
    //   key: 'application',
    //   name: 'Application',
    // },
    {
      id: 4,
      level: 1,
      key: 'support',
      children: [
        {
          id: 401,
          level: 2,
          key: 'download',
          name: 'Download',
          icon: 'mdi-download-box',
        },
        {
          id: 402,
          level: 2,
          key: 'question',
          name: 'Question',
          icon: 'mdi-help-rhombus',
        },
      ],
    },
    {
      id: 5,
      level: 1,
      key: 'education',
      children: [
        {
          id: 501,
          level: 2,
          key: 'schedule',
          name: 'Schedule',
          icon: 'mdi-calendar-today',
        },
        {
          id: 502,
          level: 2,
          key: 'classroom',
          name: 'Classroom',
          icon: 'mdi-clipboard-edit',
        },
        {
          id: 503,
          level: 2,
          key: 'announcement',
          name: 'Announcement',
          icon: 'mdi-help-rhombus',
        },
      ],
    },
  ];

  const route = useRoute();
  const locale = useLocale();
  const breadcrumbs = computed(() => {
    const result = [locale.t('$vuetify.header.navigationMenu.home')];

    MENUS.forEach((menu) => {
      if (menu.name === route.name) {
        result.push({
          title: locale.t(`$vuetify.header.navigationMenu.${menu.key}`),
        });
      }

      if (menu?.children) {
        menu.children.forEach((child) => {
          if (route.name.includes(child.name)) {
            result.push(
              {
                title: locale.t(`$vuetify.header.navigationMenu.${menu.key}`),
              },
              {
                title: locale.t(`$vuetify.header.navigationMenu.${child.key}`),
              },
            );
          }
        });
      }
    });

    return result;
  });

  return {
    MENUS,
    breadcrumbs,
  };
});
