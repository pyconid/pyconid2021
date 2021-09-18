<template>
  <div class="p-3">
    <div class="flex flex-col gap-y-2 items-center">
      <h2 class="text-lg font-semibold text-gray-900 sm:text-2xl sm:tracking-tight lg:text-3xl lg:text-left">
        PyCon ID 2021 Twibbon
      </h2>
      <img id="img1" src="~/assets/image/twibbon.png" width="600px" height="600px" hidden="true">
      <input id="fileOpener" type="file" hidden="true" @change="changeImage">
      <img v-show="showImage" class="h-80 w-80 md:h-96 md:w-96" src="~/assets/image/twibbon.png" width="600px" height="6000px">
    </div>

    <div class="">
      <div id="canvas_container" class="hidden flex justify-center">
        <canvas id="canvas" class="h-80 w-80 md:h-96 md:w-96 w-auto flex justify-center" />
      </div>
      <div class="mt-4 flex flex-col md:flex-row gap-x-0 gap-y-4 md:gap-x-4 md:gap-y-0 justify-center">
        <button class="mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-info-800 shadow-sm hover:bg-info-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto" @click="uploadImage">
          Upload Image
        </button>
        <button class="mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-info-800 shadow-sm hover:bg-info-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto" @click="downloadTwibbon">
          Download Twibbon
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      showImage: true
    }
  },
  mounted () {
    this.renderTwibbon()
  },
  methods: {
    uploadImage () {
      document.getElementById('fileOpener').click()
    },
    changeImage (event) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const img = new Image()
        img.onload = () => {
          const img1 = document.getElementById('img1')
          const canvas = document.getElementById('canvas')
          const context = canvas.getContext('2d')
          const width = img1.width
          const height = img1.height
          canvas.width = width
          canvas.height = height

          // Fungsi untuk men-draw gambar
          context.drawImage(img, 0, 0, width, height)
          context.getImageData(0, 0, width, height)
          context.drawImage(img1, 0, 0, width, height)
          context.getImageData(0, 0, width, height)
        }
        img.src = e.target.result
      }
      reader.readAsDataURL(event.target.files[0])
      document.getElementById('canvas_container').classList.remove('hidden')
      this.showImage = false
    },
    renderTwibbon () {
      const img1 = document.getElementById('img1')
      const canvas = document.getElementById('canvas')
      const context = canvas.getContext('2d')
      const width = img1.width
      const height = img1.height
      canvas.width = width
      canvas.height = height

      // Fungsi untuk men-draw gambar
      context.drawImage(img1, 0, 0, width, height)
      context.getImageData(0, 0, width, height)
    },
    downloadTwibbon () {
      const link = document.createElement('a')
      link.download = 'pyconid2021-twibbon.png'
      link.href = document.getElementById('canvas').toDataURL()
      link.click()
    }
  }
}
</script>
