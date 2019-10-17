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

// ReactDOM.render(
//     <div>
//         <h1>aegeanss</h1>
//         <Router />
//     </div>,
//     document.getElementById('root')
// )
