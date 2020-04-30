<template>
    <div class="footer">
        <div class="container">
        Copyright &copy; {{ new Date().getFullYear() }}
        </div>
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
        color: rgb(75, 72, 72);
        text-align: center;
        padding: 5px;
        bottom: 0;
        width: 100%;
    }
    .footer a{
        color: #fff;
        padding-right: 5px;
    }
</style>