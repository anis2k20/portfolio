<script setup>
</script>

<template>
  <!-- About Me -->
  <section
    id="about-me"
  >
    <div class="py-20 lg:py-36 bg-lightForeground dark:bg-darkForeground">
      <div class="container">
        <div class="flex justify-between flex-wrap md:flex-nowrap gap-10">
          <div
            class="w-80 z-10 mx-auto shrink-0 border-double border-4 rounded-lg h-80 relative border-slate-400"
          >
            <img
              class="absolute left-1/2 z-10 -translate-x-1/2 bottom-0 h-96 rounded-lg"
              src="@/assets/images/about-me.webp"
              alt=""
            />
          </div>

          <div
            class="space-y-4 text-center md:text-left"
          >
            <div
              class="text-dark dark:text-white text-xl md:text-3xl font-poppins font-bold"
            >
              <p class="text-primary font-medium font-poppins text-lg">
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
              class="flex pt-4 justify-center md:justify-start gap-4 font-medium font-mulish"
            >
              <!-- <a href="./assets/pdf/front-end-cv.pdf" class="btn">Download -->
              <!--     CV</a> -->
              <a
                href="@/assets/pdf/AnisMiaResume.pdf"
                class="rounded px-5 py-2.5 overflow-hidden group bg-primary relative hover:bg-gradient-to-r hover:from-primary hover:to-blue-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-primary transition-all ease-out duration-300"
              >
                <span
                  class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white dark:bg-darkBackground opacity-10 rotate-12 group-hover:-translate-x-40 ease"
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
