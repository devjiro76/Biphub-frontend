<template>
  <div>
    {{ text }}
  </div>
</template>

<script>
  export default {
  	props: {
  		text: {type: String, default: 'N/A'}
    }
  }
</script>

<style>
  .component {
    background-color: #22baa0;
  }
</style>
