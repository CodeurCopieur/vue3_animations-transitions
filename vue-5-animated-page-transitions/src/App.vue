<script setup>
import { ref } from 'vue'

const anim = ref('fade');
</script>

<template>
  <div>
    <nav>
     <router-link to="/">Home</router-link>
     <router-link to="/about">About</router-link>
    </nav>

    <div class="check">
      <label>
        <input type="radio" 
          name="anim" 
          value="fade"
          v-model="anim" /> Fade
      </label>
      <label>
        <input type="radio" 
          name="anim" 
          value="slide"
          v-model="anim" /> Slide
      </label>
      <label>
        <input type="radio" 
          name="anim" 
          value="slide-down"
          v-model="anim" /> Slide-down
      </label>
      <label>
        <input type="radio" 
          name="anim" 
          value="grow-in"
          v-model="anim" /> Grow-in
      </label>
      <label>
        <input type="radio" 
          name="anim" 
          value="grow-out"
          v-model="anim" /> Grow-out
      </label>
    </div>
    <router-view v-slot="{ Component }">
      <transition :name="anim" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<style scoped>
</style>

