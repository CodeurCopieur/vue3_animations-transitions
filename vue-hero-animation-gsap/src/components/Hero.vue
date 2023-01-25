<script setup>

import { ref } from 'vue'

import arrow from '../assets/arrow-right.svg'
import imgGirl from '../assets/girl.webp'
import imgBoy from '../assets/boy.webp'



</script>

<template>
  <section class="hero">
    <div class="container">
      <div class="hero-inner">
        <div class="hero-content">
          <div class="hero-content-inner">
            <h1>
              <span class="hero-content-line">
                <span class="hero-content-line-inner">Lorem ipsum dolor</span>
              </span>
              <span class="hero-content-line">
                <span class="hero-content-line-inner">lorem ipsum dolor</span>
              </span>
              <span class="hero-content-line">
                <span class="hero-content-line-inner">lorem ipsum.</span>
              </span>
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
          <div class="hero-images-inner">
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
