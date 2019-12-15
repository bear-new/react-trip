import React from 'react';
import ReactDOM from 'react-dom';
import Router from './routers/index';
import { AppContainer } from 'react-hot-loader';

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('root')
    )
}

render(Router);

if (module.hot) {
    module.hot.accept('./routers/index', () => {
        render(Router);
    });
}

import runtime from 'serviceworker-webpack-plugin/lib/runtime';

if (navigator.serviceWorker) {
    console.log('浏览器支持Service Worker');

    navigator.serviceWorker.register('./service-worker.js')
        .then(reg => console.log('Service worker 已注册成功'))
        .catch(err => console.error('Service worker 注册失败'));
} else {
    console.log('不支持Service Worker');
}

// ReactDOM.render(
//     <div>
//         <h1>aegeanss</h1>
//         <Router />
//     </div>,
//     document.getElementById('root')
// )
