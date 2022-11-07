<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
const props = defineProps({
  userName: String
})

</script>

<template>
  <div class="w-10/12 lg:w-8/12 bg-white bg-opacity-10 p-3 rounded-lg text-sky-400 flex flex-col items-center" id="main-modal">
    <h1 class="text-3xl text-center font-bold">Workify!</h1>
    <div class="px-4 py-2 rounded-full text-bold bg-sky-600 text-white text-center text-4xl mt-5">D</div>
    <p class="mt-3 text-xl font-bold">Hola, {{ userName }}!</p>
    <nav class="flex flex-col w-3/4 lg:w-1/2 mx-auto gap-4 mt-8">
      <router-link to="/insight" class="relative">
        <div class="text-center p-6 relative top-2 left-2 bg-gray-500 after:content-[''] after:bg-slate-800 after:w-full after:absolute after:p-6 after:z-[-1] z-[4] after:left-[-5px] after:top-[-5px] skew-y-3 rounded-lg after:rounded-lg"></div>
        <span class="block absolute top-3 left-0 w-full text-center z-10 font-bold text-lg" ><i class="bi bi-graph-up-arrow"></i> Insight</span>
      </router-link>
      <router-link to="/attendance" class="relative">
        <div class="text-center p-6 relative top-2 left-2 bg-gray-500 after:content-[''] after:bg-slate-800 after:w-full after:absolute after:p-6 after:z-[-1] z-[4] after:left-[-5px] after:top-[-5px] skew-y-3 rounded-lg after:rounded-lg"></div>
        <span class="block absolute top-3 left-0 w-full text-center z-10 font-bold text-lg" ><i class="bi bi-bookmark-check-fill"></i> Attendance</span>
      </router-link>
      <router-link to="/clockify" class="relative">
        <div class="text-center p-6 relative top-2 left-2 bg-gray-500 after:content-[''] after:bg-slate-800 after:w-full after:absolute after:p-6 after:z-[-1] z-[4] after:left-[-5px] after:top-[-5px] skew-y-3 rounded-lg after:rounded-lg"></div>
        <span class="block absolute top-3 left-0 w-full text-center z-10 font-bold text-lg" ><i class="bi bi-alarm-fill"></i> Clockify</span>
      </router-link>
      <router-link to="/report" class="relative">
        <div class="text-center p-6 relative top-2 left-2 bg-gray-500 after:content-[''] after:bg-slate-800 after:w-full after:absolute after:p-6 after:z-[-1] z-[4] after:left-[-5px] after:top-[-5px] skew-y-3 rounded-lg after:rounded-lg"></div>
        <span class="block absolute top-3 left-0 w-full text-center z-10 font-bold text-lg" ><i class="bi bi-journals"></i> Report</span>
      </router-link>
      <router-link to="/about" class="relative">
        <div class="text-center p-6 relative top-2 left-2 bg-gray-500 after:content-[''] after:bg-slate-800 after:w-full after:absolute after:p-6 after:z-[-1] z-[4] after:left-[-5px] after:top-[-5px] skew-y-3 rounded-lg after:rounded-lg"></div>
        <span class="block absolute top-3 left-0 w-full text-center z-10 font-bold text-lg" ><i class="bi bi-exclamation-circle-fill"></i> About</span>
      </router-link>
    </nav>
    <p class="text-xs mt-8 text-center">Workify App - <em>"Compiling your workload"</em></p>
    <p class="text-xs mt-3 text-center">Created with <i class="bi bi-heart-fill"></i> by <a class="text-white underline" href="https://github.com/triplettrouble">tripletTrouble</a> <br> from Yogyakarta</p>
  </div>
</template>
