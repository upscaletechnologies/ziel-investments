<template lang="pug">
  div
    AppHeader
    nuxt
    Footer
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import AppHeader from '~/components/AppHeader.vue';
import Footer from '~/components/Footer.vue';

const themeJs = require('~/assets/js/theme.js').default;

@Component({
  components: { AppHeader, Footer },
})
export default class LayoutDefault extends Vue {
  mounted() {
    themeJs();
  }
}
</script>
