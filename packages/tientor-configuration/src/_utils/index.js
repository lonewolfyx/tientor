export const widthInstall = (app, widget) => {
    for (const key of Object.keys(widget)) {
        app.component(widget[key].name, widget[key]);
    }
}