<template lang="pug">
  div
    SubHeader(title="Ziel Fresh" :namespaces="['products']")
    // Start Introduction and Gallery
    section.section.bg-lightx
      .container
        .row
          .col-lg-12
            .section_title.text-center
              p.small_title.mb-4.text-custom.text-uppercase Ziel Fresh
              h2.text-capitalize.mx-auto.section_header {{product.title}}
              p.sec_content.pt-3.text-muted.mx-auto(v-html="`${( product.titleDescription )}`")
        //- TODO: Fix the video links
        .row.mt-5
          .col-lg-12
            #ziel-fresh-slider.owl-carousel
              .item(v-for="image in product.gallery" :key="image.id")
                img.img-responsive(:src="image.media.url" alt="gallery Media")
              //- .item
              //-   img.img-responsive(src="https://images.unsplash.com/photo-1426170042593-200f250dfdaf" alt="GTA V")
              //- .item
              //-   img.img-responsive(src="https://images.unsplash.com/photo-1526080676457-4544bf0ebba9" alt="Mirror Edge")
              //- .item
              //-   img.img-responsive(src="https://images.unsplash.com/photo-1426170042593-200f250dfdaf" alt="GTA V")
              //- .item
              //-   img.img-responsive(src="https://images.unsplash.com/photo-1526080676457-4544bf0ebba9" alt="Mirror Edge")
              //- .item
              //-   img.img-responsive(src="https://images.unsplash.com/photo-1426170042593-200f250dfdaf" alt="GTA V")
              //- .item
              //-   img.img-responsive(src="https://images.unsplash.com/photo-1526080676457-4544bf0ebba9" alt="Mirror Edge")    
        // End Introduction and Gallery

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
        img.img-fluid.mx-auto.d-block(src="~/assets/images/products/ziel-fresh-10.jpeg" alt="")
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
import gql from 'graphql-tag';
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
  apollo: {
    product: gql`
      {
        product {
          title
          titleDescription
          gallery {
            media {
              id
              url
            }
          }
          whySectionImage {
            url
          }
        }
      }
    `,
  },
})
export default class ZielFresh extends Vue {
  product: any = [];
}
</script>
