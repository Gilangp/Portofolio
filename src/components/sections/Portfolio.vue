<template>
  <section class="py-14 px-4 sm:px-6 lg:px-8 bg-light-gray text-gray-900 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-850 dark:to-gray-800 dark:text-white transition-colors duration-700 relative overflow-hidden">

    <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
      <div class="absolute top-1/4 left-1/5 w-32 h-32 rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 blur-xl animate-float-slow opacity-70"></div>
      <div class="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-gradient-to-br from-indigo-600/10 to-pink-600/10 blur-xl animate-float-slower opacity-70"></div>
    </div>

    <div class="h-8"></div>

    <div class="max-w-7xl mx-auto relative z-10">
      <div class="text-center mb-12 animate-fade-in">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          <div class="inline-flex flex-col items-center">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
              My Projects
            </span>
            <span class="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mt-2 animate-underline"></span>
          </div>
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Here are some of my recent works. Click to see details.
        </p>
      </div>

      <!-- project -->
      <div class="relative group animate-fade-in" style="animation-delay: 0.2s">
        <div class="absolute inset-y-0 left-0 z-10 flex items-center">
          <button @click="prevSlide" class="p-2 rounded-full bg-white/90 dark:bg-gray-800/90 shadow-md hover:bg-white dark:hover:bg-gray-700 transition-transform group-hover:translate-x-2 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
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
          <button @click="nextSlide" class="p-2 rounded-full bg-white/90 dark:bg-gray-800/90 shadow-md hover:bg-white dark:hover:bg-gray-700 transition-transform group-hover:-translate-x-2 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-800 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <!-- project modal -->
      <div v-if="selectedProject" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 pt-8">
        <div class="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[80vh] overflow-y-auto shadow-2xl mt-16" @click.self="closeModal">
          <div class="relative">
            <button @click="closeModal" class="absolute top-4 right-4 p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 z-10">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div class="relative group cursor-zoom-in" @click.stop="openImagePreview(selectedProject.image)">
              <img :src="selectedProject.image" :alt="selectedProject.title" class="w-full h-64 object-cover rounded-t-xl">
              <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-80 rounded-full p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3-3H7" />
                  </svg>
                </div>
              </div>
              <div class="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
                Click to enlarge
              </div>
            </div>
            
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
                <a v-if="selectedProject.liveUrl" :href="selectedProject.liveUrl" target="_blank" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center gap-2 transition-all duration-300 transform hover:scale-105">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </a>
                <a v-if="selectedProject.codeUrl" :href="selectedProject.codeUrl" target="_blank" class="px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white rounded-lg flex items-center gap-2 transition-all duration-300 transform hover:scale-105">
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

      <!-- Image Preview Modal -->
      <div v-if="previewImage" class="fixed inset-0 z-[60] flex items-center justify-center bg-black bg-opacity-90 p-4 pt-20" @click.self="closeImagePreview"> <!-- Added pt-20 -->
        <div class="relative max-w-6xl max-h-full w-full h-full flex items-center justify-center">
          <button @click="closeImagePreview" class="absolute top-4 right-4 p-3 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 text-white z-10">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div class="relative w-full h-full flex items-center justify-center" @click.stop>
            <img :src="previewImage" alt="Preview" class="max-w-full max-h-full object-contain rounded-lg cursor-zoom-out" @click="closeImagePreview">
          </div>

          <button v-if="hasMultipleImages" @click.stop="prevImage" class="absolute left-4 p-3 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button v-if="hasMultipleImages" @click.stop="nextImage" class="absolute right-4 p-3 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'

import portofolio1 from '../../assets/images/portofolio.png'
import portofolio2 from '../../assets/images/portofolio2.png'
import portofolio3 from '../../assets/images/portofolio3.png'
import portofolio4 from '../../assets/images/portofolio4.png'
import portofolio5 from '../../assets/images/portofolio5.png'

