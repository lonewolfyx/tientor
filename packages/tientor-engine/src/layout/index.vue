<template>
    <section class="tientor-container">
        <LayoutHeader/>
        <main class="tientor-body-container">
            <router-view v-slot="{ Component, route }">
                <transition name="fade-transform" mode="out-in">
                    <keep-alive>
                        <component :is="Component" :key="route.path" :sss="route"/>
                    </keep-alive>
                </transition>
            </router-view>
        </main>
    </section>
</template>

<script setup>
import LayoutHeader from "@/layout/LayoutHeader.vue";
</script>

<style scoped>

</style>