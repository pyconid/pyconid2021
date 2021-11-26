<template>
  <div class="my-10 flex flex-row justify-center">
    <div class="px-2 w-full max-w-4xl">
      <h1 class="font-semibold text-xl text-center py-5">
        Schedule
      </h1>
      <div class="w-full flex space-x-2">
        <button id="tab_1_button" class="flex-1 py-5 border-2 border-primary-400 bg-white font-semibold text-primary-400" @click="changeTab('1')">
          Day 1
        </button>
        <button id="tab_2_button" class="flex-1 py-5 bg-gray-100 hover:bg-gray-50 hover:border hover:border-gray-100 font-semibold text-gray-400" @click="changeTab('2')">
          Day 2
        </button>
      </div>
      <div id="tab_1_container" class="text-sm">
        <div class="my-2 w-full hidden md:flex md:flex-row md:space-x-2">
          <p class="w-32 py-3 text-center" />
          <p class="py-3 flex-1 text-center bg-gray-100">
            Pod 1
          </p>
          <p class="py-3 flex-1 text-center bg-gray-100">
            Pod 2
          </p>
          <p class="py-3 flex-1 text-center bg-gray-100">
            Pod 3
          </p>
          <p class="py-3 flex-1 text-center bg-gray-100">
            Pod 4
          </p>
          <p class="py-3 flex-1 text-center bg-gray-100">
            Pod 5
          </p>
        </div>
        <div class="my-2 w-full flex flex-col gap-y-2 md:flex-row md:gap-x-2">
          <p class="w-full md:w-32 py-3 text-center bg-green-200">
            09:00 - 09.30
          </p>
          <p class="py-3 flex-1 text-center bg-gray-100">
            Opening (Main Stage)
          </p>
        </div>
        <div class="my-2 w-full flex flex-col gap-y-2 md:flex-row md:gap-x-2">
          <p class="w-full md:w-32 py-3 text-center bg-green-200">
            09:30 - 09.40
          </p>
          <p class="py-3 flex-1 text-center bg-gray-100">
            Platinum Sponsor Pitching (Main Stage) [JULO]
          </p>
        </div>
        <div class="my-2 w-full flex flex-col gap-y-2 md:flex-row md:gap-x-2">
          <p class="w-full md:w-32 py-3 text-center bg-green-200">
            09:40 - 10.40
          </p>
          <p class="py-3 flex-1 text-center bg-gray-100">
            Keynote Speaker 1 (Ainun Najib)
          </p>
        </div>
        <div class="my-2 w-full flex flex-col gap-y-2 md:flex-row md:gap-x-2">
          <p class="w-full md:w-32 py-3 text-center bg-green-200">
            10:40 - 10.50
          </p>
          <p class="py-3 flex-1 text-center bg-gray-100">
            Session Break
          </p>
        </div>
        <div class="my-2 w-full flex flex-col gap-y-2 md:flex-row md:gap-x-2">
          <p class="w-full md:w-32 py-3 text-center bg-green-200">
            10:50 - 11.35
          </p>
          <div class="p-2 py-3 flex-1 bg-gray-100 border border-gray-50 rounded">
            <div class="flex text-xs flex-wrap gap-x-2 gap-y-2">
              <p class="md:hidden p-1 bg-gray-200">
                Pod 1
              </p>
              <p class="p-1 bg-gray-200">
                ID
              </p>
            </div>
            <div class="my-2">
              <p class="text-sm text-primary-600" />
              <p class="text-xs">
                Arie Wahyu Wijayanto
              </p>
            </div>
            <div class="text-xs flex flex-wrap gap-x-2 gap-y-2">
              <p class="p-1 bg-gray-50">
                Data Science
              </p>
            </div>
          </div>
          <div class="p-2 py-3 flex-1 bg-gray-100 border border-gray-50 rounded">
            <div class="flex text-xs flex-wrap gap-x-2 gap-y-2">
              <p class="md:hidden p-1 bg-gray-200">
                Pod 2
              </p>
              <p class="p-1 bg-gray-200">
                EN
              </p>
              <p class="p-1 bg-gray-200">
                Beginner
              </p>
            </div>
            <div class="my-2">
              <p class="text-sm text-primary-600" />
              <p class="text-xs">
                Ridwan Fadjar Septian
              </p>
            </div>
            <div class="text-xs flex flex-wrap gap-x-2 gap-y-2">
              <p class="p-1 bg-gray-50">
                Backend
              </p>
              <p class="p-1 bg-gray-50">
                Monitoring
              </p>
            </div>
          </div>
          <div class="p-2 py-3 flex-1 bg-gray-100 border border-gray-50 rounded">
            <div class="flex text-xs flex-wrap gap-x-2 gap-y-2">
              <p class="md:hidden p-1 bg-gray-200">
                Pod 3
              </p>
              <p class="p-1 bg-gray-200">
                ID
              </p>
              <p class="p-1 bg-yellow-200">
                Intermediate
              </p>
            </div>
            <div class="my-2">
              <p class="text-sm text-primary-600" />
              <p class="text-xs">
                Kemal Maulana Kurniawan
              </p>
            </div>
            <div class="text-xs flex flex-wrap gap-x-2 gap-y-2">
              <p class="p-1 bg-gray-50">
                Deep Learning
              </p>
              <p class="p-1 bg-gray-50">
                NLP
              </p>
              <p class="p-1 bg-gray-50">
                Artificial Intelligence
              </p>
              <p class="p-1 bg-gray-50">
                Machine Learning
              </p>
            </div>
          </div>
          <div class="p-2 py-3 flex-1 bg-gray-100 border border-gray-50 rounded">
            <div class="flex text-xs flex-wrap gap-x-2 gap-y-2">
              <p class="md:hidden p-1 bg-gray-200">
                Pod 4
              </p>
              <p class="p-1 bg-gray-200">
                EN
              </p>
              <p class="p-1 bg-yellow-200">
                All
              </p>
            </div>
            <div class="my-2">
              <p class="text-sm text-primary-600" />
              <p class="text-xs">
                Yahya Fadhluloh AlFatih
              </p>
            </div>
            <div class="text-xs flex flex-wrap gap-x-2 gap-y-2">
              <p class="p-1 bg-gray-50">
                Cybersecurity
              </p>
            </div>
          </div>
          <div class="p-2 py-3 flex-1 bg-gray-100 border border-gray-50 rounded">
            <div class="flex text-xs flex-wrap gap-x-2 gap-y-2">
              <p class="md:hidden p-1 bg-gray-200">
                Pod 5
              </p>
              <p class="p-1 bg-gray-200">
                ID
              </p>
            </div>
            <div class="my-2">
              <p class="text-sm text-primary-600" />
              <p class="text-xs">
                Agus Suparno
              </p>
            </div>
            <div class="text-xs flex flex-wrap gap-x-2 gap-y-2">
              <p class="p-1 bg-gray-50">
                Microsoft
              </p>
            </div>
          </div>
        </div>
        <div class="my-2 w-full flex flex-col gap-y-2 md:flex-row md:gap-x-2">
          <p class="w-full md:w-32 py-3 text-center bg-green-200">
            11:35 - 12.00
          </p>
          <p class="py-3 flex-1 text-center bg-gray-100">
            SponsorshipTour (Main Stage)
          </p>
        </div>
        <div class="my-2 w-full flex flex-col gap-y-2 md:flex-row md:gap-x-2">
          <p class="w-full md:w-32 py-3 text-center bg-green-200">
            12:00 - 12.45
          </p>
          <p class="py-3 flex-1 text-center bg-gray-100">
            Lunch Break & Networking
          </p>
        </div>
        <div class="my-2 w-full flex flex-col gap-y-2 md:flex-row md:gap-x-2">
          <p class="w-full md:w-32 py-3 text-center bg-green-200">
            12:45 - 12.50
          </p>
          <p class="py-3 flex-1 text-center bg-gray-100">
            Session Preparation
          </p>
        </div>
        <div class="my-2 w-full flex flex-col gap-y-2 md:flex-row md:gap-x-2">
          <p class="w-full md:w-32 py-3 text-center bg-green-200">
            12:50 - 13.35
          </p>
          <div class="p-2 py-3 flex-1 bg-gray-100 border border-gray-50 rounded">
            <div class="flex text-xs flex-wrap gap-x-2 gap-y-2">
              <p class="md:hidden p-1 bg-gray-200">
                Pod 1
              </p>
              <p class="p-1 bg-gray-200">
                ID
              </p>
            </div>
            <div class="my-2">
              <p class="text-sm text-primary-600" />
              <p class="text-xs">
                Citra Hasana Sagala
              </p>
            </div>
            <div class="text-xs flex flex-wrap gap-x-2 gap-y-2">
              <p class="p-1 bg-gray-50">
                GIS
              </p>
            </div>
          </div>
          <div class="p-2 py-3 flex-1 bg-gray-100 border border-gray-50 rounded">
            <div class="flex text-xs flex-wrap gap-x-2 gap-y-2">
              <p class="md:hidden p-1 bg-gray-200">
                Pod 2
              </p>
              <p class="p-1 bg-gray-200">
                EN
              </p>
              <p class="p-1 bg-gray-200">
                Intermediate
              </p>
            </div>
            <div class="my-2">
              <p class="text-sm text-primary-600" />
              <p class="text-xs">
                Fauzan Erich Emmerling
              </p>
            </div>
            <div class="text-xs flex flex-wrap gap-x-2 gap-y-2">
              <p class="p-1 bg-gray-50">
                Backend
              </p>
            </div>
          </div>
          <div class="p-2 py-3 flex-1 bg-gray-100 border border-gray-50 rounded">
            <div class="flex text-xs flex-wrap gap-x-2 gap-y-2">
              <p class="md:hidden p-1 bg-gray-200">
                Pod 3
              </p>
              <p class="p-1 bg-gray-200">
                ID
              </p>
            </div>
            <div class="my-2">
              <p class="text-sm text-primary-600" />
              <p class="text-xs">
                Irwan Butar Butar
              </p>
            </div>
            <div class="text-xs flex flex-wrap gap-x-2 gap-y-2">
              <p class="p-1 bg-gray-50">
                Neo4J
              </p>
            </div>
          </div>
          <div class="p-2 py-3 flex-1 bg-gray-100 border border-gray-50 rounded">
            <div class="flex text-xs flex-wrap gap-x-2 gap-y-2">
              <p class="md:hidden p-1 bg-gray-200">
                Pod 4
              </p>
              <p class="p-1 bg-gray-200">
                ID
              </p>
            </div>
            <div class="my-2">
              <p class="text-sm text-primary-600" />
              <p class="text-xs">
                Intan Septiana
              </p>
            </div>
            <div class="text-xs flex flex-wrap gap-x-2 gap-y-2">
              <p class="p-1 bg-gray-50">
                Shopee
              </p>
            </div>
          </div>
          <div class="p-2 py-3 flex-1 bg-gray-100 border border-gray-50 rounded">
            <div class="flex text-xs flex-wrap gap-x-2 gap-y-2">
              <p class="md:hidden p-1 bg-gray-200">
                Pod 5
              </p>
              <p class="p-1 bg-gray-200">
                EN
              </p>
              <p class="p-1 bg-gray-200">
                Beginner
              </p>
            </div>
            <div class="my-2">
              <p class="text-sm text-primary-600" />
              <p class="text-xs">
                Harshdeep Singh
              </p>
            </div>
            <div class="text-xs flex flex-wrap gap-x-2 gap-y-2">
              <p class="p-1 bg-gray-50">
                Quantum Computer
              </p>
            </div>
          </div>
        </div>
        <div class="my-2 w-full flex flex-col gap-y-2 md:flex-row md:gap-x-2">
          <p class="w-full md:w-32 py-3 text-center bg-green-200">
            13:35 - 13.40
          </p>
          <p class="py-3 flex-1 text-center bg-gray-100">
            Session Break (Ads)
          </p>
        </div>
        <div class="my-2 w-full flex flex-col gap-y-2 md:flex-row md:gap-x-2">
          <p class="w-full md:w-32 py-3 text-center bg-green-200">
            13:40 - 13.50
          </p>
          <p class="py-3 flex-1 text-center bg-gray-100">
            Platinum Sponsor Pitching 2 (Main Stage)
          </p>
        </div>
        <div class="my-2 w-full flex flex-col gap-y-2 md:flex-row md:gap-x-2">
          <p class="w-full md:w-32 py-3 text-center bg-green-200">
            13:50 - 14.00
          </p>
          <p class="py-3 flex-1 text-center bg-gray-100">
            Keynote Speaker 2 (Sebastian Ramirez)
          </p>
        </div>
        <div class="my-2 w-full flex flex-col gap-y-2 md:flex-row md:gap-x-2">
          <p class="w-full md:w-32 py-3 text-center bg-green-200">
            14:50 - 15.15
          </p>
          <p class="py-3 flex-1 text-center bg-gray-100">
            Free Networking (Break Ashar)
          </p>
        </div>
        <div class="my-2 w-full flex flex-col gap-y-2 md:flex-row md:gap-x-2">
          <p class="w-full md:w-32 py-3 text-center bg-green-200">
            15:15 - 16.00
          </p>
          <div class="p-2 py-3 flex-1 bg-gray-100 border border-gray-50 rounded">
            <div class="flex text-xs flex-wrap gap-x-2 gap-y-2">
              <p class="md:hidden p-1 bg-gray-200">
                Pod 1
              </p>
              <p class="p-1 bg-gray-200">
                ID
              </p>
              <p class="p-1 bg-gray-200">
                Intermediate
              </p>
            </div>
            <div class="my-2">
              <p class="text-sm text-primary-600" />
              <p class="text-xs">
                Ali Akbar Septiandri
              </p>
            </div>
            <div class="text-xs flex flex-wrap gap-x-2 gap-y-2">
              <p class="p-1 bg-gray-50">
                Data Science
              </p>
              <p class="p-1 bg-gray-50">
                Artificial Intelligence
              </p>
              <p class="p-1 bg-gray-50">
                Machine Learning
              </p>
            </div>
          </div>
          <div class="p-2 py-3 flex-1 bg-gray-100 border border-gray-50 rounded">
            <div class="flex text-xs flex-wrap gap-x-2 gap-y-2">
              <p class="md:hidden p-1 bg-gray-200">
                Pod 2
              </p>
              <p class="p-1 bg-gray-200">
                EN
              </p>
              <p class="p-1 bg-gray-200">
                All
              </p>
              <p class="p-1 bg-gray-200">
                Prerecorded
              </p>
            </div>
            <div class="my-2">
              <p class="text-sm text-primary-600" />
              <p class="text-xs">
                Nicolas Fränkel
              </p>
            </div>
            <div class="text-xs flex flex-wrap gap-x-2 gap-y-2">
              <p class="p-1 bg-gray-50">
                Backend
              </p>
              <p class="p-1 bg-gray-50">
                Data Engineering
              </p>
            </div>
          </div>
          <div class="p-2 py-3 flex-1 bg-gray-100 border border-gray-50 rounded">
            <div class="flex text-xs flex-wrap gap-x-2 gap-y-2">
              <p class="md:hidden p-1 bg-gray-200">
                Pod 3
              </p>
              <p class="p-1 bg-gray-200">
                ID
              </p>
              <p class="p-1 bg-gray-200">
                Beginner
              </p>
            </div>
            <div class="my-2">
              <p class="text-sm text-primary-600" />
              <p class="text-xs">
                Devy Azkia Putri
              </p>
            </div>
            <div class="text-xs flex flex-wrap gap-x-2 gap-y-2">
              <p class="p-1 bg-gray-50">
                Automation
              </p>
              <p class="p-1 bg-gray-50">
                System Testing
              </p>
            </div>
          </div>
          <div class="p-2 py-3 flex-1 bg-gray-100 border border-gray-50 rounded">
            <div class="flex text-xs flex-wrap gap-x-2 gap-y-2">
              <p class="md:hidden p-1 bg-gray-200">
                Pod 4
              </p>
              <p class="p-1 bg-gray-200">
                EN
              </p>
              <p class="p-1 bg-gray-200">
                Intermediate
              </p>
            </div>
            <div class="my-2">
              <p class="text-sm text-primary-600" />
              <p class="text-xs">
                Sebastiaan Zeeff
              </p>
            </div>
            <div class="text-xs flex flex-wrap gap-x-2 gap-y-2">
              <p class="p-1 bg-gray-50">
                Core Python
              </p>
            </div>
          </div>
          <div class="p-2 py-3 flex-1 bg-gray-100 border border-gray-50 rounded">
            <div class="flex text-xs flex-wrap gap-x-2 gap-y-2">
              <p class="md:hidden p-1 bg-gray-200">
                Pod 5
              </p>
              <p class="p-1 bg-gray-200">
                EN
              </p>
              <p class="p-1 bg-gray-200">
                All
              </p>
            </div>
            <div class="my-2">
              <p class="text-sm text-primary-600" />
              <p class="text-xs">
                Camila Guerrero
              </p>
            </div>
            <div class="text-xs flex flex-wrap gap-x-2 gap-y-2">
              <p class="p-1 bg-gray-50">
                Machine Learning
              </p>
              <p class="p-1 bg-gray-50">
                Web Development
              </p>
            </div>
          </div>
        </div>
        <div class="my-2 w-full flex flex-col gap-y-2 md:flex-row md:gap-x-2">
          <p class="w-full md:w-32 py-3 text-center bg-green-200">
            16:00 - 16.40
          </p>
          <p class="py-3 flex-1 text-center bg-gray-100">
            Free Networking
          </p>
        </div>
        <div class="my-2 w-full flex flex-col gap-y-2 md:flex-row md:gap-x-2">
          <p class="w-full md:w-32 py-3 text-center bg-green-200">
            16:40 - 17.10
          </p>
          <p class="py-3 flex-1 text-center bg-gray-100">
            Lightning Talks
          </p>
        </div>
        <div class="my-2 w-full flex flex-col gap-y-2 md:flex-row md:gap-x-2">
          <p class="w-full md:w-32 py-3 text-center bg-green-200">
            17:10 - 17.15
          </p>
          <p class="py-3 flex-1 text-center bg-gray-100">
            Closing Day 1
          </p>
        </div>
      </div>
      <div id="tab_2_container" class="hidden text-sm">
        <div class="my-2 w-full hidden md:flex md:flex-row md:space-x-2">
          <p class="w-32 py-3 text-center" />
          <p class="py-3 flex-1 text-center bg-gray-100">
            Pod 1
          </p>
          <p class="py-3 flex-1 text-center bg-gray-100">
            Pod 2
          </p>
          <p class="py-3 flex-1 text-center bg-gray-100">
            Pod 3
          </p>
          <p class="py-3 flex-1 text-center bg-gray-100">
            Pod 4
          </p>
          <p class="py-3 flex-1 text-center bg-gray-100">
            Pod 5
          </p>
        </div>
        <div class="my-2 w-full flex flex-col gap-y-2 md:flex-row md:gap-x-2">
          <p class="w-full md:w-32 py-3 text-center bg-green-200">
            09:00 - 09.30
          </p>
          <p class="py-3 flex-1 text-center bg-gray-100">
            Opening (Main Stage)
          </p>
        </div>
        <div class="my-2 w-full flex flex-col gap-y-2 md:flex-row md:gap-x-2">
          <p class="w-full md:w-32 py-3 text-center bg-green-200">
            09:30 - 09.40
          </p>
          <p class="py-3 flex-1 text-center bg-gray-100">
            Platinum Sponsor Pitching 4 (Main Stage) [AWS]
          </p>
        </div>
        <div class="my-2 w-full flex flex-col gap-y-2 md:flex-row md:gap-x-2">
          <p class="w-full md:w-32 py-3 text-center bg-green-200">
            09:40 - 10.40
          </p>
          <p class="py-3 flex-1 text-center bg-gray-100">
            Keynote Speaker 3 (Al Sweigart)
          </p>
        </div>
        <div class="my-2 w-full flex flex-col gap-y-2 md:flex-row md:gap-x-2">
          <p class="w-full md:w-32 py-3 text-center bg-green-200">
            10:40 - 10.50
          </p>
          <p class="py-3 flex-1 text-center bg-gray-100">
            Session Break
          </p>
        </div>
        <div class="my-2 w-full flex flex-col gap-y-2 md:flex-row md:gap-x-2">
          <p class="w-full md:w-32 py-3 text-center bg-green-200">
            10:50 - 11.40
          </p>
          <div class="p-2 py-3 flex-1 bg-gray-100 border border-gray-50 rounded">
            <div class="flex text-xs flex-wrap gap-x-2 gap-y-2">
              <p class="md:hidden p-1 bg-gray-200">
                Pod 1
              </p>
              <p class="p-1 bg-gray-200">
                ID
              </p>
            </div>
            <div class="my-2">
              <p class="text-sm text-primary-600" />
              <p class="text-xs">
                Galuh Sahid
              </p>
            </div>
            <div class="text-xs flex flex-wrap gap-x-2 gap-y-2">
              <p class="p-1 bg-gray-50">
                Data Science
              </p>
            </div>
          </div>
          <div class="p-2 py-3 flex-1 bg-gray-100 border border-gray-50 rounded">
            <div class="flex text-xs flex-wrap gap-x-2 gap-y-2">
              <p class="md:hidden p-1 bg-gray-200">
                Pod 2
              </p>
              <p class="p-1 bg-gray-200">
                ID
              </p>
              <p class="p-1 bg-gray-200">
                Intermediate
              </p>
            </div>
            <div class="my-2">
              <p class="text-sm text-primary-600" />
              <p class="text-xs">
                Abdurrachman Mappuji
              </p>
            </div>
            <div class="text-xs flex flex-wrap gap-x-2 gap-y-2">
              <p class="p-1 bg-gray-50">
                Backend
              </p>
              <p class="p-1 bg-gray-50">
                Blockchain
              </p>
              <p class="p-1 bg-gray-50">
                Smart Contract
              </p>
            </div>
          </div>
          <div class="p-2 py-3 flex-1 bg-gray-100 border border-gray-50 rounded">
            <div class="flex text-xs flex-wrap gap-x-2 gap-y-2">
              <p class="md:hidden p-1 bg-gray-200">
                Pod 3
              </p>
              <p class="p-1 bg-gray-200">
                ID
              </p>
              <p class="p-1 bg-yellow-200">
                Intermediate
              </p>
            </div>
            <div class="my-2">
              <p class="text-sm text-primary-600" />
              <p class="text-xs">
                Kuncahyo Setyo Nugroho
              </p>
            </div>
            <div class="text-xs flex flex-wrap gap-x-2 gap-y-2">
              <p class="p-1 bg-gray-50">
                Deep Learning
              </p>
              <p class="p-1 bg-gray-50">
                NLP
              </p>
              <p class="p-1 bg-gray-50">
                Machine Learning
              </p>
            </div>
          </div>
          <div class="p-2 py-3 flex-1 bg-gray-100 border border-gray-50 rounded">
            <div class="flex text-xs flex-wrap gap-x-2 gap-y-2">
              <p class="md:hidden p-1 bg-gray-200">
                Pod 4
              </p>
              <p class="p-1 bg-gray-200">
                ID
              </p>
              <p class="p-1 bg-yellow-200">
                All
              </p>
            </div>
            <div class="my-2">
              <p class="text-sm text-primary-600" />
              <p class="text-xs">
                Andi Dinata
              </p>
            </div>
            <div class="text-xs flex flex-wrap gap-x-2 gap-y-2">
              <p class="p-1 bg-gray-50">
                Education
              </p>
            </div>
          </div>
          <div class="p-2 py-3 flex-1 bg-gray-100 border border-gray-50 rounded">
            <div class="flex text-xs flex-wrap gap-x-2 gap-y-2">
              <p class="md:hidden p-1 bg-gray-200">
                Pod 5
              </p>
              <p class="p-1 bg-gray-200">
                EN
              </p>
            </div>
            <div class="my-2">
              <p class="text-sm text-primary-600" />
              <p class="text-xs">
                Ciptoning Hestomo
              </p>
            </div>
            <div class="text-xs flex flex-wrap gap-x-2 gap-y-2">
              <p class="p-1 bg-gray-50">
                JULO
              </p>
            </div>
          </div>
        </div>
        <div class="my-2 w-full flex flex-col gap-y-2 md:flex-row md:gap-x-2">
          <p class="w-full md:w-32 py-3 text-center bg-green-200">
            11:40 - 12.00
          </p>
          <p class="py-3 flex-1 text-center bg-gray-100">
            SponsorshipTour (Main Stage)
          </p>
        </div>
        <div class="my-2 w-full flex flex-col gap-y-2 md:flex-row md:gap-x-2">
          <p class="w-full md:w-32 py-3 text-center bg-green-200">
            12:00 - 13.00
          </p>
          <p class="py-3 flex-1 text-center bg-gray-100">
            Lunch Break & Networking
          </p>
        </div>
        <div class="my-2 w-full flex flex-col gap-y-2 md:flex-row md:gap-x-2">
          <p class="w-full md:w-32 py-3 text-center bg-green-200">
            12:55 - 13.00
          </p>
          <p class="py-3 flex-1 text-center bg-gray-100">
            Session Preparation
          </p>
        </div>
        <div class="my-2 w-full flex flex-col gap-y-2 md:flex-row md:gap-x-2">
          <p class="w-full md:w-32 py-3 text-center bg-green-200">
            13:00 - 13.45
          </p>
          <div class="p-2 py-3 flex-1 bg-gray-100 border border-gray-50 rounded">
            <div class="flex text-xs flex-wrap gap-x-2 gap-y-2">
              <p class="md:hidden p-1 bg-gray-200">
                Pod 1
              </p>
              <p class="p-1 bg-gray-200">
                EN
              </p>
              <p class="p-1 bg-gray-200">
                Beginner
              </p>
            </div>
            <div class="my-2">
              <p class="text-sm text-primary-600" />
              <p class="text-xs">
                Harsh Bardhan Mishra
              </p>
            </div>
            <div class="text-xs flex flex-wrap gap-x-2 gap-y-2">
              <p class="p-1 bg-gray-50">
                Jupyter
              </p>
              <p class="p-1 bg-gray-50">
                iPython
              </p>
            </div>
          </div>
          <div class="p-2 py-3 flex-1 bg-gray-100 border border-gray-50 rounded">
            <div class="flex text-xs flex-wrap gap-x-2 gap-y-2">
              <p class="md:hidden p-1 bg-gray-200">
                Pod 2
              </p>
              <p class="p-1 bg-gray-200">
                EN
              </p>
              <p class="p-1 bg-gray-200">
                Intermediate
              </p>
            </div>
            <div class="my-2">
              <p class="text-sm text-primary-600" />
              <p class="text-xs">
                Kamal Mustafa
              </p>
            </div>
            <div class="text-xs flex flex-wrap gap-x-2 gap-y-2">
              <p class="p-1 bg-gray-50">
                Backend
              </p>
            </div>
          </div>
          <div class="p-2 py-3 flex-1 bg-gray-100 border border-gray-50 rounded">
            <div class="flex text-xs flex-wrap gap-x-2 gap-y-2">
              <p class="md:hidden p-1 bg-gray-200">
                Pod 3
              </p>
              <p class="p-1 bg-gray-200">
                ID
              </p>
              <p class="p-1 bg-gray-200">
                Intermediate
              </p>
            </div>
            <div class="my-2">
              <p class="text-sm text-primary-600" />
              <p class="text-xs">
                Syahrul Bahar Hamdani
              </p>
            </div>
            <div class="text-xs flex flex-wrap gap-x-2 gap-y-2">
              <p class="p-1 bg-gray-50">
                Data Science
              </p>
              <p class="p-1 bg-gray-50">
                Teaching
              </p>
              <p class="p-1 bg-gray-50">
                Academic
              </p>
            </div>
          </div>
          <div class="p-2 py-3 flex-1 bg-gray-100 border border-gray-50 rounded">
            <div class="flex text-xs flex-wrap gap-x-2 gap-y-2">
              <p class="md:hidden p-1 bg-gray-200">
                Pod 4
              </p>
              <p class="p-1 bg-gray-200">
                -
              </p>
            </div>
            <div class="my-2">
              <p class="text-sm text-primary-600" />
              <p class="text-xs">
                Sponsor Speaker 5
              </p>
            </div>
            <div class="text-xs flex flex-wrap gap-x-2 gap-y-2">
              <p class="p-1 bg-gray-50">
                Sponsor
              </p>
            </div>
          </div>
          <div class="p-2 py-3 flex-1 bg-gray-100 border border-gray-50 rounded">
            <div class="flex text-xs flex-wrap gap-x-2 gap-y-2">
              <p class="md:hidden p-1 bg-gray-200">
                Pod 5
              </p>
              <p class="p-1 bg-gray-200">
                ID
              </p>
              <p class="p-1 bg-gray-200">
                Beginner
              </p>
            </div>
            <div class="my-2">
              <p class="text-sm text-primary-600" />
              <p class="text-xs">
                Go Frendi Gunawan
              </p>
            </div>
            <div class="text-xs flex flex-wrap gap-x-2 gap-y-2">
              <p class="p-1 bg-gray-50">
                Infrastructure
              </p>
              <p class="p-1 bg-gray-50">
                IaC
              </p>
              <p class="p-1 bg-gray-50">
                Automation
              </p>
            </div>
          </div>
        </div>
        <div class="my-2 w-full flex flex-col gap-y-2 md:flex-row md:gap-x-2">
          <p class="w-full md:w-32 py-3 text-center bg-green-200">
            13:45 - 13.50
          </p>
          <p class="py-3 flex-1 text-center bg-gray-100">
            Session Break (Ads)
          </p>
        </div>
        <div class="my-2 w-full flex flex-col gap-y-2 md:flex-row md:gap-x-2">
          <p class="w-full md:w-32 py-3 text-center bg-green-200">
            13:50 - 14.35
          </p>
          <div class="p-2 py-3 flex-1 bg-gray-100 border border-gray-50 rounded">
            <div class="flex text-xs flex-wrap gap-x-2 gap-y-2">
              <p class="md:hidden p-1 bg-gray-200">
                Pod 1
              </p>
              <p class="p-1 bg-gray-200">
                EN
              </p>
              <p class="p-1 bg-gray-200">
                All
              </p>
            </div>
            <div class="my-2">
              <p class="text-sm text-primary-600" />
              <p class="text-xs">
                Kaylan Prasad
              </p>
            </div>
            <div class="text-xs flex flex-wrap gap-x-2 gap-y-2">
              <p class="p-1 bg-gray-50">
                Data Science
              </p>
              <p class="p-1 bg-gray-50">
                Data Visualization
              </p>
            </div>
          </div>
          <div class="p-2 py-3 flex-1 bg-gray-100 border border-gray-50 rounded">
            <div class="flex text-xs flex-wrap gap-x-2 gap-y-2">
              <p class="md:hidden p-1 bg-gray-200">
                Pod 2
              </p>
              <p class="p-1 bg-gray-200">
                EN
              </p>
              <p class="p-1 bg-gray-200">
                All
              </p>
            </div>
            <div class="my-2">
              <p class="text-sm text-primary-600" />
              <p class="text-xs">
                Karan Balkar
              </p>
            </div>
            <div class="text-xs flex flex-wrap gap-x-2 gap-y-2">
              <p class="p-1 bg-gray-50">
                Backend
              </p>
              <p class="p-1 bg-gray-50">
                Automation
              </p>
              <p class="p-1 bg-gray-50">
                Web Development
              </p>
            </div>
          </div>
          <div class="p-2 py-3 flex-1 bg-gray-100 border border-gray-50 rounded">
            <div class="flex text-xs flex-wrap gap-x-2 gap-y-2">
              <p class="md:hidden p-1 bg-gray-200">
                Pod 3
              </p>
              <p class="p-1 bg-gray-200">
                -
              </p>
            </div>
            <div class="my-2">
              <p class="text-sm text-primary-600" />
              <p class="text-xs">
                Sponsor Speaker 6
              </p>
            </div>
            <div class="text-xs flex flex-wrap gap-x-2 gap-y-2">
              <p class="p-1 bg-gray-50">
                Sponsor
              </p>
            </div>
          </div>
          <div class="p-2 py-3 flex-1 bg-gray-100 border border-gray-50 rounded">
            <div class="flex text-xs flex-wrap gap-x-2 gap-y-2">
              <p class="md:hidden p-1 bg-gray-200">
                Pod 4
              </p>
              <p class="p-1 bg-gray-200">
                EN
              </p>
              <p class="p-1 bg-gray-200">
                All
              </p>
            </div>
            <div class="my-2">
              <p class="text-sm text-primary-600" />
              <p class="text-xs">
                Neeraj Pandey
              </p>
            </div>
            <div class="text-xs flex flex-wrap gap-x-2 gap-y-2">
              <p class="p-1 bg-gray-50">
                Computer Graphics
              </p>
            </div>
          </div>
          <div class="p-2 py-3 flex-1 bg-gray-100 border border-gray-50 rounded">
            <div class="flex text-xs flex-wrap gap-x-2 gap-y-2">
              <p class="md:hidden p-1 bg-gray-200">
                Pod 5
              </p>
              <p class="p-1 bg-gray-200">
                -
              </p>
            </div>
            <div class="my-2">
              <p class="text-sm text-primary-600" />
              <p class="text-xs">
                Sponsor Speaker 7
              </p>
            </div>
            <div class="text-xs flex flex-wrap gap-x-2 gap-y-2">
              <p class="p-1 bg-gray-50">
                Sponsor
              </p>
            </div>
          </div>
        </div>
        <div class="my-2 w-full flex flex-col gap-y-2 md:flex-row md:gap-x-2">
          <p class="w-full md:w-32 py-3 text-center bg-green-200">
            14:35 - 15.00
          </p>
          <p class="py-3 flex-1 text-center bg-gray-100">
            Free Networking
          </p>
        </div>
        <div class="my-2 w-full flex flex-col gap-y-2 md:flex-row md:gap-x-2">
          <p class="w-full md:w-32 py-3 text-center bg-green-200">
            15:00 - 15.45
          </p>
          <div class="p-2 py-3 flex-1 bg-gray-100 border border-gray-50 rounded">
            <div class="flex text-xs flex-wrap gap-x-2 gap-y-2">
              <p class="md:hidden p-1 bg-gray-200">
                Pod 1
              </p>
              <p class="p-1 bg-gray-200">
                EN
              </p>
              <p class="p-1 bg-gray-200">
                Beginner
              </p>
            </div>
            <div class="my-2">
              <p class="text-sm text-primary-600" />
              <p class="text-xs">
                Merve Noyan
              </p>
            </div>
            <div class="text-xs flex flex-wrap gap-x-2 gap-y-2">
              <p class="p-1 bg-gray-50">
                Machine Learning
              </p>
              <p class="p-1 bg-gray-50">
                Artificial Intelligence
              </p>
              <p class="p-1 bg-gray-50">
                Data Science
              </p>
            </div>
          </div>
          <div class="p-2 py-3 flex-1 bg-gray-100 border border-gray-50 rounded">
            <div class="flex text-xs flex-wrap gap-x-2 gap-y-2">
              <p class="md:hidden p-1 bg-gray-200">
                Pod 2
              </p>
              <p class="p-1 bg-gray-200">
                -
              </p>
            </div>
            <div class="my-2">
              <p class="text-sm text-primary-600" />
              <p class="text-xs">
                Sponsor Speaker 8
              </p>
            </div>
            <div class="text-xs flex flex-wrap gap-x-2 gap-y-2">
              <p class="p-1 bg-gray-50">
                Sponsor
              </p>
            </div>
          </div>
          <div class="p-2 py-3 flex-1 bg-gray-100 border border-gray-50 rounded">
            <div class="flex text-xs flex-wrap gap-x-2 gap-y-2">
              <p class="md:hidden p-1 bg-gray-200">
                Pod 3
              </p>
              <p class="p-1 bg-gray-200">
                ID
              </p>
              <p class="p-1 bg-gray-200">
                All
              </p>
            </div>
            <div class="my-2">
              <p class="text-sm text-primary-600" />
              <p class="text-xs">
                Hendri Karisma
              </p>
            </div>
            <div class="text-xs flex flex-wrap gap-x-2 gap-y-2">
              <p class="p-1 bg-gray-50">
                Backend
              </p>
            </div>
          </div>
          <div class="p-2 py-3 flex-1 bg-gray-100 border border-gray-50 rounded">
            <div class="flex text-xs flex-wrap gap-x-2 gap-y-2">
              <p class="md:hidden p-1 bg-gray-200">
                Pod 4
              </p>
              <p class="p-1 bg-gray-200">
                -
              </p>
            </div>
            <div class="my-2">
              <p class="text-sm text-primary-600" />
              <p class="text-xs">
                Sponsor Speaker 9
              </p>
            </div>
            <div class="text-xs flex flex-wrap gap-x-2 gap-y-2">
              <p class="p-1 bg-gray-50">
                Sponsor
              </p>
            </div>
          </div>
          <div class="p-2 py-3 flex-1 bg-gray-100 border border-gray-50 rounded">
            <div class="flex text-xs flex-wrap gap-x-2 gap-y-2">
              <p class="md:hidden p-1 bg-gray-200">
                Pod 5
              </p>
              <p class="p-1 bg-gray-200">
                ID
              </p>
              <p class="p-1 bg-gray-200">
                All
              </p>
            </div>
            <div class="my-2">
              <p class="text-sm text-primary-600" />
              <p class="text-xs">
                Miqdad Abdurrahman
              </p>
            </div>
            <div class="text-xs flex flex-wrap gap-x-2 gap-y-2">
              <p class="p-1 bg-gray-50">
                NLP
              </p>
              <p class="p-1 bg-gray-50">
                Machine Learning
              </p>
            </div>
          </div>
        </div>
        <div class="my-2 w-full flex flex-col gap-y-2 md:flex-row md:gap-x-2">
          <p class="w-full md:w-32 py-3 text-center bg-green-200">
            15:45 - 15.50
          </p>
          <p class="py-3 flex-1 text-center bg-gray-100">
            Session Break (Ads)
          </p>
        </div>
        <div class="my-2 w-full flex flex-col gap-y-2 md:flex-row md:gap-x-2">
          <p class="w-full md:w-32 py-3 text-center bg-green-200">
            15:50 - 16.35
          </p>
          <div class="p-2 py-3 flex-1 bg-gray-100 border border-gray-50 rounded">
            <div class="flex text-xs flex-wrap gap-x-2 gap-y-2">
              <p class="md:hidden p-1 bg-gray-200">
                Pod 1
              </p>
              <p class="p-1 bg-gray-200">
                ID
              </p>
              <p class="p-1 bg-gray-200">
                Beginner
              </p>
            </div>
            <div class="my-2">
              <p class="text-sm text-primary-600" />
              <p class="text-xs">
                Irwan Shofwan
              </p>
            </div>
            <div class="text-xs flex flex-wrap gap-x-2 gap-y-2">
              <p class="p-1 bg-gray-50">
                Infrastructure
              </p>
              <p class="p-1 bg-gray-50">
                Cloud Computing
              </p>
              <p class="p-1 bg-gray-50">
                Monitoring
              </p>
              <p class="p-1 bg-gray-50">
                DevOps
              </p>
            </div>
          </div>
          <div class="p-2 py-3 flex-1 bg-gray-100 border border-gray-50 rounded">
            <div class="flex text-xs flex-wrap gap-x-2 gap-y-2">
              <p class="md:hidden p-1 bg-gray-200">
                Pod 2
              </p>
              <p class="p-1 bg-gray-200">
                EN
              </p>
              <p class="p-1 bg-gray-200">
                Intermediate
              </p>
            </div>
            <div class="my-2">
              <p class="text-sm text-primary-600" />
              <p class="text-xs">
                Radical Rakhman Wahid
              </p>
            </div>
            <div class="text-xs flex flex-wrap gap-x-2 gap-y-2">
              <p class="p-1 bg-gray-50">
                Data Science
              </p>
              <p class="p-1 bg-gray-50">
                Machine Learning
              </p>
              <p class="p-1 bg-gray-50">
                Deep Learning
              </p>
            </div>
          </div>
          <div class="p-2 py-3 flex-1 bg-gray-100 border border-gray-50 rounded">
            <div class="flex text-xs flex-wrap gap-x-2 gap-y-2">
              <p class="md:hidden p-1 bg-gray-200">
                Pod 3
              </p>
              <p class="p-1 bg-gray-200">
                ID
              </p>
              <p class="p-1 bg-gray-200">
                Intermediate
              </p>
            </div>
            <div class="my-2">
              <p class="text-sm text-primary-600" />
              <p class="text-xs">
                Satria Ady Pradana
              </p>
            </div>
            <div class="text-xs flex flex-wrap gap-x-2 gap-y-2">
              <p class="p-1 bg-gray-50">
                Cybersecurity
              </p>
            </div>
          </div>
          <div class="p-2 py-3 flex-1 bg-gray-100 border border-gray-50 rounded">
            <div class="flex text-xs flex-wrap gap-x-2 gap-y-2">
              <p class="md:hidden p-1 bg-gray-200">
                Pod 4
              </p>
              <p class="p-1 bg-gray-200">
                ID
              </p>
              <p class="p-1 bg-gray-200">
                Beginner
              </p>
            </div>
            <div class="my-2">
              <p class="text-sm text-primary-600" />
              <p class="text-xs">
                Mahmud Isnan
              </p>
            </div>
            <div class="text-xs flex flex-wrap gap-x-2 gap-y-2">
              <p class="p-1 bg-gray-50">
                Machine Learning
              </p>
              <p class="p-1 bg-gray-50">
                Remote Sensing
              </p>
            </div>
          </div>
          <div class="p-2 py-3 flex-1 bg-gray-100 border border-gray-50 rounded">
            <div class="flex text-xs flex-wrap gap-x-2 gap-y-2">
              <p class="md:hidden p-1 bg-gray-200">
                Pod 5
              </p>
              <p class="p-1 bg-gray-200">
                ID
              </p>
              <p class="p-1 bg-gray-200">
                Beginner
              </p>
            </div>
            <div class="my-2">
              <p class="text-sm text-primary-600" />
              <p class="text-xs">
                Aria Suseno
              </p>
            </div>
            <div class="text-xs flex flex-wrap gap-x-2 gap-y-2">
              <p class="p-1 bg-gray-50">
                Automation
              </p>
            </div>
          </div>
        </div>
        <div class="my-2 w-full flex flex-col gap-y-2 md:flex-row md:gap-x-2">
          <p class="w-full md:w-32 py-3 text-center bg-green-200">
            16:55 - 17.00
          </p>
          <p class="py-3 flex-1 text-center bg-gray-100">
            Session Break
          </p>
        </div>
        <div class="my-2 w-full flex flex-col gap-y-2 md:flex-row md:gap-x-2">
          <p class="w-full md:w-32 py-3 text-center bg-green-200">
            17:00 - 17.25
          </p>
          <p class="py-3 flex-1 text-center bg-gray-100">
            Lightning Talks (5 Person)
          </p>
        </div>
        <div class="my-2 w-full flex flex-col gap-y-2 md:flex-row md:gap-x-2">
          <p class="w-full md:w-32 py-3 text-center bg-green-200">
            17:25 - 17.30
          </p>
          <p class="py-3 flex-1 text-center bg-gray-100">
            Closing Day 2
          </p>
        </div>
        <div class="my-2 w-full flex flex-col gap-y-2 md:flex-row md:gap-x-2">
          <p class="w-full md:w-32 py-3 text-center bg-green-200">
            17:30 - 18.30
          </p>
          <p class="py-3 flex-1 text-center bg-gray-100">
            After Party
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Content from '@/components/organizer/Content.vue'

