<template>
  <section id="project">
    <div class="bg-lightBackground py-20 lg:py-20 dark:bg-darkBackground">
      <div
        class="container flex flex-wrap items-center justify-between gap-4 lg:gap-0"
      >
        <MotionGroup preset="slideVisibleLeft" :duration="1000">
          <div
            class="ext-slate-500 order-2 w-full space-y-2 font-mulish text-base lg:order-1 lg:w-1/2 lg:pr-4 dark:text-slate-300"
          >
            <h2
              class="font-poppins text-xl font-bold text-dark md:text-2xl dark:text-white"
            >
              Zerdeli.app - Education Platform
            </h2>
            <div class="text-slate-600 dark:text-slate-300">
              <h6>Location: Kazakhstan</h6>
              <h6>Role: Frontend Developer</h6>
            </div>
            <p
              class="text-justify text-base text-slate-600 dark:text-slate-300"
            >
              Zerdeli is an innovative education platform transforming the
              learning experience for students in Kazakhstan by connecting
              educators, learners, and technology in one seamless environment.
            </p>

            <h3 class="font-bold">Tools & Technologies:</h3>
            <ul
              class="list-style list-inside list-disc text-base text-slate-600 dark:text-slate-300"
            >
              <li>Frontend Framework: Vue.js (Composition API)</li>
              <li>Styling: Tailwind CSS</li>
              <li>State Management: Pinia</li>
              <li>Version Control: Git</li>
            </ul>
            <p
              class="text-justify text-base text-slate-600 dark:text-slate-300"
            >
              As part of the frontend team, I build responsive, interactive
              interfaces, optimize user experience, and ensure smooth
              functionality across devices.
            </p>
          </div>
        </MotionGroup>
        <MotionGroup preset="slideVisibleRight" :duration="1000">
          <div class="order-1 w-full space-y-4 lg:order-2 lg:w-1/2 lg:pl-4">
            <img
              src="@/assets/images/zerdeli.png"
              alt="project-image"
              class="w-full rounded-4xl"
            />
            <div class="flex justify-center">
              <a
                href="https://zerdeli.app"
                target="_blank"
                class="btn text-center"
                >Live Demo</a
              >
            </div>
          </div>
        </MotionGroup>
      </div>
    </div>
  </section>

  <section>
    <div class="bg-lightForeground py-20 lg:py-20 dark:bg-darkForeground">
      <div
        class="container flex flex-wrap items-center justify-between gap-4 lg:gap-0"
      >
        <MotionGroup preset="slideVisibleLeft" :duration="1000">
          <div class="order-1 w-full space-y-4 lg:order-1 lg:w-1/2 lg:pr-8">
            <img
              src="@/assets/images/moonlight-pharmacy.png"
              alt="project-image"
              class="w-full rounded-lg"
            />
            <div class="flex justify-center">
              <a
                href="https://moonlightpharmacy.net"
                target="_blank"
                class="btn text-center"
                >Live Demo</a
              >
            </div>
          </div>
        </MotionGroup>
        <MotionGroup preset="slideVisibleRight" :duration="1000">
          <div
            class="ext-slate-500 order-2 w-full space-y-2 font-mulish text-base lg:order-2 lg:w-1/2 lg:pl-4 dark:text-slate-300"
          >
            <h2
              class="font-poppins text-xl font-bold text-dark md:text-2xl dark:text-white"
            >
              Moonlight Pharmacy - Ecommerce
            </h2>
            <p
              class="text-justify text-base text-slate-600 dark:text-slate-300"
            >
              Moonlight Pharmacy is an online platform for purchasing
              pharmaceutical products. It allows users to upload prescription
              photos, with A-grade pharmacists providing guidance for safe and
              accurate purchases.
            </p>

            <h3 class="text-base font-bold">Tools & Technologies:</h3>
            <ul
              class="list-style list-inside list-disc text-base text-slate-600 dark:text-slate-300"
            >
              <li>Frontend Framework: Vue.js (Composition API)</li>
              <li>Styling: Tailwind CSS</li>
              <li>State Management: Pinia</li>
              <li>API Integration: Axios</li>
              <li>Version Control: Git</li>
            </ul>
            <p
              class="text-justify text-base text-slate-600 dark:text-slate-300"
            >
              In this project, I worked on developing intuitive, responsive
              interfaces to optimize the shopping experience, ensuring smooth
              navigation and seamless purchasing functionality.
            </p>
          </div>
        </MotionGroup>
      </div>
    </div>
  </section>
</template>
