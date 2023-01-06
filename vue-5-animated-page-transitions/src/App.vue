<script setup>
</script>

<template>
  <div>
    <nav>
     <router-link to="/">Home</router-link>
     <router-link to="/about">About</router-link>
    </nav>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<style scoped>
</style>