// Project Card Component
const ProjectCard = {
  props: ['project'],
  emits: ['click'],
  template: `
    <div class="bg-white/90 dark:bg-gray-800/90 rounded-xl shadow-md overflow-hidden border border-gray-200/50 dark:border-gray-700/50 cursor-pointer h-full flex flex-col group backdrop-blur-sm hover:shadow-lg transition-all duration-300">
      <div class="relative overflow-hidden h-48">
        <img :src="project.image" :alt="project.title" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
          <h3 class="text-xl font-bold text-white">{{ project.title }}</h3>
        </div>
      </div>
      <div class="p-4 flex-grow" @click="$emit('click')">
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
    const previewImage = ref(null)
    
    const projects = [
      {
        title: "Portfolio Website",
        shortDescription: "A modern, responsive portfolio website showcasing my projects and technical skills with elegant design and smooth interactions.",
        description: "A meticulously crafted personal portfolio website developed using Vue.js and Tailwind CSS. This platform serves as a digital showcase of my work, featuring a sleek dark/light mode interface, dynamic project filtering, and seamless user experience across all devices. The website demonstrates modern web development practices with optimized performance and clean code architecture.",
        image: portofolio1,
        tags: ["Vue.js", "Tailwind CSS", "Responsive Design", "Dark Mode", "Vue Router", "Component-Based Architecture"],
        features: [
        "Fully responsive design optimized for desktop, tablet, and mobile devices",
        "Intelligent dark/light mode toggle with system preference detection",
        "Dynamic project showcase with category filtering and search functionality",
        "Interactive skills visualization with animated progress indicators",
        "Advanced contact form with real-time validation and error handling",
        "Smooth page transitions and scroll animations for enhanced UX",
        "SEO-optimized structure with meta tags and semantic HTML",
        "Fast loading times with optimized images and code splitting",
        "Cross-browser compatibility and accessibility features"
        ],
        liveUrl: "https://gilangprnm.netlify.app/",
        codeUrl: "https://github.com/Gilangp/Portofolio"
      },
      {
        title: "SIMANTAP (Sistem Manajemen Tanggap Perbaikan)",
        shortDescription: "A comprehensive campus facility management system with automated reporting, priority-based repair assignment, and real-time tracking.",
        description: "SIMANTAP is a full-stack web application designed to streamline facility damage reporting and repair management in campus environments. Built with Laravel backend and Bootstrap frontend, the system features multi-role access (Admin, Reporter, Facility Manager, Technician), automated priority calculation using TOPSIS decision support system, and comprehensive reporting capabilities. The platform digitizes the entire repair workflow from initial reporting to completion and feedback with a responsive Bootstrap interface.",
        image: portofolio2,
        tags: ["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript", "TOPSIS Algorithm", "PDF Export", "Multi-role System"],
        features: [
        "Multi-role access system (Admin, Pelapor, Sarpras, Teknisi)",
        "Automated damage reporting with photo uploads",
        "TOPSIS algorithm for intelligent repair priority assignment",
        "Real-time status tracking and notifications",
        "Comprehensive PDF report generation with filters",
        "Facility and inventory management dashboard",
        "Technician assignment and work progress monitoring",
        "User feedback and rating system for completed repairs",
        "Dark/light mode interface customization",
        "Data export and import functionality",
        "Responsive Bootstrap design for all devices"
        ],
        liveUrl: "https://simantap.dbsnetwork.my.id/",
        codeUrl: "https://github.com/Gilangp/Sistem-Manajemen-Tanggap-Perbaikan"
      },
      {
        title: "Pemetaan Jaringan SMAN 1 PROBOLINGGO",
        shortDescription: "Comprehensive network infrastructure design and implementation project for high school campus.",
        description: "A complete network design and implementation project for SMAN 1 Probolinggo, featuring mesh topology with multiple routers, switches, and access points. The project includes detailed IP allocation, bandwidth calculation, router configuration, and server setup using Cisco Packet Tracer. This network infrastructure supports 1,765 devices across 4 zones with redundant connections for high reliability.",
        image: portofolio3,
        tags: ["Cisco Packet Tracer", "Network Design", "Mesh Topology", "IP Allocation", "Router Configuration", "Server Setup"],
        features: [
        "Mesh topology design with 5 routers and redundant connections",
        "IP allocation for 1,765 devices across 4 zones (Barat, Utara, Timur, Selatan)",
        "Bandwidth calculation and optimization (1.89 GB/s total requirement)",
        "Cisco router configuration with RIP routing protocol",
        "Dual server setup (School Server & Exam Server) with web services",
        "42 Access Points with WPA2-PSK security",
        "DHCP and static IP configuration for various device types",
        "Network testing and validation through web server access"
        ],
        liveUrl: "https://drive.google.com/drive/folders/1Y7-bebnWphneCU1lc3Ge_LEfBrtoOwm4?usp=drive_link",
        // codeUrl: "https://github.com/Gilangp/Pemetaan-Jaringan-SMAN-1-PROBOLINGGO"
      },
      {
        "title": "PWL POS (Point of Sale)",
        "shortDescription": "A comprehensive Point of Sale web application built with Laravel for business transaction management.",
        "description": "A full-featured Point of Sale system developed using Laravel framework with MySQL database. This application provides complete business management capabilities including product inventory, customer management, sales transactions, and reporting features. The system supports multiple user roles with proper authentication and authorization.",
        "image": portofolio4,
        "tags": ["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript", "jQuery"],
        "features": [
          "Product catalog and inventory management",
          "Sales transaction processing",
          "Customer management system",
          "User authentication and role-based access",
          "Sales reporting and analytics",
          "Receipt generation",
          "Responsive Bootstrap interface",
          "Database migration and seeding"
        ],
        // "liveUrl": "#",
        "codeUrl": "https://github.com/Gilangp/Pemrograman_Web_Lanjut/tree/main/PWL_POS"
      },
      {
        "title": "PrestasiKu",
        "shortDescription": "A student achievement management system built with native web technologies.",
        "description": "A web-based student achievement management system developed using native HTML, CSS, and JavaScript. This application allows educational institutions to record and manage student accomplishments including academic awards, competitions, and extracurricular activities. The system features a clean interface with form validation, data management, and achievement tracking capabilities.",
        "image": portofolio5,
        "tags": ["HTML", "CSS", "JavaScript", "Native Web","PHP", "MySQL", "Bootstrap", "Form Validation", "Data Management"],
        "features": [
          "Student achievement registration forms",
          "Data validation and error handling",
          "Achievement categorization and filtering",
          "Local data storage management",
          "Responsive web design",
          "User-friendly interface",
          "Achievement tracking system",
          "Form-based data entry"
        ],
        // "liveUrl": "#",
        "codeUrl": "https://github.com/IlhamFaturachman/presma_pbl"
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

    const openImagePreview = (imageUrl) => {
      previewImage.value = imageUrl
      document.body.style.overflow = 'hidden'
    }

    const closeImagePreview = () => {
      previewImage.value = null
      if (!selectedProject.value) {
        document.body.style.overflow = 'auto'
      }
    }

    const hasMultipleImages = ref(false)
    const prevImage = () => {
    }

    const nextImage = () => {
    }

    return {
      slider,
      projects,
      selectedProject,
      previewImage,
      hasMultipleImages,
      nextSlide,
      prevSlide,
      openModal,
      closeModal,
      openImagePreview,
      closeImagePreview,
      prevImage,
      nextImage
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

.fixed {
  transition: opacity 0.3s ease;
}

.cursor-zoom-in {
  cursor: zoom-in;
}

.cursor-zoom-out {
  cursor: zoom-out;
}

.animate-fade-in {
  animation: fadeIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  opacity: 0;
}

.animate-float-slow {
  animation: float 12s ease-in-out infinite;
}

.animate-float-slower {
  animation: float 16s ease-in-out infinite;
}

.animate-underline {
  animation: underlineWidth 1.2s ease-out forwards;
}

@keyframes fadeIn {
  from { 
    opacity: 0; 
    transform: translateY(15px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
}

@keyframes float {
  0%, 100% { 
    transform: translateY(0) translateX(0); 
  }
  50% { 
    transform: translateY(-15px) translateX(8px); 
  }
}

@keyframes underlineWidth {
  0% { 
    width: 0; 
    left: 50%; 
  }
  100% { 
    width: 100%; 
    left: 0; 
  }
}

.fixed.inset-0 {
  align-items: flex-start;
}

@media (min-width: 640px) {
  .fixed.inset-0 {
    align-items: center;
  }
}
</style>