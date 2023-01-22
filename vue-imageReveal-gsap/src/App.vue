<script setup>

import { ref, onMounted } from 'vue'
import People from './assets/people.webp'
import { TimelineLite, Power2, gsap } from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";
gsap.registerPlugin(CSSRulePlugin);

let imgRef = ref(null)
let containerRef = ref(null)
let imgReveal = ref(CSSRulePlugin.getRule('.img-container:after'))
let tl = new TimelineLite();

onMounted(()=> {
  let img = imgRef.value
  let container = containerRef.value

  console.log(imgReveal.value);
  tl
  .to(container, 1, {css: {visibility: 'visible'}})
  .to(imgReveal.value, 1.4, {width: '0%', ease: Power2.easeInOut})
  .from(img, 1.4, {scale: 1.6, ease: Power2.easeInOut, delay: -1.6})
});


</script>

<template>
  <section class="main">
    <div ref="containerRef" class="container">
      <div class="img-container">
        <picture>
          <img ref="imgRef" :src="`${People}`" alt="">
        </picture>
      </div>
    </div>
  </section>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
