<script setup>
import {ref, onMounted} from 'vue'
import { TweenMax, Power3, gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'

  const imgRef = ref(null)
  const title1 = ref(null)
  const txt1 = ref(null)

  let parentCircle = ref(null)
  let circleBlue = ref(null)
  let circleWhite = ref(null)
  let circleRed = ref(null)

  let state = ref(null)

  const handleExpand = (target) => {
    TweenMax.to(target, .8, {width: 200, height:200, ease: Power3.easeOut})
    state.value = true
  }

  const handleShrink = (target) => {
    TweenMax.to(target, .8, {width: 75, height: 75, ease: Power3.easeOut})
    state.value = false
  }

  onMounted(()=> {
    const el = imgRef.value;
    const t1 = title1.value;
    const txt = txt1.value;

    const pc = parentCircle.value;
    const cb = circleBlue.value;
    const cw = circleWhite.value;
    const cr = circleRed.value;

    TweenMax.fromTo(t1, .8, { opacity: 0 }, {opacity: 1, y: -20, ease: Power3.easeOut})
    TweenMax.fromTo(txt, .8, { opacity: 0 }, {opacity: 1, y: -20, ease: Power3.easeOut, delay: .2})

    gsap.fromTo(el, 
      {rotate:0}, 
      {rotate: 360, duration: 3,
        scrollTrigger: {
          trigger: el,
          start: 'center bottom-=100',
          end: 'bottom center',
          scrub: true,
          markers: true
        }
      }
    )

    TweenMax.to(pc, 0, {visibility: 'visible'})
    // TweenMax.from(cb, .8, {opacity: 0, x: 40, ease: Power3.easeOut})
    // TweenMax.from(cw, .8, {opacity: 0, x: 40, ease: Power3.easeOut, delay: .2})
    // TweenMax.from(cr, .8, {opacity: 0, x: 40, ease: Power3.easeOut, delay: .4})
    // ou
    TweenMax.staggerFrom([cb, cw, cr], .8, {opacity: 0, x: 40, ease: Power3.easeOut}, .2);


  });

    
</script>

<template>
  <div class="helper">
    <h1 ref="title1">Text2</h1>
    <div>
      <p ref="txt1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non veniam perferendis maxime.<br/>Minus quae amet officia, quam nisi enim veritatis. <br/>
      <a class="btn" href="#">button</a></p>
    </div>
  </div>
  <div style="margin-top: 100px">
    <img alt="Vue logo" src="./assets/logo.png" ref="imgRef" />
    <HelloWorld msg="Hello Vue 3 + Vite" />
  </div>
  <div class="helper" ref="parentCircle">
    <div class="circle blue" ref="circleBlue"></div>
    <div class="circle white" ref="circleWhite" @click="state !== true ? handleExpand(circleWhite) : handleShrink(circleWhite)"></div>
    <div class="circle" ref="circleRed"></div>
  </div>
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
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: skyblue;
}

.helper h1 {
  margin-bottom: 1em;
}

.helper p {
  margin-top: 3em;
}

.btn {
  padding: 10px 35px;
  border: 2px solid #fff;
  margin-top: 1em;
  display: inline-block;
  text-decoration: none;
  color: #fff;
  text-transform: capitalize;
}

.circle {
  width: 75px;
  height: 75px;
  border-radius: 100%;
  background-color: red;
  margin: 50px;
  cursor: pointer;
}

.circle.blue {
  background-color: blue;
}

.circle.white {
  background-color: white;
}

</style>
