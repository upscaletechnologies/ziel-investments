<template lang="pug">
  div
    // Start Home
    section.position-relative.header_bg
      .home-table
        .home-table-center
          .container.z-index.position-relative
            .row.vertical-content
              .col-lg-6
                .home_content.mt-3
                  p.home_small_title
                    | Welcome To The 
                    span.text-custom Axzisz
                  h1
                    span.text-custom Axzisz
                    |  Design & Development Minimal Business Agency.
                  p.home_small_content.mt-4.text-muted Designed for Web Agencies and studios, also suitable for freelancers.
                  .pt-3
                    a.btn.btn-gradient.text-uppercase.mr-2(href="#") Get Started
                    span.mr-3 or
                    a.mr-3.text-white.learn_more.video_home(href="https://www.youtube.com/watch?v=0Xr8uAZvqlc")
                      i.mdi.mdi-play
                  .moeny-more.mt-4.pt-3
                    p.text-custom 15 days money-back guarantee
              .col-lg-6
                .mt-3
                  img.img-fluid.mx-auto.d-block(src="~/assets/images/home_side.jpg" alt="")
      div
        a.scroll.scroll_down(href="#work")
          span
      .curv-img
        svg(xmlns="http://www.w3.org/2000/svg" width="1919.76" height="327.903")
          path(fill="#f8f9fa" d="M1919.76 132.428c-90.511-64.67-174.365-144.792-314.866-123.125-94.441 14.563-142.181 105.921-220.98 148.217-117.85 63.256-155.979 35.449-264.385 14.607-84.57-16.26-117.255-29.063-199.787-.493-84.986 29.419-134.191 125.289-239.288 124.882-121.481-.472-157.447-90.325-248.953-163.594C317.535 41.67 228.822 15.373 79.5 1.958 51.97-.516 25.538-.52 0 1.242v326.661h1919.76V132.428z")
    // End Home
    // Start Client Logo
    section.section
      .container
        .row
          .col-lg-3
            .logo_img
              img.mx-auto.img-fluid.d-block(src="~/assets/images/clients/1.png" alt="logo-img")
          .col-lg-3
            .logo_img
              img.mx-auto.img-fluid.d-block(src="~/assets/images/clients/2.png" alt="logo-img")
          .col-lg-3
            .logo_img
              img.mx-auto.img-fluid.d-block(src="~/assets/images/clients/3.png" alt="logo-img")
          .col-lg-3
            .logo_img
              img.mx-auto.img-fluid.d-block(src="~/assets/images/clients/4.png" alt="logo-img")
    // End Client Logo
    // Start About Us
    section.section
      .container
        .row
          .col-lg-12
            .section_title.text-center
              p.small_title.mb-4.text-custom.text-uppercase  Best Features Axzisz
              h2.text-capitalize.mx-auto.section_header Ultimate xperiences with story, emotion and purpose
              p.sec_subtitle.pt-3.text-muted.mx-auto
                | Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
        .row.mt-5
          .col-lg-4
            .text-center.features_axi_box.mt-3.rounded
              .features_axi_icon
                i.mdi.mdi-airplay
              .features_axi_content.mt-4
                h5 Strategy Solutions
                p.mt-3.text-muted.mb-0
                  | Starting from headers through the footers, every bit of has been engineered for you.
                .mt-4.features_btn
                  a(href="#")
                    i.mdi.mdi-arrow-right
          .col-lg-4
            .text-center.features_axi_box.active.mt-3.rounded
              .features_axi_icon
                i.mdi.mdi-share-variant
              .features_axi_content.mt-4
                h5 Dedicated Support
                p.mt-3.text-muted.mb-0
                  | Forget about limits! Core plugin is the perfect match for. Build and customize your site visually.
                .mt-4.features_btn
                  a(href="#")
                    i.mdi.mdi-arrow-right.text-custom
          .col-lg-4
            .text-center.features_axi_box.mt-3.rounded
              .features_axi_icon
                i.mdi.mdi-monitor-cellphone
              .features_axi_content.mt-4
                h5 Digital Design
                p.mt-3.text-muted.mb-0
                  | Manage theme settings and take full control over your site. Attraction guaranteed.
                .mt-4.features_btn
                  a(href="#")
                    i.mdi.mdi-arrow-right
    // End About Us
    // Start Description
    section.section.bg-features.vertical-content
      .bg-features-overlay
      .container
        .row
          .col-lg-6.offset-lg-6.col-md-12
            .mt-3.features_desc.text-white
              div
                h3.features-heading.text-capitalize It’s all about innovate your business
                .main-title-border
              .features
                .features-icon.features-left
                  i.mdi.mdi-check
                .features-desc
                  h3.features-title Clean & Minimal Design
                  p.features-sub-title.pt-2
                    | You want customer to your store. Easily publish your coupans and when a user has manage to catch one of your coupens.
              .features
                .features-icon.features-left
                  i.mdi.mdi-check
                .features-desc
                  h3.features-title Planing & Strategy
                  p.features-sub-title.pt-2
                    | You want customer to your store. Easily publish your coupans and when a user has manage to catch one of your coupens.
              .features
                .features-icon.features-left
                  i.mdi.mdi-check
                .features-desc
                  h3.features-title Elegant & Modern Design
                  p.features-sub-title.pt-2
                    | You want customer to your store. Easily publish your coupans and when a user has manage to catch one of your coupens.
      .features_side_mockup.d-lg-block.d-xl-block.d-none
        img.img-fluid.mx-auto.d-block(src="~/assets/images/desk.png" alt="")
    // End Description
    // Start Services
    section.section.bg-light
      .container
        .row
          .col-lg-12
            .section_title.text-center
              p.small_title.mb-4.text-custom.text-uppercase  Best Services
              h2.text-capitalize.mx-auto.section_header Grow Business With Axzisz
              p.sec_subtitle.pt-3.text-muted.mx-auto
                | Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
        .row.mt-5
          .col-lg-6
            .mt-3.services_box_side.bg-white.position-relative.clearfix
              .services_icons
                i.pe-7s-tools
              .services_content.float-left
                h5.mb-0.font-weight-bold Graphic Design
                p.mb-0.mt-3.text-muted
                  | The standard chunk of Lorem Ipsum used since the is reproduced below for those interested.
                .services_more.mt-3
                  a.text-muted(href="#")
                    | Read More 
                    i.mdi.mdi-arrow-right
          .col-lg-6
            .mt-3.services_box_side.bg-white.position-relative.clearfix
              .services_icons
                i.pe-7s-display1
              .services_content.float-left
                h5.mb-0.font-weight-bold Unlimited Color
                p.mb-0.mt-3.text-muted
                  | The standard chunk of Lorem Ipsum used since the is reproduced below for those interested.
                .services_more.mt-3
                  a.text-muted(href="#")
                    | Read More 
                    i.mdi.mdi-arrow-right
        .row.mt-3
          .col-lg-6
            .mt-3.services_box_side.bg-white.position-relative.clearfix
              .services_icons
                i.pe-7s-helm
              .services_content.float-left
                h5.mb-0.font-weight-bold Unlimited Wifi
                p.mb-0.mt-3.text-muted
                  | The standard chunk of Lorem Ipsum used since the is reproduced below for those interested.
                .services_more.mt-3
                  a.text-muted(href="#")
                    | Read More 
                    i.mdi.mdi-arrow-right
          .col-lg-6
            .mt-3.services_box_side.bg-white.position-relative.clearfix
              .services_icons
                i.pe-7s-science
              .services_content.float-left
                h5.mb-0.font-weight-bold Media Marketing
                p.mb-0.mt-3.text-muted
                  | The standard chunk of Lorem Ipsum used since the is reproduced below for those interested.
                .services_more.mt-3
                  a.text-muted(href="#")
                    | Read More 
                    i.mdi.mdi-arrow-right
    // End Services
    // Start Price
    section.section
      .container
        .row
          .col-lg-12
            .section_title.text-center
              p.small_title.mb-4.text-custom.text-uppercase Price & Plans
              h2.text-capitalize.mx-auto.section_header Choose A Plan That's Right For You.
              p.sec_subtitle.pt-3.text-muted.mx-auto
                | Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
        .row.mt-5
          .col-lg-4
            .mt-3.plan_price_box.rounded
              .plan_name.text-center
                p.text-white Starter Plan
              .plan_price.pt-3.text-center
                p.mb-0.font-weight-bold
                  | $29
                  sub.text-custom /Per Month
              .plan_divider
              .plan_features.mt-5.text-muted
                p
                  i.mdi.mdi-google-circles-extended.text-custom
                  | Project: 
                  span.font-weight-bold.text-dark 10
                p
                  i.mdi.mdi-google-circles-extended.text-custom
                  | Wordpress Theme
                p
                  i.mdi.mdi-google-circles-extended.text-custom
                  | Support: 
                  span.font-weight-bold.text-dark No
                p
                  i.mdi.mdi-google-circles-extended.text-custom
                  | 10 Domain
              .text-center.mt-5
                a.btn.btn-custom.btn-rounded.w-75(href="#") Choose Plan
          .col-lg-4
            .mt-3.plan_price_box.position-relative.active.rounded
              .lable.d-inline-block
                h6.mb-0.text-white.text-uppercase Popular
              .plan_name.text-center
                p.text-white Enterprice Plan
              .plan_price.pt-3.text-center
                p.mb-0.font-weight-bold
                  | $39
                  sub.text-custom /Per Month
              .plan_divider
              .plan_features.mt-5.text-muted
                p
                  i.mdi.mdi-google-circles-extended.text-custom
                  | Project: 
                  span.font-weight-bold.text-dark 30
                p
                  i.mdi.mdi-google-circles-extended.text-custom
                  | Wordpress Theme
                p
                  i.mdi.mdi-google-circles-extended.text-custom
                  | Support: 
                  span.font-weight-bold.text-dark Yes
                p
                  i.mdi.mdi-google-circles-extended.text-custom
                  | 30 Domain
              .text-center.mt-5
                a.btn.btn-custom.btn-rounded.w-75(href="#") Choose Plan
          .col-lg-4
            .mt-3.plan_price_box.rounded
              .plan_name.text-center
                p.text-white Unlimited Plan
              .plan_price.pt-3.text-center
                p.mb-0.font-weight-bold
                  | $49
                  sub.text-custom /Per Month
              .plan_divider
              .plan_features.mt-5.text-muted
                p
                  i.mdi.mdi-google-circles-extended.text-custom
                  | Project: 
                  span.font-weight-bold.text-dark 60
                p
                  i.mdi.mdi-google-circles-extended.text-custom
                  | Wordpress Theme
                p
                  i.mdi.mdi-google-circles-extended.text-custom
                  | Support: 
                  span.font-weight-bold.text-dark Yes
                p
                  i.mdi.mdi-google-circles-extended.text-custom
                  span.font-weight-bold.text-dark Unlimited
                  |  Domain
              .text-center.mt-5
                a.btn.btn-custom.btn-rounded.w-75(href="#") Choose Plan
    // End Price
    // Start Cta
    section.section
      .container
        .row
          .col-lg-12
            .cta_sec.text-center.text-white.bg-gradient
              h2.font-weight-bold Are You Ready To Enjoy? Get This Perfect Theme Now!
              p.mx-auto.cta-desc.mb-0.mt-4.pt-2
                | It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              .mt-4.pt-3.position-relative.z-index
                a.btn.btn-white.btn-rounded(href="#") Start Trial Free
    // End Cta
    // Start Funfact
    section.section.bg-light
      .container
        .row
          .col-lg-12
            .section_title.text-center
              p.small_title.mb-4.text-custom.text-uppercase The Benefits Of Using Axzisz
              h2.text-capitalize.mx-auto.section_header Be Productive. Be Efficient.
              p.sec_subtitle.pt-3.text-muted.mx-auto
                | Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
    section.section.pt-0
      .container
        #counter.row
          .col-lg-12
            .bg-white.bg_funfact.rounded.p-4
              .row
                .col-lg-3
                  .funfact_box.text-white.text-center.p-4
                    h1.features_count.mb-1.font-weight-bold.mt-4(data-count="654") 4
                    p.lan_fun_name.text-white.mb-4 Working Hours
                .col-lg-3
                  .funfact_box_white.text-center.p-4
                    h1.features_count.mb-1.font-weight-bold.mt-4(data-count="1849") 201
                    p.lan_fun_name.mb-4 No. of Clients
                .col-lg-3
                  .funfact_box.text-white.text-center.p-4
                    h1.features_count.mb-1.font-weight-bold.mt-4(data-count="1451") 10
                    p.lan_fun_name.text-white.mb-4 Completed Projects
                .col-lg-3
                  .funfact_box_white.text-center.p-4
                    h1.mb-1.font-weight-bold.mt-4
                      span.features_count(data-count="124") 12
                      span +
                    p.lan_fun_name.mb-4 Team Member
    // End Funfact
    // Start Team
    section.section
      .container
        .row
          .col-lg-12
            .section_title.text-center
              p.small_title.mb-4.text-custom.text-uppercase Team Member
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
    // End Team
    // Start Testimonial
    section.section.bg-light
      .container
        .row
          .col-lg-12
            .section_title.text-center
              p.small_title.mb-4.text-custom.text-uppercase Our Client In Axzisz
              h2.text-capitalize.mx-auto.section_header Testimonial & Review From Our Customers
              p.sec_subtitle.pt-3.text-muted.mx-auto
                | Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
        .row.mt-5
          .col-lg-12
            #owl-demo.owl-carousel
              .text-center.testi_boxes.mt-3.bg-white
                .testi_icon.text-custom
                  i.mdi.mdi-format-quote-open
                .mt-4
                  p.client_review.text-muted.font-italic.text-center " we are axzisz, a design and branding partners worldwide been working in his."
                  .testi_img
                    img.img-fluid.mx-auto.rounded-circle.img-thumbnail.d-block(src="~/assets/images/testi/img-1.png" alt="")
                  p.client_name.text-center.mb-0.mt-3.font-weight-bold - Derrick Marshall, Axzisz
              .text-center.testi_boxes.mt-3.bg-white
                .testi_icon.text-custom
                  i.mdi.mdi-format-quote-open
                .mt-4
                  p.client_review.text-muted.font-italic.text-center " we are axzisz, a design and branding partners worldwide been working in his."
                  .testi_img
                    img.img-fluid.mx-auto.rounded-circle.img-thumbnail.d-block(src="~/assets/images/testi/img-2.png" alt="")
                  p.client_name.text-center.mb-0.mt-3.font-weight-bold - Richard Kirtley, Axzisz
              .text-center.testi_boxes.mt-3.bg-white
                .testi_icon.text-custom
                  i.mdi.mdi-format-quote-open
                .mt-4
                  p.client_review.text-muted.font-italic.text-center " we are axzisz, a design and branding partners worldwide been working in his."
                  .testi_img
                    img.img-fluid.mx-auto.rounded-circle.img-thumbnail.d-block(src="~/assets/images/testi/img-3.png" alt="")
                  p.client_name.text-center.mb-0.mt-3.font-weight-bold - Mathew Herbert, Axzisz
    // End Testimonial
    // Start Faq
    section.section
      .container
        .row
          .col-lg-12
            .section_title.text-center
              p.small_title.mb-4.text-custom.text-uppercase Frequently Asked Questions
              h2.text-capitalize.mx-auto.section_header Get Every Single Answer From Here.
              p.sec_subtitle.pt-3.text-muted.mx-auto
                | Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
        .row.mt-5.vertical-content
          .col-lg-6
            .faq_img.mt-3
              img.img-fluid.mx-auto.d-block(src="~/assets/images/faq.png" alt="")
          .col-lg-6
            .faq_main.mt-3
              #accordionExample.accordion
                .card
                  #headingOne.card-header
                    h5.mb-0.align-middle(data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne")
                      i.mdi.mdi-help-box.h4
                      span What is Lorem Ipsum?
                  #collapseOne.collapse.show(aria-labelledby="headingOne" data-parent="#accordionExample")
                    .card-body
                      p.mb-0.text-muted
                        | Suspendisse nirtbh finibus efficitur viverra masuada massa mauris suscipit purus pellentesque pharetra. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                .card
                  #headingTwo.card-header
                    h5.collapsed.mb-0(data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo")
                      i.mdi.mdi-help-box.h4
                      span Why use Lorem Ipsum?
                  #collapseTwo.collapse(aria-labelledby="headingTwo" data-parent="#accordionExample")
                    .card-body
                      p.mb-0.text-muted
                        | Maecenas viverra ornare sed maximus libero maximus on faucibus elit efficitur purus sollicitudin libero. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                .card
                  #headingThree.card-header
                    h5.collapsed.mb-0(data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree")
                      i.mdi.mdi-help-box.h4
                      span When can be used?
                  #collapseThree.collapse(aria-labelledby="headingThree" data-parent="#accordionExample")
                    .card-body
                      p.mb-0.text-muted
                        | Donec erat eget ante efficitur eleifend dolor scelerisque erat magna justo carsras condimentum mauada.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                .card
                  #headingzzzzfpor.card-header
                    h5.collapsed.mb-0(data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour")
                      i.mdi.mdi-help-box.h4
                      span WhIs safe use Lorem Ipsum?
                  #collapseFour.collapse(aria-labelledby="headingzzzzfpor" data-parent="#accordionExample")
                    .card-body
                      p.mb-0.text-muted
                        | Vivamus dolor hendrerit tempor elementum Interdum et fames ac ante ipsum primis malesuada in faucibus. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
    // End Faq
    // Start Subcribe
    section.section
      .container
        .row
          .col-lg-12
            .sub_cta
              .bg-overlay-gradient
              .section_title.position-relative.text-center
                p.small_title.mb-4.text-white.text-uppercase Subcribe Now
                h2.text-capitalize.text-white.mx-auto.section_header Subscribe To Get Updates
                p.sec_subtitle.pt-3.text-white.mx-auto
                  | Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
              .text-center.subcribe-newslatter.mt-5
                form.mx-auto.position-relative
                  input(type="text" placeholder="Email")
                  button.btn.btn-custom(type="submit") Subcribe
    // End Subcribe
    // Start Blog
    section.section.bg-light
      .container
        .row
          .col-lg-12
            .section_title.text-center
              p.small_title.mb-4.text-custom.text-uppercase Our Blog
              h2.text-capitalize.mx-auto.section_header Our Latest News
              p.sec_subtitle.pt-3.text-muted.mx-auto
                | Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
        .row.mt-5
          .col-lg-4
            .mt-3.blog_box.rounded.pt-3.pr-3.pl-3
              .blog_img
                img.img-fluid.mx-auto.d-block.rounded(src="~/assets/images/blog/blog-1.jpg" alt="")
              .blog_content.pt-3.pr-3.pl-3
                div
                  span.blog_budget.bg-gradient Lifestyle
                .blog_date_post
                  p.text-muted.d-inline-block April 18, 2019
                h5
                  a.text-dark(href="left_blog.html") Make Sure You Are Happy.
                .blog_divider_img
                  img.img-fluid(src="~/assets/images/divider.png" alt="")
                p.text-muted.mt-2
                  | Ever been innocuously browsing the web for your next pair of shoes, before leaving the retail.
                .read_more
                  .blog_border
                  a.text-dark.text-uppercase(href="left_blog.html")  Read More
                .clearfix.blog_gra_user
                  .float-left.text-white
                    p.mb-0
                      | Admin By 
                      a.text-white.font-weight-bold(href="#") Axzisz
                  .float-right
                    a.text-white.comment_icon(href="#")
                      i.mdi.mdi-comment-outline
                      |  128
                    a.ml-2.d-inline-block.like_icon.text-white(href="#")
                      i.mdi.mdi-thumb-up-outline
                      |  58
          .col-lg-4
            .mt-3.blog_box.rounded.pt-3.pr-3.pl-3
              .blog_video.position-relative
                .blog_img
                  img.img-fluid.rounded.mx-aut.roundedo.d-block(src="~/assets/images/blog/blog-2.jpg" alt="")
                a.blog_play.video_blog(href="http://vimeo.com/99025203")
                  i.mdi.mdi-play
              .blog_content.pt-3.pr-3.pl-3
                div
                  span.blog_budget.bg-gradient Art
                .blog_date_post
                  p.text-muted.d-inline-block May 4, 2019
                h5
                  a.text-dark(href="left_blog.html") A guide to week undwinding.
                .blog_divider_img
                  img.img-fluid(src="~/assets/images/divider.png" alt="")
                p.text-muted.mt-2
                  | Ever been innocuously browsing the web for your next pair of shoes, before leaving the retail.
                .read_more
                  .blog_border
                  a.text-dark.text-uppercase(href="left_blog.html")  Read More
                .clearfix.blog_gra_user
                  .float-left.text-white
                    p.mb-0
                      | Admin By 
                      a.text-white.font-weight-bold(href="#") Axzisz
                  .float-right
                    a.text-white.comment_icon(href="#")
                      i.mdi.mdi-comment-outline
                      |  342
                    a.ml-2.d-inline-block.like_icon.text-white(href="#")
                      i.mdi.mdi-thumb-up-outline
                      |  28
          .col-lg-4
            .mt-3.blog_box.rounded.pt-3.pr-3.pl-3
              .blog_img
                img.img-fluid.mx-auto.d-block.rounded(src="~/assets/images/blog/blog-3.jpg" alt="")
              .blog_content.pt-3.pr-3.pl-3
                div
                  span.blog_budget.bg-gradient Business
                .blog_date_post
                  p.text-muted.d-inline-block June 22, 2019
                h5
                  a.text-dark(href="left_blog.html") Blogs for Rising Metal Bands.
                .blog_divider_img
                  img.img-fluid(src="~/assets/images/divider.png" alt="")
                p.text-muted.mt-2
                  | Ever been innocuously browsing the web for your next pair of shoes, before leaving the retail.
                .read_more
                  .blog_border
                  a.text-dark.text-uppercase(href="left_blog.html")  Read More
                .clearfix.blog_gra_user
                  .float-left.text-white
                    p.mb-0
                      | Admin By 
                      a.text-white.font-weight-bold(href="#") Axzisz
                  .float-right
                    a.text-white.comment_icon(href="#")
                      i.mdi.mdi-comment-outline
                      |  453
                    a.ml-2.d-inline-block.like_icon.text-white(href="#")
                      i.mdi.mdi-thumb-up-outline
                      |  68
    // End Blog
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class RootPage extends Vue {
  test: string = 'this is a test';
}
</script>
