<template lang="pug">
  div
    SubHeader(title="Ziel Fresh" :namespaces="['products']")
    // Start Introduction and Gallery
    section.section
      .container
        .row
          .col-lg-12
            .section_title.text-center
              p.small_title.mb-4.text-custom.text-uppercase Ziel Fresh
              h2.text-capitalize.mx-auto.section_header {{product.title}}
              p.sec_content.pt-3.text-muted.mx-auto {{product.titleDescription}}
        //- TODO: Fix the video links
        .row.mb-4
          .col-6.col-lg-4
            figure
              a.d-block.mb-4(data-fancybox="images" :href="require('~/assets/images/products/image-1.jpeg')" data-width="1536" data-height="2304" data-caption="<h6>Ziel Fresh Bottled Water</h6>")
                img.img-fluid(src="~/assets/images/products/image-1-1.jpeg")
            figure.card.rounded-0
              a(data-fancybox="html5-video" data-width="640" data-height="360" href="https://drive.google.com/file/d/1_FIcmo4Gay1l9bouVRa-A4-ycHy9W3_V/preview" data-caption="<h6>Factory tour: Inside series</h6>")
                  img.card-img-top.img-fluid.rounded-0(src="~/assets/images/products/image-2-1.jpeg")
              .card-body
                p.card-text Factory tour: Inside series
          .col-6.col-lg-4
            figure
              a.d-block.mb-4(data-fancybox="images" :href="require('~/assets/images/products/image-3.jpeg')" data-width="1279" data-height="719" data-caption="<h6>Ziel Fresh: 500ml Package.</h6>")
                img.img-fluid(src="~/assets/images/products/image-3-1.jpeg")
            figure
              a.d-block.mb-4(data-fancybox="images" :href="require('~/assets/images/products/image-4.jpeg')" data-width="1279" data-height="853" data-caption="<h6>Ziel Fresh: Water Treatment Tanks.</h6>")
                img.img-fluid(src="~/assets/images/products/image-4-1.jpeg")
            figure.card.rounded-0
              a(data-fancybox="html5-video" data-width="640" data-height="360" href="https://drive.google.com/file/d/1_A0K9ScYBBESSsBTdOnlrKXkl_A2n7sn/preview" data-caption="<h6>Factory tour: Outside Series</h6>")
                img.card-img-top.img-fluid.rounded-0(src="~/assets/images/products/image-5-1.jpeg")
              .card-body
                p.card-text Factory tour: Outside Series
          .col-6.col-lg-4.d-none.d-lg-block
            figure
              a.d-block.mb-4(data-fancybox="images" :href="require('~/assets/images/products/image-6.jpeg')" data-width="1279" data-height="870" data-caption="<h6>Ziel Fresh: All our packaging.</h6>")
                img.img-fluid(src="~/assets/images/products/image-6-1.jpeg")
            figure.card.rounded-0
              a(data-fancybox="html5-video" data-width="640" data-height="360" href="https://drive.google.com/file/d/1ZpxhigV9JPqhBwIaFhZCORpCPAXCrHT0/preview" data-caption="<h6>Factory tour: Packaging Series</h6>")
                img.card-img-top.img-fluid.rounded-0(src="~/assets/images/products/image-7-1.jpeg") 
              .card-body
                p.card-text Factory tour: Packaging Series       
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
  apollo: {
    product: gql`
      {
        product {
          title
          titleDescription(markdown: false)
          media {
            thumbnail {
              url
            }
            modalMedia {
              url
            }
            mediaType
          }
          whySectionImage {
            url
          }
        }
      }
    `,
  },
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
export default class ZielFresh extends Vue {
  product: any = [];
}
</script>
