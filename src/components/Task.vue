<template>
    <div class="wrapper" v-bind:class="classObject">
        <div class="wrapper-inner" v-bind:class="classObject">
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
        props: ['title', 'priority', 'state'],
        computed: {
            classObject: function () {
                return {
                    active: this.state === 'Active',
                    done: this.state === 'Done',
                    urgent: this.priority === 'Urgent',
                    high: this.priority === 'High',
                    medium: this.priority === 'Medium',
                    low: this.priority === 'Low'
                }
            }
        }
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
        box-shadow: 0 0 0 rgba(12, 12, 8, 0);
        transform: scale(1);
        transition: box-shadow 200ms ease-out, transform 200ms 50ms ease-in;

        &:hover {
            box-shadow: 3px 3px 2px rgba(12, 12, 8, 0.4);
            transform: scale(1.01);
        }

        &.active {
            &.urgent {
                background-color: rgb(255, 255, 170);
            }

            &.high {
                background-color: rgb(198, 49, 177);
            }

            &.medium {
                background-color: rgb(173, 216, 230);
            }

            &.low {
                background-color: rgb(245, 245, 245);
            }
        }

        &.done {
            &.urgent {
                background-color: rgb(125, 125, 125);
            }

            &.high {
                background-color: rgb(150, 150, 150);
            }

            &.medium {
                background-color: rgb(175, 175, 175);
            }

            &.low {
                background-color: rgb(200, 200, 200);
            }
        }

        .wrapper-inner {
            padding: 15px;
            width: 100%;
            height: 100%;
            border-radius: 5px;

            &.active {
                &.urgent {
                    background-color : rgba(255, 204, 0, .7);
                }

                &.high {
                    background-color : rgba(100, 74, 119, .7);
                }

                &.medium {
                    background-color : rgba(119, 184, 218, .7);
                }

                &.low {
                    background-color : rgba(207, 215, 223, .7);
                }
            }

            &.done {
                &.urgent {
                    background-color: rgb(175, 175, 175);
                }

                &.high {
                    background-color: rgb(200, 200, 200);
                }

                &.medium {
                    background-color: rgb(225, 225, 225);
                }

                &.low {
                    background-color: rgb(250, 250, 250);
                }
            }
        }
    }

    .wrapper[priority] {
        background-color: rgb(255, 255, 170);
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