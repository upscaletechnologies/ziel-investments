<template lang="pug">
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
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Cta extends Vue {}
</script>
