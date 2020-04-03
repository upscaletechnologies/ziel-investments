<template lang="pug">
  div
    SubHeader(title="Mobile Banking Solutions" titleMenu="Mobile Banking" :namespaces="['products']")
    // Start Page
    section.section
      .container
        .row
          .col-lg-12
            .section_title.text-center
              p.small_title.mb-4.text-custom.text-uppercase  Be equiped for tommorrow's innovations
              h2.text-capitalize.mx-auto.section_header Mobile banking by itself is no longer enough!
              p.sec_content.pt-3.text-muted.mx-auto
                | A value-added service less than a decade ago, the preferred banking channel of millennials across the globe today, and, possibly the only banking channel that customers will use a decade from now!
              p.sec_content.pt-3.text-muted.mx-auto
                | In such a scenario, banks cannot afford to relax! Barely offering a plain-vanilla mobile banking solution in a market wherein disruption has become the norm can be suicidal. Disruptions such as cloud-based deployments, distributed ledgers, location-based services, banking through wearables, and so on signify a customer-centric, rather than a product-centric approach to banking.
          //- .col-lg-12
            .mt-3
              img.img-fluid.mx-auto.d-block.rounded(src="~/assets/images/single_work/work_detail.jpg" alt="")
        .row.mt-3
          .col-lg-3
            .text-center.position-relative.hit_box.rounded.mt-3
              .hit_icon.text-custom
                i.pe-7s-headphones
              .hit_content.mt-2
                h5.font-weight-bold 24/7/365 Banking
          .col-lg-3
            .text-center.position-relative.hit_box.rounded.mt-3
              .hit_icon.text-custom
                i.pe-7s-refresh-cloud
              .hit_content.mt-2
                h5.font-weight-bold Cloud deployment
          .col-lg-3
            .text-center.position-relative.hit_box.rounded.mt-3
              .hit_icon.text-custom
                i.pe-7s-plugin
              .hit_content.mt-2
                h5.font-weight-bold Easy integration
          .col-lg-3
            .text-center.position-relative.hit_box.rounded.mt-3
              .hit_icon.text-custom
                i.pe-7s-id
              .hit_content.mt-2
                h5.font-weight-bold Biometric Authentication
    // Start How It Work
    section.section.bg-light
      .container
        .row
          .col-lg-12
            .section_title.text-center
              //- p.small_title.mb-4.text-custom.text-uppercase The Bank Companion
              h2.text-capitalize.mx-auto.section_header The Ducont Bank Companion
              p.sec_content.pt-3.text-muted.mx-auto
                | The mobile banking solution that equips your bank today for tomorrow’s innovations.
              p.sec_content.pt-3.text-muted.mx-auto
                | An out-of-the-box solution that enables immediate roll-out of mobile banking capabilities. The Bank.Companion is a leading mobile banking solution deployed in more than 35 banks across the globe, including ING Bank, Bank Muscat, Rakbank etc.. The Bank.Companion can be offered on the IBM Mobile First Platform, on Android, iOS as well as html and can seamlessly integrate with your bank’s legacy core systems. Offering seamless integration across multiple touch-points through a robust mobile banking middleware, the Bank.Companion can also offer multiple deployment models, both on-premise and cloud-based.
    // End How It Work
    // Start How It Work
    section.section
      .container
        .row
          .col-lg-12
            .section_title.text-center
              //- p.small_title.mb-4.text-custom.text-uppercase The Bank Companion
              h2.text-capitalize.mx-auto.section_header Ducont’s Omni Channel Banking Software
              p.sec_content.pt-3.text-muted.mx-auto
                | Opportunities to create value in banking sector have swiftly shifted from products to customer experience, particularly in today's omni-channel environment.
              p.sec_content.pt-3.text-muted.mx-auto
                | An out-of-the-box solution that enables immediate roll-out of mobile banking capabilities. The Bank.Companion is a leading mobile banking solution deployed in more than 35 banks across the globe, including ING Bank, Bank Muscat, Rakbank etc.. The Bank.Companion can be offered on the IBM Mobile First Platform, on Android, iOS as well as html and can seamlessly integrate with your bank’s legacy core systems. Offering seamless integration across multiple touch-points through a robust mobile banking middleware, the Bank.Companion can also offer multiple deployment models, both on-premise and cloud-based.
    // End How It Work
    // Start How It Work
    section.section.bg-light
      .container
        .row
          .col-lg-12
            .section_title.text-center
              //- p.small_title.mb-4.text-custom.text-uppercase The Bank Companion
              h2.text-capitalize.mx-auto.section_header Why Ducont Bank.Companion?
              p.sec_content.pt-3.text-muted.mx-auto
                ul.list-unstyled
                  li 24/7/365 banking offering better customer engagement
                  li Biometric and multi-factor authentication for enhanced security
                  li PCI-DSS compliant
                  li Enables seamless, Omni-channel customer experience
                  li Device, form-factor, and platform agnostic
                  li Support administered by SLAs
                  li Proprietary middleware
                  li
                    | Easy integration with legacy core banking systems as well as componentized architectures
                  li Enables cloud deployment
                  li Single framework with multi-play approach
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
      title: 'Mobile Banking - zielinvestments.com',
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
export default class MobileBanking extends Vue {}
</script>
