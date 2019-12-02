<template lang="pug">
  // Start Footer
  footer.pt-5.pb-5.footer_detail
    .container
      .row
        .col-lg-6
          .mt-3
            img.img-fluid.footer_logo(src="~/assets/images/logo-light.png" alt="")
          .mt-4
            p.mb-2
              i.mdi.mdi-map-marker
              | Hurlingham, Argwings Kodhek Close, Devsons Court
              | Nairobi, Kenya
            //- p.mb-2
              i.mdi.mdi-cellphone
              |  +123 7854 1263
            p.mb-2
              i.mdi.mdi-email-outline
              |  info@zielinvestments.com
            ul.list-inline.fot_social.mt-4
              li.list-inline-item
                a.social-icon(href="")
                  i.mdi.mdi-facebook
              li.list-inline-item
                a.social-icon(href="")
                  i.mdi.mdi-twitter
              li.list-inline-item
                a.social-icon(href="")
                  i.mdi.mdi-linkedin
              li.list-inline-item
                a.social-icon(href="")
                  i.mdi.mdi-google-plus
        .col-lg-2
          h6.mt-3.text-white.font-weight-normal Our Pages
          .footer_title_border
          ul.list-unstyled.footer_menu_list.mb-0.mt-4
            li
              a(href="#") Home
            li
              a(href="#") About
            li
              a(href="#") Services
            li
              a(href="#") Client
            li
              a(href="#") Contact
        .col-lg-2
          h6.mt-3.text-white.font-weight-normal Help Center
          .footer_title_border
          ul.list-unstyled.footer_menu_list.mb-0.mt-4
            li
              a(href="#") Accounting
            li
              a(href="#") Billing
            li
              a(href="#") General Question
        .col-lg-2
          h6.mt-3.text-white.font-weight-normal Locations
          .footer_title_border
          ul.list-unstyled.footer_menu_list.mb-0.mt-4
            li
              a(href="#") Melbourne
            li
              a(href="#") London
            li
              a(href="#") New York
            li
              a(href="#") San Francisco
            li
              a(href="#") Ontario
      .row.mt-5
        .col-lg-12
          .text-center
            p.copy-rights.mb-0
              | © {{new Date().getFullYear()}} Ziel Investments - Crafted with 
              i.mdi.mdi-heart.text-custom
              |  by 
              a.footer_link(href="https://upscaletechnologies.com/" target="_blank") Upscale Technologies
              | .
  // End Footer
</template>
