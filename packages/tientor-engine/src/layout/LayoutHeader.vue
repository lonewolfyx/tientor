<template>
    <div class="tientor-header">
        <div class="navbar-logo">
            <img alt="logo" :src="Logo" class="w-10">
            <div class="divider"></div>
            <div>
                懒人一位
            </div>
        </div>
        <NavbarDevice/>
        <NavbarOperation/>
    </div>
</template>

<script setup>
import Logo from '@/assets/image/logo.svg';
import NavbarOperation from "@/layout/components/NavbarOperation.vue";
import NavbarDevice from "@/layout/components/NavbarDevice.vue";

defineOptions({
    name: 'LayoutHeader'
})
</script>

<style scoped lang="scss">
//:deep(.arco-radio-button) {
//    @apply flex;
//}
//
//:deep(.arco-radio-button-content) {
//    @apply flex items-center;
//}

.tientor-header {
    @apply relative box-border bg-zinc-800 text-slate-100 w-full grid items-center justify-between px-4 p-1.5;
    height: var(--header-height);
    grid-template-columns: 1fr 3fr 1fr;

    .navbar-logo {
        @apply flex items-center;

        .divider {
            @apply inline-block my-0 mx-3 align-middle;
            min-width: 1px;
            max-width: 1px;
            min-height: 1em;
            border-left: 1px solid rgb(229, 230, 235);
        }
    }

}
</style>