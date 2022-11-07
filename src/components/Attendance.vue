<script setup>
    const props = defineProps({
        last_attendance_date: String,
        last_checked_in: String,
        last_checked_out: String,
        status: String
    })
</script>

<template>
    <div class="w-10/12 lg:w-8/12 text-sky-400 bg-white bg-opacity-10 rounded-lg p-5" id="main-modal">
        <div class="py-2 border-b border-sky-400">
            <h1 class="text-3xl font-bold border-sky-400"><i class="bi bi-bookmark-check-fill"></i> Attendance</h1>
        </div>
        <p class="text-sm lg:text-base mt-3 text-center">{{ new Intl.DateTimeFormat("id-ID", {dateStyle: 'full'}).format(Date.now()) }}</p>
        <div class="py-3 lg:py-7 px-3 lg:px-10 mt-5 text-sm lg:text-base" id="content">
            <p>Last attendance: {{ last_attendance_date }}</p>
            <p>Checked in: {{ last_checked_in }}</p>
            <p>Checked out: {{ last_checked_out  }}</p>
        </div>
        <div class="w-full flex items-center justify-center">
            <button v-if="status == 'checked_in'" class="p-3 text-sm lg:text-base font-bold bg-sky-400 text-white rounded-lg"><i class="bi bi-box-arrow-left"></i> Check Out</button>
            <span v-else-if="status == 'checked_out'" class="p-3 text-sm"><i class="bi bi-exclamation-triangle-fill"></i> Ooops, you've make an attendance today.</span>
            <button v-else class="p-3 text-sm lg:text-base font-bold bg-sky-400 text-white rounded-lg"><i class="bi bi-box-arrow-in-right"></i> Check In</button>
        </div>
        <div class="mt-7 w-8/12 mx-auto italic">
            <p class="text-sm text-center">Record your attendance here! Once, you have record your attendance, you can record your activities. You can only create attendance once per day.</p>
        </div>
    </div>
</template>