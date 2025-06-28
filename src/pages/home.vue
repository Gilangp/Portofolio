<template>
  <div>
    <Navbar />
    <section class="container mx-auto px-4 py-12">
      <h1 class="text-4xl md:text-5xl font-bold mb-6">
        Hi, I'm <span class="text-primary">Frontend Developer</span>
      </h1>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <!-- <ProjectCard 
          v-for="project in projects"
          :key="project.id"
          :project="project"
        /> -->
      </div>
    </section>
  </div>
</template>

<!-- <script setup>
import ProjectCard from '../components/core/ProjectCard.vue'

const projects = [
  {
    id: 1,
    title: "E-commerce Website",
    description: "Built with Vue 3 and Firebase",
    tags: ["Vue", "Tailwind", "Firebase"],
  }
]
</script> -->