export default {
  // components: {
  //   Content
  // }
  data () {
    return {
      tabIndex: 1
    }
  },
  watch: {
    tabIndex (val) {
      if (+val === 1) {
        if (document.getElementById('tab_1_container').classList.contains('hidden')) {
          document.getElementById('tab_1_container').classList.remove('hidden')
          document.getElementById('tab_1_button').className = 'flex-1 py-5 border-2 border-primary-400 bg-white font-semibold text-primary-400'
        }

        if (!document.getElementById('tab_2_container').classList.contains('hidden')) {
          document.getElementById('tab_2_container').classList.add('hidden')
          document.getElementById('tab_2_button').className = 'flex-1 py-5 bg-gray-100 font-semibold text-gray-400 hover:bg-gray-50 hover:border hover:border-gray-100'
        }
      } else if (+val === 2) {
        if (document.getElementById('tab_2_container').classList.contains('hidden')) {
          document.getElementById('tab_2_container').classList.remove('hidden')
          document.getElementById('tab_2_button').className = 'flex-1 py-5 border-2 border-primary-400 bg-white font-semibold text-primary-400'
        }

        if (!document.getElementById('tab_1_container').classList.contains('hidden')) {
          document.getElementById('tab_1_container').classList.add('hidden')
          document.getElementById('tab_1_button').className = 'flex-1 py-5 bg-gray-100 font-semibold text-gray-400 hover:bg-gray-50 hover:border hover:border-gray-100'
        }
      }
    }
  },
  methods: {
    changeTab (newTabIndex) {
      console.log(newTabIndex)
      this.tabIndex = newTabIndex
    }
  }
}
</script>
