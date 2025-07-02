<template>
  <section id="contact" class="py-6 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/4 left-1/5 w-32 h-32 rounded-full bg-gradient-to-r from-blue-500/5 to-purple-500/5 blur-xl animate-float-slow"></div>
      <div class="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-gradient-to-br from-indigo-500/5 to-pink-500/5 blur-xl animate-float-slower"></div>
    </div>

    <div class="h-12"></div>

    <div class="max-w-6xl mx-auto relative">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-3">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 relative">
            Let's Connect
            <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mt-1"></span>
          </span>
        </h2>
        <p class="text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Have a project in mind or want to discuss opportunities? I'd love to hear from you.
        </p>
      </div>

      <!-- contact -->
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-6">
        <div class="lg:col-span-3">
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 md:p-5 border border-gray-100 dark:border-gray-700/50 backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90 transition-all duration-300 hover:shadow-xl">
            <h3 class="text-base font-semibold mb-3 text-gray-800 dark:text-white flex items-center">
              <span class="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </span>
              Send Me a Message
            </h3>
            
            <form @submit.prevent="submitForm" class="space-y-3">
              <div class="space-y-1">
                <label for="name" class="text-xs font-medium text-gray-700 dark:text-gray-300">Your Name</label>
                <input 
                  type="text" 
                  id="name"
                  v-model="form.name" 
                  required
                  class="w-full px-3 py-2 text-xs border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 dark:bg-gray-800/70 dark:text-white transition-all duration-200"
                  placeholder="John Doe"
                >
              </div>

              <div class="space-y-1">
                <label for="email" class="text-xs font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                <input 
                  type="email" 
                  id="email"
                  v-model="form.email" 
                  required
                  class="w-full px-3 py-2 text-xs border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 dark:bg-gray-800/70 dark:text-white transition-all duration-200"
                  placeholder="john@example.com"
                >
              </div>

              <div class="space-y-1">
                <label for="message" class="text-xs font-medium text-gray-700 dark:text-gray-300">Your Message</label>
                <textarea 
                  id="message"
                  v-model="form.message" 
                  rows="3" 
                  required
                  class="w-full px-3 py-2 text-xs border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 dark:bg-gray-800/70 dark:text-white transition-all duration-200"
                  placeholder="Hello, I'd like to talk about..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                :disabled="isSubmitting"
                class="w-full text-xs bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-all duration-300 shadow hover:shadow-md flex items-center justify-center"
              >
                <span v-if="!isSubmitting" class="flex items-center">
                  Send Message
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </span>
                <span v-else class="flex items-center">
                  <svg class="animate-spin -ml-1 mr-2 h-3.5 w-3.5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              </button>
            </form>
          </div>
        </div>

        <!-- contact info -->
        <div class="lg:col-span-2 space-y-3">
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 md:p-5 border border-gray-100 dark:border-gray-700/50 backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90 transition-all duration-300 hover:shadow-xl">
            <h3 class="text-base font-semibold mb-3 text-gray-800 dark:text-white flex items-center">
              <span class="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              Contact Information
            </h3>
            
            <div class="space-y-3">
              <div class="flex items-start gap-2">
                <div class="p-1 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-500 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 class="text-xs font-medium text-gray-500 dark:text-gray-400">Email</h4>
                  <a href="mailto:gilangpurnomo0505@gmail.com" class="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 text-xs font-medium">gilangpurnomo0505@gmail.com</a>
                </div>
              </div>

              <div class="flex items-start gap-2">
                <div class="p-1 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-500 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 class="text-xs font-medium text-gray-500 dark:text-gray-400">Location</h4>
                  <p class="text-gray-700 dark:text-gray-300 text-xs font-medium">Kediri, Indonesia</p>
                </div>
              </div>

              <div class="flex items-start gap-2">
                <div class="p-1 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-500 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 class="text-xs font-medium text-gray-500 dark:text-gray-400">Availability</h4>
                  <p class="text-gray-700 dark:text-gray-300 text-xs font-medium">Mon-Fri, 9AM-5PM GMT+7</p>
                </div>
              </div>
            </div>
          </div>

          <!-- sosmed card -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 md:p-5 border border-gray-100 dark:border-gray-700/50 backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90 transition-all duration-300 hover:shadow-xl">
            <h3 class="text-base font-semibold mb-3 text-gray-800 dark:text-white flex items-center">
              <span class="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </span>
              Follow Me
            </h3>
            
            <div class="flex flex-wrap gap-2">
              <a href="https://github.com/gilangpurnomo" target="_blank" rel="noopener noreferrer" class="flex-1 min-w-[90px]">
                <div class="p-1.5 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-200 flex items-center gap-1.5">
                  <div class="p-1 bg-white dark:bg-gray-800 rounded-md">
                    <svg class="h-3.5 w-3.5 text-gray-800 dark:text-gray-200" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <span class="text-gray-700 dark:text-gray-300 text-xs font-medium">GitHub</span>
                </div>
              </a>
              
              <a href="https://linkedin.com/in/gilangpurnomo" target="_blank" rel="noopener noreferrer" class="flex-1 min-w-[90px]">
                <div class="p-1.5 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-200 flex items-center gap-1.5">
                  <div class="p-1 bg-white dark:bg-gray-800 rounded-md">
                    <svg class="h-3.5 w-3.5 text-gray-800 dark:text-gray-200" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <span class="text-gray-700 dark:text-gray-300 text-xs font-medium">LinkedIn</span>
                </div>
              </a>
              
              <!-- <a href="https://twitter.com/gilangpurnomo" target="_blank" rel="noopener noreferrer" class="flex-1 min-w-[90px]">
                <div class="p-1.5 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-200 flex items-center gap-1.5">
                  <div class="p-1 bg-white dark:bg-gray-800 rounded-md">
                    <svg class="h-3.5 w-3.5 text-gray-800 dark:text-gray-200" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </div>
                  <span class="text-gray-700 dark:text-gray-300 text-xs font-medium">Twitter</span>
                </div>
              </a> -->
              
              <a href="https://instagram.com/gilangpurnomo" target="_blank" rel="noopener noreferrer" class="flex-1 min-w-[90px]">
                <div class="p-1.5 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-200 flex items-center gap-1.5">
                  <div class="p-1 bg-white dark:bg-gray-800 rounded-md">
                    <svg class="h-3.5 w-3.5 text-gray-800 dark:text-gray-200" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <span class="text-gray-700 dark:text-gray-300 text-xs font-medium">Instagram</span>
                </div>
              </a>

              <a href="https://tiktok.com/@yourusername" target="_blank" rel="noopener noreferrer" class="flex-1 min-w-[90px]">
                <div class="p-1.5 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-pink-100 dark:hover:bg-blue-900/30 transition-colors duration-200 flex items-center gap-1.5">
                  <div class="p-1 bg-white dark:bg-gray-800 rounded-md">
                    <svg class="h-3.5 w-3.5 text-gray-800 dark:text-gray-200" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                    </svg>
                  </div>
                  <span class="text-gray-700 dark:text-gray-300 text-xs font-medium">TikTok</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- success toast -->
    <div v-if="showSuccessToast" class="fixed bottom-4 right-4 z-50 animate-fade-in-up">
      <div class="bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 py-1.5 rounded-lg shadow-lg flex items-center">
        <svg class="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        <span class="text-xs font-medium">Message sent successfully!</span>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const form = ref({
      name: '',
      email: '',
      message: ''
    })

    const isSubmitting = ref(false)
    const showSuccessToast = ref(false)

    const submitForm = () => {
      isSubmitting.value = true

      setTimeout(() => {
        isSubmitting.value = false
        showSuccessToast.value = true
        
        // reset form
        form.value = {
          name: '',
          email: '',
          message: ''
        }

        setTimeout(() => {
          showSuccessToast.value = false
        }, 3000)
      }, 1500)
    }

    return {
      form,
      isSubmitting,
      showSuccessToast,
      submitForm
    }
  }
}
</script>

<style scoped>
.animate-float-slow {
  animation: float 12s ease-in-out infinite;
}

.animate-float-slower {
  animation: float 16s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { 
    transform: translateY(0) translateX(0); 
  }
  50% { 
    transform: translateY(-20px) translateX(10px); 
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.3s ease-out forwards;
}

@keyframes fadeInUp {
  from { 
    opacity: 0; 
    transform: translateY(20px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@media (prefers-reduced-motion: reduce) {
  .animate-float-slow,
  .animate-float-slower,
  .animate-fade-in-up,
  .animate-spin {
    animation: none !important;
  }
}
</style>