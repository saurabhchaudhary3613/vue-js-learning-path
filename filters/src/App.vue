<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>{{ text | toUppercase}}</p>
                <input type="text" v-model="filtertext">
                <ul>
                    <li v-for="(fruit, index) in filteredfruits" :key="index">
                        {{ fruit }}
                    </li>
                </ul>
                <hr>
                <app-list></app-list>
            </div>
        </div>
    </div>
</template>

<script>
import FruitList from './List.vue';
import { fruitMixin } from './FruitMixin';

    export default {
        data() {
            return {
                text: 'Hello there !'
            }
        },
        filters: {
            toUppercase(value) {
                return value.toUpperCase();
            }
        },
        components: {
            appList: FruitList
        },
        mixins: [fruitMixin]
    }
</script>

<style>

</style>
