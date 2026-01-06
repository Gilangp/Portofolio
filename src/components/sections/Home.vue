<template>
  <section id="home" class="min-h-screen bg-light-gray text-gray-900 dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 dark:text-white transition-colors duration-500 relative overflow-hidden">
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <div 
        class="absolute top-20 left-10 w-32 h-32 rounded-full bg-blue-400/10 blur-3xl animate-float-slow transition-transform duration-300"
        :style="{ transform: `translate(${parallaxX * 0.5}px, ${parallaxY * 0.3}px)` }"
      ></div>
      <div 
        class="absolute bottom-1/4 right-20 w-40 h-40 rounded-full bg-blue-600/10 blur-3xl animate-float-slower transition-transform duration-300"
        :style="{ transform: `translate(${-parallaxX * 0.8}px, ${parallaxY * 0.5}px)` }"
      ></div>
      <div 
        class="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-blue-500/10 blur-xl animate-float-reverse transition-transform duration-300"
        :style="{ transform: `translate(${parallaxX * 0.3}px, ${-parallaxY * 0.4}px)` }"
      ></div>
    </div>

    <div class="h-14"></div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 pt-6 md:pt-10 pb-12 md:pb-20 relative z-10">
      <div class="flex flex-col lg:flex-row items-center justify-around gap-8 md:gap-10 xl:gap-12">
        <div class="relative order-1 sm:mb-0 lg:order-2 lg:ml-4 w-56 h-56 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 animate-float mt-8 sm:mt-0">
          <div class="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-blue-500/10 blur-xl animate-pulse-slow -z-10"></div>
          <div class="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-blue-600/10 blur-xl animate-pulse-slower -z-10"></div>
          
          <!-- rings -->
          <div class="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-400/70 border-r-blue-400/70 border-b-blue-600/70 border-l-blue-600/70 animate-spin-slow -z-5"></div>
          <div class="absolute inset-4 rounded-full border-4 border-transparent border-t-blue-300/50 border-r-blue-300/50 border-b-blue-500/50 border-l-blue-500/50 animate-spin-reverse -z-5"></div>
          
          <!-- Photo -->
          <div class="relative w-full h-full overflow-hidden rounded-full border-4 border-blue-400/50 hover:border-blue-300 transition-all duration-500 z-10 shadow-2xl md:shadow-3xl hover:shadow-4xl hover:shadow-blue-500/40 group">
            <div class="w-full h-full overflow-hidden rounded-full">
              <img 
                src="@/assets/images/porto.jpeg"
                alt="Gilang Purnomo"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="eager"
              />
            </div>
            <div class="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-600/10 to-blue-700/10 group-hover:backdrop-blur-0 transition-all duration-500 rounded-full"></div>
          </div>
        </div>

        <!-- Text Section -->
        <div class="max-w-2xl order-2 lg:order-1 text-center lg:text-left space-y-4 md:space-y-5 lg:pl-6">
          <h3 class="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 animate-fade-in" style="animation-delay: 0.1s">
            <span class="inline-block animate-wiggle">👋</span> Hello, I'm
          </h3>
          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 dark:from-blue-400 dark:via-blue-500 dark:to-blue-600 leading-tight md:leading-[1.2] animate-fade-in" style="animation-delay: 0.3s">
            Gilang Purnomo
          </h1>
          <h2 class="text-xl md:text-2xl lg:text-3xl text-blue-600 dark:text-blue-400 font-medium animate-fade-in" style="animation-delay: 0.5s">
            Crafting digital experiences as a <br>
            <span class="font-bold text-blue-500 dark:text-blue-300 relative">
              <span class="absolute -bottom-1 left-0 w-full h-1 bg-blue-500/50 dark:bg-blue-300/40 rounded-full animate-underline"></span>
              <span class="typing-text">{{ currentTitle }}</span>
            </span>
          </h2>

          <!-- Description -->
          <p class="text-gray-600 dark:text-gray-300 max-w-lg text-sm md:text-base animate-fade-in" style="animation-delay: 0.6s">
            Passionate about creating impactful web experiences and building reliable network systems.
            Combining creativity and technical problem-solving to deliver seamless digital solutions.
          </p>

          <!-- Medsos -->
          <div class="flex justify-center lg:justify-start gap-3 md:gap-4 pt-2 animate-fade-in" style="animation-delay: 0.7s">
            <a href="https://github.com/Gilangp" target="_blank"
              class="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-md"
              aria-label="GitHub">
              <GithubIcon class="w-5 h-5 md:w-6 md:h-6" />
            </a>

            <a href="https://www.linkedin.com/in/gilang-purnomo-b3863328b/" target="_blank"
              class="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-md"
              aria-label="LinkedIn">
              <LinkedinIcon class="w-5 h-5 md:w-6 md:h-6" />
            </a>

            <a href="https://www.instagram.com/gilangprnm__/" target="_blank"
              class="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-pink-500 dark:text-pink-400 hover:text-pink-600 dark:hover:text-pink-300 hover:bg-pink-50 dark:hover:bg-pink-900/20 transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-md"
              aria-label="Instagram">
              <InstagramIcon class="w-5 h-5 md:w-6 md:h-6" />
            </a>
            
            <a href="https://www.tiktok.com/@gilangp__" target="_blank" rel="noopener noreferrer"
              class="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-md"
              aria-label="TikTok">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </a>
          </div>

          <!-- button -->
          <div class="flex flex-col sm:flex-row gap-4 pt-3 animate-fade-in" style="animation-delay: 0.9s">
            <button @click="handleButtonClick($event, 'portfolio')" class="ripple-button relative overflow-hidden group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-2 md:px-8 md:py-3 rounded-full text-base md:text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30">
              <span class="relative z-10 flex items-center gap-2">
                View My Work 
                <span class="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
              <span class="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></span>
            </button>
            
            <button @click="handleButtonClick($event, 'contact')" class="ripple-button relative overflow-hidden group border-2 border-blue-500 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:text-white dark:hover:text-white px-6 py-2 md:px-8 md:py-3 rounded-full text-base md:text-lg font-medium transition-all duration-300 transform hover:scale-105">
              <span class="relative z-10 flex items-center gap-2">
                Contact Me
                <span class="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
              <span class="absolute inset-0 bg-blue-500 dark:bg-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full -z-10"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Github as GithubIcon, Instagram as InstagramIcon, Linkedin as LinkedinIcon } from 'lucide-vue-next'
