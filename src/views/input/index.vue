<template>
    <div class="inputPage">
        <input type="text" v-model="inputVal">
    </div>
</template>

<script>
export default {
    name: "inputPage",
    data() {
        return {
            inputVal: ``
        };
    },
    methods:{

    }
};
</script>

<style lang="scss" scoped>
.inputPage {
    width: 100vw;
    font-size: 0.3rem;
}
</style>