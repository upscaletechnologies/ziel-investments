<template lang="pug">
  div
    // Start Header
    section.section_page_header.bg-light.section
      .container
        .row.row-xs-center.align-top
          .col-lg-8
            .page_title_main
              h3.mb-0 Contact Us
          .col-lg-4
            .page_title_list.mt-1.text-right
              ul.list-unstyled.mb-0
                li.list-inline-item
                  a.text-custom(href="#") Home
                li.list-inline-item Contact Us
    // End Header
    // Start Page
    section.section
      .container
        .row
          .col-lg-12
            .section_title.text-center
              p.small_title.mb-4.text-custom.text-uppercase  Get In Touch
              p
              h2.text-capitalize.mx-auto.section_header Have Any Questions?
              p.sec_subtitle.pt-3.text-muted.mx-auto
                | Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
        .row.mt-5
          .col-lg-4
            .contact_icon_box.mt-3.p-4.text-center.rounded.bg-light
              .contact-icon.text-custom
                i.pe-7s-phone
              .contact-detail.mt-4
                h6 Call Us On
                p.text-muted.mb-0.mt-3 +0123 8123 7856
                p.text-muted.mb-0 +123 123 7856
          .col-lg-4
            .contact_icon_box.mt-3.p-4.text-center.rounded.bg-light
              .contact-icon.text-custom
                i.pe-7s-mail
              .contact-detail.mt-4
                h6 Email Us At
                p.text-muted.mb-0.mt-3 Website.infotech@gmail.com
                p.text-muted.mb-0 support@Website.com
          .col-lg-4
            .contact_icon_box.mt-3.p-4.text-center.rounded.bg-light
              .contact-icon.text-custom
                i.pe-7s-map-marker
              .contact-detail.mt-4
                h6 Visit Office
                p.text-muted.mt-3.mb-0
                  | 4303 Ingram Street Dayton,
                  br
                  |  OH 45402
        .row.mt-3.vertical-content
          .col-lg-6
            .mt-3
              img.img-fluid.mx-auto.d-block(src="~/assets/images/contact.png" alt="")
          .col-lg-6
            .contact_form.mt-3
              form
                .row
                  .col-lg-6
                    .form-group.mt-3
                      input#name.form-control(name="name" type="text" placeholder="Your name..." required="")
                  .col-lg-6
                    .form-group.mt-3
                      input#email.form-control(name="email" type="email" placeholder="Your email..." required="")
                  .col-lg-12
                    .form-group.mt-3
                      input#subject.form-control(type="text" placeholder="Your Subject.." required="")
                .row
                  .col-lg-12
                    .form-group.mt-3
                      textarea#comments.form-control(name="comments" rows="6" placeholder="Your message..." required="")
                .row
                  .col-lg-12.text-right
                    input.btn.btn-gradient(type="submit" value="Send Message")
    // End Page
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class RootPage extends Vue {}
</script>
