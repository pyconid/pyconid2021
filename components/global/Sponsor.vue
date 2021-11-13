<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div v-show="sponsors.show" class="bg-white max-w-7xl mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
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
        <div class="grid-cols-1">
          <div v-for="sponsor in sponsors.platinum" :key="sponsor.image" class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img class="object-contain h-36 p-4" :src="sponsor.image" alt="Tuple">
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
            <img class="object-contain h-20 p-2" :src="sponsor.image" alt="Tuple">
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
            <img class="object-contain h-16 p-2" :src="sponsor.image" alt="Tuple">
          </div>
        </div>
      </div>
    </div>
    <div v-show="sponsors.patrons.length > 0" class="mt-12 flex flex-col items-center">
      <h3 class="text-md font-medium text-gray-900 sm:text-xl sm:tracking-tight lg:text-2xl lg:text-left">
        Patron
      </h3>
      <div class="max-w-7xl mx-auto my-2 px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col sm:flex-row gap-8">
          <a v-for="sponsor in sponsors.patrons" :key="sponsor.image" :href="sponsor.url" class="col-span-1 flex flex-col sm:flex-row justify-center items-center md:col-span-2 lg:col-span-1 hover:border hover:rounded-xl px-2 py-1">
            <img class="mx-auto h-12 w-12 rounded-full lg:w-16 lg:h-16 object-fill" :src="sponsor.image" alt="">
            <p v-text="sponsor.name" class="ml-2 font-medium text-gray-800"></p>
          </a>
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
          { image: 'https://ik.imagekit.io/gelembungsahabat/AWS_logo_RGB_sXBNduNmi.png?updatedAt=1635181586293', slug: '' },
          { image: 'https://ik.imagekit.io/gelembungsahabat/Microsoft-logo_rgb_c-gray__1__p62pmczHI.png?updatedAt=1635182030898', slug: '' },
          { image: 'https://ik.imagekit.io/gelembungsahabat/Neo4j-logo_color_WrZ1f_jrh2H.png?updatedAt=1635638154969', slug: '' }
        ],
        gold: [
          { image: 'https://ik.imagekit.io/gelembungsahabat/shopee_logo_en_e3hmbkpyN.png?updatedAt=1635638155632', slug: '' }
        ],
        silver: [
          { image: 'https://ik.imagekit.io/gelembungsahabat/logo-warna__1__wa1MFvQdX.png?updatedAt=1635181524902', slug: '' }
        ],
        supports: [
          { image: 'https://ik.imagekit.io/9rpt33mvmla/tr:w-260tr:h-240/logo/PSF-Logo.png', slug: '' }
        ],
        patrons: [
          {
            image: 'https://ik.imagekit.io/9rpt33mvmla/tr:h-360,w-360,cm-maintain_ratio/pyconid2021/patrons/Muhammad%20Irfan%20Luthfi.jpg',
            name: 'Muhammad Irfan Luthfi',
            url: 'https://unydevelopernetwork.com'
          },
          {
            image: 'https://ik.imagekit.io/9rpt33mvmla/tr:h-360,w-360,cm-maintain_ratio/pyconid2021/patrons/Griko%20Muhammad%20Sultan%20Nibras.jpeg',
            name: 'Griko Muhammad Sultan Nibras',
            url: 'https://griko.id/'
          },
          {
            image: 'https://ik.imagekit.io/9rpt33mvmla/tr:h-360,w-360,cm-maintain_ratio/pyconid2021/patrons/Petra%20Novandi%20Barus.jpg',
            name: 'Petra Novandi Barus',
            url: 'https://petrabarus.net'
          }
        ],
      }
    }
  }
}
</script>
