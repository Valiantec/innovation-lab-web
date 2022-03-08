<template>
  <AppTriView>
    <div class="panel">Contact Us
      <LoginPanel width="100px" height="100px"></LoginPanel>
    </div>
  </AppTriView>
</template>

<script>
import LoginPanel from '../components/LoginPanel.vue';
export default {
  components: {
    LoginPanel
  }
}
</script>