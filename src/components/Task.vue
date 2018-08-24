<template>
    <div class="wrapper">
        <div class="wrapper-inner">
            <div class="title">{{title}}</div>
            <div class="desc">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Task',
        props: ['title']
    }
</script>

<style scoped lang="scss">
    .wrapper {
        --coefficient: 4.5;
        --height-line: 20px;

        display: flex;
        flex-direction: column;
        padding: 5px;
        width: calc(62px * var(--coefficient));
        height: calc(100px * var(--coefficient));
        border-radius: 5px;
        background-color: rgb(255, 255, 170);
        box-shadow: 0 0 0 rgba(12, 12, 8, 0);
        transform: scale(1);
        transition: box-shadow 200ms ease-out, transform 200ms 50ms ease-in;

        &:hover {
            box-shadow: 3px 3px 2px rgba(12, 12, 8, 0.4);
            transform: scale(1.01);
        }

        .wrapper-inner {
            padding: 15px;
            width: 100%;
            height: 100%;
            border-radius: 5px;
            background-color: rgba(255, 204, 0, .7);
        }
    }

    .title {
        margin-bottom: 10px;
        max-height: var(--height-line);
        font-size: var(--height-line);
        line-height: 100%;
        font-weight: 700;
    }

    .desc {
        flex-grow: 2;
        font-size: 16px;
        line-height: 20px;
    }
</style>