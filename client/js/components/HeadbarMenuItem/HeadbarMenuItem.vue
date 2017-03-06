<style scoped lang="scss" src="./HeadbarMenuItem.scss"></style>

<template>
  <div>
    <Icon></Icon>
    No nono
  </div>
</template>

<script>
  import Icon from 'components/Icon'
  export default {
    components: {
      Icon,
    },
    props: {
      label: { type: String, default: null, },
    }
  }
</script>
