<template>
  <section class="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">

    <div class="h-8"></div>

    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
          My <span class="text-blue-600 dark:text-blue-400">Projects</span>
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Here are some of my recent works. Click to see details.
        </p>
      </div>

      <!-- project -->
      <div class="relative group">
        <div class="absolute inset-y-0 left-0 z-10 flex items-center">
          <button @click="prevSlide" class="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-transform group-hover:translate-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-800 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>

        <div class="overflow-hidden">
          <div ref="slider" class="flex gap-6 transition-transform duration-300 ease-in-out">
            <div 
              v-for="(project, index) in projects" 
              :key="index"
              class="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-2 transition-all duration-300 transform hover:scale-105"
            >
              <ProjectCard 
                :project="project"
                @click="openModal(project)"
              />
            </div>
          </div>
        </div>

        <div class="absolute inset-y-0 right-0 z-10 flex items-center">
          <button @click="nextSlide" class="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-transform group-hover:-translate-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-800 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <!-- project modal -->
      <div v-if="selectedProject" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
        <div class="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
          <div class="relative">
            <button @click="closeModal" class="absolute top-4 right-4 p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <img :src="selectedProject.image" :alt="selectedProject.title" class="w-full h-64 object-cover rounded-t-xl">
            
            <div class="p-6">
              <h3 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">{{ selectedProject.title }}</h3>
              <div class="flex flex-wrap gap-2 mb-4">
                <span v-for="(tag, i) in selectedProject.tags" :key="i" class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full">
                  {{ tag }}
                </span>
              </div>
              <p class="text-gray-600 dark:text-gray-300 mb-6">{{ selectedProject.description }}</p>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div v-for="(feature, i) in selectedProject.features" :key="i" class="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <p class="text-gray-700 dark:text-gray-200">{{ feature }}</p>
                </div>
              </div>
              
              <div class="flex flex-wrap gap-3">
                <a v-if="selectedProject.liveUrl" :href="selectedProject.liveUrl" target="_blank" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </a>
                <a v-if="selectedProject.codeUrl" :href="selectedProject.codeUrl" target="_blank" class="px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white rounded-lg flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'

// Project Card Component
const ProjectCard = {
  props: ['project'],
  template: `
    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 cursor-pointer h-full flex flex-col">
      <div class="relative overflow-hidden h-48">
        <img :src="project.image" :alt="project.title" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110">
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
          <h3 class="text-xl font-bold text-white">{{ project.title }}</h3>
        </div>
      </div>
      <div class="p-4 flex-grow">
        <p class="text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">{{ project.shortDescription }}</p>
        <div class="flex flex-wrap gap-2">
          <span v-for="(tag, i) in project.tags.slice(0, 3)" :key="i" class="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full">
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
  `
}

export default {
  components: { ProjectCard },
  setup() {
    const slider = ref(null)
    const selectedProject = ref(null)
    
    const projects = [
      {
        title: "E-Commerce Website",
        shortDescription: "A full-featured online store with shopping cart, payment gateway, and admin dashboard.",
        description: "This e-commerce platform was built with Vue.js for the frontend and Node.js for the backend. It includes features like product search, user authentication, order tracking, and a complete admin dashboard for inventory management.",
        image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["Vue.js", "Node.js", "MongoDB", "Stripe"],
        features: [
          "Product catalog with search and filters",
          "Shopping cart functionality",
          "User authentication system",
          "Payment gateway integration",
          "Admin dashboard for inventory management",
          "Order tracking system"
        ],
        liveUrl: "https://example-ecommerce.com",
        codeUrl: "https://github.com/username/ecommerce-project"
      },
      {
        title: "Task Management App",
        shortDescription: "A productivity app for managing tasks with teams and deadlines.",
        description: "A collaborative task management application built with React and Firebase. It allows teams to create projects, assign tasks, set deadlines, and track progress in real-time.",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["React", "Firebase", "Redux", "Tailwind CSS"],
        features: [
          "Real-time collaboration",
          "Task assignment and tracking",
          "Project timeline view",
          "Notification system",
          "User roles and permissions",
          "Mobile responsive design"
        ],
        liveUrl: "https://taskmanager.example.com",
        codeUrl: "https://github.com/username/task-manager"
      },
      {
        title: "Weather Dashboard",
        shortDescription: "Real-time weather information with forecasts and historical data.",
        description: "A weather application that provides current conditions, 5-day forecasts, and historical weather data. It uses the OpenWeatherMap API and features interactive maps and data visualization.",
        image: "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["JavaScript", "API Integration", "Chart.js", "Geolocation"],
        features: [
          "Current weather conditions",
          "5-day weather forecast",
          "Interactive weather maps",
          "Location-based services",
          "Data visualization charts",
          "Favorite locations"
        ],
        liveUrl: "https://weather-dashboard.example.com",
        codeUrl: "https://github.com/username/weather-app"
      },
      {
        title: "Portfolio Website",
        shortDescription: "A personal portfolio website to showcase projects and skills.",
        description: "My personal portfolio website built with Vue.js and Tailwind CSS. It features a responsive design, dark mode toggle, project showcase, and contact form.",
        image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["Vue.js", "Tailwind CSS", "Responsive Design", "Dark Mode"],
        features: [
          "Responsive design for all devices",
          "Dark/light mode toggle",
          "Project showcase with filtering",
          "Interactive skills section",
          "Contact form with validation",
          "Performance optimized"
        ],
        liveUrl: "https://myportfolio.example.com",
        codeUrl: "https://github.com/username/portfolio"
      },
      {
        title: "Recipe Finder App",
        shortDescription: "Discover recipes based on ingredients you have at home.",
        description: "An application that helps users find recipes based on ingredients they have available. It includes features like meal planning, shopping lists, and nutritional information.",
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["React Native", "Firebase", "Edamam API", "Redux"],
        features: [
          "Ingredient-based recipe search",
          "Meal planning calendar",
          "Shopping list generator",
          "Nutritional information",
          "User recipe collections",
          "Mobile app for iOS and Android"
        ],
        liveUrl: "https://recipefinder.example.com",
        codeUrl: "https://github.com/username/recipe-finder"
      }
    ]

    const nextSlide = () => {
      const sliderElement = slider.value;
      if (sliderElement) {
        const firstItem = sliderElement.firstElementChild;
        if (firstItem) {
          const itemWidth = firstItem.offsetWidth + 24;
          sliderElement.scrollBy({
            left: itemWidth,
            behavior: 'smooth'
          });
        }
      }
    };

    const prevSlide = () => {
      const sliderElement = slider.value;
      if (sliderElement) {
        const firstItem = sliderElement.firstElementChild;
        if (firstItem) {
          const itemWidth = firstItem.offsetWidth + 24;
          sliderElement.scrollBy({
            left: -itemWidth,
            behavior: 'smooth'
          });
        }
      }
    };

    const openModal = (project) => {
      selectedProject.value = project
      document.body.style.overflow = 'hidden'
    }

    const closeModal = () => {
      selectedProject.value = null
      document.body.style.overflow = 'auto'
    }

    return {
      slider,
      projects,
      selectedProject,
      nextSlide,
      prevSlide,
      openModal,
      closeModal
    }
  }
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.overflow-hidden {
  position: relative;
}

.flex {
  overflow-x: auto;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}

.flex::-webkit-scrollbar {
  display: none;
}

button {
  z-index: 20;
  pointer-events: auto;
}
</style>