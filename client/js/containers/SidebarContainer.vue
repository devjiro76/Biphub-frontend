<style scoped lang="scss">
  .container {
  }
</style>

<template>
  <div class="container">
    <LogoText></LogoText>
    <UserProfile photo="/static/profile-menu-image.png"
                 name="jason"
                 role="developer"
    ></UserProfile>
    test
  </div>
</template>

<script>
  import LogoText from 'components/LogoText'
  import UserProfile from 'components/UserProfile'
  import MenuItem from 'components/MenuItem'

  export default {
    components: {
      LogoText,
      UserProfile,
      MenuItem,
    }
  }
</script>
