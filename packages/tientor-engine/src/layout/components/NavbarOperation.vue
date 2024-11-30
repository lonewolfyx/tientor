<template>
    <div class="navbar-operation">
        <a-space :size="15">
            <a-button size="mini" @click="clearWidget">
                <template #icon>
                    <SvgIcon name="clear" class-name="w-[0.857rem] h-[0.857rem] mr-1"/>
                </template>
                清空
            </a-button>
            <a-button size="mini" @click="reviewComponentRef.showWidgetReview()">
                <template #icon>
                    <SvgIcon name="code" class-name="w-[0.857rem] h-[0.857rem] mr-1"/>
                </template>
                预览
            </a-button>
            <a-button size="mini" type="primary">
                <template #icon>
                    <SvgIcon name="build" class-name="w-[0.857rem] h-[0.857rem] mr-1" color="#ffffff"/>
                </template>
                生成SFC
            </a-button>
            <a-tooltip content="看什么呢你！在看把源码给你啊，册佬" position="br">
                <a-avatar :size='30'>
                    <img
                        alt="avatar"
                        :src="GouTou"
                    />
                </a-avatar>
            </a-tooltip>
            <!-- https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813_oYdVBf4PAimDIpbGcAzgiCJtENerAA8oCA8AwO.jpeg -->
        </a-space>
    </div>
    <ReviewComponent ref="reviewComponentRef"/>
</template>

<script setup>
import SvgIcon from "@/components/SvgIcon/SvgIcon.vue";
import GouTou from '@/assets/image/avatar.webp'
import {useDesignerStore} from "@tientor/tientor-hooks";
import ReviewComponent from "@/components/Review/index.vue";

defineOptions({
    name: 'NavbarOperation'
})

const {clearWidget} = useDesignerStore()

const reviewComponentRef = useTemplateRef('reviewComponentRef')
</script>

<style scoped lang="scss">
.navbar-operation {
    @apply flex justify-end;
}
</style>