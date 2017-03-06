<style scoped lang="scss">
  .sidebar {
    width: 160px;
  }
</style>
<template>
  <div class="page">
    <div is="SidebarContainer"
         class="sidebar" >
    </div>
    <div>
      test
    </div>
  </div>
</template>

<script>
import Counter from 'components/Counter'
import SidebarContainer from 'containers/SidebarContainer'

export default {
  created () {
    console.log('created Home')
  },
  components: {
    Counter,
    SidebarContainer,
  },
  props: {
    test: { type: String, default: 'nothing!' }
  }
}
</script>
