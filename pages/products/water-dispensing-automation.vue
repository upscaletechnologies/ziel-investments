<template lang="pug">
  div
    SubHeader(title="Water Dispensing Automation" titleMenu="Jaza Tanki")
    // Start Page
    section.section
      .container
        .row
          .col-lg-12
            .section_title.text-center
              p.small_title.mb-4.text-custom.text-uppercase Jaza Tanki
              h2.text-capitalize.mx-auto.section_header Water Dispensing Automation
              p.sec_content.pt-3.text-muted.mx-auto
                | Our solution automates the payment and dispensing of water to simplify Water Kiosk operations. We provide 24/7 convenience for the customer, and completely secure revenues for the Water Kiosk owner.
        .row.mt-3
          .col-lg-4
            .text-center.position-relative.hit_box.rounded.mt-3
              .hit_icon.text-custom
                i.pe-7s-timer
              .hit_content.mt-2
                h5.font-weight-bold 24/7 Operation
                p.mt-3.text-muted.mb-0
                  | The Water Kiosk can operate 24/7 unattended - reduces operating costs and increases revenue.
          .col-lg-4
            .text-center.position-relative.hit_box.rounded.mt-3
              .hit_icon.text-custom
                i.pe-7s-phone
              .hit_content.mt-2
                h5.font-weight-bold Cashless Payment
                p.mt-3.text-muted.mb-0
                  | Payment is cashless through M-Pesa - cash "loss" completely eliminated.
          .col-lg-4
            .text-center.position-relative.hit_box.rounded.mt-3
              .hit_icon.text-custom
                i.pe-7s-paper-plane
              .hit_content.mt-2
                h5.font-weight-bold Automated
                p.mt-3.text-muted.mb-0
                  | Dispensing of water is automated - over or under-delivery completely eliminated.
    // Start How It Work
    Cta
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import SubHeader from '~/components/SubHeader.vue';
import Cta from '~/components/Cta.vue';

@Component({
  components: { SubHeader, Cta },
})
export default class WaterDispensingAutomation extends Vue {}
</script>
