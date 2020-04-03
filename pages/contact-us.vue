<template lang="pug">
  div
    SubHeader(title="Contact Us")
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
                h6 Call or Email At
                a.text-muted.mb-0.mt-3(href='tel: +254 727-238-558') +254 727-238-558
                br
                a.text-muted.mb-0(href='mailto:hello@zielinvestments.com' target="_blank") hello@zielinvestments.com
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
          .col-lg-4
            .contact_icon_box.mt-3.p-4.text-center.rounded.bg-light
              .contact-icon.text-custom
                i.pe-7s-id
              .contact-detail.mt-4
                h6 Our Address
                p.text-muted.mt-3.mb-0
                  | P.O. Box 2488-00502
                  br
                  |  Karen, Nairobi - Kenya
        .row.mt-3.vertical-content
          .col-lg-6
            .mt-3
              img.img-fluid.mx-auto.d-block(src="~/assets/images/custom/call-center.png" alt="")
          .col-lg-6
            .contact_form.mt-3
              form(@submit.prevent="sendContactEmail")
                .row
                  .col-lg-6
                    .form-group.mt-3
                      input#name.form-control(v-model="model.name" type='text' placeholder='Your name...', required)
                  .col-lg-6
                    .form-group.mt-3
                      input#email.form-control(v-model="model.from" name="email" type='email' placeholder='Your email...' required)
                  .col-lg-12
                    .form-group.mt-3
                      input#subject.form-control(v-model="model.subject" type='text' placeholder='Your Subject...')
                .row
                  .col-lg-12
                    .form-group.mt-3
                      textarea#comments.form-control(v-model="model.text" placeholder='Your message...' rows='6' required)
                .row
                  .col-lg-12.text-right
                    input.btn.btn-gradient(type="submit" value="Send Message")
    // End Page
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import axios from 'axios';
import SubHeader from '~/components/SubHeader.vue';

@Component({
  components: { SubHeader },
  head() {
    return {
      title: 'Contact Us - zielinvestments.com',
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
export default class ContactUs extends Vue {
  model: any = {};

  sendContactEmail() {
    const { name, from, subject, text } = this.model;
    if (name && from && text) {
      const data = {
        from: `${name} <${from}>`,
        to: 'zielinvestments@gmail.com',
        subject: subject || 'Enquiry from Ziel Investments website',
        text,
      };
      // send email
      axios.post('https://api.upscaleerp.com/send-mailer', data).then(() => {
        this.model = {};
        alert('Message sent!');
      });
    } else {
      alert('One of the required fields is empty, kindly recheck!');
    }
  }
}
</script>
