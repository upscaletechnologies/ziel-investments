<template lang="pug">
  div
    SubHeader(title="Leadership" :namespaces="['about']")
    // Start Team
    section.section
      .container
        .row
          .col-lg-12
            .section_title.text-center
              p.small_title.mb-4.text-custom.text-uppercase Our Organization
              h2.text-capitalize.mx-auto.section_header We Have Some Awesome People
              p.sec_subtitle.pt-3.text-muted.mx-auto
                | Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
        .row.mt-5
          .col-lg-3
            .team_box_main.mt-3.rounded
              .team_box.pt-4
                .team_img
                  img.img-fluid.mx-auto.d-block.img-thumbnail.rounded-circle(src="~/assets/images/team/team-1.jpg" alt="")
                .team_detail.pl-4.pr-4.text-center.mt-3
                  h6.text-uppercase.mb-0 Scott Ross
                  .team_bor.bg-gradient.mx-auto
                  p.team_work.text-muted CEO/Founder
              .mt-3.text-center.follow_area
                ul.list-inline.follow_team_social.mb-0
                  li.list-inline-item
                    a(href="#")
                      i.mdi.mdi-facebook
                  li.list-inline-item
                    a(href="#")
                      i.mdi.mdi-google
                  li.list-inline-item
                    a(href="#")
                      i.mdi.mdi-twitter
          .col-lg-3
            .team_box_main.mt-3.rounded
              .team_box.pt-4
                .team_img
                  img.img-fluid.mx-auto.d-block.img-thumbnail.rounded-circle(src="~/assets/images/team/team-2.jpg" alt="")
                .team_detail.pl-4.pr-4.text-center.mt-3
                  h6.text-uppercase.mb-0 Kevin Strauser
                  .team_bor.bg-gradient.mx-auto
                  p.team_work.text-muted CTO/Co-Founder
              .mt-3.text-center.follow_area
                ul.list-inline.follow_team_social.mb-0
                  li.list-inline-item
                    a(href="#")
                      i.mdi.mdi-facebook
                  li.list-inline-item
                    a(href="#")
                      i.mdi.mdi-google
                  li.list-inline-item
                    a(href="#")
                      i.mdi.mdi-twitter
          .col-lg-3
            .team_box_main.mt-3.active.rounded
              .team_box.pt-4
                .team_img
                  img.img-fluid.mx-auto.d-block.img-thumbnail.rounded-circle(src="~/assets/images/team/team-3.jpg" alt="")
                .team_detail.pl-4.pr-4.text-center.text-white.mt-3
                  h6.text-uppercase.mb-0 Eunice Spaulding
                  .team_bor.bg-white.mx-auto
                  p.team_work Web Developer
              .mt-3.text-center.follow_area
                ul.list-inline.follow_team_social.mb-0
                  li.list-inline-item
                    a(href="#")
                      i.mdi.mdi-facebook
                  li.list-inline-item
                    a(href="#")
                      i.mdi.mdi-google
                  li.list-inline-item
                    a(href="#")
                      i.mdi.mdi-twitter
          .col-lg-3
            .team_box_main.mt-3.rounded
              .team_box.pt-4
                .team_img
                  img.img-fluid.mx-auto.d-block.img-thumbnail.rounded-circle(src="~/assets/images/team/team-4.jpg" alt="")
                .team_detail.pl-4.pr-4.text-center.mt-3
                  h6.text-uppercase.mb-0 Teresa Morrison
                  .team_bor.bg-gradient.mx-auto
                  p.team_work.text-muted Web Designer
              .mt-3.text-center.follow_area
                ul.list-inline.follow_team_social.mb-0
                  li.list-inline-item
                    a(href="#")
                      i.mdi.mdi-facebook
                  li.list-inline-item
                    a(href="#")
                      i.mdi.mdi-google
                  li.list-inline-item
                    a(href="#")
                      i.mdi.mdi-twitter
        .row.mt-3
          .col-lg-3
            .team_box_main.mt-3.rounded
              .team_box.pt-4
                .team_img
                  img.img-fluid.mx-auto.d-block.img-thumbnail.rounded-circle(src="~/assets/images/team/team-5.jpg" alt="")
                .team_detail.pl-4.pr-4.text-center.mt-3
                  h6.text-uppercase.mb-0 James Emanuel
                  .team_bor.bg-gradient.mx-auto
                  p.team_work.text-muted Senior Web Developer
              .mt-3.text-center.follow_area
                ul.list-inline.follow_team_social.mb-0
                  li.list-inline-item
                    a(href="#")
                      i.mdi.mdi-facebook
                  li.list-inline-item
                    a(href="#")
                      i.mdi.mdi-google
                  li.list-inline-item
                    a(href="#")
                      i.mdi.mdi-twitter
          .col-lg-3
            .team_box_main.mt-3.rounded
              .team_box.pt-4
                .team_img
                  img.img-fluid.mx-auto.d-block.img-thumbnail.rounded-circle(src="~/assets/images/team/team-6.jpg" alt="")
                .team_detail.pl-4.pr-4.text-center.mt-3
                  h6.text-uppercase.mb-0 Neal Lee
                  .team_bor.bg-gradient.mx-auto
                  p.team_work.text-muted Web Designer & Developer
              .mt-3.text-center.follow_area
                ul.list-inline.follow_team_social.mb-0
                  li.list-inline-item
                    a(href="#")
                      i.mdi.mdi-facebook
                  li.list-inline-item
                    a(href="#")
                      i.mdi.mdi-google
                  li.list-inline-item
                    a(href="#")
                      i.mdi.mdi-twitter
          .col-lg-3
            .team_box_main.mt-3.rounded
              .team_box.pt-4
                .team_img
                  img.img-fluid.mx-auto.d-block.img-thumbnail.rounded-circle(src="~/assets/images/team/team-7.jpg" alt="")
                .team_detail.pl-4.pr-4.text-center.mt-3
                  h6.text-uppercase.mb-0 Joann Dubose
                  .team_bor.bg-gradient.mx-auto
                  p.team_work.text-muted UI/UX Designer
              .mt-3.text-center.follow_area
                ul.list-inline.follow_team_social.mb-0
                  li.list-inline-item
                    a(href="#")
                      i.mdi.mdi-facebook
                  li.list-inline-item
                    a(href="#")
                      i.mdi.mdi-google
                  li.list-inline-item
                    a(href="#")
                      i.mdi.mdi-twitter
          .col-lg-3
            .team_box_main.mt-3.rounded
              .team_box.pt-4
                .team_img
                  img.img-fluid.mx-auto.d-block.img-thumbnail.rounded-circle(src="~/assets/images/team/team-8.jpg" alt="")
                .team_detail.pl-4.pr-4.text-center.mt-3
                  h6.text-uppercase.mb-0 Timothy Reno
                  .team_bor.bg-gradient.mx-auto
                  p.team_work.text-muted PHP Developer
              .mt-3.text-center.follow_area
                ul.list-inline.follow_team_social.mb-0
                  li.list-inline-item
                    a(href="#")
                      i.mdi.mdi-facebook
                  li.list-inline-item
                    a(href="#")
                      i.mdi.mdi-google
                  li.list-inline-item
                    a(href="#")
                      i.mdi.mdi-twitter
    // End Team
    Cta
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import SubHeader from '~/components/SubHeader.vue';
import Cta from '~/components/Cta.vue';

@Component({
  components: { SubHeader, Cta },
})
export default class AboutUs extends Vue {}
</script>
