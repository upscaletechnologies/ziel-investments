<template lang="pug">
  div
    SubHeader(:title="career.title" :namespaces="['careers']")

    // Start Page
    section.section
      .container
        .row(v-if="career.image")
          .col-lg-12
            .mt-3
              img.img-fluid.mx-auto.d-block.rounded(:src="career.image.url" :alt="career.title")
        .row.mt-3.vertical-content1
          .col-lg-8.mt-3
            .work-detail-title
              h1.mb-1 {{career.title}}
              h6.text-muted.font-weight-normal {{career.summary}}
            
            .mt-4.work_detail_desc(v-if="career.description")
              hr
              h5.mb-1 Jobs Description:
              p.text-muted {{career.description}}
            
            //- correct one
            .mt-4.work_detail_desc(v-if="career.responsibilities")
              hr
              h5.mb-1 Duties & Responsibilities:
              .text-muted(v-html="career.responsibilities")
            .mt-4.work_detail_desc(v-if="career.skills")
              hr
              h5.mb-1 Key Requirements and Skills:
              .text-muted(v-html="career.skills")
            .mt-4.work_detail_desc(v-if="career.apply")
              hr
              h5.mb-1 How to apply:
              .text-muted(v-html="career.apply")

          .col-lg-4.mt-3
            .work_detail_list
              div
                h6.text-custom.mb-1 Nature of Job:
                p {{career.jobType}}
              div
                h6.text-custom.mb-1 Industry:
                p {{career.industry}}
              div
                h6.text-custom.mb-1 Job Location:
                p {{career.location}}
              //- .mt-4
                ul.list-unstyled.list-inline.mb-0.work_single_icon
                  li.list-inline-item
                    a(href="javascript:void(0);")
                      i.mdi.mdi-facebook-box
                  li.list-inline-item
                    a(href="javascript:void(0);")
                      i.mdi.mdi-twitter
                  li.list-inline-item
                    a(href="javascript:void(0);")
                      i.mdi.mdi-dribbble
                  li.list-inline-item
                    a(href="javascript:void(0);")
                      i.mdi.mdi-instagram
                  li.list-inline-item
                    a(href="javascript:void(0);")
                      i.mdi.mdi-pinterest
    // End Page
    
    Cta

</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import gql from 'graphql-tag';
import SubHeader from '~/components/SubHeader.vue';
import Cta from '~/components/Cta.vue';

@Component({
  apollo: {
    career: {
      query: gql`
        query($slug: String) {
          career(filter: { slug: { eq: $slug } }) {
            slug
            title
            jobType
            industry
            location
            image {
              url
            }
            summary
            description
            responsibilities
            skills
            apply
          }
        }
      `,
      variables() {
        return { slug: this.$route.params.slug };
      },
    },
  },
  components: { SubHeader, Cta },
  head() {
    return {
      title: 'Careers - zielinvestments.com',
      meta: [
        {
          hid: 'description',
          name: 'description',
          // content: ` Ziel Investments - ${this.career.title} - ${this.career.summary} `,
          content: ' Ziel Investments career opportunities or Job postings ',
        },
      ],
    };
  },
})
export default class RPA extends Vue {
  career: any = {};
}
</script>
