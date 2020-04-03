<template lang="pug">
  div
    SubHeader(title="Purpose" :namespaces="['about']")
    // Start Faq
    section.section
      .container
        .row
          .col-lg-12
            .section_title.text-center
              p.small_title.mb-4.text-custom.text-uppercase Who We Are
              h2.text-capitalize.mx-auto.section_header Our Purpose
              p.sec_subtitle.pt-3.text-muted.mx-auto
                | The personal approach towards clients is our main principle.
        .row.mt-3
          .col-lg-6
            .text-center.position-relative.hit_box.rounded.mt-3
              .hit_icon.text-custom
                i.pe-7s-arc
              .hit_content.mt-2
                h5.font-weight-bold Our Mission
                p.mt-3.text-muted.mb-0
                  | Ziel Investments works to enhance the dignity and quality of life of individuals and families by strengthening communities, eliminating barriers to opportunity, and helping people in need reach their full potential through learning and the power of work.
          .col-lg-6
            .text-center.position-relative.hit_box.rounded.mt-3
              .hit_icon.text-custom
                i.pe-7s-anchor
              .hit_content.mt-2
                h5.font-weight-bold Our Vision
                p.mt-3.text-muted.mb-0
                  | Every person has the opportunity to achieve his/her fullest potential and participate in and contribute to all aspects of life.
        //- .row.mt-5
          .col-lg-4
            .text-center.features_axi_box.mt-3.rounded
              .features_axi_icon
                i.mdi.mdi-airplay
              .features_axi_content.mt-4
                h5 We Keep You Updated
                p.mt-3.text-muted.mb-0
                  | We keep clients informed every step of the way. No surprises. Simply peace of mind.
          .col-lg-4
            .text-center.features_axi_box.active.mt-3.rounded
              .features_axi_icon
                i.mdi.mdi-timelapse
              .features_axi_content.mt-4
                h5 We Deliver On Time
                p.mt-3.text-muted.mb-0
                  | We work hard to make sure all services are rendered on time but without compromising quality.
          .col-lg-4
            .text-center.features_axi_box.mt-3.rounded
              .features_axi_icon
                i.mdi.mdi-check-all
              .features_axi_content.mt-4
                h5 We Deliver Results
                p.mt-3.text-muted.mb-0
                  | Our ultimate goal is to satisfy the client, which is why we are committed to deliver tangible results.
        //- .row.mt-5.vertical-content
          .col-lg-6
            //- Todo: write some good stuff on impact made
            .faq_main.mt-3
              p.mb-0.text-muted There are still more than a billion people round the world living in extreme poverty on less than $1.25 a day. In Kenya alone, more than a million members of hill tribes exist on the margins of society - denied citizenship, shut out of the formal job market and vulnerable to exploitation and trafficking.
          .col-lg-6
            .faq_img.mt-3
              img.img-fluid.mx-auto.d-block(src="~/assets/images/purpose.jpg" alt="")
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
      title: 'Purpose - zielinvestments.com',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: ' ',
        },
      ],
    };
  },
})
export default class AboutUs extends Vue {}
</script>
