<template>
  <section>
    <div class="bg-lightBackground py-20 lg:py-20 dark:bg-darkBackground">
      <MotionGroup preset="slideVisibleBottom" :duration="1000">
        <h2 class="text-center font-poppins text-lg font-bold dark:text-white">
          Latest Projects
        </h2>
        <p
          class="px-4 pb-6 text-center font-mulish text-base text-slate-600 dark:text-white"
        >
          Innovative Solutions, Designed and Delivered
        </p>
        <div class="container grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div
            class="shadow-light-shadow relative w-full rounded-lg bg-white p-3"
          >
            <img
              src="@/assets/images/scheduler.jpg"
              alt="project-photo"
              class="w-full rounded border object-cover"
            />
            <h3 class="relative z-10 pt-2 text-center text-lg font-semibold">
              Scheduler Landing Page
            </h3>
            <span
              class="absolute bottom-1 font-poppins text-4xl font-bold text-gray-200"
              >1</span
            >
          </div>

          <div
            class="shadow-light-shadow relative w-full rounded-lg bg-white p-3"
          >
            <img
              src="@/assets/images/pigeonsoft.jpg"
              alt="project-photo"
              class="w-full rounded border object-cover"
            />
            <h3 class="relative z-10 pt-2 text-center text-lg font-semibold">
              Techwix Landing Page
            </h3>
            <span
              class="absolute bottom-1 font-poppins text-4xl font-bold text-gray-200"
              >2</span
            >
          </div>

          <div
            class="shadow-light-shadow relative w-full rounded-lg bg-white p-3"
          >
            <img
              src="@/assets/images/comming-soon.jpg"
              alt="project-photo"
              class="w-full rounded border object-cover"
            />
            <h3 class="relative z-10 pt-2 text-center text-lg font-semibold">
              Coming Soon Template
            </h3>
            <span
              class="absolute bottom-1 font-poppins text-4xl font-bold text-gray-200"
              >3</span
            >
          </div>

          <div
            class="shadow-light-shadow relative w-full rounded-lg bg-white p-3"
          >
            <img
              src="@/assets/images/sales-wind.jpg"
              alt="project-photo"
              class="w-full rounded border object-cover"
            />
            <h3 class="relative z-10 pt-2 text-center text-lg font-semibold">
              SalesWind Admin Template
            </h3>
            <span
              class="absolute bottom-1 font-poppins text-4xl font-bold text-gray-200"
              >4</span
            >
          </div>

          <div
            class="shadow-light-shadow relative w-full rounded-lg bg-white p-3"
          >
            <img
              src="@/assets/images/mars.jpg"
              alt="project-photo"
              class="w-full rounded border object-cover"
            />
            <h3 class="relative z-10 pt-2 text-center text-lg font-semibold">
              MARS Admin Dashboard
            </h3>
            <span
              class="absolute bottom-1 font-poppins text-4xl font-bold text-gray-200"
              >5</span
            >
          </div>

          <div
            class="shadow-light-shadow relative w-full rounded-lg bg-white p-3"
          >
            <img
              src="@/assets/images/salespro.jpg"
              alt="project-photo"
              class="w-full rounded border object-cover"
            />
            <h3 class="relative z-10 pt-2 text-center text-lg font-semibold">
              SalesPro Admin Dashboard
            </h3>
            <span
              class="absolute bottom-1 font-poppins text-4xl font-bold text-gray-200"
              >6</span
            >
          </div>
        </div>
      </MotionGroup>
    </div>
  </section>
</template>
