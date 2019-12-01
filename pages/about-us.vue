<template lang="pug">
  div
    // Start Header
    section.section_page_header.bg-light.section
      .container
        .row.row-xs-center.align-top
          .col-lg-8
            .page_title_main
              h3.mb-0 About Us
          .col-lg-4
            .page_title_list.mt-1.text-right
              ul.list-unstyled.mb-0
                li.list-inline-item
                  a.text-custom(href="#") Home
                li.list-inline-item About Us
    // End Header
    // Start About Us
    section.section
      .container
        .row
          .col-lg-12
            .section_title.text-center
              p.small_title.mb-4.text-custom.text-uppercase  Best Features Axzisz
              h2.text-capitalize.mx-auto.section_header Ultimate xperiences with story, emotion and purpose
              p.sec_subtitle.pt-3.text-muted.mx-auto
                | Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
        .row.mt-5
          .col-lg-4
            .text-center.features_axi_box.mt-3.rounded
              .features_axi_icon
                i.mdi.mdi-airplay
              .features_axi_content.mt-4
                h5 Strategy Solutions
                p.mt-3.text-muted.mb-0
                  | Starting from headers through the footers, every bit of has been engineered for you.
                .mt-4.features_btn
                  a(href="#")
                    i.mdi.mdi-arrow-right
          .col-lg-4
            .text-center.features_axi_box.active.mt-3.rounded
              .features_axi_icon
                i.mdi.mdi-share-variant
              .features_axi_content.mt-4
                h5 Dedicated Support
                p.mt-3.text-muted.mb-0
                  | Forget about limits! Core plugin is the perfect match for. Build and customize your site visually.
                .mt-4.features_btn
                  a(href="#")
                    i.mdi.mdi-arrow-right.text-custom
          .col-lg-4
            .text-center.features_axi_box.mt-3.rounded
              .features_axi_icon
                i.mdi.mdi-monitor-cellphone
              .features_axi_content.mt-4
                h5 Digital Design
                p.mt-3.text-muted.mb-0
                  | Manage theme settings and take full control over your site. Attraction guaranteed.
                .mt-4.features_btn
                  a(href="#")
                    i.mdi.mdi-arrow-right
    // End About Us
    // Start How It Work
    section.section.bg-light
      .container
        .row
          .col-lg-12
            .section_title.text-center
              p.small_title.mb-4.text-custom.text-uppercase How It Work?
              h2.text-capitalize.mx-auto.section_header Work Process In Axzisz
              p.sec_subtitle.pt-3.text-muted.mx-auto
                | Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
        .row.mt-3
          .col-lg-4
            .text-center.position-relative.hit_box.rounded.mt-3
              .hit_number
                h1 1.
              .hit_icon.text-custom
                i.pe-7s-display2
              .hit_content.mt-2
                h5.font-weight-bold Design & Devloping
                p.mt-3.text-muted.mb-0 The leap into electronic typesetting, essentially unchanged.
          .col-lg-4
            .text-center.position-relative.hit_box.rounded.mt-3
              .hit_number
                h1 2.
              .hit_icon.text-custom
                i.pe-7s-joy
              .hit_content.mt-2
                h5.font-weight-bold Testing Project
                p.mt-3.text-muted.mb-0 The leap into electronic typesetting, essentially unchanged.
          .col-lg-4
            .text-center.position-relative.hit_box.rounded.mt-3
              .hit_number
                h1 3.
              .hit_icon.text-custom
                i.pe-7s-cloud-upload
              .hit_content.mt-2
                h5.font-weight-bold Publisher Project
                p.mt-3.text-muted.mb-0 The leap into electronic typesetting, essentially unchanged.
    // End How It Work
    // Start Cta
    section.section
      .container
        .row
          .col-lg-12
            .cta_sec.text-center.text-white.bg-gradient
              h2.text-capitalize Creative & perfect agency to help you.
              p.mx-auto.cta-desc.mb-0.mt-4.pt-2
                | It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              .mt-4.pt-3.position-relative.z-index
                .text-center
                  a.video_presentation_play(href="https://vimeo.com/109054393")
                    i.mdi.mdi-play.presentation_icon
    // End Cta
    // Start Funfact
    section.section.bg-light
      .container
        .row
          .col-lg-12
            .section_title.text-center
              p.small_title.mb-4.text-custom.text-uppercase The Benefits Of Using Axzisz
              h2.text-capitalize.mx-auto.section_header Be Productive. Be Efficient.
              p.sec_subtitle.pt-3.text-muted.mx-auto
                | Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
    section.section.pt-0
      .container
        #counter.row
          .col-lg-12
            .bg-white.bg_funfact.rounded.p-4
              .row
                .col-lg-3
                  .funfact_box.text-white.text-center.p-4
                    h1.features_count.mb-1.font-weight-bold.mt-4(data-count="654") 4
                    p.lan_fun_name.text-white.mb-4 Working Hours
                .col-lg-3
                  .funfact_box_white.text-center.p-4
                    h1.features_count.mb-1.font-weight-bold.mt-4(data-count="1849") 201
                    p.lan_fun_name.mb-4 No. of Clients
                .col-lg-3
                  .funfact_box.text-white.text-center.p-4
                    h1.features_count.mb-1.font-weight-bold.mt-4(data-count="1451") 10
                    p.lan_fun_name.text-white.mb-4 Completed Projects
                .col-lg-3
                  .funfact_box_white.text-center.p-4
                    h1.mb-1.font-weight-bold.mt-4
                      span.features_count(data-count="124") 12
                      span +
                    p.lan_fun_name.mb-4 Team Member
    // End Funfact
    // Start Testimonial
    section.section.bg-light
      .container
        .row
          .col-lg-12
            .section_title.text-center
              p.small_title.mb-4.text-custom.text-uppercase Our Client In Axzisz
              h2.text-capitalize.mx-auto.section_header Testimonial & Review From Our Customers
              p.sec_subtitle.pt-3.text-muted.mx-auto
                | Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
        .row.mt-5
          .col-lg-12
            #owl-demo.owl-carousel
              .text-center.testi_boxes.mt-3.bg-white
                .testi_icon.text-custom
                  i.mdi.mdi-format-quote-open
                .mt-4
                  p.client_review.text-muted.font-italic.text-center " we are axzisz, a design and branding partners worldwide been working in his."
                  .testi_img
                    img.img-fluid.mx-auto.rounded-circle.img-thumbnail.d-block(src="~/assets/images/testi/img-1.png" alt="")
                  p.client_name.text-center.mb-0.mt-3.font-weight-bold - Derrick Marshall, Axzisz
              .text-center.testi_boxes.mt-3.bg-white
                .testi_icon.text-custom
                  i.mdi.mdi-format-quote-open
                .mt-4
                  p.client_review.text-muted.font-italic.text-center " we are axzisz, a design and branding partners worldwide been working in his."
                  .testi_img
                    img.img-fluid.mx-auto.rounded-circle.img-thumbnail.d-block(src="~/assets/images/testi/img-2.png" alt="")
                  p.client_name.text-center.mb-0.mt-3.font-weight-bold - Richard Kirtley, Axzisz
              .text-center.testi_boxes.mt-3.bg-white
                .testi_icon.text-custom
                  i.mdi.mdi-format-quote-open
                .mt-4
                  p.client_review.text-muted.font-italic.text-center " we are axzisz, a design and branding partners worldwide been working in his."
                  .testi_img
                    img.img-fluid.mx-auto.rounded-circle.img-thumbnail.d-block(src="~/assets/images/testi/img-3.png" alt="")
                  p.client_name.text-center.mb-0.mt-3.font-weight-bold - Mathew Herbert, Axzisz
    // End Testimonial
    // Start Faq
    section.section
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
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class AboutUs extends Vue {}
</script>
