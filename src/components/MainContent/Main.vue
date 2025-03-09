<template>
	<main class="container relative overflow-x-clip">
		<Images />
		<Content />
		<div class="absolute bg-neutral-blue-400 w-full h-[50rem] top-[-20rem] z-[-1] left-1/2 rounded-[6rem]"></div>
	</main>
</template>

<script setup lang="ts">
import Content from './Content.vue'
import Images from './Images.vue'
</script>

<style scoped></style>
