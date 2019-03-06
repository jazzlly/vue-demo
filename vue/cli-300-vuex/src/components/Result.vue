<template>
    <p>Counter is: {{ counter }}</p>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        // props: ['counter'],
        
        // computed: {
        //     counter() {
        //         return this.$store.state.counter;
        //     }
        // }   

        computed: mapState({
            counter: state => state.counter
        })
    }
</script>