import { useRipple } from '@/composables/useRipple'
import { useParallax } from '@/composables/useParallax'

export default {
  components: {
    GithubIcon,
    InstagramIcon,
    LinkedinIcon
  },
  setup() {
    const { createRipple } = useRipple()
    const { parallaxY, parallaxX } = useParallax()
    
    return { createRipple, parallaxY, parallaxX }
  },
  data() {
    return {
      titles: [
        "Fullstack Developer",
        "Network Engineer",
        // "student",
        // "Problem Solver"
      ],
      currentTitle: "",
      currentIndex: 0,
      typingSpeed: 100,
      erasingSpeed: 50,
      newTitleDelay: 2000,
      typingInterval: null
    };
  },
  mounted() {
    this.startTyping();
  },
  beforeUnmount() {
    clearInterval(this.typingInterval);
  },
  methods: {
    startTyping() {
      this.typeTitle();
    },
    typeTitle() {
      let charIndex = 0;
      const title = this.titles[this.currentIndex];
      
      this.typingInterval = setInterval(() => {
        this.currentTitle = title.substring(0, charIndex);
        charIndex++;
        
        if (charIndex > title.length) {
          clearInterval(this.typingInterval);
          setTimeout(() => {
            this.eraseTitle();
          }, this.newTitleDelay);
        }
      }, this.typingSpeed);
    },
    eraseTitle() {
      let charIndex = this.currentTitle.length;
      
      this.typingInterval = setInterval(() => {
        this.currentTitle = this.currentTitle.substring(0, charIndex - 1);
        charIndex--;
        
        if (charIndex === 0) {
          clearInterval(this.typingInterval);
          this.currentIndex = (this.currentIndex + 1) % this.titles.length;
          this.typeTitle();
        }
      }, this.erasingSpeed);
    },
    goTo(sectionId) {
      this.$router.push({ path: '/', hash: `#${sectionId}` })
    },
    handleButtonClick(event, sectionId) {
      this.createRipple(event)
      setTimeout(() => this.goTo(sectionId), 200)
    }
  }
};
</script>

<style scoped>
h1 {
  line-height: 1.3;
}

.container {
  overflow: visible;
}

.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
  opacity: 0;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-slow {
  animation: float 8s ease-in-out infinite;
}

.animate-float-slower {
  animation: float 10s ease-in-out infinite;
}

.animate-float-reverse {
  animation: floatReverse 7s ease-in-out infinite;
}

.animate-spin-slow {
  animation: spin 15s linear infinite;
}

.animate-spin-reverse {
  animation: spinReverse 20s linear infinite;
}

.animate-underline {
  animation: underline 2s ease-in-out infinite alternate;
}

.animate-wiggle {
  animation: wiggle 2.5s ease-in-out infinite;
}

.animate-pulse-slow {
  animation: pulse 4s ease-in-out infinite;
}

.animate-pulse-slower {
  animation: pulse 6s ease-in-out infinite;
}

.typing-text {
  display: inline-block;
  min-width: 10px;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

@keyframes floatReverse {
  0%, 100% { transform: translateY(-10px); }
  50% { transform: translateY(15px); }
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes spinReverse {
  from { transform: rotate(0deg); }
  to { transform: rotate(-360deg); }
}

@keyframes underline {
  from { width: 0%; left: 50%; }
  to { width: 100%; left: 0; }
}

@keyframes wiggle {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(5deg); }
  75% { transform: rotate(-5deg); }
}

@keyframes pulse {
  0%, 100% { opacity: 0.1; transform: scale(1); }
  50% { opacity: 0.2; transform: scale(1.1); }
}

.ripple-button .ripple {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.6);
  transform: scale(0);
  animation: ripple-animation 0.6s ease-out;
  pointer-events: none;
}

@keyframes ripple-animation {
  to {
    transform: scale(4);
    opacity: 0;
  }
}

@media (max-width: 640px) {
  .container {
    padding-top: 1rem;
    padding-bottom: 2rem;
  }
  
  .photo-section {
    margin-bottom: 2rem;
  }
}
</style>