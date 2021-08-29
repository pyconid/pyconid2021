<template>
  <div>
    <Hero />
    <div class="bg-white">
      <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div class="lg:flex lg:justify-between lg:gap-x-10">
          <div class="pb-3 lg:pb-0 max-w-xl">
            <img class="w-full h-auto rounded-lg" src="~/assets/image/pyconid.jpg" alt="pycon id">
          </div>
          <div class="max-w-2xl">
            <h2 class="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl lg:text-left">
              What is <span class="text-primary-500">PyCon ID</span>?
            </h2>
            <p class="mt-3 lg:mt-5 text-base text-gray-500 text-justify">
              PyCon Indonesia is a conference where Python users, or people interested in Python, gather to learn from each other and meet other members of the community. This year, we chose "Connect - Collab - Contribute" as our theme. The Pycon ID staff is continuing to work hard on making a conference that will allow everyone to have a great time and unlock new possibilities through Python.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from '@/components/homepage/Hero.vue'

export default {
  components: {
    Hero
  }
}
</script>
