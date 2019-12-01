<template lang="pug">
  div
    SubHeader(title="About Us" :noProducts="true")
    // Start About Us
    section.section
      .container
        .row
          .col-lg-12
            .section_title.text-center
              p.small_title.mb-4.text-custom.text-uppercase  About Us
              h2.text-capitalize.mx-auto.section_header Why We Are Awesome
              p.sec_subtitle.pt-3.text-muted.mx-auto
                | The personal approach towards clients is our main principle.
        .row.mt-5
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
    // End About Us
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
                i.pe-7s-display2
              .hit_content.mt-2
                h5.font-weight-bold Food & Beverage
          .col-lg-3
            .text-center.position-relative.hit_box.rounded.mt-3
              .hit_icon.text-custom
                i.pe-7s-joy
              .hit_content.mt-2
                h5.font-weight-bold Financial Service
          .col-lg-3
            .text-center.position-relative.hit_box.rounded.mt-3
              .hit_icon.text-custom
                i.pe-7s-cloud-upload
              .hit_content.mt-2
                h5.font-weight-bold Public Sector
          .col-lg-3
            .text-center.position-relative.hit_box.rounded.mt-3
              .hit_icon.text-custom
                i.pe-7s-cloud-upload
              .hit_content.mt-2
                h5.font-weight-bold Governance
        .row.mt-3
          .col-lg-3
            .text-center.position-relative.hit_box.rounded.mt-3
              .hit_icon.text-custom
                i.pe-7s-display2
              .hit_content.mt-2
                h5.font-weight-bold Utilities
          .col-lg-3
            .text-center.position-relative.hit_box.rounded.mt-3
              .hit_icon.text-custom
                i.pe-7s-joy
              .hit_content.mt-2
                h5.font-weight-bold Health Care
          .col-lg-3
            .text-center.position-relative.hit_box.rounded.mt-3
              .hit_icon.text-custom
                i.pe-7s-cloud-upload
              .hit_content.mt-2
                h5.font-weight-bold Real Estate
          .col-lg-3
            .text-center.position-relative.hit_box.rounded.mt-3
              .hit_icon.text-custom
                i.pe-7s-cloud-upload
              .hit_content.mt-2
                h5.font-weight-bold Retails
    // End How It Work
    // Start Faq
    //- section.section
      .container
        .row
          .col-lg-12
            .section_title.text-center
              p.small_title.mb-4.text-custom.text-uppercase Frequently Asked Questions
              h2.text-capitalize.mx-auto.section_header Get Every Single Answer From Here.
              p.sec_subtitle.pt-3.text-muted.mx-auto
                | Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
        .row.mt-5.vertical-content
          .col-lg-6
            .faq_img.mt-3
              img.img-fluid.mx-auto.d-block(src="~/assets/images/faq.png" alt="")
          .col-lg-6
            .faq_main.mt-3
              #accordionExample.accordion
                .card
                  #headingOne.card-header
                    h5.mb-0.align-middle(data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne")
                      i.mdi.mdi-help-box.h4
                      span What is Lorem Ipsum?
                  #collapseOne.collapse.show(aria-labelledby="headingOne" data-parent="#accordionExample")
                    .card-body
                      p.mb-0.text-muted
                        | Suspendisse nirtbh finibus efficitur viverra masuada massa mauris suscipit purus pellentesque pharetra. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                .card
                  #headingTwo.card-header
                    h5.collapsed.mb-0(data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo")
                      i.mdi.mdi-help-box.h4
                      span Why use Lorem Ipsum?
                  #collapseTwo.collapse(aria-labelledby="headingTwo" data-parent="#accordionExample")
                    .card-body
                      p.mb-0.text-muted
                        | Maecenas viverra ornare sed maximus libero maximus on faucibus elit efficitur purus sollicitudin libero. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                .card
                  #headingThree.card-header
                    h5.collapsed.mb-0(data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree")
                      i.mdi.mdi-help-box.h4
                      span When can be used?
                  #collapseThree.collapse(aria-labelledby="headingThree" data-parent="#accordionExample")
                    .card-body
                      p.mb-0.text-muted
                        | Donec erat eget ante efficitur eleifend dolor scelerisque erat magna justo carsras condimentum mauada.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                .card
                  #headingzzzzfpor.card-header
                    h5.collapsed.mb-0(data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour")
                      i.mdi.mdi-help-box.h4
                      span WhIs safe use Lorem Ipsum?
                  #collapseFour.collapse(aria-labelledby="headingzzzzfpor" data-parent="#accordionExample")
                    .card-body
                      p.mb-0.text-muted
                        | Vivamus dolor hendrerit tempor elementum Interdum et fames ac ante ipsum primis malesuada in faucibus. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
    // End Faq
    // Start Cta
    section.section
      .container.cta_sec.text-center.text-white.bg-gradient
        .row
          .col-lg-12
            h2.font-weight-bold Ready to Discuss your requirements?
            p.mx-auto.cta-desc.mb-0.mt-4.pt-2
              | Software products that we build help the world's leading brands transform their businesses, increase their revenues and save up to 40% of the time and operating costs.We design, develop and build software products that our customers love.
            .mt-4.pt-3.position-relative.z-index
              nuxt-link.btn.btn-white.btn-rounded(to="/contact-us") Contact Us
    // End Cta
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import SubHeader from '~/components/SubHeader.vue';

@Component({
  components: { SubHeader },
})
export default class AboutUs extends Vue {}
</script>
