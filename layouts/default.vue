<template>
  <div>
    <Navbar class="sticky top-0 z-50" />
    <Nuxt />
    <Sponsor />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/global/Navbar.vue'
import Sponsor from '@/components/global/Sponsor.vue'
import Footer from '@/components/global/Footer.vue'

export default {
  components: {
    Navbar,
    Sponsor,
    Footer
  }
}
</script>

<style>

</style>
