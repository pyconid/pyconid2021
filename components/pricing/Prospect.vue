<template>
  <div class="bg-info-800">
    <div class="mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between">
      <div class="w-full">
        <h2 class="text-4xl text-center font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
          Prospect &amp; Benefit
        </h2>
        <p class="mt-5 text-xl text-center text-gray-200">
          Sponsor Prospect &amp; Benefit
        </p>
        <div class="mx-8 my-4 lg:mx-24 lg:my-12">
          <p v-for="content in contents" :key="content.title" class="text-justify text-gray-200 text-md my-6">
            <span class="font-semibold text-white">{{ content.title }}</span> {{ content.subtitle }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      contents: [
        { title: 'Recruiting.', subtitle: 'What better place to find Python developers than a gathering of 250 of them? If you’re hiring, PyCon is the place to be. The conference has long been a great way to find the talented developers so many companies are searching for, so much that we added on-site Job Fair to make it even easier.' },
        { title: 'Branding.', subtitle: 'It is an opportunity to appeal that your company is technology-oriented organization. The posting of the logo will be recorded by movie and will be broadcasted on the web-media afterwards, leading to branding of the company and products. Continuous exposure of names and logos of companies, products, and services can generate many merits even after this conference, such as appeal to participants, topicality and exciting experience.' },
        { title: 'Marketing.', subtitle: 'It is a great chance to advertise your products and introduce detailed usages directly to Python engineers and Python users. Specifically, it is possible to have more interaction to participants by having a booth and directly explaining, having a talk session, and by distributing leaflets and goods.' },
        { title: 'Visibility.', subtitle: 'The conference hall is the place to be seen. Many organizations do product demos, hand out coupons and t-shirts, and engage their visitors by talking tech and sharing their experiences with Python. Some companies like to use their booth to interview PyCon’s talented attendees right then and there.' },
        { title: 'Audience.', subtitle: 'PyCon’s ever diversifying audience puts your organization in front of a wide variety of people. From beginners to experts, PyCon draws attendees from those with zero experience all the way through a significant group of the contributors to the language itself. We also see people of all levels from many industries. From developers to managers, executives to owners, startups to big businesses, PyCon draws attendees from all sorts of places. Some organizations send entire teams, and in the case of many startups, the entire company may be there.' },
        { title: 'Flexibility.', subtitle: 'If you want to help PyCon, we want to help you construct a sponsorship package that fits your needs. If a small booth would work better than a large one, perhaps we can swap it in exchange for another benefit that works better for your organization. For some organizations, a booth is not practical at all, but adding another conference pass may work better.' },
        { title: 'Other.', subtitle: 'Sponsoring can show your gratitude for Python community. It is one of CSR activity that supports technology companies and engineers community.' }
      ]
    }
  }
}
</script>
