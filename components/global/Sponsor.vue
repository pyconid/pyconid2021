<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div v-show="sponsors.show" class="bg-white max-w-7xl mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
    <div class="flex flex-col items-center">
      <h2 class="text-lg font-semibold text-gray-900 sm:text-2xl sm:tracking-tight lg:text-3xl lg:text-left">
        Sponsors
      </h2>
      <p class="mt-3 lg:mt-5 text-base text-gray-500 text-justify lg:text-center">
        Pycon Indonesia gratefully acknowledges the generosity of our many Pycon ID ’21 sponsors. <br>Their support, along with that of our members, helps make it possible to accomplish all that we do.
      </p>
    </div>
    <div v-show="sponsors.platinum.length > 0" class="mt-10 flex flex-col items-center">
      <h3 class="text-md font-medium text-gray-900 sm:text-xl sm:tracking-tight lg:text-2xl lg:text-left">
        Platinum Sponsors
      </h3>
      <div class="max-w-7xl mx-auto my-2 px-4 sm:px-6 lg:px-8">
        <div class="flex gap-8">
          <div v-for="sponsor in sponsors.platinum" :key="sponsor.image" class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img class="h-40" :src="sponsor.image" alt="Tuple">
          </div>
        </div>
      </div>
    </div>
    <div v-show="sponsors.gold.length > 0" class="mt-10 flex flex-col items-center">
      <h3 class="text-md font-medium text-gray-900 sm:text-xl sm:tracking-tight lg:text-2xl lg:text-left">
        Gold Sponsors
      </h3>
      <div class="max-w-7xl mx-auto my-2 px-4 sm:px-6 lg:px-8">
        <div class="flex flex-wrap justify-center gap-8">
          <div v-for="sponsor in sponsors.gold" :key="sponsor.image" class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img class="h-40" :src="sponsor.image" alt="Tuple">
          </div>
        </div>
      </div>
    </div>
    <div v-show="sponsors.silver.length > 0" class="mt-10 flex flex-col items-center">
      <h3 class="text-md font-medium text-gray-900 sm:text-xl sm:tracking-tight lg:text-2xl lg:text-left">
        Silver Sponsors
      </h3>
      <div class="max-w-7xl mx-auto my-2 px-4 sm:px-6 lg:px-8">
        <div class="flex gap-8">
          <div v-for="sponsor in sponsors.silver" :key="sponsor.image" class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img class="h-40" :src="sponsor.image" alt="Tuple">
          </div>
        </div>
      </div>
    </div>
    <div v-show="sponsors.supports.length > 0" class="mt-10 flex flex-col items-center">
      <h3 class="text-md font-medium text-gray-900 sm:text-xl sm:tracking-tight lg:text-2xl lg:text-left">
        Supported By
      </h3>
      <div class="max-w-7xl mx-auto my-2 px-4 sm:px-6 lg:px-8">
        <div class="flex gap-8">
          <div v-for="sponsor in sponsors.supports" :key="sponsor.image" class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img class="h-40" :src="sponsor.image" alt="Tuple">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data () {
    return {
      sponsors: {
        show: true,
        platinum: [
          // { image: 'https://2020.pycon.id/theme/img/supporters/logo-microsoft.png', slug: '' }
        ],
        gold: [
          // { image: 'https://2020.pycon.id/theme/img/supporters/logo-scoutapm.png', slug: '' }
          // { image: 'https://2020.pycon.id/theme/img/supporters/logo-rwid.jpg', slug: '' },
          // { image: 'https://2020.pycon.id/theme/img/supporters/logo-vonage.png', slug: '' }
        ],
        silver: [
          // { image: 'https://2020.pycon.id/theme/img/supporters/logo-qiscus.png', slug: '' }
        ],
        supports: [
          { image: 'https://ik.imagekit.io/9rpt33mvmla/tr:w-260tr:h-240/logo/PSF-Logo.png', slug: '' }
        ]
      }
    }
  }
}
</script>
