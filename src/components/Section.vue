<template>
    <div class="wrapper">
        <div class="title">{{title}}</div>
        <div class="task-wrapper">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Section.vue',
        props: ['title']
    }
</script>

<style scoped lang="scss">
    .wrapper {
        padding: 60px;

        .title {
            margin-bottom: 40px;
            font-size: 24px;
            font-weight: 700;
            line-height: 100%;
            letter-spacing: .15em;
        }

        .task-wrapper {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
    }
</style>