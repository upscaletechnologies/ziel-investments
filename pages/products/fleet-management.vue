<template lang="pug">
  div
    SubHeader(title="Fleet Service Management Software" titleMenu="Fleet Management" :namespaces="['products']")
    // Start Page
    section.section
      .container
        .row
          .col-lg-12
            .section_title.text-center
              p.small_title.mb-4.text-custom.text-uppercase  Fleet Management
              h2.text-capitalize.mx-auto.section_header Track, analyze and improve your fleet operations
              p.sec_content.pt-3.text-muted.mx-auto
                | Your vehicles don’t stop when you’re out of the office and your fleet tracking shouldn’t, either. Ducont’s Fleet Management system sends comprehensive tracking information right to your fingertips — anytime, anywhere. Supports both android and iPhone device. Gain visibility into all of your fleet data with organized, detailed fleet reporting tools that are available whenever you need them. It’s simple to create and view dashboards and reports; customized to fit the way you do business.
          //- .col-lg-12
            .mt-3
              img.img-fluid.mx-auto.d-block.rounded(src="~/assets/images/single_work/work_detail.jpg" alt="")
        .row.mt-3
          .col-lg-4
            .text-center.position-relative.hit_box.rounded.mt-3
              .hit_icon.text-custom
                i.pe-7s-users
              .hit_content.mt-2
                h5.font-weight-bold Work together
                p.mt-3.text-muted.mb-0
                  | Empower everyone in your fleet to contribute to its success with unlimited users and flexible permissions.
          .col-lg-4
            .text-center.position-relative.hit_box.rounded.mt-3
              .hit_icon.text-custom
                i.pe-7s-refresh-cloud
              .hit_content.mt-2
                h5.font-weight-bold Manage from anywhere
                p.mt-3.text-muted.mb-0
                  | Manage your fleet from anywhere with intuitive web and smartphone apps designed for busy fleets.
          .col-lg-4
            .text-center.position-relative.hit_box.rounded.mt-3
              .hit_icon.text-custom
                i.pe-7s-note2
              .hit_content.mt-2
                h5.font-weight-bold Reduce data entry
                p.mt-3.text-muted.mb-0
                  | Increase efficiency by automating fleet management tasks such as maintenance scheduling, fuel transactions and more.
    // Start How It Work
    // Start Faq
    section.section.bg-light
      .container
        .row
          .col-lg-12
            .section_title.text-center
              p.small_title.mb-4.text-custom.text-uppercase Benefits
              h2.text-capitalize.mx-auto.section_header How it can help
              //- p.sec_subtitle.pt-3.text-muted.mx-auto
                | Our field service software offers enormous benefits for:
        .row.mt-5.vertical-content
          //- .col-lg-5
            .faq_img.mt-3
              img.img-fluid.mx-auto.d-block(src="~/assets/images/faq.png" alt="")
          .col-lg-12
            .faq_main.mt-3
              #accordionExample.accordion
                .card
                  #headingOne.card-header
                    h5.mb-0.align-middle(data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne")
                      i.mdi.mdi-check-all.h4
                      span GPS and GSM based Vehicle Tracking and Fleet Monitoring System
                  #collapseOne.collapse.show(aria-labelledby="headingOne" data-parent="#accordionExample")
                    .card-body
                      p.mb-0.text-muted
                        | Monitor the location, movements, of your vehicle. This is made possible through an integrated GPS receiver and an electronic GSM device installed in each vehicle, which then communicates with the user and web-based software.
                      p.mb-0.text-muted
                        | You’ll know when a vehicle is started and stopped, as well as its idling status, location, speed, and total hours per day spent driving and how it impacts the fuel consumption, vehicle make and model. Fleet Management Software gives you complete, up-to-the-minute status of your fleet activities in one centralized repository.
                .card
                  #headingTwo.card-header
                    h5.collapsed.mb-0(data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo")
                      i.mdi.mdi-check-all.h4
                      span Improve Your Fleet Knowledge with Interactive Dashboard
                  #collapseTwo.collapse(aria-labelledby="headingTwo" data-parent="#accordionExample")
                    .card-body
                      p.mb-0.text-muted
                        | Fleet management software helps you to view key metrics on fleet at a single glance. Analyze productivity with the idle time chart, compliance and performance analytics and activity Summary report. You can also create custom reports to manage other critical trends related to fleet.
                .card
                  #headingThree.card-header
                    h5.collapsed.mb-0(data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree")
                      i.mdi.mdi-check-all.h4
                      span Improve Your Fleet Efficiency and Lower Operating Costs
                  #collapseThree.collapse(aria-labelledby="headingThree" data-parent="#accordionExample")
                    .card-body
                      p.mb-0.text-muted
                        | Provides businesses to manage fleets with real-time visibility of vehicle location and status. Know what's going on in the field so you can dispatch more efficiently, improve customer service and reduce time spent calling drivers for updates. Ducont’s Fleet Management Software also triggers alerts based on the device inputs, fences, and scheduled triggering points. These reactive features enable intelligent business decisions to be made quickly in order to run the most efficient fleet possible.
    // End Faq
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
      title: 'Fleet Management - zielinvestments.com',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            ' Track, analyze and improve your fleet operations. Your vehicles don’t stop when you’re out of the office and your fleet tracking shouldn’t, either. Ducont’s Fleet Management system sends comprehensive tracking information right to your fingertips — anytime, anywhere. Supports both android and iPhone device. Gain visibility into all of your fleet data with organized, detailed fleet reporting tools that are available whenever you need them. It’s simple to create and view dashboards and reports; customized to fit the way you do business. ',
        },
      ],
    };
  },
})
export default class FleetManagement extends Vue {}
</script>
