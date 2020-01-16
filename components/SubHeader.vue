<template lang="pug">
  // Start Header
  section.section_page_header.bg-light.section
    .container
      .row.row-xs-center.align-top
        .col-lg-8
          .page_title_main
            h3.mb-0 {{title}}
        .col-lg-4
          .page_title_list.mt-1.text-right
            ul.list-unstyled.mb-0
              li.list-inline-item
                nuxt-link.text-custom(to="/") Home
              li.list-inline-item(v-if="namespaces.includes('about')")
                nuxt-link.text-custom(to="/about-us") About Us
              li.list-inline-item(v-if="namespaces.includes('products')")
                nuxt-link.text-custom(to="") Products
              li.list-inline-item {{titleMenu || title}}
  // End Header
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  props: {
    title: {},
    titleMenu: {},
    // noProducts: { default: false },
    namespaces: { default: () => [] },
  },
})
export default class RootPage extends Vue {}
</script>
