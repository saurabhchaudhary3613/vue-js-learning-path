<template>
    <div>
        <button class="btn btn-primary" @click="asyncIncrement({by: 15, duration: 500})">Increment</button>
        <button class="btn btn-primary" @click="asyncDecrement({by: 10, duration: 500})">Decrement</button>
    </div>
</template>

<script>
    // import { mapMutations } from 'vuex';
    import { mapActions } from 'vuex';
    export default {
        methods: {
            ...mapActions([
                'asyncIncrement',
                'asyncDecrement'
            ])
        }
    }
</script>