<template>
  <div>
    <Header />
    <Table />
    <Prospect />
  </div>
</template>

<script>
import Header from '@/components/pricing/Header.vue'
import Table from '@/components/pricing/Table.vue'
import Prospect from '@/components/pricing/Prospect.vue'

export default {
  components: {
    Header,
    Table,
    Prospect
  }
}
</script>
