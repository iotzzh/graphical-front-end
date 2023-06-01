在nuxt.config.ts添加配置：
```json
app: { head: { link: [ { rel: 'icon', type: "image/x-icon", href: '/static/favicon.ico'} ] } },
```

nuxt.config.ts配置如下：
```json
import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // modules
  // modules: [["@nuxtjs/axios", { proxyHeaders: false }]],
  // publicRuntimeConfig
  publicRuntimeConfig: {
    title: '测试标题'
    // axios: {
    //   baseURL:
    //     process.env.NODE_ENV === "production"
    //       ? "/api"
    //       : "http://localhost:3000/api",
    // },
  },
  app: { head: { link: [{ rel: 'icon', type: "image/x-icon", href: '/static/favicon.ico' }] } },

  vite: {
    server: {
      proxy: {
        '/api': {
          target: 'https://h5api.zhefengle.cn', // 芝姐
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    }
  },
})
```