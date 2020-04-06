<template lang="pug">
  div
    // Start Home
    //- section.position-relative.header_bg.bg-light
    section.position-relative.header_bg
      .home-table
        .home-table-center
          .container.z-index.position-relative
            .row.vertical-content
              .col-lg-6
                .home_content.mt-3
                  p.home_small_title.
                    Welcome To #[span.text-custom Ziel Investments]
                  h1.
                    We give our customers a #[span.text-custom WOW!] class experience.
                  p.home_small_content.mt-4.text-muted
                    | Through innovation engineering applied to digital, we deliver measurably better results.
                  .pt-3
                    nuxt-link.btn.btn-gradient.text-uppercase.mr-2(to="/contact-us") Contact Us
              .col-lg-6
                .mt-3
                  img.img-fluid.mx-auto.d-block(src="~/assets/images/custom/homepage-landing.png" alt="")
      div
        a.scroll.scroll_down(href="#work")
          span
      .curv-img
        img.img-fluid.mx-auto.d-block(src="~/assets/images/wave-static.svg" alt="")
    // End Home
    // Start Client Logo
    //- section.section
      .container
        .row
          .col-lg-3
            .logo_img
              img.mx-auto.img-fluid.d-block(src="~/assets/images/clients/1.png" alt="logo-img")
          .col-lg-3
            .logo_img
              img.mx-auto.img-fluid.d-block(src="~/assets/images/clients/2.png" alt="logo-img")
          .col-lg-3
            .logo_img
              img.mx-auto.img-fluid.d-block(src="~/assets/images/clients/3.png" alt="logo-img")
          .col-lg-3
            .logo_img
              img.mx-auto.img-fluid.d-block(src="~/assets/images/clients/4.png" alt="logo-img")
    // End Client Logo
    // Start About Us
    section.section
      .container
        .row
          .col-lg-12
            .section_title.text-center
              p.small_title.mb-4.text-custom.text-uppercase  Overview
              h2.text-capitalize.mx-auto.section_header Let us empower your business
              p.sec_subtitle.pt-3.text-muted.mx-auto
                | A complete range of technology services delivered with unified purpose
        .row.mt-5
          .col-lg-4
            .text-center.features_axi_box.mt-3.rounded
              .features_axi_icon
                i.mdi.mdi-account-switch
              .features_axi_content.mt-4
                h5 Consulting
                p.mt-3.text-muted.mb-0
                  | Discover the most effective path to success. Our experts provide clear recommendations founded on industry best practices.
                //- .mt-4.features_btn
                  a(href="#")
                    i.mdi.mdi-arrow-right
          .col-lg-4
            .text-center.features_axi_box.active.mt-3.rounded
              .features_axi_icon
                i.mdi.mdi-domain
              .features_axi_content.mt-4
                h5 Implementation
                p.mt-3.text-muted.mb-0
                  | Our technology-agnostic global team has the skill, experience, and collaborative approach needed to realize your digital objectives.
                //- .mt-4.features_btn
                  a(href="#")
                    i.mdi.mdi-arrow-right.text-custom
          .col-lg-4
            .text-center.features_axi_box.mt-3.rounded
              .features_axi_icon
                i.mdi.mdi-message-text
              .features_axi_content.mt-4
                h5 Support
                p.mt-3.text-muted.mb-0
                  | Our onshore-offshore hybrid support model offers proactive and responsive operational assistance with clearly defined SLAs.
                //- .mt-4.features_btn
                  a(href="#")
                    i.mdi.mdi-arrow-right
    // End About Us
    // Start Description
    section.section.bg-features.vertical-content
      .bg-features-overlay
      .container
        .row
          .col-lg-6.offset-lg-6.col-md-12
            .mt-3.features_desc.text-white
              div
                h3.features-heading.text-capitalize Our 3 pillar Approach
                .main-title-border
              .features
                .features-icon.features-left
                  i.mdi.mdi-check
                .features-desc
                  h3.features-title Business focus
                  p.features-sub-title.pt-2
                    | We care deeply about helping you tackle your biggest business challenges and doing what’s right for your business at every step.
              .features
                .features-icon.features-left
                  i.mdi.mdi-check
                .features-desc
                  h3.features-title Technology-fueled innovation
                  p.features-sub-title.pt-2
                    | As technology nerds, we can help you modernize your business using next-gen digital and cloud solutions.
              .features
                .features-icon.features-left
                  i.mdi.mdi-check
                .features-desc
                  h3.features-title Delivery excellence
                  p.features-sub-title.pt-2
                    | With deep knowledge and expertise across many industries and verticals, we deliver high-value, high-quality solutions to support your business growth and objectives.
      .features_side_mockup.d-lg-block.d-xl-block.d-none
        img.img-fluid.mx-auto.d-block(src="~/assets/images/custom/3-pillars.png" alt="")
    // End Description
    // Start Services
    section.section.bg-light
      .container
        .row
          .col-lg-12
            .section_title.text-center
              p.small_title.mb-4.text-custom.text-uppercase  Ultimate Value
              h2.text-capitalize.mx-auto.section_header Driving value across industries
              p.sec_subtitle.pt-3.text-muted.mx-auto
                | Discover how Ziel Investments empowers global industries with high-ROI intelligent solutions
        .row.mt-5
          .col-lg-6
            .mt-3.services_box_side.bg-white.position-relative.clearfix
              .services_icons
                i.pe-7s-home
              .services_content.float-left
                h5.mb-0.font-weight-bold Real Estate
                p.mb-0.mt-3.text-muted
                  | Ziel Investments Limited offers a wide range of fully integrated real estate services for both commercial and residential properties to a diverse clientele.
                .services_more.mt-3
                  nuxt-link.text-muted(to="/products/real-estate")
                    | Read More 
                    i.mdi.mdi-arrow-right
          .col-lg-6
            .mt-3.services_box_side.bg-white.position-relative.clearfix
              .services_icons
                i.pe-7s-drop
              .services_content.float-left
                h5.mb-0.font-weight-bold Ziel Fresh - Bottled Water
                p.mb-0.mt-3.text-muted
                  | Get the most out of every day with the pure, crisp taste of Ziel Fresh water. Fresh, clean, and premium tasting water that is pure and delicious.
                .services_more.mt-3
                  nuxt-link.text-muted(to="/products/ziel-fresh")
                    | Read More 
                    i.mdi.mdi-arrow-right
        .row.mt-5
          .col-lg-6
            .mt-3.services_box_side.bg-white.position-relative.clearfix
              .services_icons
                i.pe-7s-paint-bucket
              .services_content.float-left
                h5.mb-0.font-weight-bold Water Dispensing Automation
                p.mb-0.mt-3.text-muted
                  | Our solution automates the payment and dispensing of water to simplify Water Kiosk operations. We provide 24/7 convenience for the customer, and completely secure revenues.
                .services_more.mt-3
                  nuxt-link.text-muted(to="/products/water-dispensing-automation")
                    | Read More 
                    i.mdi.mdi-arrow-right
          .col-lg-6
            .mt-3.services_box_side.bg-white.position-relative.clearfix
              .services_icons
                i.pe-7s-phone
              .services_content.float-left
                h5.mb-0.font-weight-bold Mobile Banking
                p.mb-0.mt-3.text-muted
                  | A value-added service less than a decade ago, the preferred banking channel of millennials across the globe today, and, possibly the only banking channel that customers will use a decade from now!
                .services_more.mt-3
                  nuxt-link.text-muted(to="/products/mobile-banking")
                    | Read More 
                    i.mdi.mdi-arrow-right
        .row.mt-3
          .col-lg-6
            .mt-3.services_box_side.bg-white.position-relative.clearfix
              .services_icons
                i.pe-7s-map-2
              .services_content.float-left
                h5.mb-0.font-weight-bold Field Power
                p.mb-0.mt-3.text-muted
                  | Customers demand your company to deliver on-time services that they pay for, and your company relies on its back-end office staff and technicians to meet these expectations.
                .services_more.mt-3
                  nuxt-link.text-muted(to="/products/field-power")
                    | Read More 
                    i.mdi.mdi-arrow-right
          .col-lg-6
            .mt-3.services_box_side.bg-white.position-relative.clearfix
              .services_icons
                i.pe-7s-helm
              .services_content.float-left
                h5.mb-0.font-weight-bold Robotic Process Automation
                p.mb-0.mt-3.text-muted
                  | Repetitive manual tasks are monotonous for humans and cumbersome for businesses. RPA helps in automating processes to achieve cost efficiency, agility, and competitiveness
                .services_more.mt-3
                  nuxt-link.text-muted(to="/products/robotic-process-automation")
                    | Read More 
                    i.mdi.mdi-arrow-right
        .row.mt-3
          .col-lg-6
            .mt-3.services_box_side.bg-white.position-relative.clearfix
              .services_icons
                i.pe-7s-car
              .services_content.float-left
                h5.mb-0.font-weight-bold Fleet management
                p.mb-0.mt-3.text-muted
                  | Your vehicles don’t stop when you’re out of the office and your fleet tracking shouldn’t, either. Get comprehensive tracking information.
                .services_more.mt-3
                  nuxt-link.text-muted(to="/products/fleet-management")
                    | Read More 
                    i.mdi.mdi-arrow-right
    // End Services
    Cta
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import Cta from '~/components/Cta.vue';

@Component({
  components: { Cta },
  head() {
    return {
      title: 'Home - zielinvestments.com',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            ' Empowering Businesses. A complete range of technology services delivered with unified purpose. We give our customers a wow class experience. Through innovation engineering applied to digital, we deliver measurably better results.',
        },
      ],
    };
  },
})
export default class RootPage extends Vue {
  test: string = 'this is a test';
}
</script>
