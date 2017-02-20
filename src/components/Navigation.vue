<template>
<nav class="navbar navbar-toggleable-md navbar-inverse bg-inverse">
  <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <router-link class="navbar-brand" to="/">Squares</router-link>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link class="nav-link" to="/about">About <span class="sr-only">(current)</span></router-link>
      </li>
    </ul>
    <div class="navbar-nav nav-item">
        <router-link class="nav-link" to="/login">Login</router-link>
    </div>
  </div>
</nav>
</template>

<script>
export default {
    name: 'navigation',
    data () {
        return {
        }
    }
}
</script>
