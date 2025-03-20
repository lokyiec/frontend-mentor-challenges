<script setup lang="ts">
import IconNavHome from "~/assets/icon/icon-nav-home.svg";
import IconNavMovies from "~/assets/icon/icon-nav-movies.svg";
import IconNavSeries from "~/assets/icon/icon-nav-tv-series.svg";
import IconNavBookmark from "~/assets/icon/icon-nav-bookmark.svg";
</script>

<template>
  <nav
    class="bg-semi-dark-blue p-4 md:p-6 lg:p-8 md:rounded-2xl flex lg:flex-col items-center justify-between"
  >
    <div class="flex items-center space-x-2 cursor-pointer">
      <img src="/icon/logo.svg" alt="Logo" class="h-7 w-8" />
    </div>

    <ul class="hidden flex lg:flex-col justify-center items-center space-x-10 lg:space-x-0 lg:space-y-10">
      <li class="cursor-pointer">
        <IconNavHome
          :fontControlled="false"
          class="h-5 w-5 fill-current text-greyish-blue hover:text-pure-white transition-colors"
        />
      </li>
      <li class="cursor-pointer">
        <IconNavMovies
          :fontControlled="false"
          class="h-5 w-5 fill-current text-greyish-blue hover:text-pure-white transition-colors"
        />
      </li>
      <li class="cursor-pointer">
        <IconNavSeries
          :fontControlled="false"
          class="h-5 w-5 fill-current text-greyish-blue hover:text-pure-white transition-colors"
        />
      </li>
      <li class="cursor-pointer">
        <IconNavBookmark
          :fontControlled="false"
          class="h-5 w-5 fill-current text-greyish-blue hover:text-pure-white transition-colors"
        />
      </li>
    </ul>

    <div class="flex items-center space-x-4 cursor-pointer">
      <img
        src="/img/image-avatar.png"
        alt="User Avatar"
        class="h-10 w-10 rounded-full border-2 border-red"
      />
    </div>
  </nav>
</template>
