<template>
  <div class="relative bg-white overflow-hidden">
    <div class="hidden lg:block lg:absolute lg:inset-0" aria-hidden="true">
      <svg class="absolute top-0 left-1/2 transform translate-x-64 -translate-y-8" width="640" height="784" fill="none" viewBox="0 0 640 784">
        <defs>
          <pattern
            id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047"
            x="118"
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
        <rect y="72" width="640" height="640" class="text-gray-50" fill="currentColor" />
        <rect x="118" width="404" height="784" fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)" />
      </svg>
    </div>

    <div class="relative pt-6 pb-16 sm:pb-24 lg:pb-32">
      <main class="mt-2 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
        <div class="lg:grid lg:grid-cols-12 lg:gap-8">
          <div class="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1>
              <span class="block text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">PyCon ID 2021</span>
              <span class="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                <span class="pb-1 block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-info-600">Python Everywhere</span>
              </span>
            </h1>
            <div class="border-gray-200">
              <dl>
                <div class="py-3 flex gap-x-3">
                  <dt class="text-sm font-medium text-gray-500 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <!-- Date -->
                  </dt>
                  <dd class="text-lg text-gray-900 col-span-2 sm:col-span-3">
                    Saturday to Sunday, <br>4 - 5 Desember 2021
                  </dd>
                </div>
                <div class="py-3 flex gap-x-3">
                  <dt class="text-sm font-medium text-gray-500 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <!-- Location -->
                  </dt>
                  <dd class="text-lg text-gray-900 col-span-2 sm:col-span-3">
                    Online
                  </dd>
                </div>
              </dl>
            </div>
            <div class="mt-4 lg:mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <p class="text-base font-medium text-gray-900">
                Sign up to get latest news about PyCon ID 2021.
              </p>
              <form action="#" method="POST" class="mt-3 sm:flex">
                <label for="email" class="sr-only">Email</label>
                <input id="email" type="text" name="email" class="block w-full py-3 text-base rounded-md placeholder-gray-500 shadow-sm focus:ring-info-500 focus:border-info-500 sm:flex-1 border-gray-300" placeholder="Enter your email">
                <button type="submit" class="mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-info-800 shadow-sm hover:bg-info-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto">
                  Sign up
                </button>
              </form>
            </div>
          </div>
          <div class="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <svg
              class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden"
              width="640"
              height="784"
              fill="none"
              viewBox="0 0 640 784"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
                  x="118"
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
              <rect y="72" width="640" height="640" class="text-gray-50" fill="currentColor" />
              <rect x="118" width="404" height="784" fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)" />
            </svg>
            <!-- to do, styling youtube embed -->
            <div class="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <button type="button" class="relative block w-full bg-white rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span class="sr-only">Watch our video to learn more</span>
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube-nocookie.com/embed/1f6S3x1XUho"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
