<template>
  <div>
    <nav class="flex flex-wrap items-center justify-between bg-teal-500 p-6">
      <div class="mr-6 flex flex-shrink-0 items-center text-white">
        <svg
          class="mr-2 h-8 w-8 fill-current"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"
          />
        </svg>
        <span class="text-xl font-semibold tracking-tight">Tailwind CSS</span>
      </div>
      <div class="block lg:hidden">
        <button
          class="flex items-center rounded border border-teal-400 px-3 py-2 text-teal-200 hover:border-white hover:text-white"
        >
          <svg
            class="h-3 w-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="block w-full flex-grow lg:flex lg:w-auto lg:items-center">
        <div class="text-sm lg:flex-grow">
          <NuxtLink to="/travels/">
            Travel
          </NuxtLink>
          <NuxtLink to="/travels/book/0287587428570">
            Book
          </NuxtLink>
          <a
            href="#responsive-header"
            class="mt-4 block text-teal-200 hover:text-white lg:mt-0 lg:inline-block"
          >
            Blog
          </a>
        </div>
        <div>
          <a
            href="#"
            class="mt-4 inline-block rounded border border-white px-4 py-2 text-sm leading-none text-white hover:border-transparent hover:bg-white hover:text-teal-500 lg:mt-0"
          >Download</a>
        </div>
      </div>
    </nav>
    <div class="container mx-auto px-2">
      <slot />
    </div>
    <wizard-container />
  </div>
</template>
