<template lang="pug">
  div
    SubHeader(title="Our Story" :namespaces="['about']")
    // Start About Us
    section.section.pb-0
      .container
        .row
          .col-lg-12
            .section_title.text-center
              p.small_title.mb-4.text-custom.text-uppercase  About Us
              h2.text-capitalize.mx-auto.section_header Our Core Values
              //- p.sec_subtitle.pt-3.text-muted.mx-auto
                //- | The personal approach towards clients is our main principle.
                | Through innovation engineering applied to digital, we deliver measurably better results.
                | We spark change to disrupt and unlock new value that surpasses clients’ wildest expectations
        
        .row
          .col-12.col-md-4.icon-card-col.d-flex.mb-3.text-center
            .card.icon-card.card-no-border.background-ultra-light-gray.darker
              .card-body.py-4.features_axi_content
                .mb-3
                  img(src="~/assets/images/icons/transparent.svg" alt="Transparent")
                h5 Transparent
                p.text-muted
                  | We believe open, accessible information is the best way to help others. We will represent ourselves and our intentions honestly to our coworkers and to our customers, sharing as much of the truth as we can without sacrificing our other values.
          .col-12.col-md-4.icon-card-col.d-flex.mb-3.text-center
            .card.icon-card.card-no-border.background-ultra-light-gray.darker
              .card-body.py-4.features_axi_content
                .mb-3
                  img(src="~/assets/images/icons/authentic.svg" alt="Authentic")
                h5 Authentic
                p.text-muted
                  | We believe in being the same people we are online and offline, in the office and outside of it. We deeply respect and strongly encourage free expression about our differences in opinion and diversity of backgrounds in an environment that nurtures and supports us all.
          .col-12.col-md-4.icon-card-col.d-flex.mb-3.text-center
            .card.icon-card.card-no-border.background-ultra-light-gray.darker
              .card-body.py-4.features_axi_content
                .mb-3
                  img(src="~/assets/images/icons/generous.svg" alt="Generous")
                h5 Generous
                p.text-muted
                  | We will over-deliver when we can, providing our community and our customers with more than their money’s worth. We believe in giving back without asking for anything in return and that providing value and help to others is its own reward.
          .col-12.col-md-4.icon-card-col.d-flex.mb-3.text-center
            .card.icon-card.card-no-border.background-ultra-light-gray.darker
              .card-body.py-4.features_axi_content
                .mb-3
                  img(src="~/assets/images/icons/fun.svg" alt="Fun")
                h5 Fun
                p.text-muted
                  | We strive to make our work more enjoyable and not take ourselves too seriously. We're dedicated to creating and maintaining a friendly, relaxed work environment, and make every effort to bring positivity to our customers and community.
          .col-12.col-md-4.icon-card-col.d-flex.mb-3.text-center
            .card.icon-card.card-no-border.background-ultra-light-gray.darker
              .card-body.py-4.features_axi_content
                .mb-3
                  img(src="~/assets/images/icons/empathetic.svg" alt="Empathetic")
                h5 Empathetic
                p.text-muted
                  | Ziel Investments is a safe place where we work to see things from other people's perspectives. We will treat others the way we wish to be treated: with respect for their thoughts, feelings, and opinions. We will work hard to ensure our community lives this value as well.
          .col-12.col-md-4.icon-card-col.d-flex.mb-3.text-center
            .card.icon-card.card-no-border.background-ultra-light-gray.darker
              .card-body.py-4.features_axi_content
                .mb-3
                  img(src="~/assets/images/icons/exceptional.svg" alt="Exceptional")
                h5 Exceptional
                p.text-muted
                  | The exception to the rule, we will avoid the assumption that existing norms are the right path. We choose to build our products and company in a way that critically examines best practices, often paving our own better path forward.

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
import Cta from '~/components/Cta.vue';

@Component({
  components: { SubHeader, Cta },
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
