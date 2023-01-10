<script setup>
import { ref } from 'vue'
import Posts from './components/post.vue'

const posts = ref(
  [
				{
					id: 1,
					title: "id labore ex et quam laborum",
					body:
						"laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
				},
				{
					id: 2,
					title: "quo vero reiciendis velit similique earum",
					body:
						"est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
				},
				{
					id: 3,
					title: "odio adipisci rerum aut animi",
					body:
						"quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione",
				},
				{
					id: 4,
					title: "alias odio sit",
					body:
						"non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati",
				},
				{
					id: 5,
					title: "vero eaque aliquid doloribus et culpa",
					body:
						"harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et",
				},
				{
					id: 6,
					title: "odio adipisci rerum aut animi",
					body:
						"non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati",
				},
			]
);
</script>

<template>
     <Posts :posts="posts" />
</template>

<style>
body {
	box-sizing: border-box;
	padding: 0;
	margin: 0;
	font-family: "Montserrat";
}

</style>
