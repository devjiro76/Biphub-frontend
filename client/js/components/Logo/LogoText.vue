<template>
  <div class="component">
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

<style scoped lang="scss">
  @import "../../../styles/colour.scss"; // TODO: shorten this syntax
  .component {
    display: flex;
    background-color: $green;
    color: $white;
  }
</style>
