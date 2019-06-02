<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <hr>
                <button @click="selectedComponent = 'app-quote'">Quote</button>
                <button @click="selectedComponent = 'app-author'">Author</button>
                <button @click="selectedComponent = 'app-new'">New</button>
                <hr>
                {{selectedComponent}}
                <keep-alive>
                    <component :is="selectedComponent">
                        <p>Default content</p>
                    </component>
                </keep-alive>
                <!-- <component :is="selectedComponent">
                    <p>Default content</p>
                </component> -->
               <!-- <app-quote>
                   <h2 slot="title">{{quoteTitle}}</h2>
                   <p slot="content">A Woonder full Quote !</p>
               </app-quote> -->

            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue';
    import Author from './components/Author.vue';
    import New from './components/New.vue';

    export default {
        data: function() {
            return{
                quoteTitle: 'My Quote !',
                selectedComponent: 'app-quote'
            }
        },
        components: {
            'app-quote': Quote,
            'app-author': Author,
            'app-new': New
        }
    }
</script>

<style>
</style>
