<template lang="pug">
  div
    SubHeader(title="Careers"  titleMenu="about" :namespaces="['careers']")
    // Start About Us
    section.section
      .container
        .row
          .col-lg-12
            .section_title.text-center
              p.small_title.mb-4.text-custom.text-uppercase  Creating a better world that helps each and everyone
              h2.text-capitalize.mx-auto.section_header Recruiting Progressive Professionals
              p.sec_content.pt-3.text-muted.mx-auto
                | We are always looking for talented, driven, organized team players and colleagues, with a passion for execution to solve problems and uncover opportunities for our clients and projects in unique ways.
              p.sec_content.pt-3.text-muted.mx-auto
                | We work with exceptional people who have a depth of experience and expertise and who thrive on working with ambitious organizations to deliver sustainable results in complex and challenging circumstances.
    // End About Us

    // Start Positions
    section.section.bg-light
      .container
        .row
          .col-lg-12
            .section_title.text-center
              p.small_title.mb-4.text-custom.text-uppercase  Career Opportunities
              h2.text-capitalize.mx-auto.section_header Current Positions Available
        .row.mt-5.justify-content-md-center
          .col-lg-4(v-if="!allCareers.length")
            .text-center.features_axi_box.mt-3.rounded.bg-white
              .features_axi_content.mt-4
                p.mt-3.text-muted.mb-0
                  | Currently there are no open position, please come back later.
          .col-lg-4(v-else v-for="career in allCareers")
            .text-center.features_axi_box.mt-3.rounded.bg-white
              .features_axi_icon
                i.mdi.mdi-briefcase
              .features_axi_content.mt-4
                h5 {{career.title}}
                p.mt-3.text-muted.mb-0 {{career.summary}}
                .services_more.mt-3
                  nuxt-link.text-muted(:to="`/careers/${career.slug}`")
                    | Learn More 
                    i.mdi.mdi-arrow-right
    // End Positions
  
    CoreValues
    Cta
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import gql from 'graphql-tag';
import SubHeader from '~/components/SubHeader.vue';
import CoreValues from '~/components/CoreValues.vue';
import Cta from '~/components/Cta.vue';

@Component({
  apollo: {
    allCareers: {
      query: gql`
        {
          allCareers {
            slug
            title
            summary
          }
        }
      `,
    },
  },
  components: { SubHeader, CoreValues, Cta },
  head() {
    return {
      title: 'Careers - zielinvestments.com',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: ' Ziel Investments career opportunities. We create a better world that helps each and everyone ',
        },
      ],
    };
  },
})
export default class RPA extends Vue {
  allCareers: any = [];
}
</script>
