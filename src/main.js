import React from 'react';
import ReactDOM from 'react-dom';
import Router from './routers/index'

ReactDOM.render(
    <div>
        <h1>aegeanss</h1>
        <Router />
    </div>,
    document.getElementById('root')
)

if (module.hot) {
    module.hot.accept(() => {
        // 一行代码都没有...
    });
}
