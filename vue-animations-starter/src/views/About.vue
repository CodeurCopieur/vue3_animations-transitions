<template>
  <div class="about">
    <transition
      appear
      name="fade"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave">
      <h1 v-if="showTitle">About</h1>
    </transition>

    <transition
      appear
      @before-enter="beforeE"
      @enter="Enter"
      @after-enter="afterE"
      >
      <h1>Title Gsap</h1>
    </transition>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam officia possimus delectus inventore quod quisquam culpa voluptas iusto, quae maiores quo dolorum, corporis laboriosam a dolore consequatur assumenda nam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam officia possimus delectus inventore quod quisquam culpa voluptas iusto, quae maiores quo dolorum, corporis laboriosam a dolore consequatur assumenda nam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam officia possimus delectus inventore quod quisquam culpa voluptas iusto, quae maiores quo dolorum, corporis laboriosam a dolore consequatur assumenda nam!</p>
  </div>
</template>

<script>

import {ref} from 'vue'
import gsap from 'gsap'

export default {
  setup() {

    const showTitle = ref(true);

    const beforeE = el => {
      console.log('before enter - définir l\'état initial');
      gsap.from(el , {
        y: '-60',
        opacity: 0
      });
    }

    const done = () => console.log('end');

    const Enter = (el, done) => {
      console.log('starting - faire la transition');
      gsap.to(el , {
        duration: 1,
        y: 0,
        opacity: 1,
        ease:"bounce.out",
        onComplete: done
      });
    }

    const afterE = el => {
      console.log('after enter');
    }

    const beforeEnter = (el) => console.log('before Enter', el);
    const enter = (el) => console.log('enter', el);
    const afterEnter = (el) => {
      el.style.color = 'green';
      console.log('after Enter', el);
      setTimeout(() => showTitle.value = false, 2000)
    }

    const beforeLeave = (el) => {
      el.style.color = 'pink'; 
      console.log('before Leave', el);
    }
    const leave = (el) => console.log('leave', el);
    const afterLeave = (el) => console.log('after Leave', el);

    return { showTitle, beforeEnter, enter, afterEnter, beforeLeave, leave, afterLeave, beforeE, Enter, afterE}
  }
}
</script>

<style>
  .about {
    max-width: 600px;
    margin: 20px auto;
  }

  .fade-enter-from {
    opacity: 0;
  }
  .fade-enter-active {
    transition: opacity 3s ease;
  }
  .fade-leave-to {
    opacity: 0;
  }
  .fade-leave-active {
    transition: opacity 3s ease;
  }
</style>