<template>
<div>
    <div class="title">
        <slot name="title"></slot>
        <span>sasasa</span>
    </div>
    <hr>
    <div class="content">
        <slot name="content"></slot>
    </div>
</div>
</template>
<script>
export default {
    
}
</script>

<style scoped>
    div{
        border: 1px solid #ccc;
        margin: 30px auto;
        padding: 30px;
        box-shadow: 1px 1px 2px black;
        text-align: center;
    }
    .title {
        font-style: italic;
    }
</style>


