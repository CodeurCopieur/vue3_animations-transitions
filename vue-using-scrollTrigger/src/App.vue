<script setup>
import {ref, onMounted} from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'

const imgRef = ref(null)

   onMounted(()=> {
    const el = imgRef.value;
      gsap.fromTo(el, {rotate:0}, 
      {rotate: 360, duration: 3,
        scrollTrigger: {
          trigger: el,
          start: 'center bottom-=100',
          end: 'bottom center',
          scrub: true,
          markers: true
        }
      })
    });

    
</script>

<template>
  <div class="helper"></div>
  <div style="margin-top: 100px">
    <img alt="Vue logo" src="./assets/logo.png" ref="imgRef" />
    <HelloWorld msg="Hello Vue 3 + Vite" />
  </div>
  <div class="helper"></div>
</template>

<style>

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.helper {
  height: 80vh;
  background: skyblue;
}
</style>
