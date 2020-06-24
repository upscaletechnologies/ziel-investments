<template lang="pug">
  div
    SubHeader(title="Ziel Fresh" :namespaces="['products']")
    // Start Page
    section.section
      .container
        .row
          .col-lg-12
            .section_title.text-center
              p.small_title.mb-4.text-custom.text-uppercase Ziel Fresh
              h2.text-capitalize.mx-auto.section_header Fresh Bottled Water
        .row.mb-4
          .col-6.col-lg-4
            figure
              a.d-block.mb-4(data-fancybox="images" href="https://source.unsplash.com/lSXpV8bDeMA/1536x2304" data-width="1536" data-height="2304")
                img.img-fluid(src="https://source.unsplash.com/lSXpV8bDeMA/416x623")
            figure
              a.d-block.mb-4(data-fancybox="images" href="https://source.unsplash.com/ty4X72BSsXY/1279x853" data-width="1279" data-height="853")
                img.img-fluid(src="https://source.unsplash.com/ty4X72BSsXY/416x278")
          .col-6.col-lg-4
            figure
              a.d-block.mb-4(data-fancybox="images" href="https://source.unsplash.com/QkPb5g9p338/1279x719" data-width="1279" data-height="719")
                img.img-fluid(src="https://source.unsplash.com/QkPb5g9p338/416x234")
            figure
              a.d-block.mb-4(data-fancybox="images" href="https://source.unsplash.com/z55CR_d0ayg/1279x853" data-width="1279" data-height="853")
                img.img-fluid(src="https://source.unsplash.com/z55CR_d0ayg/416x278")
            figure
              a.d-block.mb-4(data-fancybox="images" href="https://source.unsplash.com/IbLZjKcelpM/1020x858" data-width="1020" data-height="858")
                img.img-fluid(src="https://source.unsplash.com/IbLZjKcelpM/416x350")
          .col-6.col-lg-4.d-none.d-lg-block
            figure
              a.d-block.mb-4(data-fancybox="images" href="https://source.unsplash.com/KgCbvOWYuU0/1279x870" data-width="1279" data-height="870")
                img.img-fluid(src="https://source.unsplash.com/KgCbvOWYuU0/416x283")
            figure
              a.d-block.mb-4(data-fancybox="images" href="https://source.unsplash.com/O7qK1vQY3p0/1519x2279" data-width="1519" data-height="2279")
                img.img-fluid(src="https://source.unsplash.com/O7qK1vQY3p0/416x623")
        .row
          .col-lg-12
            .section_title.text-center
              h2.text-capitalize.mx-auto.section_header About Us
              p.sec_content.pt-3.text-muted.mx-auto.
                #[strong Ziel] translated to english means a goal, aim, objective, target, destination or finishing line.
                #[strong Fresh] simply means something recently harvested.
                #[strong Ziel Fresh] purified water is bottled fresh at the source to maintain its natural taste which is balanced by nature. Its enhanced by use of advanced modern technology by use of multi-barrier filtration, reverse osmosis, ozanation and UV treatment to give it a refreshing natural taste.
                #[br]
                Our water quality, grade and above all palate features are 100% natural
              p.sec_content.pt-3.text-muted.mx-auto.
                You can order the water in these packagings: #[strong 500ml and 1 litre] dozen package, #[strong 18.9 litres] Refillable or Disposable.
                For enquiries, please call #[a.text-custom.nuxt-link-exact-active.nuxt-link-active(href='tel: +254 713-917-108') +254 713-917-108] or #[a.text-custom.nuxt-link-exact-active.nuxt-link-active(href='tel: +254 727-238-558') +254 727-238-558]

    // Start How It Work
    // Start Description
    section.section.bg-features.vertical-content
      .bg-features-overlay.ziel-fresh
      .container
        .row
          .col-lg-12.col-md-12
            .mt-3.features_desc.text-white
              div
                h3.features-heading.text-capitalize Why Ziel Fresh?
                .main-title-border
          .col-lg-7.col-md-12
            .mt-3.features_desc.text-white
              .features
                .features-icon.features-left
                  i.mdi.mdi-check
                .features-desc
                  h3.features-title Sealed To Perfection
                  p.features-sub-title.pt-2
                    | When you open a bottle of Ziel Fresh Water, we want it to be an experience. Luxury and quality should be an option for everyone - and we have strived to produce a product worthy of our consumers and the Ziel  brand.
              .features
                .features-icon.features-left
                  i.mdi.mdi-check
                .features-desc
                  h3.features-title Purification At It's Best
                  p.features-sub-title.pt-2
                    | Carefully designed huge Stainless steel filters with several layers of natural filter media filters the water to the high level of purity and clarity. This water then purified with the state of the art, fully computerised Reverse Osmosis plant to obtain the high level of purification and required mineral contents. Water then passes through a unique twin chamber Ultra violet steriliser unit so that all the microbiological contamination i s eliminated.  It’s not by chance that every drop is pure and balanced with essential minerals, it’s a display of nature at its best. With each sip you’re assured of hydration and exceptional taste, which makes it enjoyable to drink the recommended 8 glasses a day.
              .features
                .features-icon.features-left
                  i.mdi.mdi-check
                .features-desc
                  h3.features-title Ultra Modern Manufacturing Facility
                  p.features-sub-title.pt-2
                    | Ziel Fresh  premium is manufactured in the state-of-the-art, ultra modern and computerised equipment with stringent quality control measures.
      .features_side_mockup.d-lg-block.d-xl-block.d-none.right
        img.img-fluid.mx-auto.d-block(src="~/assets/images/products/ziel-fresh.jpeg" alt="")
    // End Description
    // Start Page
    section.section.bg-light
      .container
        .row.mt-3
          .col-lg-6
            .text-center.position-relative.hit_box.rounded.mt-3
              .hit_icon.text-custom
                i.pe-7s-arc
              .hit_content.mt-2
                h5.font-weight-bold Our Beliefs
                p.mt-3.text-muted.mb-0
                  | Since water is among the most critical challenge of our time, doing the right thing means doing more.
          .col-lg-6
            .text-center.position-relative.hit_box.rounded.mt-3
              .hit_icon.text-custom
                i.pe-7s-leaf
              .hit_content.mt-2
                h5.font-weight-bold Our Initiatives
                p.mt-3.text-muted.mb-0
                  | Ziel Fresh embraces the role it has to play in helping to forge a sustainable future for human beings and the planet.
    // Start How It Work
    Cta
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import SubHeader from '~/components/SubHeader.vue';
import Cta from '~/components/Cta.vue';

@Component({
  components: { SubHeader, Cta },
  head() {
    return {
      title: 'Ziel Fresh - zielinvestments.com',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            ' Ziel Fresh purified water is bottled fresh at the source to maintain its natural taste which is balanced by nature. Its enhanced by use of advanced modern technology by use of multi-barrier filtration, reverse osmosis, ozanation and UV treatment to give it a refreshing natural taste. Our water quality, grade and above all palate features are 100% natural ',
        },
      ],
    };
  },
})
export default class ZielFresh extends Vue {}
</script>
