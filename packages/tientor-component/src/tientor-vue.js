import Input from './components/input/index.js';

const components = {
    Input
};

const install = (app, options) => {
    console.log(options)
    for (const key of Object.keys(components)) {
        console.log(key)
        app.use(components[key], options);
    }
};

const TientorVue = {
    ...components,
    install
}
export default TientorVue;