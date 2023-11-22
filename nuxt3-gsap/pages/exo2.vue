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

    gsap.defaults({ease: "none", duration: 2});

ScrollTrigger.create({
  trigger: ".green",
  start: 'top top',
  end: '+=1000px',
  scrub: true,
  markers: true,
  pin: true
})
  });
  </script>
<template>
  <h1 ref="title" class="bg-blue-500 text-white p-4">
    Exo 2
   </h1>
 <div class="container">

<div class="skyblue app">
  <h1>Text1</h1>
  <div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non veniam perferendis maxime.<br/>Minus quae amet officia, quam nisi enim veritatis. <br/><a class="btn" href="#">button</a></p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eius sapiente dolor repellendus quos mollitia vitae adipisci, rem excepturi. Accusamus odio delectus laborum 
      reprehenderit optio consectetur itaque pariatur, perspiciatis necessitatibus!
    </p>
  </div>
</div>
<div class="green app">
  <h1>Text2</h1>
  <div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non veniam perferendis maxime.<br/>Minus quae amet officia, quam nisi enim veritatis. <br/><a class="btn" href="#">button</a></p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eius sapiente dolor repellendus quos mollitia vitae adipisci, rem excepturi. Accusamus odio delectus laborum 
      reprehenderit optio consectetur itaque pariatur, perspiciatis necessitatibus!
    </p>
  </div>
</div>
<div class="orange app">
  <h1>Text3</h1>
  <div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non veniam perferendis maxime.<br/>Minus quae amet officia, quam nisi enim veritatis. <br/><a class="btn" href="#">button</a></p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eius sapiente dolor repellendus quos mollitia vitae adipisci, rem excepturi. Accusamus odio delectus laborum 
      reprehenderit optio consectetur itaque pariatur, perspiciatis necessitatibus!
    </p>
  </div>
</div>
</div>
</template>