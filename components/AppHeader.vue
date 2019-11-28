<template lang="pug">
  // Navbar Start
  nav.navbar.custom_nav.navbar-expand-lg.fixed-top.sticky.stickyadd
    .container
      nuxt-link.logo.navbar-brand(to="/")
        img.img-fluid.logo-light(src="~/assets/images/logo.png" alt="")
      button.navbar-toggler(type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation")
        i.mdi.mdi-menu
      #navbarCollapse.collapse.navbar-collapse
        // menu
        ul#menu-home-menu.mx-auto.nav.navbar-nav.main_menu
          li.nav-item
            nuxt-link.nav-link(to="/") Home
          li.nav-item
            nuxt-link.nav-link(to="/about") About Us
          li.nav-item
            a.nav-link.first_sub_menu(href="javascript:void(0);") Products and Services
            ul.sec_sub_menu
              li.nav-item
                nuxt-link.nav-link(to="/products/ziel-fresh") Ziel Fresh
              li.nav-item
                nuxt-link.nav-link(to="/products/mobile-banking") Mobile Banking
              li.nav-item
                nuxt-link.nav-link(to="/products/field-power") Field Power
              li.nav-item
                nuxt-link.nav-link(to="/products/rpa-products") RPA Products & Digital Offerings
              li.nav-item
                nuxt-link.nav-link(to="/products/fleet-management") Fleet management
          li.nav-item
            nuxt-link.nav-link(to="/contact") Contact
        div
          ul.text-right.list-unstyled.list-inline.mb-0.social_menu
            li.list-inline-item
              a(href="javascript:void(0);")
                i.mdi.mdi-facebook-box
            li.list-inline-item
              a(href="javascript:void(0);")
                i.mdi.mdi-twitter
            li.list-inline-item
              a(href="javascript:void(0);")
                i.mdi.mdi-dribbble
            li.list-inline-item
              a(href="javascript:void(0);")
                i.mdi.mdi-instagram
        // /Menu
  // Navbar End
</template>
