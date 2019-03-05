<template>
    <div>
        <div class="title">
            <slot name=title></slot>
            <!-- 如果parent没有传递subtitle, 则显示默认title -->
            <span style="color: #aaa; font-size: 20px">
                <slot name="subtitle">The Subtitle!</slot>
            </span>
        </div>

        <div class="content">
            <slot name="content"></slot>
        </div>

        <div class="default">
            <slot></slot>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            
        }
    },
    
}
</script>

<style scoped>
    div {
        padding: 30px;
        border: 3px;
        box-shadow: 3px;
        text-align: center;
    }

    .title {
        color: aqua;
        font-size: 30px;
    }
    .content {
        font-style: italic;
        color: coral;
    }
    .default {
        font-style: oblique;
        color: darkkhaki;
    }
</style>

