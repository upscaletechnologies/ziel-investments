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
                  h1
                    span.text-custom Shop with the best!
                  h1.ml2 We offer our clients the best - experience.
                  p.home_small_content.mt-4.text-muted
                    | Through the application of innovation engineering, we deliver measurably better results.
                  .pt-3
                    nuxt-link.btn.btn-gradient.text-uppercase.mr-2(to="/about-us") Learn More 
                    span.mr-3 or watch us here:
                    a.mr-3.text-white.learn_more.video_home(href="https://www.youtube.com/watch?v=0Xr8uAZvqlc")
                      i.mdi.mdi-play
                  .moeny-more.mt-4.pt-3
                    p.text-custom Drinking water is a lifestyle we provide to you.
              .col-lg-6
                .mt-3
                  img.img-fluid.mx-auto.d-block(src="~assets/images/home-bg-1.jpg" alt="")
      div
        a.scroll.scroll_down(href="#work")
          span
      .curv-img
        svg(xmlns="http://www.w3.org/2000/svg" width="1919.76" height="327.903")
          path(fill="#f8f9fa" d="M1919.76 132.428c-90.511-64.67-174.365-144.792-314.866-123.125-94.441 14.563-142.181 105.921-220.98 148.217-117.85 63.256-155.979 35.449-264.385 14.607-84.57-16.26-117.255-29.063-199.787-.493-84.986 29.419-134.191 125.289-239.288 124.882-121.481-.472-157.447-90.325-248.953-163.594C317.535 41.67 228.822 15.373 79.5 1.958 51.97-.516 25.538-.52 0 1.242v326.661h1919.76V132.428z")
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
const textanimationJs = require('~/assets/js/textanimation.js').default;

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
  mounted() {
    textanimationJs();
  }
  updated() {
    textanimationJs();
  }
  test: string = 'this is a test';
}
</script>
