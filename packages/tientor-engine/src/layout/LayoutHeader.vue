<template>
    <div class="tientor-header">
        <div class="navbar-logo">
            <img alt="logo" :src="Logo" class="w-10">
            <div class="divider"></div>
            <div>
                懒人一位
            </div>
        </div>
        <div class="navbar-device">PC｜Mobile</div>
        <div class="navbar-operation">
            <div class="avatar">
                <span class="avatar-image">
                    <img
                        alt="avatar"
                        src="https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813_oYdVBf4PAimDIpbGcAzgiCJtENerAA8oCA8AwO.jpeg"/>
                </span>

            </div>
        </div>
    </div>
</template>

<script setup>
import Logo from '@/assets/image/logo.svg';

defineOptions({
    name: 'LayoutHeader'
})
</script>

<style scoped lang="scss">
.tientor-header {
    @apply relative box-border bg-zinc-800 text-slate-100 w-full flex items-center justify-between px-4 p-1.5;
    height: var(--header-height);

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

    .navbar-operation {
        @apply flex;

        .avatar {
            @apply relative inline-flex items-center box-border text-white align-middle whitespace-normal text-base w-8 h-8;

            .avatar-image {
                @apply inline-block overflow-hidden w-full h-full rounded-full shadow-lg;

                img {
                    @apply w-full h-full;
                }
            }
        }
    }
}
</style>