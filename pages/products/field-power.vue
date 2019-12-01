<template lang="pug">
  div
    SubHeader(title="Mobile Field Service Management Software" titleMenu="Field Power")
    // Start Page
    section.section
      .container
        .row
          .col-lg-12
            .mt-3
              img.img-fluid.mx-auto.d-block.rounded(src="~/assets/images/single_work/work_detail.jpg" alt="")
        .row.mt-3.vertical-content
          .col-lg-8.mt-3
            .work-detail-title
              h1.mb-1 Modern,Clean & Minimal Design
              h6.text-muted.font-weight-normal Branding, Product Design and Marketing
            .mt-4.work_detail_desc
              p.text-muted
                | There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum.
              p.text-muted
                | It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          .col-lg-4.mt-3
            .work_detail_list
              div
                h6.text-custom.mb-1 Client:
                p Axzisz Themes
              div
                h6.text-custom.mb-1 Type:
                p UI Elements, Icons
              div
                h6.text-custom.mb-1 Date:
                p 28 January, 2019
              .mt-4
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
    // Start Cta
    section.section
      .container
        .row
          .col-lg-12
            .cta_sec.text-center.text-white.bg-gradient
              h2.font-weight-bold Are You Ready To Enjoy? Get This Perfect Theme Now!
              p.mx-auto.cta-desc.mb-0.mt-4.pt-2
                | It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              .mt-4.pt-3.position-relative.z-index
                a.btn.btn-white.btn-rounded(href="#") Start Trial Free
    // End Cta
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import SubHeader from '~/components/SubHeader.vue';

@Component({
  components: { SubHeader },
})
export default class FieldPower extends Vue {}
</script>
