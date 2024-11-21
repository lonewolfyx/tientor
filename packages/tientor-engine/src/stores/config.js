export const useConfigStore = defineStore('config', () => {
    const config = ref({})

    const setConfig = (newConfig) => {
        config.value = newConfig
    }

    return {
        config,
        setConfig
    }
})