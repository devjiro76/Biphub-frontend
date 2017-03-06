<style>
	.label {

	}
</style>

<template>
  <div>
    <Icon></Icon>
    <div>{{ label }}</div>
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
