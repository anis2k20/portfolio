<script setup></script>

<template>
  <!-- About Me -->
  <section id="about-me">
    <div
      class=" overflow-hidden bg-lightForeground py-20 lg:py-36 dark:bg-darkForeground"
    >
 
      <div class=" container">
        <div class="flex flex-wrap justify-between gap-10 md:flex-nowrap">
          <div
            class="relative z-10 mx-auto h-80 w-80 shrink-0 rounded-lg border-4 border-double border-slate-400"
          >
            <img
              class="absolute bottom-0 left-1/2 z-10 h-96 -translate-x-1/2 rounded-lg"
              src="@/assets/images/about-me.webp"
              alt=""
            />
          </div>

          <div class="space-y-4 text-center md:text-left">
            <div
              class="font-poppins text-xl font-bold text-dark md:text-3xl dark:text-white"
            >
              <p class="font-poppins text-lg font-medium text-primary">
                ABOUT ME
              </p>
              <span>Front-end Developer based in Dhaka, Bangladesh </span>
            </div>
            <p class="font-mulish text-base text-slate-600 dark:text-slate-300">
              Hey, my name is Anis Mia, and I'm a Frontend Developer with 1 year
              of experience in the field. My passion lies in creating and
              developing clean, intuitive, and user-friendly UI/UX designs to
              enhance the overall user experience.
            </p>

            <p class="font-mulish text-base text-slate-600 dark:text-slate-300">
              Currently, my main stack includes Vue.js, Tailwind CSS, and
              TypeScript, which I use to build responsive and scalable web
              applications. I’m always eager to learn and grow in this field,
              striving to deliver high-quality solutions that meet both user
              needs and business goals.
            </p>
            <div
              class="flex justify-center gap-4 pt-4 font-mulish font-medium md:justify-start"
            >
              <!-- <a href="./assets/pdf/front-end-cv.pdf" class="btn">Download -->
              <!--     CV</a> -->
              <a
                href="@/assets/pdf/AnisMiaResume.pdf"
                class="group relative overflow-hidden rounded bg-primary px-5 py-2.5 text-white transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-primary hover:to-blue-400 hover:ring-2 hover:ring-primary hover:ring-offset-2"
              >
                <span
                  class="ease absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 group-hover:-translate-x-40 dark:bg-darkBackground"
                ></span>
                <span class="relative">Download CV</span>
              </a>
              <a href="tel:+8801614637972" class="btn-outline">Contact Me</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
