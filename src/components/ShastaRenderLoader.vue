<template>

    <div id="ShastaRenderLoader" class="ShastaRenderLoader">
        <div class="spinner">
            <div class="loader-circle-1"></div>
            <div class="loader-circle-2"></div>
            <div class="loader-circle-3"></div>
        </div>
    </div>

</template>

<script>
export default {

}
</script>

<style scoped>
    #ShastaRenderLoader {
        /* --primary-color: #fff; */
        --primary-color: #bada55;
        /* --secondary-color: #bada55; */
        --secondary-color: #333;
    }

    body, html {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        background: var(--secondary-color);
        font-size: 10px;
        display: flex;
        justify-content: center;
        align-content: center;
        flex-wrap: wrap;
    }

    * {
        box-sizing: border-box;

    }

    .ShastaRenderLoader {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }

    .spinner {
        position: relative;
        width: 10rem;
        height: 10rem;
    }

    .loader-circle-1 {
        position: absolute;
        top: 0.5rem;
        left: 0.5rem;
        width: 9rem;
        height: 9rem;
        border-radius: 50%;
        border: solid 0.3rem var(--secondary-color);
        border-right: var(--primary-color) 0.3rem solid;
        animation: spinner 1.5s infinite;
    }
    
    .loader-circle-2 {
        position: absolute;
        top: 1.5rem;
        left: 1.5rem;
        width: 7rem;
        height: 7rem;
        border-radius: 50%;
        border: solid 0.3rem var(--secondary-color);
        border-right: var(--primary-color) 0.3rem solid;
        animation: spinner 1.5s 100ms infinite;
    }

    .loader-circle-3 {
        position: absolute;
        top: 2.5rem;
        left: 2.5rem;
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        border: solid 0.3rem var(--secondary-color);
        border-right: var(--primary-color) 0.3rem solid;
        animation: spinner 1.5s 150ms infinite;
    }

    @keyframes spinner {
        0% {
            transform: rotate(0)
        }
        100% {
            transform: rotate(360deg)
        }
    }
</style>