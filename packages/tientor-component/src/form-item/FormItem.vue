<template>
    <!--    {{ $attrs }}-->
    <!-- 表单 form-item -->
    <!--    {{ currentWidget.id === $attrs.widget.id ? '相同' : '不相同' }}-->
    <div class="widget-items">
        <div
            class="widget-item-body"
            :class="currentWidget?.id === $attrs.widget.id ? 'active' : ''"
            @click="updateCurrentWidget($attrs.widget)"
        >
            <component :is="FormItemComponent" v-bind="$attrs.widget._itemProps[ui]" v-if="$attrs.widget.enabled[ui]">
                <!-- 对应表单控件 -->
                <component
                    :is="FormWidgetComponent"
                    v-bind="$attrs.widget._widgetProp[ui]"
                    v-model="$attrs.widget._widgetProp[ui]['defaultValue']"
                />
            </component>
        </div>
        <div
            class="widget-action-box"
            :class="{
                active: currentWidget?.id === $attrs.widget.id,
                once: firstWidget.id === $attrs.widget.id
            }"
        >
            <div class="widget-actin-item">
                <span class="common"><icon-common class="mr-1"/>{{ $attrs.widget.name }}</span>
                <span class="copy" @click="copyWidget($attrs.widget)"><icon-copy/></span>
                <span class="delete" @click="deleteWidget($attrs.widget)"><icon-delete/></span>
            </div>
        </div>
    </div>
</template>

<script setup>
import '../assets/tailwindcss.css';
import {getUiComponent} from "../utils/utils.js";
import {useDesignerStore} from '@tientor/tientor-hooks'

defineOptions({
    name: 'TientorFormItem'
})

const {ui, currentWidget} = defineProps(['ui', 'currentWidget'])
const {widget} = useAttrs();

// form 表单项
const FormItemComponent = computed(() => getUiComponent('formItem'))
// form 表单控件
const FormWidgetComponent = computed(() => getUiComponent(widget?.tag));

const {updateCurrentWidget, firstWidget, copyWidget, deleteWidget} = toRefs(useDesignerStore());


</script>

<style scoped lang="scss">
.widget-items {
    @apply relative box-border;

    .widget-item-body {
        @apply relative w-full h-auto overflow-hidden border border-dotted border-transparent rounded cursor-grab z-[31];

        &::after {
            @apply absolute inset-0 w-full h-full;
            content: ' ';
        }

        &:hover {
            border-color: rgb(var(--primary-6));
        }

        &.active {
            border-color: rgb(var(--primary-6));
            @apply border-solid;
        }
    }

    .widget-action-box {
        @apply absolute top-[-20px] left-1.5 cursor-pointer hidden text-white z-[111];

        .widget-actin-item {
            @apply flex items-center justify-center;

            > span {
                background: rgb(var(--primary-6));
                padding: 2px 7px;

                @apply flex items-center justify-center text-sm mr-2.5 h-6 rounded-t-md;
            }
        }

        &.active {
            @apply block;
        }

        &.once {
            @apply z-[33] bottom-[-20px] top-auto;

            .widget-actin-item > span {
                @apply rounded-t-none rounded-b-md;
            }
        }
    }
}
</style>