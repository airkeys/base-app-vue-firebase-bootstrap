<template>
    <div class="not-found">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
export default {
    name: 'not-found',
    data () {
        return {
            msg: 'The page you are looking for does not exist!'
        }
    }
}
</script>
