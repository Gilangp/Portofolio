<template>
  <section id="skills" class="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-500">
    <div class="h-8"></div>

    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-3">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 relative">
            Technical Skills
            <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mt-1"></span>
          </span>
        </h2>
        <p class="text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          My toolkit categorized by different technical domains
        </p>
      </div>

      <!-- tab -->
      <div class="flex justify-center mb-8">
        <div class="inline-flex rounded-lg bg-gray-100 dark:bg-gray-800 p-1">
          <button
            v-for="(tab, index) in tabs"
            :key="index"
            @click="activeTab = index"
            :class="[
              'px-4 py-2 text-sm font-medium rounded-md transition-colors',
              activeTab === index
                ? 'bg-white dark:bg-gray-700 shadow-sm text-blue-600 dark:text-blue-400'
                : 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100'
            ]"
          >
            {{ tab.label }}
          </button>
        </div>
      </div>

      <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
        <!-- development -->
        <div v-show="activeTab === 0" class="space-y-5">
          <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-5 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            Development Skills
          </h3>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div v-for="(skill, index) in devSkills" :key="index" class="flex items-center gap-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg transition-colors border border-gray-100 dark:border-gray-700">
              <div class="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-md bg-gray-50 dark:bg-gray-700 shadow-sm">
                <img :src="skill.icon" :alt="skill.name + ' icon'" class="h-5 w-5 object-contain" loading="lazy" />
              </div>
              <div class="flex-1 min-w-0">
                <h4 class="text-sm font-semibold text-gray-800 dark:text-gray-100 truncate">{{ skill.name }}</h4>
                <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mt-1">
                  <div class="bg-blue-600 h-1.5 rounded-full" :style="'width: ' + skill.proficiency + '%'"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- networking -->
        <div v-show="activeTab === 1" class="space-y-6">
          <div>
            <h3 class="text-lg font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Network Tools
            </h3>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div v-for="(skill, index) in networkingTools" :key="'tool-'+index" class="flex items-center gap-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg transition-colors border border-gray-100 dark:border-gray-700">
                <div class="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-md bg-gray-50 dark:bg-gray-700 shadow-sm">
                  <img :src="skill.icon" :alt="skill.name + ' icon'" class="h-5 w-5 object-contain" loading="lazy" />
                </div>
                <div class="flex-1 min-w-0">
                  <h4 class="text-sm font-semibold text-gray-800 dark:text-gray-100 truncate">{{ skill.name }}</h4>
                  <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mt-1">
                    <div class="bg-green-600 h-1.5 rounded-full" :style="'width: ' + skill.proficiency + '%'"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- network knowledge -->
          <div>
            <h3 class="text-lg font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Network Knowledge
            </h3>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div v-for="(skill, index) in networkingKnowledge" :key="'knowledge-'+index" class="flex items-center gap-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg transition-colors border border-gray-100 dark:border-gray-700">
                <div class="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-md bg-gray-50 dark:bg-gray-700 shadow-sm">
                  <img :src="skill.icon" :alt="skill.name + ' icon'" class="h-5 w-5 object-contain" loading="lazy" />
                </div>
                <div class="flex-1 min-w-0">
                  <h4 class="text-sm font-semibold text-gray-800 dark:text-gray-100 truncate">{{ skill.name }}</h4>
                  <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mt-1">
                    <div class="bg-blue-600 h-1.5 rounded-full" :style="'width: ' + skill.proficiency + '%'"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- tools -->
        <div v-show="activeTab === 2" class="space-y-5">
          <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-5 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
            </svg>
            Development Tools
          </h3>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div v-for="(skill, index) in devTools" :key="index" class="flex items-center gap-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg transition-colors border border-gray-100 dark:border-gray-700">
              <div class="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-md bg-gray-50 dark:bg-gray-700 shadow-sm">
                <img :src="skill.icon" :alt="skill.name + ' icon'" class="h-5 w-5 object-contain" loading="lazy" />
              </div>
              <div class="flex-1 min-w-0">
                <h4 class="text-sm font-semibold text-gray-800 dark:text-gray-100 truncate">{{ skill.name }}</h4>
                <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mt-1">
                  <div class="bg-purple-600 h-1.5 rounded-full" :style="'width: ' + skill.proficiency + '%'"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 0,
      tabs: [
        { label: 'Development' },
        { label: 'Networking' },
        { label: 'Tools' }
      ],
      devSkills: [
        { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', proficiency: 95 },
        { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', proficiency: 90 },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', proficiency: 85 },
        { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', proficiency: 80 },
        { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg', proficiency: 80 },
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', proficiency: 85 },
        { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', proficiency: 75 }
      ],
      networkingTools: [
        {
          name: "Cisco Packet Tracer",
          icon: new URL('@/assets/images/sisco_packet_tracer.png', import.meta.url).href,
          proficiency: 85
        },
        {
          name: "GNS3",
          icon: new URL('@/assets/images/GNS3.png', import.meta.url).href,
          proficiency: 75
        },
      ],
      networkingKnowledge: [
        {
          name: "TCP/IP Stack",
          icon: "https://cdn-icons-png.flaticon.com/512/1085/1085497.png",
          proficiency: 90
        },
        {
          name: "Subnetting",
          icon: "https://cdn-icons-png.flaticon.com/512/2885/2885257.png",
          proficiency: 85
        },
        {
          name: "Routing Protocols",
          icon: "https://cdn-icons-png.flaticon.com/512/3603/3603923.png",
          proficiency: 80
        },
        {
          name: "DNS & DHCP",
          icon: "https://cdn-icons-png.flaticon.com/512/518/518713.png",
          proficiency: 85
        },
      ],
      devTools: [
        { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', proficiency: 95 },
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', proficiency: 90 },
        { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', proficiency: 85 },
        { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg', proficiency: 85 },
        { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', proficiency: 75 }
      ]
    }
  }
}
</script>

<style scoped>
button {
  transition: all 0.3s ease;
}

img {
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
}

.dark img {
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
}
</style>