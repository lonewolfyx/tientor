<template>
    <section class="tientor-workbench">
        <section class="tientor-sidebar">
            <Sidebar/>
        </section>
        <section class="tientor-render">
<!--            <WidgetRender/>-->
        </section>
        <section class="tientor-config">
            <FormConfiguration/>
        </section>
    </section>
</template>

<script setup>
import Sidebar from "@/views/build/component/Sidebar/index.vue";
import WidgetRender from "@/views/build/component/WidgetRender/index.vue";
import FormConfiguration from "@/views/build/component/FormConfiguration/index.vue";

const {sss} = defineProps(['sss'])
</script>

<style scoped lang="scss">
.tientor-workbench {
    @apply relative overflow-hidden w-full grid box-border;
    grid-template-columns: 1fr 3fr 1fr;
    height: calc(100vh - var(--header-height));

    .tientor-sidebar,
    .tientor-config {
        @apply relative box-border overflow-hidden overflow-y-auto w-full h-full bg-white;
    }

    .tientor-render {
        @apply relative box-border p-3 overflow-hidden;
    }

}
</style>