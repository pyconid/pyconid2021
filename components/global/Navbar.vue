<template>
  <nav class="bg-white shadow">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex lg:justify-between h-16">
        <div class="static flex">
          <div class="-ml-2 mr-2 absolute top-3 flex items-center md:hidden">
            <!-- Mobile menu button -->
            <button
              type="button"
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
              @click="toggleNavbar"
            >
              <span class="sr-only">Open main menu</span>
              <!--
              Icon when menu is closed.

              Heroicon name: outline/menu

              Menu open: "hidden", Menu closed: "block"
            -->
              <svg
                :class="showMenu == true ? 'hidden' : 'block'"
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <!--
              Icon when menu is open.

              Heroicon name: outline/x

              Menu open: "block", Menu closed: "hidden"
            -->
              <svg
                :class="showMenu == true ? 'block' : 'hidden'"
                class="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="flex-shrink-0 flex items-center">
            <NuxtLink to="/">
              <img class="hidden lg:block h-12 w-auto" src="~/assets/image/logo.png" alt="PyCon">
            </NuxtLink>
          </div>
          <div class="hidden md:ml-6 md:flex md:space-x-8">
            <NuxtLink to="/" :class="getActiveClass('index')" class="inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
              <span class="h-full w-full flex items-center">Home</span>
            </NuxtLink>
            <NuxtLink to="/sponsorship" :class="getActiveClass('sponsorship')" class="inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
              <span class="h-full w-full flex items-center">Sponsorship</span>
            </NuxtLink>
            <NuxtLink to="/ticket" :class="getActiveClass('ticket')" class="inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
              <span class="h-full w-full flex items-center">Ticket</span>
            </NuxtLink>
            <NuxtLink to="/call-for-paper" :class="getActiveClass('call-for-paper')" class="inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
              <span class="h-full w-full flex items-center">Call For Paper</span>
            </NuxtLink>
          </div>
        </div>
        <div class="flex flex-row items-center ml-auto mr-auto lg:hidden">
          <NuxtLink to="/">
            <img class="h-12 w-auto" src="~/assets/image/logo.png" alt="PyCon">
          </NuxtLink>
        </div>
      </div>

      <div id="mobile-menu" class="md:hidden" :class="{'hidden': !showMenu}">
        <div class="pt-2 pb-3 space-y-1">
          <NuxtLink to="/" :class="getActiveMobileClass('index')" class="block pl-3 pr-4 border-l-4 text-base font-medium sm:pl-5 sm:pr-6">
            <span class="h-full w-full flex items-center py-2">Home</span>
          </NuxtLink>
          <NuxtLink to="/sponsorship" :class="getActiveMobileClass('sponsorship')" class="block pl-3 pr-4 border-l-4 text-base font-medium sm:pl-5 sm:pr-6">
            <span class="h-full w-full flex items-center py-2">Sponsorship</span>
          </NuxtLink>
          <NuxtLink to="/ticket" :class="getActiveMobileClass('ticket')" class="block pl-3 pr-4 border-l-4 text-base font-medium sm:pl-5 sm:pr-6">
            <span class="h-full w-full flex items-center py-2">Ticket</span>
          </NuxtLink>
          <NuxtLink to="/call-for-paper" :class="getActiveMobileClass('call-for-paper')" class="block pl-3 pr-4 border-l-4 text-base font-medium sm:pl-5 sm:pr-6">
            <span class="h-full w-full flex items-center py-2">Call for Paper</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      showMenu: false,
      activeMenu: '/'
    }
  },
  computed: {
    getRoute () {
      return this.$route.name
    }
  },
  methods: {
    toggleNavbar () {
      this.showMenu = !this.showMenu
    },
    getActiveClass (menu) {
      return this.getRoute === menu ? 'border-primary-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 '
    },
    getActiveMobileClass (menu) {
      return this.getRoute === menu ? 'bg-primary-50 border-primary-500 text-primary-700' : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
    }
  }
}
</script>

<style>

</style>
