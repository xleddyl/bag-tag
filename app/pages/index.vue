<template>
   <main class="flex flex-col gap-8 text-white">
      <h1 class="flex flex-col gap-1 text-xl font-semibold">
         <span> Hello, I'm </span>
         <span class="w-fit rounded-md bg-sunset-strip px-2 py-1 text-black">
            Edoardo Alberti
         </span>
         <span>and this is my bag</span>
      </h1>
      <div class="flex flex-col gap-5">
         <div class="flex flex-col gap-1">
            <p class="font-semibold">
               I'm headed to
               <span class="w-fit rounded-md bg-sunset-strip px-2 py-1 font-title text-black">
                  Biella
               </span>
            </p>
            <p class="text-sm opacity-70">
               <a
                  target="_blank"
                  class="__clickable underline"
                  href="https://maps.app.goo.gl/iuBvx6EfVegpkJCS7"
               >
                  My house
               </a>
               <br />
               via Mario Colletta 15, Andorno Micca 13811, Biella, Italia
            </p>
         </div>

         <div class="flex flex-col gap-1">
            <p class="font-semibold">
               My flight number is
               <span class="w-fit rounded-md bg-sunset-strip px-2 py-1 font-title text-black">
                  NH0207
               </span>
            </p>
            <p class="text-sm opacity-70">departing from HANEDA at 01:05 directed to MXP</p>
         </div>

         <div class="flex flex-col gap-1">
            <p class="font-semibold">
               My phone number is
               <a
                  target="_blank"
                  href="tel:+393311875471"
                  class="__clickable w-fit rounded-md bg-sunset-strip px-2 py-1 font-title text-black underline"
               >
                  +393311875471
               </a>
            </p>
            <p class="text-sm opacity-70">
               or contact me on
               <a
                  target="_blank"
                  class="__clickable underline"
                  href="https://instagram.com/xleddyl"
               >
                  instagram </a
               >,
               <a target="_blank" class="__clickable underline" href="https://t.me/xleddyl">
                  telegram
               </a>
               or by
               <a
                  target="_blank"
                  class="__clickable underline"
                  href="mailto:edoalberti99@gmail.com"
               >
                  email
               </a>
            </p>
         </div>

         <p class="text-philippine-silver"></p>
      </div>
   </main>
</template>

<script lang="ts" setup></script>
