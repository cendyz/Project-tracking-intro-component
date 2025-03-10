<template>
	<nav class="container py-[5rem] px-[3.5rem] flex justify-between items-center">
		<img :src="logo" alt="square with breaks" class="block w-[3rem]" />
		<button type="button" @click="isOpen = !isOpen">
			<img :src="isOpen ? close : burger" :alt="isOpen ? 'close menu' : 'open menu'" class="w-[3rem] lg:hidden" />
		</button>
		<Transition mode="out-in">
			<div
				v-show="isMenuVisible"
				class="absolute left-[3.5rem] top-[17%] bg-white shad w-[calc(100%-7rem)] p-[2rem] flex flex-col text-center rounded-md transition-opacity z-[100] lg:bg-transparent lg:static lg:flex-row lg:p-0 lg:justify-end lg:gap-x-[7rem]">
				<a
					href="#"
					v-for="(item, index) in links"
					:key="index"
					class="font-barloC font-w700 uppercase text-[2rem] tracking-[1px] pb-[2rem] last:text-neutral-blue-300 last:pt-[2rem] last:border-t-[1px] w-full lg:last:p-0 lg:last:border-t-0 lg:p-0 lg:w-auto lg:last:ml-[3.5rem] lg:text-[1.5rem] xl:hover:underline"
					:class="index == 3 && 'testDot'"
					>{{ item }}</a
				>
			</div>
		</Transition>
	</nav>
</template>

<script setup lang="ts">
import { Ref, ref, computed, watchEffect } from 'vue'
import logo from '@/images/logo.svg'
import burger from '@/images/icon-hamburger.svg'
import close from '@/images/icon-close.svg'
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()
const isOpen: Ref<boolean> = ref(false)
const isLargeScreen = computed(() => width.value >= 1024)

// Resetowanie isOpen na false, gdy zmieniamy szerokość ekranu
watchEffect(() => {
	if (width.value < 1024) return // Jeśli ekran jest mały, nie robimy nic
	isOpen.value = false // Na dużym ekranie zawsze resetujemy isOpen
})

const isMenuVisible = computed(() => {
	if (isLargeScreen.value) return true
	return isOpen.value
})

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

@media (min-width: 1024px) {
	.shad {
		box-shadow: none;
	}

	.testDot {
		position: relative;

		&::before {
			position: absolute;
			content: '';
			top: 50%;
			left: -5.5rem;
			transform: translateY(-50%);
			width: 0.7rem;
			height: 0.7rem;
			background-color: hsl(233, 6%, 72%);
			border-radius: 50%;
		}
	}
}
</style>
