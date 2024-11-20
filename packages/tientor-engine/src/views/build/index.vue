<template>
    <section class="tientor-workbench">
        <section class="tientor-sidebar">
            <Sidebar/>
        </section>
        <section class="tientor-render"></section>
        <section class="tientor-config"></section>
    </section>
</template>

<script setup>
import Sidebar from "@/components/Sidebar/index.vue";

const {sss} = defineProps(['sss'])
</script>

<style scoped lang="scss">
.tientor-workbench {
    @apply relative overflow-hidden w-full h-full grid box-border;
    grid-template-columns: 1fr 3fr 1fr;

    .tientor-sidebar,
    .tientor-config {
        @apply relative box-border overflow-hidden overflow-y-auto w-full h-full bg-white;
    }

    .tientor-render {
        @apply relative box-border ;
    }

}
</style>