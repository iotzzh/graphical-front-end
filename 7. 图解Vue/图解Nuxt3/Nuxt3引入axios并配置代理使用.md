先引入axios
```yarn add axios```

创建实例方式：
```javascript
import axios from 'axios';

const service = axios.create({
    timeout: 300000 // 后端请求超时时间时9s, 所以前端默认10s，避免后端还没有断开，前端提前断开
});

service.interceptors.request.use(
    config => {
        const timestamp = new Date().getTime(); //时间戳           
        if (config.headers) {
            // config.headers['token'] = token;
            config.headers['Cache-Control'] = 'no-cache';
        }

        if (config.method === 'post') {
            config.params = {
                ts: timestamp,
            };
        } else if (config.method === 'get') {
            config.params = {
                ts: timestamp,
                ...config.params
            };
        }
        return config;
    },
    error => {
        console.log(error);
        return Promise.reject(error);
    }
);

service.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return response.data;
        } else {
            Promise.reject(response);
        }
    },
    error => {
        console.log(error);
        return Promise.reject(error);
    }
);
export default service;
```

使用方式：
```javascript
onMounted(async () => {
  const response = await Requst({ url: '/api/index.html', method: 'get' });
  console.log('response', response);
});
```

配置代理：
nuxt.config.ts
```javascript
  vite: {
    server: {
      proxy: {
        '/api': {
          target: 'https://h5api.zhefengle.cn',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    }
  },
```
