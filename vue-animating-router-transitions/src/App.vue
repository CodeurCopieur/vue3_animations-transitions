<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
   <!-- 768px -->
 <div class="max-w-3xl mx-auto mt-4">
   <nav class="text-left">
     <router-link class="p-2 font-bold mr-4 hover:bg-sky-500 hover:text-zinc-50" to="/">Home</router-link>
     <router-link class="p-2 font-bold mr-4 hover:bg-sky-500 hover:text-zinc-50" to="/guide">Guide</router-link>
   </nav>
  
   <router-view v-slot="{ Component, route }">
     <transition 
      :enter-active-class="route.meta.enterCLass"
      :leave-active-class="route.meta.leaveCLass"
      mode="out-in">
      <component :is="Component"></component>
     </transition>
   </router-view>
 </div>
  
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a.router-link-active {
  background-color: rgb(14, 165, 233);
  color: rgb(250, 250, 250);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s ease-out;
}

</style>
