<template lang="pug">
  div
    SubHeader(title="Real Estate" :namespaces="['products']")
    // Start About Us
    section.section
      .container
        .row
          .col-lg-12
            .section_title.text-center
              p.small_title.mb-4.text-custom.text-uppercase  Let us Guide you Home
              h2.text-capitalize.mx-auto.section_header Real Estate
              p.sec_content.pt-3.text-muted.mx-auto
                | Ziel Investments Limited offers a wide range of fully integrated real estate services for both commercial and residential properties to a diverse clientele.
                br
                | Effective marketing tools and strategies, established through extensive research of the real estate market and customized to current market conditions are used to increase our broad database of buyers, sellers, land lords, tenants and investors. All our services are provided by a team of property specialists who have an in-depth knowledge and expertise in the areas they specialize in.
    // End About Us
    // Start How It Work
    section.section.bg-light
      .container
        .row
          .col-lg-12
            .section_title.text-center
              p.small_title.mb-4.text-custom.text-uppercase Management Team
              h2.text-capitalize.mx-auto.section_header Our Team And Departments
              p.sec_content.pt-3.text-muted.mx-auto
                | The team consists of young, highly motivated and multidisciplinary graduates who are actively involved in consultancy, marketing, development, letting and management of both residential and commercial properties.
        .row.mt-3
          .col-lg-4
            .text-center.position-relative.hit_box.rounded.mt-3
              .hit_number
                h1 1.
              .hit_icon.text-custom
                i.pe-7s-display2
              .hit_content.mt-2
                h5.font-weight-bold Valuation/Consultancy Department
                p.mt-3.text-muted.mb-0 Our real estate experts can help you in Kenya, turn critical and complex real estate issues into opportunities for growth. Also we We undertake valuation of all types of fixed and movable properties including land, buildings, plant, machinery, furniture, office equipment and stock
          .col-lg-4
            .text-center.position-relative.hit_box.rounded.mt-3
              .hit_number
                h1 2.
              .hit_icon.text-custom
                i.pe-7s-door-lock
              .hit_content.mt-2
                h5.font-weight-bold Property Management Department
                p.mt-3.text-muted.mb-0 We know that property owners and investors want to realize maximum ROI (Return on Investment) in their real estate investments for as long as possible. Ziel Investments undertakes management of both commercial and residential properties with a personalized approach to each of its landlords and tenants.
          .col-lg-4
            .text-center.position-relative.hit_box.rounded.mt-3
              .hit_number
                h1 3.
              .hit_icon.text-custom
                i.pe-7s-graph1
              .hit_content.mt-2
                h5.font-weight-bold Agency (Letting and Sales) Department
                p.mt-3.text-muted.mb-0 Giving a property the exposure it deserves to find quality tenants or to sell for the right price requires enormous commitment. We sell and let residential, industrial, commercial and agricultural properties in Kenya.
    // End How It Work
    Cta
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import SubHeader from '~/components/SubHeader.vue';
import Cta from '~/components/Cta.vue';

@Component({
  components: { SubHeader, Cta },
})
export default class RealEstate extends Vue {}
</script>
