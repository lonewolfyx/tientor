<template>
    这是第一个组件
    <input type="text" placeholder="hahhah"/>
</template>

<script setup>
import {getUiFramework} from "../_utils/global-config.js";

defineOptions({
    name: 'TientorInput'
});

getUiFramework()

</script>
