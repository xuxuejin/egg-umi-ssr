// umi 运行时配置
// import { history } from 'umi';

// export function render(oldRender) {
//   // 覆写 render，比如渲染前做权限校验
//   fetch('/api/auth').then(auth => {
//     if (auth.isLogin) { oldRender() }
//     else { 
//       history.push('/login'); 
//       oldRender()
//     }
//   });
// }

// export function onRouteChange({ matchedRoutes }) {
//   if (matchedRoutes.length) {
//     document.title = matchedRoutes[matchedRoutes.length - 1].route.title || '图片集市';
//   }
// }