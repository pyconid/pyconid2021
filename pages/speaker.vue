<template>
  <div>
    <Content />
    <RegularList />
  </div>
</template>

<script>
import Content from '@/components/speaker/Content.vue'
import RegularList from '@/components/speaker/RegularList.vue'

export default {
  components: {
    Content,
    RegularList
  }
}
</script>
