<template>
  <div class="home">
    <transition name="toast">
      <Toast v-if="showToast" />
    </transition>
    <Todos @badValue="triggerToast" />
  </div>
</template>

<script>
import { ref } from 'vue'
import Toast from '../components/Toast'
import Todos from '../components/Todos'

export default {
  components: { Toast, Todos },
  setup() {
    const showToast = ref(false)

    const triggerToast = () => {
      showToast.value = true;
      setTimeout(() => showToast.value = false, 3000)
    }

    return { showToast, triggerToast }
  }
}
</script>

<style>
 /* enter or leave classes 
 .toast-enter-from, .toast-leave-to {opacity: 0; transform: translateY(-60px);}
 .toast-enter-to, .toast-leave-from {opacity: 1;transform: translateY(0);}
 .toast-enter-active, .toast-leave-active { transition: all .3s ease;} */

 .toast-enter-active { animation: wobble .5s ease;}
 .toast-leave-from {opacity: 1;transform: translateY(0);}
 .toast-leave-to {opacity: 0; transform: translateY(-60px);}
 .toast-leave-active {transition: all .3s ease;}

 @keyframes wobble {
   0% {opacity: 0; transform: translateY(-60px);}
   50% {opacity: 1;transform: translateY(0);}
   60%{transform: translateX(8px);}
   70%{transform: translateX(-8px);}
   80%{transform: translateX(4px);}
   90%{transform: translateX(-4px);}
   100%{transform: translateX(0);}
 }
</style>