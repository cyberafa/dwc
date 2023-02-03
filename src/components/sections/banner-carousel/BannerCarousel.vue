<script setup lang="ts">
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import banner1 from "@/assets/images/banner-1.jpg";
import banner2 from "@/assets/images/banner-2.jpg";
import banner3 from "@/assets/images/banner-3.jpg";
import bannerMobile1 from "@/assets/images/banner-mobile-1.png";
import bannerMobile2 from "@/assets/images/banner-mobile-2.png";
import bannerMobile3 from "@/assets/images/banner-mobile-3.png";

const bannerImages = [
  {
    mobile: bannerMobile1,
    desk: banner1,
  },
  {
    mobile: bannerMobile2,
    desk: banner2,
  },
  {
    mobile: bannerMobile3,
    desk: banner3,
  },
];

function getBanner(banner: string) {
  return new URL(banner, import.meta.url).href;
}
</script>

<template>
  <div class="banner-carousel">
    <Splide
      :options="{
        arrows: false,
        pagination: true,
        autoplay: true,
        interval: 4000,
        speed: 1500,
        rewind: true,
        rewindSpeed: 1500,
        breakpoints: {
          1023: {
            pagination: false,
          },
        },
      }"
    >
      <SplideSlide v-for="banner in bannerImages" :key="banner.mobile">
        <picture>
          <source
            :srcset="getBanner(banner.mobile)"
            media="(max-width: 1024px)"
          />
          <source
            :srcset="getBanner(banner.desk)"
            media="(min-width: 1024px)"
          />
          <img :src="getBanner(banner.mobile)" alt="" />
        </picture>
      </SplideSlide>
    </Splide>
  </div>
</template>

<style lang="scss">
@import "./style.scss";
</style>
