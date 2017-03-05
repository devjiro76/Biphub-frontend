<template>
  <div class="page">
    <counter></counter>
    <p>
      To get started, edit files in <code>./client</code> and save.
      yea
      {{ test }}
    </p>
  </div>
</template>

<script>
import Counter from 'components/Counter'

export default {
  components: {
    Counter
  },
  props: {
  	test: {type: String, default: 'nothing!'}
  }
}
</script>
