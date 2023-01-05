<script setup>
import { ref } from "vue";
const isActive = ref(true);
const status = ref(1);
const activities = ref([]);
const activeActivityId = ref(0);
const nextActivityId = ref(1);
const startActivity = () => {
  const now = new Date().toISOString();

  activeActivityId.value = nextActivityId.value;
  status.value = 2;
  activities.value.push({
    id: nextActivityId.value,
    name: `test ${nextActivityId.value}`,
    startedAt: now,
    endedAt: null,
    notes: null,
  });
  nextActivityId.value++;
};
const stopActivity = () => {
  const now = new Date().toISOString();

  const index = activities.value.findIndex((item) => {
    return item.id == activeActivityId.value;
  });

  activities.value[index].endedAt = now;
  activities.value[index].notes = "Activity has been stopped.";
  status.value = 1;
};
const resize = (event) => {
  const dom = event.target

  if (dom.scrollHeight > 150) return
  dom.style.height = `${dom.scrollHeight}px`
}
</script>

<template>
  <div
    class="w-10/12 lg:w-8/12 text-sky-400 bg-purple-300 bg-opacity-20 dark:bg-white dark:bg-opacity-10 rounded-lg p-5"
    id="main-modal"
  >
    <div class="flex flex-col items-center gap-3">
      <router-link class="self-start" to="/">
        <div class="bg-blue-500 bg-opacity-25 rounded-full px-2 py-1">
          <i class="bi bi-arrow-left text-2xl"></i>
        </div>
      </router-link>
      <h1 class="text-3xl py-2 border-b-2 border-sky-400 px-5 text-center">
        <i class="bi bi-alarm-fill"></i> Clockify
      </h1>
    </div>
    <p class="text-center mt-3 mb-10 text-xs lg:text-base">
      {{
        new Intl.DateTimeFormat("id-Id", { dateStyle: "full" }).format(
          Date.now()
        )
      }}
    </p>
    <button
      v-if="isActive && status == 1"
      @click="startActivity()"
      class="mb-5 font-bold bg-white bg-opacity-20 rounded-xl border border-sky-400 px-2 py-1"
    >
      <i class="bi bi-play-fill"></i>
      Start Activity
    </button>
    <button
      v-else-if="isActive && status == 2"
      @click="stopActivity()"
      class="mb-5 font-bold bg-white bg-opacity-20 rounded-xl border border-sky-400 px-2 py-1"
    >
      <i class="bi bi-stop-fill"></i>
      Stop Activity
    </button>
    <h2
      class="text-lg mb-2 font-bold pb-1 border-b border-sky-400 w-3/4 lg:w-1/3"
    >
      <i class="bi bi-list-check"></i> My Activities
    </h2>
    <div class="flex flex-col mt-2">
      <div v-if="activities.length > 0" class="flex flex-col gap-2 mt-3">
        <div class="lg:grid grid-cols-4 hidden">
          <span
            class="p-2 bg-stone-200 text-center text-sm font-bold rounded-l-full"
            >Activity Name</span
          >
          <span class="p-2 bg-stone-200 text-center text-sm font-bold"
            >Started At</span
          >
          <span class="p-2 bg-stone-200 text-center text-sm font-bold"
            >Ended At</span
          >
          <span
            class="p-2 bg-stone-200 text-center text-sm font-bold rounded-r-full"
            >Notes</span
          >
        </div>
        <div
          class="max-h-[45vh] lg:max-h-[30vh] overflow-auto flex flex-col gap-3"
        >
          <div
            v-for="activity in activities"
            class="p-3 border rounded-xl lg:border-t-0 lg:border-l-0 lg:border-r-0 lg:rounded-none border-sky-400 grid gap-3 lg:grid-cols-4 justify-items-start"
          >
            <span
              class="rounded-xl py-1 px-2 text-xs border border-sky-400 bg-sky-500 text-white lg:hidden"
              >Name</span
            >
            <span class="lg:text-center text-sm">{{ activity.name }}</span>
            <span
              class="rounded-xl py-1 px-2 text-xs border border-sky-400 bg-sky-500 text-white lg:hidden"
              >Started At</span
            >
            <span class="lg:text-center text-sm">{{
              Intl.DateTimeFormat("id-ID", {
                hour: "numeric",
                minute: "numeric",
                timeZoneName: "short",
              }).format(Date.parse(activity.startedAt))
            }}</span>
            <span
              class="rounded-xl py-1 px-2 text-xs border border-sky-400 bg-sky-500 text-white lg:hidden"
              >Ended At</span
            >
            <span class="lg:text-center text-sm">{{
              activity.endedAt
                ? Intl.DateTimeFormat("id-ID", {
                    hour: "numeric",
                    minute: "numeric",
                    timeZoneName: "short",
                  }).format(Date.parse(activity.endedAt))
                : "Not ended yet."
            }}</span>
            <span
              class="rounded-xl py-1 px-2 text-xs border border-sky-400 bg-sky-500 text-white lg:hidden"
              >Notes</span
            >
            <span class="lg:text-left text-xs">{{ activity.notes }}</span>
          </div>
        </div>
      </div>
      <div class="mt-3" v-else>
        <p class="text-center text-sm">
          You have not created any activity yet.
        </p>
      </div>
    </div>
  </div>
  <div
    class="bg-slate-500 bg-opacity-60 h-screen w-screen absolute top-0 items-center justify-center hidden"
    id="start-modal"
  >
    <form
      class="w-[75%] bg-slate-200 dark:bg-slate-700 flex flex-col items-center p-5 rounded-lg"
    >
      <p class="text-lg font-bold text-center mb-5 text-sky-500">
        Enter Activity Name
      </p>
      <input
        class="pt-2 px-3 bg-transparent border-b border-sky-500 lg:w-[50%] w-full placeholder:text-white placeholder:opacity-30 focus:outline-none text-sky-500 text-sm"
        type="text"
        name="name"
        id="name"
        placeholder="Write activity name ..."
      />
      <button
        type="button"
        class="mt-5 p-2 border border-sky-500 rounded-xl text-sky-500 font-bold text-sm"
      >
        <i class="bi bi-play-fill"></i> Start Acitivity
      </button>
    </form>
  </div>
  <div
    class="bg-slate-500 bg-opacity-60 h-screen w-screen absolute top-0 flex items-center justify-center"
    id="end-modal"
  >
    <form
      class="w-[75%] bg-slate-200 dark:bg-slate-700 flex flex-col items-center p-5 rounded-lg"
    >
      <p class="text-lg font-bold text-center mb-5 text-sky-500">
        Add some notes
      </p>
      <textarea
        class="pt-2 px-3 pb-0 bg-transparent border-b border-sky-500 lg:w-[50%] w-full max-h-[300px] placeholder:text-white placeholder:opacity-30 focus:outline-none text-sky-500 text-sm"
        name="notes"
        id="notes"
        @input="resize($event)"
        placeholder="Write activity name ..."
        wrap="soft"
        rows="1"
      ></textarea>
      <button
        type="button"
        class="mt-5 p-2 border border-sky-500 rounded-xl text-sky-500 font-bold text-sm"
      >
        <i class="bi bi-stop-fill"></i> Stop Acitivity
      </button>
    </form>
  </div>
</template>
