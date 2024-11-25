<template>
    <a-radio-group class="grid-cols-2 gap-4 mb-5" style="display: grid !important;">
        <template v-for="item in 4" :key="item">
            <a-radio :value="item" style="margin: 0 !important;padding: 0!important;">
                <template #radio="{ checked }">
                    {{checked}}
                    <a-space
                        align="start"
                        class="radio-card"
                        :class="{ 'radio-card-checked': checked }"
                    >
                        <div class="radio-card-mask">
                            <div class="radio-card-mask-dot"/>
                        </div>
                        <div>
                            <div class="radio-card-title">
                                radio Card {{ item }}
                            </div>
                            <a-typography-text type="secondary">
                                this is a text
                            </a-typography-text>
                        </div>
                    </a-space>
                </template>
            </a-radio>
        </template>
    </a-radio-group>
</template>

<script setup>
defineOptions({
    name: 'UiDesign'
})
</script>

<style scoped lang="scss">
.radio-card {
    @apply w-full rounded;
    border: 1px solid var(--color-border-2);

    &.radio-card-checked {
        border-color: rgb(var(--primary-6));
    }

    .radio-card-mask {
        @apply inline-flex items-center justify-center box-border;
        border-radius: 100%;
        border: 1px solid var(--color-border-2);

        .radio-card-mask-dot {
            @apply w-2 h-2;
            border-radius: 100%;
        }
    }

    .radio-card-title {
        @apply text-sm mb-2;
        color: var(--color-text-1);
    }
}

//.custom-radio-card {
//    padding: 10px 16px;
//    border: 1px solid var(--color-border-2);
//    border-radius: 4px;
//    width: 250px;
//    box-sizing: border-box;
//
//    .custom-radio-card-mask {
//        height: 14px;
//        width: 14px;
//        display: inline-flex;
//        align-items: center;
//        justify-content: center;
//        border-radius: 100%;
//        border: 1px solid var(--color-border-2);
//        box-sizing: border-box;
//
//        .custom-radio-card-mask-dot {
//            width: 8px;
//            height: 8px;
//            border-radius: 100%;
//        }
//
//    }
//
//    .custom-radio-card-title {
//        color: var(--color-text-1);
//        font-size: 14px;
//        font-weight: bold;
//        margin-bottom: 8px;
//    }
//
//
//}

//.custom-radio-card:hover,
//.custom-radio-card-checked,
//.custom-radio-card:hover .custom-radio-card-mask,
//.custom-radio-card-checked .custom-radio-card-mask {
//    border-color: rgb(var(--primary-6));
//}
//
//.custom-radio-card-checked {
//    background-color: var(--color-primary-light-1);
//}
//
//.custom-radio-card:hover .custom-radio-card-title,
//.custom-radio-card-checked .custom-radio-card-title {
//    color: rgb(var(--primary-6));
//}
//
//.custom-radio-card-checked .custom-radio-card-mask-dot {
//    background-color: rgb(var(--primary-6));
//}

</style>