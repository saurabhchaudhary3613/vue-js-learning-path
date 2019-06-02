<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{myName}}----{{ switchName() }}</p>
        <p>User Age: {{userAge}}</p>
        <button @click="resetName">Reset Name</button>
        <button @click="resetFn()">Reset Name</button>

    </div>
</template>

<script>
    import { eventBus } from '../main';
    export default {
        props: {
            myName: String,
            resetFn: Function,
            userAge: Number
        },
        methods: {
            switchName() {
                return this.myName.split('').reverse().join('');
            },
            resetName() {
                this.myName = 'Sachin';
                this.$emit('nameWasReset', this.myName);
            }
        },
        created() {
            eventBus.$on('ageWasEdited', (data) => {
                console.log('data', data);
                this.userAge = data;
            });
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
