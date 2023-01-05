<script setup>
import { ref } from "vue";

const isDark = ref(true);

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  isDark.value = true
} else {
  isDark.value = false
}

const changeTheme = () => {
  isDark.value = !isDark.value;
  if (isDark.value) {
    localStorage.theme = 'dark'
    document.documentElement.classList.add("dark");
  } else {
    localStorage.theme = 'light'
    document.documentElement.classList.remove("dark");
  }
};
</script>

<template>
  <div class="absolute top-4 right-5 flex flex-col items-end">
    <button
      @click="changeTheme()"
      class="group bg-gray-700 dark:bg-white dark:bg-opacity-20 bg-opacity-30 p-2 rounded-xl flex flex-col items-center"
    >
      <i v-if="isDark" class="bi bi-moon-stars-fill text-xl text-sky-500"></i>
      <i v-else class="bi bi-brightness-high-fill text-xl text-sky-500"></i>
      <span v-if="isDark" class="text-xs text-sky-500 hidden group-hover:block"
        >Dark</span
      >
      <span v-else class="text-xs text-sky-500 hidden group-hover:block"
        >Light</span
      >
    </button>
  </div>
</template>
