<template>
    <div class="dashboard">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>

export default {
    name: 'dashboard',
    data () {
        return {
            msg: 'This is your dashboard'
        }
    },
    methods : {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
