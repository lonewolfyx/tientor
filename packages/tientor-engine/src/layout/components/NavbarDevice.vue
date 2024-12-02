<template>
    <div class="navbar-device">
        <a-radio-group type="button" class="flex" v-model="device">
            <a-radio value="desktop">
                <SvgIcon name="desktop" className="w-[1.14rem] h-[1.14rem]"/>
            </a-radio>
            <a-radio value="mobile">
                <SvgIcon name="mobile" className="w-[1.14rem] h-[1.14rem]"/>
            </a-radio>
        </a-radio-group>
    </div>
</template>

<script setup>
import SvgIcon from "@/components/SvgIcon/SvgIcon.vue";
import {useConfigStore} from "@tientor/tientor-hooks";

defineOptions({
    name: 'NavbarDevice'
});

const {device} = toRefs(useConfigStore());

</script>

<style scoped lang="scss">
.navbar-device {
    @apply flex justify-center;
}
</style>