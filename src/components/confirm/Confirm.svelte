<script lang="ts">
    // import { createEventDispatcher } from 'svelte';

    export let title: string = '';
    export let content: string = '';
    export let cancelText: string = '取消';
    export let okText: string = '确定';
    export let onCancel: Function = () => {};
    export let onOk: Function = () => {};


    // const dispatcher = createEventDispatcher();

    let nodeRef;
    const destroySelf = () => {
        nodeRef.parentNode.removeChild(nodeRef);
    };
    const onOkClk = () => {
        onOk();
        // dispatcher('onOk');
        destroySelf();
    };

    const onCancelClk = () => {
        onCancel();
        // dispatcher('onCancel');
        destroySelf();
    };
</script>

<template>
    <div class="confirm-modal" bind:this={nodeRef}>
        <div class="confirm-modal-content">
            <div class="modal-content-body">
                <div class="modal-title">{title}</div>
                <div class="content">
                    <div>{content}</div>
                </div>
            </div>
            <div class="confirm-button-wrap">
                <div class="btn button-left centerLayout" on:click="{onCancelClk}">{cancelText}</div>
                <div class="btn button-right centerLayout" on:click="{onOkClk}">{okText}</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .confirm-modal {
        z-index: 999;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        .confirm-modal-content {
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

            .confirm-button-wrap{
                margin: 0 20px;
                margin-bottom: 20px;
                display: flex;
                justify-content: space-between;
                .btn{
                    width: 121px;
                    height: 48px;
                    border-radius: 8px;
                    font-family: PingFangSC-Medium;
                    font-size: 14px;
                }
                .button-left{
                    color: #848494;
                    background: #FFFFFF;
                    border: 0.5px solid #E5E6EE;
                }
                .button-right{
                    color: #FFFFFF;
                    background: #FF6022;
                }
            }
        }
    }
</style>