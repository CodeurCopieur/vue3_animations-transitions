<template>
  <header class="shadow-sm bg-white">
    <nav class="container mx-auto p-4 flex justify-between">
      <NuxtLink to="/" class="font-bold">CodeurCopieur</NuxtLink>
      <ul class="flex gap-4">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/exo1">Exo 1</NuxtLink></li>
        <li><NuxtLink to="/exo2">Exo 2</NuxtLink></li>
        <li><NuxtLink to="/exo3">Exo 3</NuxtLink></li>
      </ul>
    </nav>
  </header>

</template>

<style scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>