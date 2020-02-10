<template>

 
  <router-view></router-view>

</template>

<script>
const URL = process.env.VUE_APP_URL
window.console.log(URL);

export default {
  
name:'app'
}
</script>

<style>

</style>