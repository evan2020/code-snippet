<template>
    <div class="index"><el-button type="primary" plain>主要按钮</el-button></div>
</template>

<script>
export default {
    name: "index",
    data() {
        return {};
    }
};
</script>

<style lang="scss" scoped>
.index {
    width: 100vw;
    height: 100vh;
    font-size: 0.3rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
</style>
