<template>
  <div class="bg-white overflow-hidden">
    <div class="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lq:px-8">
      <div class="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
      <div class="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
        <div>
          <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Our Speakers
          </h3>
        </div>
      </div>
      <div class="text-base max-w-prose lg:max-w-none mt-8">
        <p class="text-lg text-gray-500">
          Keynote Speakers
        </p>
      </div>
      <KeynoteSpeaker shadow="lg" />
    </div>
  </div>
</template>

<script>
import KeynoteSpeaker from '@/components/global/KeynoteSpeaker.vue'
export default {
  components: {
    KeynoteSpeaker
  }
}
</script>
