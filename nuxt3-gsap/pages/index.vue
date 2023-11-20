<script setup>

import { ref, onMounted } from 'vue'

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Enregistrez le plugin ScrollTrigger si nécessaire
gsap.registerPlugin(ScrollTrigger);

let title = ref(null);

  onMounted(()=> {
    title = title.value
    gsap.to(title, { backgroundColor: 'red'})

    gsap.to('.box-d', {
      x: -400,
      rotate: 300,
      duration: 3,
      scrollTrigger: {
        trigger: '.box-d',
        toggleAction: "restart pause reverse pause",
        //    Trigger Scroller
        start: 'center center',
        end: '+=300',
        markers: true,// ou 1
        scrub: 1,
      }
    })

    gsap.to('.box-c', {
    y: 400,
    rotate: 300,
    duration: 3,
    scrollTrigger: {
      trigger: '.box-c',
      toggleAction: "restart pause reverse pause",
      //    Trigger Scroller
      start: 'center center',
      end: '+=300',
      // markers: true,// ou 1
      scrub: 1,
    }
  })

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.box-a',
      start: 'top center',
      end: 'top 100px',
      // markers: true,// ou 1
      scrub: 3,
    }
  })

  tl
  .to('.box-a', {
    x: 400,
    rotate: 300,
    ease: "none",
    duration: 3,
  })
  .to('.box-a', {
    backgroundColor: "purple",
    duration: 1,
  })
  .to('.box-a', {
    x: 0,
    duration: 3
  })
  });
</script>
<template>
   <h1 ref="title" class="bg-blue-500 text-white p-4">
    Mon composant avec Tailwind CSS
   </h1>
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <header class="header">
        <h1 class="title">ScrollTrigger</h1>
        <!-- <button class="button">Jump to F</button> -->
      </header>
      <div class="boxes">
        <!-- data-speed -->
        <div class="box box-a" data-lag="2">a</div>
        <div class="box box-b" data-lag="1.5">b</div>
        <div class="box box-c" data-lag=".5">c</div>
      </div>

      <div class="box box-d">d</div>
      <div class="box box-e">e</div>
      <div class="box box-f">f</div>
      <div class="line"></div>

       
    </div>
  </div>
</template>