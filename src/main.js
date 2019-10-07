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
