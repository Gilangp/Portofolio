<template>
  <section id="about" class="min-h-[60vh] bg-light-gray text-gray-900 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-850 dark:to-gray-800 dark:text-white transition-colors duration-700 relative overflow-hidden py-8 md:py-12">
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
      <div 
        class="absolute top-1/4 left-1/5 w-32 h-32 rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 blur-xl animate-float-slow opacity-70 transition-transform duration-300"
        :style="{ transform: `translate(${parallaxX * 0.4}px, ${parallaxY * 0.2}px)` }"
      ></div>
      <div 
        class="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-gradient-to-br from-indigo-600/10 to-pink-600/10 blur-xl animate-float-slower opacity-70 transition-transform duration-300"
        :style="{ transform: `translate(${-parallaxX * 0.6}px, ${parallaxY * 0.3}px)` }"
      ></div>
    </div>

    <div class="h-8"></div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 animate-fade-in">
        <span class="relative inline-block">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
            About Me
          </span>
          <span class="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-underline"></span>
        </span>
      </h2>

      <div class="flex flex-col lg:flex-row items-start gap-8 xl:gap-12">
        <div class="w-full lg:w-2/5 order-1 animate-fade-in" style="animation-delay: 0.2s">
          <div class="relative flex justify-center mx-auto -mt-4 lg:mt-0">
            <div class="overflow-hidden rounded-xl border-4 border-blue-400/50 hover:border-purple-300 transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-purple-500/20 group transform hover:-translate-y-1">
              <img 
                src="@/assets/images/Gilang_Purnomo.jpg"
                alt="Gilang Purnomo"
                class="h-[360px] w-[300px] object-cover object-top transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-600/10 to-blue-700/10 group-hover:via-purple-600/20 transition-all duration-300 rounded-xl"></div>
            </div>
          </div>
        </div>

        <!-- Content section -->
        <div class="w-full lg:w-3/5 order-2 space-y-4 md:space-y-6 animate-fade-in text-left pl-0 lg:pl-4" style="animation-delay: 0.4s">
          <!-- <h3 class="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500">
            Fullstack Developer & Network Engineer
          </h3> -->
          
          <div class="space-y-4">
            <p class="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed">
              <span class="text-blue-600 dark:text-blue-400 font-medium">Hello! I'm Gilang Purnomo</span>, an Information Technology student at Politeknik Negeri Malang with a passion for fullstack web development and network engineering.
            </p>
            
            <p class="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed">
              With a background in Computer and Network Engineering from SMK Negeri 2 Kediri and internship experience at <span class="text-purple-600 dark:text-purple-400 font-medium">JTP 3</span>, I bridge software development and infrastructure design.
            </p>

            <p class="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed">
              Experienced in developing fullstack applications using <span class="text-purple-600 dark:text-purple-400 font-medium">Laravel, PHP Native, HTML, CSS, JavaScript</span> and designing network infrastructure with <span class="text-purple-600 dark:text-purple-400 font-medium">Cisco Packet Tracer</span>.
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div class="bg-white/90 dark:bg-gray-800/90 p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm border border-gray-100/30 dark:border-gray-700/30">
              <div class="flex items-start gap-3">
                <div class="p-2 bg-blue-100/80 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <h4 class="text-base font-semibold text-gray-800 dark:text-white mb-2">Web Development</h4>
                  <p class="text-gray-600 dark:text-gray-300 text-xs leading-relaxed">
                    Fullstack development with Laravel, PHP Native, HTML, CSS, JavaScript. Database management with MySQL. UI/UX design with Figma.
                  </p>
                </div>
              </div>
            </div>
            
            <div class="bg-white/90 dark:bg-gray-800/90 p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm border border-gray-100/30 dark:border-gray-700/30">
              <div class="flex items-start gap-3">
                <div class="p-2 bg-green-100/80 dark:bg-green-900/30 rounded-lg text-green-600 dark:text-green-400">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                  </svg>
                </div>
                <div>
                  <h4 class="text-base font-semibold text-gray-800 dark:text-white mb-2">Network Engineering</h4>
                  <p class="text-gray-600 dark:text-gray-300 text-xs leading-relaxed">
                    Network design with Cisco Packet Tracer, IP configuration, subnetting, topology design, and network mapping.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="pt-2">
            <a href="/Gilang Purnomo-CV-ATS.pdf" download="Gilang-Purnomo-CV-ATS.pdf" 
              class="inline-block border-2 border-blue-500 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:text-white dark:hover:text-white px-4 py-2 md:px-5 md:py-2 lg:px-4 lg:py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-[1.03] hover:bg-blue-500 dark:hover:bg-blue-400 flex items-center justify-center gap-2 w-fit mx-auto md:mx-0">
              Download CV
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
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
</style>

<script>
import { useParallax } from '@/composables/useParallax'

export default {
  setup() {
    const { parallaxY, parallaxX } = useParallax()
    return { parallaxY, parallaxX }
  }
}
</script>