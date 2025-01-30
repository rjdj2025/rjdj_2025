<script>
import BaseLayout from './BaseLayout.vue'
  
export default {
  components: {
    BaseLayout
  },
  data() {
    return {
      slotProps: 'slot content'
    }
  }
}
</script>

<template>
  <BaseLayout>
    <template #header>
      <h1>Here might be a page title</h1>
    </template>

    <template #default>
      <p>A paragraph for the main content.</p>
      <p>And another one.</p>
    </template>

    <template #footer>
      <p>Here's some contact info</p>
    </template>

    <template #content slot-scope="slotProps">
      <h1> {{ slotProps }}</h1>
    </template>
  </BaseLayout>
</template>