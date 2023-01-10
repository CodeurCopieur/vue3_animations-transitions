<script setup>
  import { toRefs } from 'vue'

  const props = defineProps({
    posts: String,
  });

  const { posts } = toRefs(props);
</script>
<template>
  <div class="container">
    <div class="card" v-for="post in posts" :key="post.id">
      <h1>{{ post.title }}</h1>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<style>

.container {
	padding-top: 2rem;
	background: #f3f4f6;
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
}
.card {
	background: white;
	box-shadow: 3px 3px 3px 0px rgb(107 107 107 / 7%);
	border-radius: 0.5rem;
	max-width: 28rem;
	padding: 1rem 2rem;
	margin: 1rem;
}
.card h1 {
	font-size: 1.5rem;
	line-height: 2rem;
	margin-bottom: 0.75rem;
	font-weight: 600;
}
</style>