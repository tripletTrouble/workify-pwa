<script setup>
const props = defineProps({
  checked_in_at: String,
  checked_out_at: String,
});
</script>

<template>
  <div
    class="w-10/12 lg:w-8/12 text-sky-400 bg-purple-300 bg-opacity-20 dark:bg-white dark:bg-opacity-10 rounded-lg p-5"
    id="main-modal"
  >
    <div class="flex item-center gap-5">
      <router-link to="/">
        <div class="bg-blue-500 bg-opacity-25 rounded-full px-3 py-2">
          <i class="bi bi-arrow-left text-3xl"></i>
        </div>
      </router-link>
      <h1 class="text-3xl font-bold py-2 border-b-2 border-sky-400 w-full">
        <i class="bi bi-bookmark-check-fill"></i> Attendance
      </h1>
    </div>
    <p class="text-sm lg:text-base mt-3 text-center">
      {{
        new Intl.DateTimeFormat("id-ID", { dateStyle: "full" }).format(
          Date.now()
        )
      }}
    </p>
    <div
      class="py-3 lg:py-7 px-3 lg:px-10 mt-3 text-sm lg:text-base"
      id="content"
    >
      <table>
        <tbody>
          <tr>
            <td class="p-1">Checked in at</td>
            <td class="p-1">:</td>
            <td class="p-1">{{ checked_in_at ?? "-" }}</td>
          </tr>
          <tr>
            <td class="p-1">Checked out at</td>
            <td class="p-1">:</td>
            <td class="p-1">{{ checked_out_at ?? "-" }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="w-full flex items-center justify-center">
      <button
        v-if="checked_in_at"
        class="p-3 text-sm lg:text-base font-bold bg-red-400 text-white rounded-lg"
      >
        <i class="bi bi-box-arrow-left"></i> Check Out
      </button>
      <span v-else-if="checked_out_at" class="p-3 text-sm"
        ><i class="bi bi-exclamation-triangle-fill"></i> Ooops, you've make an
        attendance today.</span
      >
      <button
        v-else
        class="p-3 text-sm lg:text-base font-bold bg-sky-400 text-white rounded-lg"
      >
        <i class="bi bi-box-arrow-in-right"></i> Check In
      </button>
    </div>
    <div class="mt-7 w-8/12 mx-auto italic">
      <p class="text-sm text-center">
        Record your attendance here! Once, you have recorded your attendance,
        you can record your activities. You can only create attendance once per
        day.
      </p>
    </div>
  </div>
</template>
