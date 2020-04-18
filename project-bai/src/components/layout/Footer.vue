<template>
    <div class="footer">
        Copyright &copy; {{ new Date().getFullYear() }}
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
    .footer {
        background: #333;
        color: #fff;
        text-align: center;
        padding: 5px;
        position: absolute;
        bottom: 0;
        width: 100%;
    }
    .footer a{
        color: #fff;
        padding-right: 5px;
    }
</style>