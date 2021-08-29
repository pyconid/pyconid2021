<template>
  <div class="bg-white overflow-hidden">
    <div class="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div class="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
        <div>
          <h3 class="mt-2 text-3xl text-justify font-bold text-gray-500 sm:text-2xl">
            PyCon Indonesia 2021 tickets are sold in the following types. Tickets are required to participate in the online conference.
          </h3>
        </div>
      </div>
      <div class="mt-4 lg:grid lg:grid-cols-2 lg:gap-8">
        <div class="relative lg:row-start-1 lg:col-start-2">
          <svg
            class="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  class="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
          </svg>
          <div class="relative text-base mx-auto max-w-prose lg:max-w-none">
            <figure>
              <div class="aspect-w-12 aspect-h-7 lg:aspect-none">
                <img class="rounded-lg shadow-lg object-cover object-center" src="~/assets/image/ticket-placeholder.jpg" alt="Ticket Placeholder">
              </div>
            </figure>
          </div>
        </div>
        <div class="mt-8 lg:mt-0">
          <div class="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
            <ul role="list" class="font-semibold">
              <li>Regular (Rp. 100.000)</li>
              <li>Merchandise (Rp. 150.000)</li>
              <li>Patron (Rp. 1.000.000)</li>
            </ul>
            <p>For those who buy PyCon ID 2021 Exclusive Merchandise, delivery of merchandise will be sent using a courier with the Cash on Delivery (COD) system. So you have to pay your shipping fee when your merchandise package has come to your address. Our merchandise will be produced at Surabaya City, East Java. You can choose to send your merchandise from <span class="font-bold text-gray-800">Surabaya</span> or one of these cities: <span class="font-bold text-gray-800">Bandung</span>, <span class="font-bold text-gray-800">Yogyakarta</span>, <span class="font-bold text-gray-800">Bogor</span>, and <span class="font-bold text-gray-800">Makassar</span>. Choosing origin cities other than Surabaya will cost more days on the delivery process. For shipping fee please check at <a href="https://www.jet.co.id/rates" target="_blank" class="font-bold text-gray-900">J&amp;T</a> Express, the merchandise package's weight is approximately 1 kilogram. For international participants or overseas shipping addresses, you can still get your merchandise but you have to pay for your shipping first. Please contact pycon@python.or.id to discuss your shipping fee. We will use <a href="https://www.posindonesia.co.id/en/" target="_blank" class="font-bold text-gray-900 no-underline">POS Indonesia</a> for international shipment.</p>
          </div>
        </div>
      </div>
      <div class="w-full my-8 lg:px-0 sm:px-16">
        <div v-for="ticket in tickets" :key="ticket.type" class="my-4">
          <h3 class="text-2xl text-gray-500 font-semibold">
            {{ ticket.type }}
          </h3>
          <no-ssr>
            <img :src="require(`~/assets/image/tickets/${ticket.image}`)" class="my-4">
          </no-ssr>
          <p class="text-gray-500">
            {{ ticket.description }}
          </p>
        </div>
        <div class="flex justify-center">
          <a href="https://maimilu.com/e/pycon-id-2021" target="_blank" class="mt-3 w-auto px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-info-800 shadow-sm hover:bg-info-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto">
            Buy Ticket
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {
    tickets () {
      return [
        { type: 'Regular Ticket', description: 'This ticket includes event access for two days. We will send the link for the event to your registered email address one week before the event.', image: 'Regular.jpg' },
        { type: 'Merchandise Ticket', description: 'This ticket includes event access for two days and PyCon ID 2021 Exclusive Merchandise. We will send the link for the event to your registered email address one week before the event. We will send your merchandise in about one week before the event and we will inform your AWB via your registered email.', image: 'Merchandise.jpg' },
        { type: 'Patron Ticket', description: 'Be a Patron by supporting this event. Your name will be listed on Patron Section. This ticket includes event access for two days and PyCon ID 2021 Exclusive Merchandise. We will send the link for the event to your registered email address one week before the event. We will send your merchandise in about one week before the event and we will inform your AWB via your registered email.', image: 'Patron.jpg' }
      ]
    }
  }
}
</script>
