<template>
  <div class="page">
    <counter></counter>
    <p>
      To get started, edit files in <code>./client</code> and save.
      <NavigationContainer></NavigationContainer>
    </p>
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
