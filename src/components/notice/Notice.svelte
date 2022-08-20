<script lang="ts">
    // import { createEventDispatcher } from 'svelte';

    export let clickText: string = '我知道了';
    export let title: string = '';
    export let content: string = '';
    export let onClick: Function = () => {};

    // const dispatcher = createEventDispatcher()

    let nodeRef;
    const destroySelf = () => {
        nodeRef.parentNode.removeChild(nodeRef);
    };

    const onBtnClick = () => {
        onClick();
        destroySelf();
    };
</script>

<template>
    <div class="notice-modal" bind:this={nodeRef}>
        <div class="notice-modal-content">
            <div class="modal-content-body">
                <div class="modal-title">{title}</div>
                <div class="content">
                    <div>{content}</div>
                </div>
            </div>
            <div class="notice-button-wrap">
                <div class="modal-button centerLayout" on:click={onBtnClick}>{clickText}</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .notice-modal {
        z-index: 999;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        .notice-modal-content {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 290px;
            max-height: 80%;
            filter: blur(10);
            background: #F9F9F9;
            border-radius: 12px;

            .modal-content-body {
                box-sizing: border-box;
                margin-top: 0px;
                width: 100%;
                font-size: 16px;
                text-align: center;
                padding: 20px;

                .modal-title {
                    font-family: PingFangSC-Semibold;
                    font-size: 17px;
                    color: #000028;
                    font-weight: bold;
                    margin-bottom: 15px;
                }

                .content{
                    font-family: PingFangSC-Regular;
                    font-size: 14px;
                    color: #000028;
                    line-height: 1.5;
                    text-align: left;
                }
            }

            .notice-button-wrap {
                margin: 0 20px;
                margin-bottom: 20px;
                cursor: pointer;
                .modal-button {
                    height: 48px;
                    border-radius: 8px;
                    font-family: PingFangSC-Medium;
                    font-size: 14px;
                    color: #FFFFFF;
                    background: #FF6022;
                }
            }
        }
    }
</style>