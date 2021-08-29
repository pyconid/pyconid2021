<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto bg-white py-16 sm:py-24 sm:px-6 lg:px-8">
      <!-- xs to lg -->
      <div class="max-w-2xl mx-auto space-y-16 lg:hidden">
        <section v-for="(tier, tierIdx) in tiers" :key="tier.name">
          <table v-for="section in sections" :key="section.name" class="w-full">
            <caption v-if="section.name" class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-medium text-gray-900 text-left">
              {{
                section.name
              }}
            </caption>
            <thead>
              <tr>
                <th class="sr-only" scope="col">
                  Feature
                </th>
                <th class="sr-only" scope="col">
                  Included
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr v-for="feature in section.features" :key="feature.name" class="border-t border-gray-200">
                <th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">
                  {{ feature.name }}
                </th>
                <td class="py-5 pr-4">
                  <span v-if="typeof feature.tiers[tier.name] === 'string'" class="block text-sm text-gray-700 text-right">{{ feature.tiers[tier.name] }}</span>
                  <template v-else>
                    <svg
                      v-if="feature.tiers[tier.name] === true"
                      xmlns="http://www.w3.org/2000/svg"
                      class="ml-auto h-5 w-5 text-green-500"
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    <svg
                      v-else
                      xmlns="http://www.w3.org/2000/svg"
                      class="ml-auto h-5 w-5 text-gray-400"
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                    </svg>
                    <span class="sr-only">{{ feature.tiers[tier.name] === true ? 'Yes' : 'No' }}</span>
                  </template>
                </td>
              </tr>
            </tbody>
          </table>

          <div :class="[tierIdx < tiers.length - 1 ? 'py-5 border-b' : 'pt-5', 'border-t border-gray-200 px-4']">
            <a :href="tier.href" class="block w-full bg-info-800 border border-info-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-info-900">Buy {{ tier.name }}</a>
          </div>
        </section>
      </div>

      <!-- lg+ -->
      <div class="hidden lg:block">
        <table class="w-full h-px table-fixed">
          <caption class="sr-only">
            Pricing plan comparison
          </caption>
          <thead>
            <tr>
              <th class="pb-4 px-6 text-sm font-medium text-gray-900 text-left" scope="col">
                <span class="sr-only">Feature by</span>
                <span>Plans</span>
              </th>
              <th v-for="tier in tiers" :key="tier.name" class="w-1/4 pb-4 px-6 text-lg leading-6 font-medium text-gray-900 text-center" scope="col">
                {{ tier.name }}
              </th>
            </tr>
          </thead>
          <tbody class="border-t border-gray-200 divide-y divide-gray-200">
            <template v-for="section in sections">
              <tr v-if="section.name" :key="section.name">
                <th class="bg-gray-50 py-3 pl-6 text-sm font-medium text-gray-900 text-left" colspan="4" scope="colgroup">
                  {{ section.name }}
                </th>
              </tr>
              <tr v-for="feature in section.features" :key="feature.name">
                <th class="py-5 px-6 text-sm font-normal text-gray-500 text-left" scope="row">
                  {{ feature.name }}
                </th>
                <td v-for="tier in tiers" :key="tier.name" class="py-5 px-6">
                  <span v-if="typeof feature.tiers[tier.name] === 'string'" class="flex justify-center text-sm text-gray-700">{{ feature.tiers[tier.name] }}</span>
                  <template v-else>
                    <svg
                      v-if="feature.tiers[tier.name] === true"
                      xmlns="http://www.w3.org/2000/svg"
                      class="ml-auto mr-auto h-5 w-5 text-green-500"
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    <svg
                      v-else
                      xmlns="http://www.w3.org/2000/svg"
                      class="ml-auto mr-auto h-5 w-5 text-gray-400"
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                    </svg>
                    <span class="sr-only">{{ feature.tiers[tier.name] === true ? 'Included' : 'Not included' }} in {{ tier.name }}</span>
                  </template>
                </td>
              </tr>
            </template>
            <tr>
              <th class="py-8 px-6 text-sm font-medium text-gray-900 text-left align-top" scope="row">
                Pricing
              </th>
              <td v-for="tier in tiers" :key="tier.name" class="h-full py-8 px-6 align-top">
                <div class="relative h-full table">
                  <p>
                    <span class="text-3xl font-extrabold text-gray-800">{{ tier.price }} IDR</span>
                  </p>
                  <p class="mt-4 mb-16 text-sm text-gray-500">
                    {{ tier.description }}
                  </p>
                  <a :href="tier.href" class="absolute bottom-0 flex-grow block w-full bg-gray-800 border border-gray-800 rounded-md 5 py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">Apply {{ tier.name }}</a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {}
  },
  computed: {
    tiers () {
      return [
        { name: 'Platinum', href: 'mailto: farahclara@python.or.id?subject=Apply%20Platinum%20Sponsorhip%20PYCON%202021', price: '50.000.000', description: '' },
        { name: 'Gold', href: 'mailto: farahclara@python.or.id?subject=Apply%20Gold%20Sponsorhip%20PYCON%202021', price: '30.000.000', description: '' },
        { name: 'Silver', href: 'mailto: farahclara@python.or.id?subject=Apply%20Silver%20Sponsorhip%20PYCON%202021', price: '15.000.000', description: '' }
      ]
    },
    sections () {
      return [
        {
          features: [
            { name: 'Free Tickets', tiers: { Platinum: '15', Gold: '10', Silver: '5' } }
          ]
        },
        {
          name: 'Event Day Exposure',
          features: [
            { name: 'Main Stage Pitching on Opening before Keynote', tiers: { Platinum: '10 minutes' } },
            { name: 'Virtual Booth', tiers: { Platinum: 'Large', Gold: 'Medium', Silver: 'Small' } },
            { name: 'Dedicated Talk Session', tiers: { Platinum: '2', Gold: '1' } },
            { name: 'Recruitment Session', tiers: { Platinum: true, Gold: true, Silver: true } },
            { name: 'Dedicated Longue Session', tiers: { Platinum: '3', Gold: '1' } },
            { name: 'Special Booth Tour', tiers: { Platinum: '5 minutes', Gold: '5 minutes', Silver: '3 minutes' } },
            { name: 'Logo on Virtual Background', tiers: { Platinum: 'Large', Gold: 'Small' } },
            { name: 'Video ads between sessions', tiers: { Platinum: '60 seconds', Gold: '30 seconds', Silver: '15 seconds' } }
          ]
        },
        {
          name: 'Digital Exposure',
          features: [
            { name: 'Logo on Website', tiers: { Platinum: 'Large', Gold: 'Medium', Silver: 'Small' } },
            { name: 'Dedicated Main Banner', tiers: { Platinum: 'Large', Gold: 'Medium', Silver: 'Small' } },
            { name: 'Dedicated Website Page', tiers: { Platinum: true } },
            { name: 'Logo on Publication Media', tiers: { Platinum: 'Large', Gold: 'Medium', Silver: 'Small' } },
            { name: 'Logo on Merchandise', tiers: { Platinum: 'Large (T-shirt, Pouch, Stickers, Letter)', Gold: 'Medium (Pouch, Stickers, Letter)', Silver: 'Small (Pouch, Stickers, Letter)' } }
          ]
        }
      ]
    }
  }
}
</script>
