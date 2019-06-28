<template>
    <div>      
        <input type="text" v-model="filtertext">
        <ul>
            <li v-for="(fruit, index) in filteredfruits" :key="index">
                {{ fruit }}
            </li>
        </ul>
    </div>
</template>

<script>
import { fruitMixin } from './FruitMixin';

    export default {
        mixins: [fruitMixin]
    }
</script>

<style>

</style>
