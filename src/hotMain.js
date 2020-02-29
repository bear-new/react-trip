// import component from './component';
// let demoComponent = component();
// document.body.appendChild(demoComponent);

//HMR 接口
if (module.hot) {
    module.hot.accept('./main', () => {
        render(Router);
    })
}