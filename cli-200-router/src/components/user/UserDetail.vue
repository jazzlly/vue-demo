<template>
    <div class="container">
        <h3>Some User Details</h3>
        <p>User id: {{ id }}</p>

        <!-- :to="'/user/' + $route.params.id + '/edit'" -->
        <router-link 
            tag="button"
            class="btn btn-primary"
         :to="{ name: 'userEdit', params: {id: $route.params.id}, query: { q1: 'foo', q2:'bar' }}"
         >
            Edit User
            </router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id,
        }
    },
}
</script>
