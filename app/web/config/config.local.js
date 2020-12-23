export default {
  // 仅在 dev 时生效
  proxy: {
    '/api': {
      target: 'https://bird.ioliu.cn/',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/',
      },
    },
  },
  define: {
    'process.env.axiosBaseURL': 'http://127.0.0.1:8000/api'
  },
}
