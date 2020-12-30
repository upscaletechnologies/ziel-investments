<template lang="pug">
  div
    SubHeader(title="Our Story" :namespaces="['about']")
    
    CoreValues
    // Start How It Work
    section.section.bg-light
      .container
        .row
          .col-lg-12
            .section_title.text-center
              p.small_title.mb-4.text-custom.text-uppercase Industries
              h2.text-capitalize.mx-auto.section_header Industries We Serve
              //- p.sec_subtitle.pt-3.text-muted.mx-auto
                | Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
        .row.mt-3
          .col-lg-3
            .text-center.position-relative.hit_box.rounded.mt-3
              .hit_icon.text-custom
                i.pe-7s-home
              .hit_content.mt-2
                h5.font-weight-bold Real Estate
          .col-lg-3
            .text-center.position-relative.hit_box.rounded.mt-3
              .hit_icon.text-custom
                i.pe-7s-display1
              .hit_content.mt-2
                h5.font-weight-bold Technology
          .col-lg-3
            .text-center.position-relative.hit_box.rounded.mt-3
              .hit_icon.text-custom
                i.pe-7s-drop
              .hit_content.mt-2
                h5.font-weight-bold Food & Beverage
          .col-lg-3
            .text-center.position-relative.hit_box.rounded.mt-3
              .hit_icon.text-custom
                i.pe-7s-cash
              .hit_content.mt-2
                h5.font-weight-bold Financial Service
        .row.mt-3
          .col-lg-3
            .text-center.position-relative.hit_box.rounded.mt-3
              .hit_icon.text-custom
                i.pe-7s-users
              .hit_content.mt-2
                h5.font-weight-bold Governance
          .col-lg-3
            .text-center.position-relative.hit_box.rounded.mt-3
              .hit_icon.text-custom
                i.pe-7s-light
              .hit_content.mt-2
                h5.font-weight-bold Utilities
          .col-lg-3
            .text-center.position-relative.hit_box.rounded.mt-3
              .hit_icon.text-custom
                i.pe-7s-share
              .hit_content.mt-2
                h5.font-weight-bold Public Sector
          .col-lg-3
            .text-center.position-relative.hit_box.rounded.mt-3
              .hit_icon.text-custom
                i.pe-7s-cart
              .hit_content.mt-2
                h5.font-weight-bold Retails
    //- section.section.bg-light
      .container
        .row
          .col-lg-12
            .section_title.text-center
              p.small_title.mb-4.text-custom.text-uppercase Industries
              h2.text-capitalize.mx-auto.section_header Industries We Serve
              //- p.sec_subtitle.pt-3.text-muted.mx-auto
                | Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
        .row.mt-3
          .col-lg-3
            .text-center.position-relative.hit_box.rounded.mt-3
              .hit_icon.text-custom
                i.pe-7s-home
              .hit_content.mt-2
                h5.font-weight-bold Real Estate
          .col-lg-3
            .text-center.position-relative.hit_box.rounded.mt-3
              .hit_icon.text-custom
                i.pe-7s-display1
              .hit_content.mt-2
                h5.font-weight-bold Technology
          .col-lg-3
            .text-center.position-relative.hit_box.rounded.mt-3
              .hit_icon.text-custom
                i.pe-7s-drop
              .hit_content.mt-2
                h5.font-weight-bold Food & Beverage
          .col-lg-3
            .text-center.position-relative.hit_box.rounded.mt-3
              .hit_icon.text-custom
                i.pe-7s-cash
              .hit_content.mt-2
                h5.font-weight-bold Financial Service
        .row.mt-3
          .col-lg-3
            .text-center.position-relative.hit_box.rounded.mt-3
              .hit_icon.text-custom
                i.pe-7s-users
              .hit_content.mt-2
                h5.font-weight-bold Governance
          .col-lg-3
            .text-center.position-relative.hit_box.rounded.mt-3
              .hit_icon.text-custom
                i.pe-7s-light
              .hit_content.mt-2
                h5.font-weight-bold Utilities
          .col-lg-3
            .text-center.position-relative.hit_box.rounded.mt-3
              .hit_icon.text-custom
                i.pe-7s-share
              .hit_content.mt-2
                h5.font-weight-bold Public Sector
          .col-lg-3
            .text-center.position-relative.hit_box.rounded.mt-3
              .hit_icon.text-custom
                i.pe-7s-cart
              .hit_content.mt-2
                h5.font-weight-bold Retails
    // End How It Work
    Cta
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import SubHeader from '~/components/SubHeader.vue';
import CoreValues from '~/components/CoreValues.vue';
import Cta from '~/components/Cta.vue';

@Component({
  components: { SubHeader, CoreValues, Cta },
  head() {
    return {
      title: 'About - zielinvestments.com',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            ' About Us. Our Core Values: Transparent, Authentic, Generous, Fun, Empathetic and Exceptional. Industries We Serve: Real Estate, Technology, Food and Bevarage, Financial Services, Governance, Utilities, Public Sector and Retails ',
        },
      ],
    };
  },
})
export default class AboutUs extends Vue {}
</script>
