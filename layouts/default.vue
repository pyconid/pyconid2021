<template>
  <div>
    <Navbar class="sticky top-0 z-50" />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/global/Navbar.vue'
import Footer from '@/components/global/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>

</style>
