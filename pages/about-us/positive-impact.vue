<template lang="pug">
  div
    SubHeader(title="Positive Impact" :namespaces="['about']")
    // Start Faq
    section.section
      .container
        .row
          .col-lg-12
            .section_title.text-center
              p.small_title.mb-4.text-custom.text-uppercase Transformation Story
              h2.text-capitalize.mx-auto.section_header Positive Impact
              p.sec_subtitle.pt-3.text-muted.mx-auto
                | We endeavour to positively impact the lives of those in the community through not only giving back but also creating products that help them live better.
        .row.mt-5.vertical-content
          .col-lg-6
            .faq_img.mt-3
              img.img-fluid.mx-auto.d-block(src="~/assets/images/positive-impact.jpg" alt="")
          .col-lg-6
            //- Todo: write some good stuff on impact made
            .faq_main.mt-3
              p.mb-0.text-muted There are still more than a billion people round the world living in extreme poverty on less than $1.25 a day. In Kenya alone, more than a million members of hill tribes exist on the margins of society - denied citizenship, shut out of the formal job market and vulnerable to exploitation and trafficking.
    // End Faq
    Cta
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import SubHeader from '~/components/SubHeader.vue';
import Cta from '~/components/Cta.vue';

@Component({
  components: { SubHeader, Cta },
  head() {
    return {
      title: 'Positive Impact - zielinvestments.com',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            ' Transformation Story and Positive Impact. We endeavour to positively impact the lives of those in the community through not only giving back but also creating products that help them live better. ',
        },
      ],
    };
  },
})
export default class AboutUs extends Vue {}
</script>
