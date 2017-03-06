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
  import LogoText from 'components/LogoText'
  import UserProfile from 'components/UserProfile'

  export default {
    components: {
    	LogoText,
      UserProfile,
    }
  }
</script>
