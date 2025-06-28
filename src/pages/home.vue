<template>
  <section class="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
    <div class="h-16"></div> <!-- Spacer untuk navbar -->

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-12 pb-16 md:pb-24">
      <div class="flex flex-col lg:flex-row items-center justify-around gap-8 md:gap-12 xl:gap-16 relative z-10">
        <!-- Text Section -->
        <div class="max-w-2xl order-2 lg:order-1 text-center lg:text-left space-y-4 md:space-y-6 lg:pl-8">
          <h3 class="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 animate-fade-in" style="animation-delay: 0.1s">
            <span class="inline-block animate-wiggle">👋</span> Hello, it's Me
          </h3>
          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 leading-tight md:leading-[1.3] animate-fade-in" style="animation-delay: 0.3s">
            Gilang Purnomo
          </h1>
          <h2 class="text-xl md:text-2xl lg:text-3xl text-blue-600 dark:text-blue-400 font-medium animate-fade-in" style="animation-delay: 0.5s">
            And I'm a <span class="font-bold text-blue-500 dark:text-blue-300 relative">
              <span class="absolute -bottom-1 left-0 w-full h-1 bg-blue-500/50 dark:bg-blue-300/40 rounded-full animate-underline"></span>
              <span class="typing-text">{{ currentTitle }}</span>
            </span>
          </h2>

          <!-- Medsos -->
          <div class="flex justify-center lg:justify-start gap-3 md:gap-4 pt-1 md:pt-2 animate-fade-in" style="animation-delay: 0.7s">
            <a href="https://github.com/yourusername" target="_blank"
              class="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110"
              aria-label="GitHub">
              <GithubIcon class="w-5 h-5 md:w-6 md:h-6" />
            </a>

            <a href="https://instagram.com/yourusername" target="_blank"
              class="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-pink-500 dark:text-pink-400 hover:text-pink-600 dark:hover:text-pink-300 hover:bg-pink-50 dark:hover:bg-pink-900/20 transition-all duration-300 hover:scale-110"
              aria-label="Instagram">
              <InstagramIcon class="w-5 h-5 md:w-6 md:h-6" />
            </a>

            <a href="https://tiktok.com/@yourusername" target="_blank"
              class="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-black dark:text-white hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110"
              aria-label="TikTok">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </a>

            <a href="https://linkedin.com/in/yourusername" target="_blank"
              class="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn">
              <LinkedinIcon class="w-5 h-5 md:w-6 md:h-6" />
            </a>
          </div>

          <div class="animate-fade-in" style="animation-delay: 0.9s">
            <button class="relative overflow-hidden group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-2 md:px-8 md:py-3 rounded-full text-base md:text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30">
              <span class="relative z-10 flex items-center gap-2">
                More About Me 
                <span class="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
              <span class="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></span>
            </button>
          </div>
        </div>

        <!-- Photo Section -->
        <div class="relative order-1 lg:order-2 lg:ml-6 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 animate-float">
          <!-- Outer ring -->
          <div class="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-400/70 border-r-blue-400/70 border-b-blue-600/70 border-l-blue-600/70 animate-spin-slow -z-5"></div>
          
          <!-- Photo -->
          <div class="relative w-full h-full overflow-hidden rounded-full border-4 border-blue-400/50 hover:border-blue-300 transition-all duration-500 z-10 shadow-xl md:shadow-2xl hover:shadow-3xl hover:shadow-blue-500/40 group">
            <div class="w-full h-full overflow-hidden rounded-full">
              <img 
                src="@/assets/images/porto.jpeg"
                alt="Gilang Purnomo"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
            </div>
            <div class="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-600/10 to-blue-700/10 group-hover:backdrop-blur-0 transition-all duration-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Github as GithubIcon, Instagram as InstagramIcon, Linkedin as LinkedinIcon } from 'lucide-vue-next'

export default {
  components: {
    GithubIcon,
    InstagramIcon,
    LinkedinIcon
  },
  data() {
    return {
      titles: [
        "Student!",
        "Network Engineer!",
        "Fullstack Developer!"
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
    }
  }
};
</script>

<style scoped>
h1 {
  line-height: 1.3 !important;
  /* padding-bottom: 0.25rem; */
}

.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
  opacity: 0;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-spin-slow {
  animation: spin 15s linear infinite;
}

.animate-underline {
  animation: underline 2s ease-in-out infinite alternate;
}

.animate-wiggle {
  animation: wiggle 2.5s ease-in-out infinite;
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

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
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

/* Responsive adjustments */
@media (max-width: 640px) {
  .container {
    padding-top: 1.5rem;
    padding-bottom: 3rem;
  }
  
  .animate-float {
    margin-bottom: 1.5rem;
  }
}
</style>