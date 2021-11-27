<template>
  <div class="bg-white">
    <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
      <div class="text-center pb-12">
        <h1 class="font-bold text-3xl font-heading text-gray-900">
          PyCon ID 2021 Organizer
        </h1>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="organizer in organizers" :key="organizer.id" class="w-full bg-gray-900 rounded-lg shadow-lg p-12 flex flex-col justify-center items-center">
          <div class="mb-4">
            <img class="object-center object-cover rounded-full h-36 w-36" :src="!organizer.isLocal ? `https://ik.imagekit.io/9rpt33mvmla/tr:h-360,w-360,cm-maintain_ratio/pyconid2021/organizers/${organizer.imageUrl}` :  organizer.imageUrl ? `/images/organizers/${organizer.imageUrl}` : `https://avatars.dicebear.com/api/initials/${organizer.name}.svg`" alt="photo">
          </div>
          <div class="text-center">
            <p class="text-xl text-white font-bold mb-2">
              {{ organizer.name }}
            </p>
            <p class="text-sm text-gray-400 font-normal">
              {{ organizer.role }} at <span class="font-semibold text-white">{{ organizer.institution }}</span>
            </p>
          </div>
          <div class="flex space-x-4 justify-evenly mt-6">
            <a :href="`https://www.linkedin.com/in/${organizer.linkedin}`" target="_blank" :class="`${organizer.linkedin ? 'text-gray-200 hover:text-gray-100' : 'text-gray-400'}`">
              <span class="sr-only">LinkedIn</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            <a :href="`https://twitter.com/${organizer.twitter}`" target="_blank" :class="`${organizer.twitter ? 'text-gray-200 hover:text-gray-100' : 'text-gray-400'}`">
              <span class="sr-only">Twitter</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>

            <a :href="`https://github.com/${organizer.github}`" target="_blank" :class="`${organizer.github ? 'text-gray-200 hover:text-gray-100' : 'text-gray-400'}`">
              <span class="sr-only">Github</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      organizers: [
        { id: 1, name: 'Dima M Dinama', imageUrl: 'dima.jpg', role: 'Lead Organizer', institution: 'PyCon Indonesia 2021', linkedin: 'dmaharika', twitter: 'dmaharika', github: 'dmaharika' },
        { id: 2, name: 'Setia Budi', imageUrl: 'setia_budi.jpg', role: 'Academic', institution: 'Maranatha University', linkedin: 'boedybios', twitter: 'boedybios', github: 'boedybios' },
        { id: 3, name: 'Melisa Krisnawati', imageUrl: 'melisa.jpg', role: 'Student', institution: 'Ciputra University', linkedin: '', twitter: '', github: '' },
        { id: 4, name: 'Moch Hilmi', imageUrl: 'hilmi.jpg', role: 'Student', institution: 'Narotama University', linkedin: '', twitter: '', github: '' },
        { id: 5, name: 'gelembungsahabat', imageUrl: 'wildan.jpg', role: 'Associate Product Engineer', institution: 'Zero One Group', linkedin: '', twitter: '', github: '' },
        { id: 6, name: 'Aldion', imageUrl: 'aldion.jpg', role: 'Software Engineer', institution: 'IDN Media', linkedin: 'aldionamirrul', twitter: 'aldionamirrul_', github: 'aldamr01' },
        { id: 7, name: 'Januar K. Suaeb', imageUrl: 'januar.jpg', role: 'Autonomous System Engineer', institution: 'Mitra Informatika', linkedin: 'januarKai', twitter: 'januarKai', github: 'januarks14' },
        { id: 8, name: 'Adif Maulana', imageUrl: 'adif.jpg', role: 'Software Engineer', institution: 'Bonza', linkedin: 'adifdwimaulana', twitter: 'adifdwimaulana', github: 'adifdwimaulana' },
        { id: 9, name: 'Christo', imageUrl: 'christo.jpg', role: 'Engineering Manager', institution: 'Alterra', linkedin: 'christoforus-surjoputro', twitter: '3mp3ri0r', github: '3mp3ri0r', isLocal: true },
        { id: 10, name: 'Gallan', imageUrl: 'gallan.jpg', role: 'QA Engineer', institution: 'IDN Media', linkedin: 'gallanwidyanto', twitter: 'gallanpw', github: 'gallanwidyanto', isLocal: true },
        { id: 11, name: 'Doni Rubiagatra', imageUrl: 'doni.jpg', role: 'Lead Product Engineer', institution: 'Zero One Group', linkedin: 'rubiagatra', twitter: 'rubiagatra', github: 'rubiagatra', isLocal: true },
        { id: 12, name: 'Irvan Putra', imageUrl: 'irvan.jpg', role: 'Software Engineer', institution: 'Pashouses.id', linkedin: '', twitter: '', github: '', isLocal: true },
        { id: 13, name: 'Rendi Dwi', imageUrl: 'rendi.png', role: 'Student', institution: 'Universitas 17 Agustus', linkedin: 'rendi-dwi-hermawan', twitter: '', github: 'rendiwithi', isLocal: true },
        { id: 14, name: 'Nita', imageUrl: 'nita.jpg', role: 'Contributor', institution: 'MakassarPy', linkedin: 'yuanita-retno-fatmalasari', twitter: 'nhytanyuita', github: 'yrfp307', isLocal: true },
        { id: 15, name: 'Edo', imageUrl: 'edo.jpg', role: 'Software Engineer', institution: 'Siesta', linkedin: '', twitter: '', github: 'ridhof', isLocal: true },
        { id: 16, name: 'Shantidevi', imageUrl: '', role: '-', institution: '-', linkedin: '', twitter: '', github: '', isLocal: true },
        { id: 17, name: 'Sigit', imageUrl: 'sigit.jpg', role: 'Python Developer', institution: 'Zyte', linkedin: 'sigitdewanto', twitter: 'seagatesoft', github: 'seagatesoft', isLocal: true },
        { id: 18, name: 'Elsa ', imageUrl: 'elsa.jpeg', role: 'Student', institution: 'Universitas Gadjah Mada', linkedin: 'elsasn', twitter: '', github: 'elsasn', isLocal: true },
        { id: 19, name: 'Lutfi Zuchri ', imageUrl: 'lutfi_zuhri.jpg', role: 'Publication', institution: 'Pycon ID', linkedin: 'lutfizuchri', twitter: 'lutfizuchri', github: '', isLocal: true },
        { id: 20, name: 'sosispanggang ', imageUrl: 'sosispanggang.jpg', role: 'Community Lead', institution: 'Python ID', linkedin: '', twitter: '', github: '', isLocal: true },
        { id: 21, name: 'Meilinda ', imageUrl: 'meilinda.png', role: 'Student', institution: 'Maranatha Christian University', linkedin: 'mei-linda-538873201', twitter: '', github: 'meilindazheng', isLocal: true },
        { id: 22, name: 'Echa Reza ', imageUrl: 'echa_reza.jpg', role: 'Designer', institution: 'PT. Mash Moshem Indonesia', linkedin: 'echar13', twitter: '', github: '', isLocal: true },
        { id: 23, name: 'Archrinto ', imageUrl: 'archrinto.jpeg', role: 'Mahasiswa', institution: 'Universitas Islam Indonesia', linkedin: 'july-arifianto-833474138', twitter: 'julyarifianto', github: 'archrinto', isLocal: true },
      ]
    }
  }
}
</script>
