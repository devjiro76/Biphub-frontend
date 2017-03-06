<style scoped lang="scss">
  .sidebar {
    width: 160px;
  }
  .headbar {
    display: absolute;
    top: 0px;
    width: 100%;
  }
</style>

<template>
  <div class="page">
    <div is="HeadbarContainer"
        class="headbar" >
    </div>
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
import HeadbarContainer from 'containers/HeadbarContainer'

export default {
  created () {
    console.log('created Home')
  },
  components: {
    Counter,
    SidebarContainer,
    HeadbarContainer,
  },
  props: {
    test: { type: String, default: 'nothing!' }
  }
}
</script>
