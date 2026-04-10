<script setup></script>

<template>
  <section>
    <div
      class="flex flex-wrap space-y-10 justify-between pt-32 items-center container py-[5%]"
    >
      <div
        class="w-full flex flex-wrap items-center flex-col-reverse lg:flex-row gap-10 lg:gap-0"
      >
        <div class="w-full mx-auto lg:w-1/2 space-y-4">
          <h1
            class="text-3xl lg:text-5xl text-dark dark:text-white font-bold font-poppins leading-10 text-center lg:text-left lg:leading-13.75"
          >
            Front-End Development with a Creative Edge
          </h1>
          <p class="text-[#555555] dark:text-white text-center lg:text-left">
            Hi, I'm Anis Mia, a passionate Front-end Developer from Dhaka,
            Bangladesh, delivering seamless and engaging web applications with
            Vue.js.
          </p>
          <div class="flex justify-center lg:justify-start items-center gap-4">
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
          class="w-full lg:w-1/2 hero-image dark:text-white flex justify-center lg:justify-end items-center"
        >
          <img src="@/assets/images/anis-photo.webp" alt="anis-photo" />
        </div>
      </div>
      <div
        class="w-full flex flex-wrap lg:flex-nowrap justify-center lg:justify-start items-center gap-4 text-mulish text-lg font-medium"
      >
        <span>Technologies</span><span class="hidden lg:block">|</span>
        <div
          class="w-full flex flex-wrap justify-center lg:justify-start items-center gap-4 lg:gap-6"
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
              src="@/assets/programming-language-icons/wordpress.svg"
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
  </section>
</template>
