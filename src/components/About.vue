<script setup></script>

<template>
  <div
    class="w-10/12 lg:w-8/12 text-sky-400 bg-purple-300 bg-opacity-20 dark:bg-white dark:bg-opacity-10 rounded-lg p-5"
    id="main-modal"
  >
    <div class="flex items-center gap-5">
      <router-link to="/">
        <div class="bg-blue-500 bg-opacity-25 rounded-full px-3 py-2">
          <i class="bi bi-arrow-left text-3xl"></i>
        </div>
      </router-link>
      <h1 class="text-3xl font-bold py-2 border-b-2 border-sky-400 w-full">
        <i class="bi bi-exclamation-circle-fill"></i> About Page
      </h1>
    </div>
    <div class="py-3 lg:py-7 px-7 lg:px-10" id="content">
      <h2 class="text-xl my-4 font-bold py-1 border-b border-sky-400">
        About the Author
      </h2>
      <p class="text-sm lg:text-base leading-normal lg:leading-relaxed">
        Hi, there. My name is Deri Prasetyo. I'm software engineer. I recently
        live at Yogyakarta. I'm self-taught programmer. I used to build
        something new, beside my daily work. If you want to see my project,
        please visit my GitHub profile at:
        <a
          class="text-pink-400 dark:text-white underline"
          href="https://github.com/triplettroubel"
          >https://github.com/triplettrouble</a
        >. You also can contact me by send e-mail to
        <a
          class="text-pink-400 dark:text-white underline"
          href="mailto:hello.deriprasetyo@gmail.com"
          >hello.deriprasetyo@gmail.com</a
        >. Nice to met you. <i class="bi bi-heart-fill text-pink-500"></i>
      </p>
      <h2 class="text-xl my-4 font-bold py-1 border-b border-sky-400">
        About Workify
      </h2>
      <p class="text-sm lg:text-base leading-normal lg:leading-relaxed">
        As a software engineer, we used to make a report about our daily
        activity at office. Sometimes, creating daily activity report is
        exhausting, since we only focused on our programming activity and forgot
        to write about our activity. <br class="mb-2 lg:mb-5" />
        Since creating daily activity report could be a problem, I create an
        application to help us creating daily activity report. I hope, workify
        could help us compiling our workload into daily activity report.
      </p>
    </div>
  </div>
</template>
