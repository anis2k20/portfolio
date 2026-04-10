<script setup></script>

<template>
  <section>
    <div class="relative bg-lightBackground dark:bg-darkBackground overflow-hidden">
      <img src="@/assets/images/dark.png" alt="dark mode" class="absolute inset-0 w-full dark:opacity-50 opacity-5" />
      <div
        class="container relative flex flex-wrap items-center justify-between space-y-10 py-[5%] pt-32"
      >
        <div
          class="flex w-full flex-col-reverse flex-wrap items-center gap-10 lg:flex-row lg:gap-0"
        >
          <div class="mx-auto w-full space-y-4 lg:w-1/2">
            <h1
              class="text-center font-poppins text-3xl leading-10 font-bold text-dark lg:text-left lg:text-5xl lg:leading-13.75 dark:text-white"
            >
              Front-End Development with a Creative Edge
            </h1>
            <p class="text-center text-[#555555] lg:text-left dark:text-white">
              Hi, I'm Anis Mia, a passionate Front-end Developer from Dhaka,
              Bangladesh, delivering seamless and engaging web applications with
              Vue.js.
            </p>
            <div
              class="flex items-center justify-center gap-4 lg:justify-start"
            >
              <a href="https://www.linkedin.com/in/anis2k20/" target="_blank">
                <img
                  src="@/assets/icons/mingcute--linkedin-line.svg"
                  alt="linkedin"
                  class="w-8"
                />
              </a>
              <a href="https://github.com/anis2k20" target="_blank">
                <img
                  src="@/assets/icons/mingcute--github-line.svg"
                  alt="github"
                  class="w-8"
                />
              </a>
            </div>
          </div>
          <div
            class="hero-image flex w-full items-center justify-center lg:w-1/2 lg:justify-end dark:text-white"
          >
            <img src="@/assets/images/anis-photo.webp" alt="anis-photo" />
          </div>
        </div>
        <div
          class="dark:text-white text-mulish flex w-full flex-wrap items-center justify-center gap-4 text-lg font-medium lg:flex-nowrap lg:justify-start"
        >
          <span >Technologies</span><span class="hidden lg:block">|</span>
          <div
            class="flex w-full flex-wrap items-center justify-center gap-4 lg:justify-start lg:gap-6"
          >
            <div class="card-style">
              <img
                src="@/assets/programming-language-icons/html-5.svg"
                alt="html"
                class="w-10"
              />
            </div>

            <div class="card-style">
              <img
                src="@/assets/programming-language-icons/css3-plain.svg"
                alt="html"
                class="w-10"
              />
              <img
                src="@/assets/programming-language-icons/tailwind-css.svg"
                alt="html"
                class="w-10"
              />
            </div>
            <div class="card-style">
              <img
                src="@/assets/programming-language-icons/javascript.svg"
                alt="html"
                class="w-8"
              />
              <img
                src="@/assets/programming-language-icons/typescript.svg"
                alt="typescript"
                class="w-8"
              />
              <img
                src="@/assets/programming-language-icons/vue-vuejs-javascript-js-framework.svg"
                alt="html"
                class="w-10"
              />
              <img
                src="@/assets/programming-language-icons/nuxtjs.svg"
                alt="html"
                class="w-10"
              />
              <img
                src="@/assets/programming-language-icons/Alpine.js.svg"
                alt="html"
                class="w-10"
              />
            </div>
            <div class="card-style">
              <img
                src="@/assets/programming-language-icons/figma.svg"
                alt="html"
                class="w-9"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
