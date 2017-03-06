<style scoped lang="scss">
  @import '../../styles/size.scss';
  @import '../../styles/padding.scss';
  .container {
    width: 100%;
    min-height: 60px;  // TODO: Static value is not good. Revise this
  }
  .container-pad {
    padding: $pd--lg;
  }
  .photo {
    border-radius: 50%;
  }
  .photo-image {
    border-radius: 50%;
  }
  .name {
    font-size: $fsize--mss;
  }
  .role {
    font-size: $fsize--sm;
  }
</style>

<template>
  <div class="container">

    <div class="container-pad">
      <div class="photo"
           v-if="enablePhoto && photo">
        <img v-bind:src="photo"
             class="photo-image">
      </div>

      <div class="name"
           v-if="enableName">
        {{ name }}
      </div>

      <div class="role"
           v-if="enableRole">
        {{ role }}
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    props: {
    	photo: { type: String, default: '', },
    	name: { type: String, default: 'N/A', },
    	role: { type: String, default: 'N/A', },
      enablePhoto: { type: Boolean, default: true, },
      enableName: { type: Boolean, default: true, },
      enableRole: { type: Boolean, default: true, },
    }
  }
</script>
