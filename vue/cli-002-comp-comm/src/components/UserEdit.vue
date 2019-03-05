<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>User age: {{ userAge }}</p>
        <button @click="editAge()">Edit Age</button>
    </div>
</template>

<script>

import { eventBus }  from '../main'

export default {
    data() {
        return {
            userAge: 28,
        }
    },
    methods: {
        editAge() {
            this.userAge = 30;
            // this.$emit('ageChanged', this.userAge) // fixme: not working

            // 向eventBus发送事件, 直接emit事件，或是调用eventBus的函数都可以
            // eventBus.$emit('ageChanged', this.userAge)  // option 1
            eventBus.changeAge(this.userAge)                // option 2
        }
    },
}
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
