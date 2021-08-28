<template>
  <div>
    <Header />
    <Table />
    <!-- <CloudLogo /> -->
  </div>
</template>

<script>
import Header from '@/components/pricing/Header.vue'
import Table from '@/components/pricing/Table.vue'
// import CloudLogo from '@/components/pricing/CloudLogo.vue'

export default {
  components: {
    Header,
    Table
    // CloudLogo
  }
}
</script>
