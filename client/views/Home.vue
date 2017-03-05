<template>
  <div class="page">
    <counter></counter>
    <p>
      To get started, edit files in <code>./client</code> and save.
    </p>
  </div>
</template>

<script>
import Counter from 'components/Counter'

export default {
	created() {
		console.log('created Home')
  },
  components: {
    Counter,
    Navigation,
  },
  props: {
  	test: {type: String, default: 'nothing!'}
  }
}
</script>
