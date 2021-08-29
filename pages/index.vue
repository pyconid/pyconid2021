<template>
  <div>
    <Hero />
    <div class="bg-white">
      <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div class="lg:flex lg:justify-between lg:gap-x-10">
          <div class="pb-3 lg:pb-0 max-w-xl">
            <img class="w-full h-auto rounded-lg" src="https://ik.imagekit.io/9rpt33mvmla/pyconid.jpg" alt="pycon id">
          </div>
          <div class="max-w-2xl">
            <h2 class="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl lg:text-left">
              What is <span class="text-primary-500">PyCon ID</span>?
            </h2>
            <p class="mt-3 lg:mt-5 text-base text-gray-500 text-justify">
              PyCon Indonesia is an annual conference where Python users, or people interested in Python, gather to learn from each other and meet other members of the community. We hope that everyone joining PyCon ID will not only learn new and exciting things, but also meet new friends and strengthen the connection with the community, and thus the community itself.
            </p>
            <p class="mt-3 lg:mt-5 text-base text-gray-500 text-justify">
              This year, we chose “Python Everywhere“ as our theme. The PyCon ID 2021 Organizer is consist of professionals, entrepreneurs, hobbyists and even students around several cities in Indonesia with wide diversity. We are continuing to work hard on welcoming all of you, local or overseas speakers, and making a conference that will allow everyone to have a great time and unlock new possibilities through Python.
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
