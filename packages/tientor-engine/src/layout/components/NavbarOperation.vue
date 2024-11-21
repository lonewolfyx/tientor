<template>
    <div class="navbar-operation">
        <Space :size="15">
            <Button size="mini">
                <template #icon>
                    <SvgIcon name="clear" class-name="w-[0.857rem] h-[0.857rem] mr-1"/>
                </template>
                清空
            </Button>
            <Button size="mini">
                <template #icon>
                    <SvgIcon name="code" class-name="w-[0.857rem] h-[0.857rem] mr-1"/>
                </template>
                预览
            </Button>
            <Button size="mini" type="primary">
                <template #icon>
                    <SvgIcon name="build" class-name="w-[0.857rem] h-[0.857rem] mr-1" color="#ffffff"/>
                </template>
                生成SFC
            </Button>
            <Tooltip content="看什么呢你！在看把源码给你啊，册佬" position="br">
                <Avatar :size='30'>
                    <img
                        alt="avatar"
                        :src="GouTou"
                    />
                </Avatar>
            </Tooltip>
            <!-- https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813_oYdVBf4PAimDIpbGcAzgiCJtENerAA8oCA8AwO.jpeg -->
        </Space>
    </div>
</template>

<script setup>
import '@arco-design/web-vue/es/avatar/style/css.js'
import '@arco-design/web-vue/es/tooltip/style/css.js'
import '@arco-design/web-vue/es/button/style/css.js'
import '@arco-design/web-vue/es/space/style/css.js'
import {Avatar, Button, Space, Tooltip} from '@arco-design/web-vue'
import SvgIcon from "@/components/SvgIcon/SvgIcon.vue";
import GouTou from '@/assets/image/avatar.webp'

defineOptions({
    name: 'NavbarOperation'
})
</script>

<style scoped lang="scss">
.navbar-operation {
    @apply flex justify-end;
}
</style>