<script setup>

import { ref, onMounted } from 'vue'
import { TweenMax, TimelineLite, Power3 } from "gsap";

// Assets
import arrow from '../assets/arrow-right.svg'
import imgGirl from '../assets/girl.webp'
import imgBoy from '../assets/boy.webp'

let app = ref(null);
let imgs = ref(null);
let content = ref(null);

let tl = new TimelineLite({delay: .4})

onMounted(()=> {
    app = app.value
    imgs = imgs.value
    content = content.value
    // console.log(app, imgs, content);

    // Images vars
    const girlImg = imgs.firstElementChild
    const boyImg = imgs.lastElementChild

    // Content vars
    const headlineFirst = content.children[0].children[0]
    const headlineSecond = headlineFirst.nextSibling
    const headlineThird = headlineSecond.nextSibling
    const contentP = content.children[1]
    const contentB = content.children[2]

    TweenMax.to(app, 0, {css: {visibility: 'visible', overflow: 'hidden'}})

    // Images Animation
    tl
    .from(girlImg, 1.2, {y: 1280, ease: Power3.easeOut}, 'start')
    .from(girlImg.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .2)
    .from(boyImg, 1.2, {y: 1280, ease: Power3.easeOut}, .2)
    .from(boyImg.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .2)
    .staggerFrom([headlineFirst.children, headlineSecond.children, headlineThird.children], 1, {
      y: 44,
      ease: Power3.easeOut,
      delay: .8
    }, .15, 'start')
    .from(contentP, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.4)
    .from(contentB, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.6)
});

</script>

<template>
  <section class="hero" ref="app">
    <div class="container">
      <div class="hero-inner">
        <div class="hero-content">
          <div class="hero-content-inner" ref="content">
            <h1>
              <div class="hero-content-line">
                <div class="hero-content-line-inner">Lorem ipsum dolor</div>
              </div>
              <div class="hero-content-line">
                <div class="hero-content-line-inner">lorem ipsum dolor</div>
              </div>
              <div class="hero-content-line">
                <div class="hero-content-line-inner">lorem ipsum.</div>
              </div>
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis adipisci totam, aperiam laborum pariatur aut porro vero quod ex minima !</p>
            <div class="btn-row">
              <button class="explore-button">
                explore
                <div class="arrow-icon">
                  <img :src="`${arrow}`" alt="arrow">
                </div>
              </button>
            </div>
          </div>
        </div>
        <div class="hero-images">
          <div class="hero-images-inner" ref="imgs">
            <div class="hero-image girl">
              <div>
                <picture>
                  <img :src="`${imgGirl}`" alt="girl">
                </picture>
              </div>
            </div>
            <div class="hero-image boy">
              <div>
                <picture>
                  <img :src="`${imgBoy}`" alt="boy">
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
</style>
