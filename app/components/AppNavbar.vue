<script setup>
import { ref, onMounted } from "vue";

const isDark = ref(false);
const isOpenMobileNav = ref(false);

const toggleDarkMode = () => {
  isDark.value = !isDark.value;
  localStorage.setItem("theme", isDark.value ? "dark" : "light");
  document.documentElement.classList.toggle("dark", isDark.value);
};

onMounted(() => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    isDark.value = true;
    document.documentElement.classList.add("dark");
  }
});
</script>

<template>
  <div
    class="z-50 bg-lightForeground py-2 dark:bg-darkForeground dark:text-white"
  >
    <nav
      class="dark:shadow-dark-shadow shadow-light-shadow container flex w-full items-center justify-between px-6 py-1 font-poppins lg:px-8"
    >
      <div class="flex items-center gap-4">
        <h1
          class="py-1 pt-3 font-sunshine text-6xl leading-8 font-medium text-dark dark:text-white"
        >
          Anis
        </h1>
      </div>

      <ul class="hidden items-center gap-6 font-mulish font-medium lg:flex">
        <li>
          <a href="#home" class="duration-200 hover:text-primary">Home</a>
        </li>
        <li>
          <a href="#about-me" class="duration-200 hover:text-primary"
            >About Me</a
          >
        </li>
        <li>
          <a href="#project" class="duration-200 hover:text-primary"
            >Projects</a
          >
        </li>
        <li>
          <a href="#contact" class="duration-200 hover:text-primary">Contact</a>
        </li>
        <li>
          <div class="flex items-center justify-center rounded-full border p-1">
            <button
              @click="toggleDarkMode"
              type="button"
              class="cursor-pointer rounded-full font-medium text-dark hover:bg-gray-200 focus:bg-gray-200 focus:outline-none dark:text-white dark:hover:bg-darkBackground dark:focus:bg-darkBackground"
              data-hs-theme-click-value="dark"
            >
              <span
                v-show="!isDark"
                class="group inline-flex size-9 shrink-0 items-center justify-center"
              >
                <svg
                  class="size-4 shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                </svg>
              </span>
            </button>
            <button
              @click="toggleDarkMode"
              type="button"
              class="cursor-pointer rounded-full font-medium text-gray-800 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
              data-hs-theme-click-value="light"
            >
              <span
                v-show="isDark"
                class="group inline-flex size-9 shrink-0 items-center justify-center"
              >
                <svg
                  class="size-4 shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M12 2v2"></path>
                  <path d="M12 20v2"></path>
                  <path d="m4.93 4.93 1.41 1.41"></path>
                  <path d="m17.66 17.66 1.41 1.41"></path>
                  <path d="M2 12h2"></path>
                  <path d="M20 12h2"></path>
                  <path d="m6.34 17.66-1.41 1.41"></path>
                  <path d="m19.07 4.93-1.41 1.41"></path>
                </svg>
              </span>
            </button>
          </div>
        </li>
      </ul>

      <button class="lg:hidden" @click="isOpenMobileNav = true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 16 16"
        >
          <path
            fill="currentColor"
            d="M16 5H0V4h16zm0 8H0v-1h16zm0-4.008H0V8h16z"
          />
        </svg>
      </button>
    </nav>
  </div>
  <div
    class="fixed top-0 z-50 h-screen w-full bg-lightForeground p-6 font-poppins text-xl font-medium duration-200 lg:hidden dark:bg-darkBackground dark:text-white"
    v-show="isOpenMobileNav"
  >
    <div class="flex items-center justify-between">
      <div class="flex items-center justify-center rounded-full border p-1">
        <button
          @click="toggleDarkMode"
          type="button"
          class="rounded-full font-medium text-dark hover:bg-gray-200 focus:bg-gray-200 focus:outline-none dark:text-white dark:hover:bg-darkBackground dark:focus:bg-darkBackground"
          data-hs-theme-click-value="dark"
        >
          <span
            v-show="!isDark"
            class="group inline-flex size-9 shrink-0 items-center justify-center"
          >
            <svg
              class="size-4 shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
            </svg>
          </span>
        </button>
        <button
          @click="toggleDarkMode"
          type="button"
          class="rounded-full font-medium text-gray-800 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
          data-hs-theme-click-value="light"
        >
          <span
            v-show="isDark"
            class="group inline-flex size-9 shrink-0 items-center justify-center"
          >
            <svg
              class="size-4 shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="m4.93 4.93 1.41 1.41"></path>
              <path d="m17.66 17.66 1.41 1.41"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="m6.34 17.66-1.41 1.41"></path>
              <path d="m19.07 4.93-1.41 1.41"></path>
            </svg>
          </span>
        </button>
      </div>

      <button @click="isOpenMobileNav = !isOpenMobileNav">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 16 16"
        >
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="m8 8.707l3.646 3.647l.708-.707L8.707 8l3.647-3.646l-.707-.708L8 7.293L4.354 3.646l-.707.708L7.293 8l-3.646 3.646l.707.708z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
    <ul class="flex flex-col items-center justify-center gap-4 pt-20">
      <li @click="isOpenMobileNav = !isOpenMobileNav">
        <a href="#home" class=""> Home </a>
      </li>
      <li @click="isOpenMobileNav = !isOpenMobileNav">
        <a href="#about-me" class=""> About Me </a>
      </li>
      <li @click="isOpenMobileNav = !isOpenMobileNav">
        <a href="#project" class=""> Projects </a>
      </li>
      <li @click="isOpenMobileNav = !isOpenMobileNav">
        <a href="#contact" class=""> Contact </a>
      </li>
    </ul>
  </div>
</template>
