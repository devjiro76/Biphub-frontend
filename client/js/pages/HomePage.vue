<style scoped lang="scss">
  .navigation {
    width: 160px;
  }
</style>
<template>
  <div class="page">
    <div is="NavigationContainer"
         class="navigation" >

    </div>
    <div>

    </div>
  </div>
</template>

<script>
import Counter from 'components/Counter'
import NavigationContainer from 'containers/NavigationContainer'

export default {
	created() {
		console.log('created Home')
  },
  components: {
    Counter,
    NavigationContainer,
  },
  props: {
  	test: {type: String, default: 'nothing!'}
  }
}
</script>
