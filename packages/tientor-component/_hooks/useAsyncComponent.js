import {getUiComponents} from "../_utils/global-config.js";

export const useAsyncComponent = (componentName) => {
    const component = ref(null);

    onBeforeMount(async () => {
        component.value = await markRaw(getUiComponents(componentName));
        // component.value = await loadComponent(ui, componentName);
    });

    return component;
}