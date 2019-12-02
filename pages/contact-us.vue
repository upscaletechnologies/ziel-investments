<template lang="pug">
  div
    SubHeader(title="Contact Us" :noProducts="true")
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
                | We’re always happy to hear from prospective or existing clients, partners, friends, competitors – pretty much anybody.
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
                a.text-muted.mb-0.mt-3(href='mailto:info@zielinvestments.com' target="_blank")
                  i.fa.fa-envelope-o
                  | info@zielinvestments.com
                br
                a.text-muted.mb-0.mt-3(href='mailto:contact@zielinvestments.com' target="_blank")
                  i.fa.fa-envelope-o
                  | contact@zielinvestments.com
          .col-lg-4
            .contact_icon_box.mt-3.p-4.text-center.rounded.bg-light
              .contact-icon.text-custom
                i.pe-7s-map-marker
              .contact-detail.mt-4
                h6 Visit Office
                p.text-muted.mt-3.mb-0
                  | Hurlingham, Argwings Kodhek Close, Devsons Court
                  br
                  |  Nairobi, Kenya
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
import SubHeader from '~/components/SubHeader.vue';

@Component({
  components: { SubHeader },
})
export default class ContactUs extends Vue {}
</script>
