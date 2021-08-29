<template>
  <div class="bg-white overflow-hidden">
    <div class="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div class="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
      <div class="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
        <div>
          <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Call For Paper
          </h3>
        </div>
      </div>
      <div class="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
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
                <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400&display=swap" rel="stylesheet">
                <div class="hidden lg:block masonry before:box-inherit after:box-inherit object-cover object-center">
                  <div class="break-inside">
                    <img class="object-cover object-center" src="~/assets/image/IMG_8488.jpg">
                  </div>
                  <div class="break-inside">
                    <img class="object-cover object-center" src="~/assets/image/IMG_8541.jpg">
                  </div>
                  <div class="break-inside">
                    <img class="object-cover object-center" src="~/assets/image/IMG_8555.jpg">
                  </div>
                  <div class="break-inside">
                    <img class="object-cover object-center" src="~/assets/image/IMG_8567.jpg">
                  </div>
                  <div class="break-inside">
                    <img class="object-cover object-center" src="~/assets/image/IMG_8676.jpg">
                  </div>
                  <div class="break-inside">
                    <img class="object-cover object-center" src="~/assets/image/IMG_8607.jpg">
                  </div>
                </div>
                <img class="block lg:hidden rounded-lg shadow-lg object-cover object-center" src="~/assets/image/IMG_8676.jpg">
              </div>
            </figure>
          </div>
        </div>
        <div class="mt-8 lg:mt-0">
          <div class="text-base max-w-prose mx-auto lg:max-w-none">
            <p class="text-lg text-gray-500">
              PyCon Indonesia is pleased to announce that we are going to open the Call For Proposals soon.
            </p>
          </div>
          <div class="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
            <p>We are calling out for speakers who had like to share their Python knowledge which would intrigue the Python community at this event!</p>
            <p>We’re looking for proposals on every aspect of Python: basic, intermediate or advanced levels. We’re interested to see all content that’s interesting and engaging to the Python community, whether it be introduction, tutorials, case studies, learning-teaching-community, interactive sessions, or even how you and your organization work with Python.</p>
            <p>So if you have something that the community might be interested in, let us know and, don’t worry if you’re a seasoned engineer or a novice with no experience of presenting at a conference before; what matters is the content that you’ll be sharing with the community.</p>
            <p>Your proposal is as simple as answering these questions:</p>
            <ul role="list">
              <li>Title of your talks</li>
              <li>Elevator Pitch</li>
              <li>Audience Level (Beginner, Intermediate, Advanced)</li>
              <li>Description of your talks</li>
              <li>About you</li>
            </ul>
            <h3>Proposal Types</h3>
            <ul role="list">
              <li><span class="font-semibold">Talks</span> are limited to a maximum of **40 minutes**, and may preferably be accompanied with helping material (presentation, image, document, etc). The time slots include time for questions from the audience, so please plan your talk accordingly.</li>
              <li><span class="font-semibold">Lightning Talks</span> are limited to a maximum of **5 minutes**. The lightning talks session will not have Q&A time slot on stage.</li>
              <li>Audience Level (Beginner, Intermediate, Advanced)</li>
            </ul>
            <p>Talks could be on a variety of topics (for further details and inspiration, check out the next section).</p>
            <h3>Guidelines for Proposal Submission</h3>
            <p>While there’s not a strict criteria on the proposal content, there are a few guidelines to be followed while submitting a proposal and you must follow the Code of Conduct.</p>
            <p>The proposal should be concise and relevant to the event. Please be sure to mention necessary versions and environment setup configurations, where applicable.</p>
            <p>It’s preferable if your associated organization’s name/branding is mentioned only at the beginning of the proposal, and the rest of the content is unbiased and generic. Moreover, any platform, technology, browser, and OS biases should also be avoided. Selection status of proposals will be notified via email.</p>
            <p>Feel free to submit multiple proposals. For any questions, please write to <a target="_blank" href="mailto:conf@python.or.id">conf@python.or.id</a> Last, but not the least, we accept talks in Bahasa Indonesia and English. After all, it’s PyCon Indonesia!</p>
            <h3>Join Our Stage!</h3>
            <p>Register yourself at <a href="https://www.papercall.io/pyconid2021" target="_blank">https://www.papercall.io/pyconid2021</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.masonry {
  column-count: 2;
  column-gap: 0em;
}
.break-inside {
  break-inside: avoid;
}
</style>
