<template>
	<nav class="container py-[5rem] px-[3.5rem] flex justify-between items-center">
		<img :src="logo" alt="square with breaks" class="block w-[3rem]" />
		<button type="button" @click="isOpen = !isOpen">
			<img :src="isOpen ? close : burger" :alt="isOpen ? 'close menu' : 'open menu'" />
		</button>
		<Transition mode="out-in">
			<div
				v-show="isOpen"
				class="absolute left-[3.5rem] top-[18%] bg-white shad w-[calc(100%-7rem)] p-[2rem] flex flex-col text-center rounded-md transition-opacity z-[100]">
				<a
					href="#"
					v-for="(item, index) in links"
					:key="index"
					class="font-barloC font-w700 uppercase text-[2rem] tracking-[1px] pb-[2rem] last:text-neutral-blue-300 last:pt-[2rem] last:border-t-[1px] w-full"
					>{{ item }}</a
				>
			</div>
		</Transition>
	</nav>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue'
import logo from '@/images/logo.svg'
import burger from '@/images/icon-hamburger.svg'
import close from '@/images/icon-close.svg'

const isOpen: Ref<boolean> = ref(false)
const links: Ref<string[]> = ref(['product', 'features', 'pricing', 'login'])
</script>

<style scoped>
.shad {
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.v-enter-active,
.v-leave-active {
	transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}
</style>
