<style scoped lang="scss">
  .container {
    display: flex;
  }
</style>

<template>
  <div class="container">
    <LogoText></LogoText>
  </div>
</template>

<script>
  import LogoText from 'components/Logo/LogoText'

  export default {
    components: {
    	LogoText
    }
  }
</script>
