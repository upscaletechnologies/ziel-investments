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
          li.nav-item(:class="activeLink('/')")
            nuxt-link.nav-link(to="/") Home
          li.nav-item(:class="activeLink('/about-us')")
            nuxt-link.nav-link(to="/about-us") About Us
          li.nav-item(:class="activeLink('', '/products/')")
            a.nav-link.first_sub_menu(href="javascript:void(0);") Products and Services
            ul.sec_sub_menu
              li.nav-item(:class="activeLink('/products/real-estate')")
                nuxt-link.nav-link(to="/products/real-estate") Real Estate
              li.dropdown-divider
              li.dropdown-title.pl-2.text-muted Water Solutions
              li.nav-item(:class="activeLink('/products/ziel-fresh')")
                nuxt-link.nav-link(to="/products/ziel-fresh") Ziel Fresh - Bottled Water
              li.nav-item(:class="activeLink('/products/water-dispensing-automation')")
                nuxt-link.nav-link(to="/products/water-dispensing-automation") Water Dispensing Automation
              li.dropdown-divider
              li.dropdown-title.pl-2.text-muted Software Solutions
              li.nav-item(:class="activeLink('/products/mobile-banking')")
                nuxt-link.nav-link(to="/products/mobile-banking") Mobile Banking
              li.nav-item(:class="activeLink('/products/field-power')")
                nuxt-link.nav-link(to="/products/field-power") Field Power
              li.nav-item(:class="activeLink('/products/robotic-process-automation')")
                nuxt-link.nav-link(to="/products/robotic-process-automation") Robotic Process Automation
              li.nav-item(:class="activeLink('/products/fleet-management')")
                nuxt-link.nav-link(to="/products/fleet-management") Fleet management
          li.nav-item(:class="activeLink('/contact-us')")
            nuxt-link.nav-link(to="/contact-us") Contact
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

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class RPA extends Vue {
  activeLink(path: string, include: string) {
    const currentPath = this.$nuxt.$route.path;
    if (include) {
      return currentPath.includes(include) ? 'active' : '';
    }

    return currentPath === path ? 'active' : '';
  }
}
</script>
