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
              p.sec_content.pt-3.text-muted.mx-auto.
                You can order the water in these packagings: #[strong 500ml and 1 litre] dozen package, #[strong 18.9 litres] Refillable or Disposable.
        .row.mb-4
          .col-6.col-lg-4
            figure
              a.d-block.mb-4(data-fancybox="images" href="../../image-1.jpeg" data-width="1536" data-height="2304")
                img.img-fluid(src="~/assets/images/products/image-1-1.jpeg")
            figure
              a.d-block.mb-4(data-fancybox="images" href="../../image-2.jpeg" data-width="1279" data-height="853")
                img.img-fluid(src="~/assets/images/products/image-2-1.jpeg")
          .col-6.col-lg-4
            figure
              a.d-block.mb-4(data-fancybox="images" href="../../image-3.jpeg" data-width="1279" data-height="719")
                img.img-fluid(src="~/assets/images/products/image-3-1.jpeg")
            figure
              a.d-block.mb-4(data-fancybox="images" href="../../image-4.jpeg" data-width="1279" data-height="853")
                img.img-fluid(src="~/assets/images/products/image-4-1.jpeg")
            figure
              a.d-block.mb-4(data-fancybox="images" href="../../image-5.jpeg" data-width="1020" data-height="858")
                img.img-fluid(src="~/assets/images/products/image-5-1.jpeg")
          .col-6.col-lg-4.d-none.d-lg-block
            figure
              a.d-block.mb-4(data-fancybox="images" href="../../image-6.jpeg" data-width="1279" data-height="870")
                img.img-fluid(src="~/assets/images/products/image-6-1.jpeg")
            figure
              a.d-block.mb-4(data-fancybox="images" href="../../image-7-1.jpeg" data-width="1519" data-height="2279")
                img.img-fluid(src="~/assets/images/products/image-7-1.jpeg")
        .row
          .col-lg-12
            .section_title.text-center
              h2.text-capitalize.mx-auto.section_header Our Story:
        .card-deck.mb-sm-4.video-deck
          .card
            a(data-fancybox="html5-video" href="#myVideo")
              img.card-img-top.img-fluid(src="~/assets/images/products/poster-1.jpeg")
            .card-body
              p.card-text Factory tour: 1
            video#myVideo(width="640" height="320" controls="" style="display:none;")
              source(src="~/assets/videos/video-1.mp4" type="video/mp4")
              | Your browser doesn't support HTML5 video tag.

          .card
            a(data-fancybox="html5-video" href="#myVideo")
              img.card-img-top.img-fluid(src="~/assets/images/products/poster-2.jpeg")
            .card-body
              p.card-text Factory tour: 2
            video#myVideo(width="640" height="320" controls="" style="display:none;")
              source(src="~/assets/videos/video-2.mp4" type="video/mp4")
              | Your browser doesn't support HTML5 video tag.
          .card
            a(data-fancybox="html5-video" href="#myVideo")
              img.card-img-top.img-fluid(src="~/assets/images/products/poster-3.jpeg")
            .card-body
              p.card-text Factory tour: 3
            video#myVideo(width="640" height="320" controls="" style="display:none;")
              source(src="~/assets/videos/video-5.mp4" type="video/mp4")
              | Your browser doesn't support HTML5 video tag.
        .row
          .col-lg-12
            .section_title.text-center
              h2.text-capitalize.mx-auto.section_header About Ziel Fresh
            .section_title.text-left
              p.
                #[strong Ziel] translated to english means a goal, aim, objective, target, destination or finishing line. 
              p.
                #[strong Fresh] simply means something recently harvested.
              p.
                #[strong Ziel Fresh] purified water is bottled fresh at the source to maintain its natural taste which is balanced by nature. 
              p.
               Its enhanced by use of advanced modern technology by use of multi-barrier filtration, reverse osmosis, ozanation and UV treatment to give it a refreshing natural taste.
              p.
                Our water quality, grade and above all palate features are 100% natural
        .row
          .col-lg-12
            .section_title.text-center
              p.sec_content.pt-3.text-muted.mx-auto.
                For enquiries, please call us on: #[a.text-custom.nuxt-link-exact-active.nuxt-link-active(href='tel: +254 713-917-108') +254 713-917-108] or #[a.text-custom.nuxt-link-exact-active.nuxt-link-active(href='tel: +254 727-238-558') +254 727-238-558]

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
