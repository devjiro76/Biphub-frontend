<style scoped lang="scss">
  @import '../../../styles/colour.scss'; // TODO: shorten this syntax
  @import '../../../styles/size.scss';

  .component {
    display: flex;
    justify-content: center;
    background-color: $bg--green;
    color: $font--white;
    width: 100%;
    min-height: 50px;
  }
  .logo-text {
    align-self: center;
    font-size: $fsize--md;
  }
</style>

<template>
  <div class="component">
    <span class="logo-text">
      {{ text }}
    </span>
  </div>
</template>

<script>
  export default {
  	props: {
  		text: {type: String, default: 'N/A'}
    }
  }
</script>
