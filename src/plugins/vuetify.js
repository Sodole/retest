import '@mdi/font/css/materialdesignicons.css';
import '@/styles/settings.scss';
import { createVuetify } from 'vuetify';
import { en, ko } from 'vuetify/locale';
import { md3 } from 'vuetify/blueprints';
import theme from './configs/theme';
import defaults from './configs/defaults';
import customKo from '@/locales/ko';
import customEn from '@/locales/en';

export default createVuetify({
  blueprint: md3,
  defaults,
  locale: {
    locale: 'ko',
    fallback: 'ko',
    messages: {
      ko: {
        ...ko,
        ...customKo,
      },
      en: {
        ...en,
        ...customEn,
      },
    },
  },
  theme,
});
