<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Home from './components/Home.vue'

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}
</script>

<template>
  <div class="w-screen h-screen bg-gradient-to-br from-slate-200 to-gray-200 via-white dark:from-gray-700 dark:to-gray-700 dark:via-slate-800 flex items-center justify-center" id="canvas">
    <router-view></router-view>
  </div>
</template>
