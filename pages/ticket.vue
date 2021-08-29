<template>
  <div>
    <Header />
    <Content />
  </div>
</template>

<script>
import Header from '@/components/ticket/Header.vue'
import Content from '@/components/ticket/Content.vue'

export default {
  components: {
    Header,
    Content
  }
}
</script>
