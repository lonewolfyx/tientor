<template>
    <a-radio-group class="grid-cols-1 gap-4 mb-5" style="display: grid !important;" v-model="ui">
        <template v-for="item in uiDesign" :key="item">
            <a-radio :value="item.value" style="margin: 0 !important;padding: 0!important;">
                <template #radio="{ checked }">
                    <a-space
                        align="start"
                        class="radio-card"
                        :class="{ 'radio-card-checked': checked }"
                    >
                        <div class="radio-card-mask">
                            <div class="radio-card-mask-dot"/>
                        </div>
                        <div>
                            <span class="radio-card-title">{{ item.label }}</span>
                            <a-typography-text type="secondary" class="text-sm font-normal">{{
                                    item.description
                                }}
                            </a-typography-text>
                        </div>
                    </a-space>
                </template>
            </a-radio>
        </template>
    </a-radio-group>
</template>

<script setup>
import {useConfigStore} from "@/stores/config.js";

defineOptions({
    name: 'UiDesign'
})

const uiDesign = reactive([
    {
        label: 'Element Plus',
        value: 'element',
        description: '来自于由饿了么团队开发的 Vue3 Ui 组件库',
        checkbox: true
    },
    {
        label: 'Ant Design Vue',
        value: 'antv',
        description: '来自于 Antd 社区团队开发的 Vue 版本组件库',
        checkbox: false
    },
    {
        label: 'Arco Design Vue',
        value: 'arco',
        description: '来自于字节团队开发的 Vue3 Ui 组件库',
        checkbox: false
    },
])

const {ui} = toRefs(useConfigStore())
</script>

<style scoped lang="scss">
.radio-card {
    @apply w-full rounded box-border border border-solid px-6 py-3;
    //padding: 10px 16px;
    //border: 1px solid var(--color-border-2);
    border-color: var(--color-border-2);

    .radio-card-mask {
        @apply flex items-center justify-center rounded-full box-border border border-solid w-6 h-6 mt-1;
        border-color: var(--color-border-2);

        .radio-card-mask-dot {
            @apply w-2 h-2 rounded-2xl;
        }
    }

    .radio-card-title {
        @apply block text-base font-bold;
    }

    &:hover {
        border-color: rgb(var(--primary-6));

        .radio-card-mask {
            border-color: rgb(var(--primary-6));
        }

        .radio-card-title {
            color: rgb(var(--primary-6));
        }
    }

    &.radio-card-checked {
        background-color: var(--color-primary-light-1);
        border-color: rgb(var(--primary-6));

        .radio-card-mask {
            border-color: rgb(var(--primary-6));

            .radio-card-mask-dot {
                background-color: rgb(var(--primary-6));
            }
        }

        .radio-card-title {
            color: rgb(var(--primary-6));
        }
    }
}
</style>