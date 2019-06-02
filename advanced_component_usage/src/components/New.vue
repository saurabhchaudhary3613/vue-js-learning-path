<template>
    <div>
        The New Quote..!
    </div>
</template>
<script>
export default {
    destroyed(){
        console.log('Dstroyed...');
    },
    deactivated() {
        console.log('Deactivated !');
    },
    activated() {
        console.log('Activated');
    }
}
</script>

<style scoped>
</style>


