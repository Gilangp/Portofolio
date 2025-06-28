<template>
    <nav class="bg-white dark:bg-dark shadow-lg">
        <div class="container mx-auto px-4 py-3 flex justify-between">
        <router-link 
            to="/" 
            class="text-2xl font-bold text-primary"
        >
            MyPortfolio
        </router-link>
        
        <div class="flex items-center gap-6">
            <router-link 
            v-for="link in ['Home', 'Projects', 'Contact']" 
            :key="link"
            :to="`/${link.toLowerCase()}`"
            class="hover:text-primary transition"
            >
            {{ link }}
            </router-link>
        </div>
        </div>
    </nav>
</template>