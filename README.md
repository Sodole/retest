# saintife

## Project setup

```
폴더 이동 ex) cd /home/sainti/..
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

## Sainti Project Customize configuration

### connet Gitlab

```
폴더 이동
git init(pre_setting username, email commit)
git remote add origin https://gitlab.com/sodol/saintife.git
git branch -M main
git pull
```

### git pull & git push

```
git branch -M [main/branch]
git pull

git add .
git commit -m "commit 내용"
git push [origin main]
```

### eslint, prettier 설정(참조 : https://univdev.page/posts/eslint-prettier-installation/)

```
# eslint 설정
vue create project-name 생성 => eslint 자동 연결
.yarn eslint --init(node 버전 문제로 설치가 안되는 모듈 있음)
.추가 eslintrc.js 내용 작성 => extends에 prettier 포함시키기

# prettier 설정
eslint와 Prettier 충돌을 방지하기 위해
yarn add --dev eslint-config-prettier설치

=> VScode extention eslint, prettier 설치
```

### eslint & prettier enable시 troubleShootings

```
VScode Packge.json Open

## 아래의 내용 추가
"eslint.validate": ["vue", "javascript", "javascriptreact"],
"eslint.workingDirectories": [
// 보통 이렇게 디렉토리 설정을 안해서 자동고침이 안된다
{
    "mode": "auto"
}
],
"editor.codeActionsOnSave": {
"source.fixAll.eslint": true // eslint
},
// formatter
"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.formatOnSave": true,
"editor.formatOnPaste": true,
"editor.formatOnType": true
```

### vue-router 설치

```
yarn add vue-router@4

router 폴더 생성 => index.js 파일생성
index.js에서 vue-router 호출
// index.js 파일
import { createRouter, createWebHistory } from 'vue-router';
const router = createRouter({
  history: createWebHistory(''),
  routes: [{
      path: '/',
      name: 'main',
      component: () => import('@/components/main.vue'),
    }],
});
export default router;

이후 main.js에서 미들웨어로 router 사용

// main.js파일  *router설정
import router from "./router"
createApp(App).use(router).mount('#app')
```

### vue-router eslint useCase troubleShootings

```
VScode Packge.json Open

## [vue/no-multiple-template-root] error 발생시
eslintrc.cjs 파일 내 rule 추가
rules: {"vue/no-multiple-template-root": "off" }

## [import/prefer-default-export] error 발생시
eslintrc.cjs 파일 내 rule 추가
rules: {"import/prefer-default-export": "off" }
```

### pinia 설치

```
yarn add pinia
pinia 미들웨어로 사용

//main.js 파일  *pinia설정
import { createPinia } from 'pinia';
const pinia = createPinia();
app.use(pinia).use(router).mount('#app');
```

### i18n 설치

```
yarn add i18n@9
```
