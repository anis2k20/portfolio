<script setup>
import { useDark, useToggle } from "@vueuse/core";

const { isDark, toggleDarkMode } = useDark();
const isOpenMobileNav = ref(false);
</script>

<template>
  <nav
    class="bg-lightForeground z-50 dark:bg-darkForeground dark:text-white py-1 fixed w-full flex items-center justify-between font-poppins px-6 lg:px-8 dark:shadow-dark-shadow shadow-light-shadow"
  >
    <div class="flex items-center gap-4">
      <h1
        class="py-1 pt-3 leading-[2rem] text-6xl text-[#212121] dark:text-white font-medium font-sunshine"
      >
        Anis
      </h1>
    </div>

    <ul class="hidden lg:flex font-mulish font-medium items-center gap-6">
      <li><a href="#home" class="hover:text-primary duration-200">Home</a></li>
      <li>
        <a href="#about-me" class="hover:text-primary duration-200">About Me</a>
      </li>
      <li>
        <a href="#project" class="hover:text-primary duration-200">Projects</a>
      </li>
      <li>
        <a href="#contact" class="hover:text-primary duration-200">Contact</a>
      </li>
      <li>
        <div class="border flex items-center justify-center p-1 rounded-full">
          <button
            @click="
              toggleDarkMode();
              isDark = !isDark;
            "
            type="button"
            class="font-medium text-dark rounded-full hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:text-white dark:hover:bg-darkBackground dark:focus:bg-darkBackground"
            data-hs-theme-click-value="dark"
          >
            <span
              x-show="!isDark"
              class="group inline-flex shrink-0 justify-center items-center size-9"
            >
              <svg
                class="shrink-0 size-4"
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
            @click="
              toggleDarkMode();
              isDark = !isDark;
            "
            type="button"
            class="font-medium text-gray-800 rounded-full hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
            data-hs-theme-click-value="light"
          >
            <span
              x-show="isDark"
              class="group inline-flex shrink-0 justify-center items-center size-9"
            >
              <svg
                class="shrink-0 size-4"
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

    <button x-cloak class="lg:hidden" @click="isOpenMobileNav = true">
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
  <!-- mobile nav :class="{'left-0': isOpenMobileNav,'-left-[1200px]': !isOpenMobileNav}" -->
  <div
    x-cloak
    class="lg:hidden bg-lightForeground dark:bg-darkBackground dark:text-white duration-200 font-poppins text-xl font-medium top-0 p-6 z-50 fixed w-full h-screen"
    x-show="isOpenMobileNav"
    x-transition:enter="transition ease-out duration-300 transform"
    x-transition:enter-start="opacity-0 scale-90"
    x-transition:enter-end="opacity-100 scale-100"
    x-transition:leave="transition ease-in duration-300 transform"
    x-transition:leave-start="opacity-100 scale-100"
    x-transition:leave-end="opacity-0 scale-90"
  >
    <div class="flex justify-between items-center">
      <div class="border flex items-center justify-center p-1 rounded-full">
        <button
          @click="
            toggleDarkMode();
            isDark = !isDark;
          "
          type="button"
          class="font-medium text-dark rounded-full hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:text-white dark:hover:bg-darkBackground dark:focus:bg-darkBackground"
          data-hs-theme-click-value="dark"
        >
          <span
            x-show="!isDark"
            class="group inline-flex shrink-0 justify-center items-center size-9"
          >
            <svg
              class="shrink-0 size-4"
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
          @click="
            toggleDarkMode();
            isDark = !isDark;
          "
          type="button"
          class="font-medium text-gray-800 rounded-full hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
          data-hs-theme-click-value="light"
        >
          <span
            x-show="isDark"
            class="group inline-flex shrink-0 justify-center items-center size-9"
          >
            <svg
              class="shrink-0 size-4"
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
    <ul class="flex items-center justify-center pt-20 flex-col gap-4">
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
