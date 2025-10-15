<template>
    <section id="skills" class="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-light-gray text-gray-900 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-850 dark:to-gray-800 dark:text-white transition-colors duration-700 relative overflow-hidden">
        
        <div class="h-8"></div>

        <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
            <div class="absolute top-1/4 left-1/5 w-32 h-32 rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 blur-xl animate-float-slow opacity-70"></div>
            <div class="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-gradient-to-br from-indigo-600/10 to-pink-600/10 blur-xl animate-float-slower opacity-70"></div>
        </div>

        <div class="max-w-6xl mx-auto relative z-10">
            <div class="text-center mb-12 animate-fade-in">
                <h2 class="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
                    <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
                        Technical Skills
                    </span>
                    <span class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 rounded-full animate-wave"></span>
                </h2>
                <p class="text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    My toolkit categorized by different technical domains
                </p>
            </div>

            <!-- tab -->
            <div class="flex justify-center mb-8 animate-fade-in" style="animation-delay: 0.2s">
                <div class="inline-flex rounded-lg bg-gray-100/80 dark:bg-gray-800/80 p-1 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
                    <button
                        v-for="(tab, index) in tabs"
                        :key="index"
                        @click="activeTab = index"
                        :class="[
                        'px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 transform',
                        activeTab === index
                            ? 'bg-white/90 dark:bg-gray-700/90 shadow-sm text-blue-600 dark:text-blue-400 scale-105 backdrop-blur-sm'
                            : 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 hover:bg-gray-200/80 dark:hover:bg-gray-600/80 hover:scale-105 backdrop-blur-sm'
                        ]"
                    >
                        {{ tab.label }}
                    </button>
                </div>
            </div>

            <div class="bg-white/90 dark:bg-gray-800/90 rounded-xl shadow-sm border border-gray-100/50 dark:border-gray-700/50 p-6 backdrop-blur-sm animate-fade-in" style="animation-delay: 0.4s">
                <!-- development -->
                <div v-show="activeTab === 0" class="space-y-5">
                    <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-5 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                        Development Skills
                    </h3>
                    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        <div v-for="(skill, index) in devSkills" :key="index" 
                             class="group flex items-center gap-3 p-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-md cursor-pointer transform hover:-translate-y-1">
                            <div class="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-md bg-gray-50 dark:bg-gray-700 shadow-sm group-hover:bg-white dark:group-hover:bg-gray-600 transition-colors">
                                <img :src="skill.icon" :alt="skill.name + ' icon'" class="h-5 w-5 object-contain transition-transform duration-300 group-hover:scale-110" loading="lazy" />
                            </div>
                            <div class="flex-1 min-w-0">
                                <h4 class="text-sm font-semibold text-gray-800 dark:text-gray-100 truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{{ skill.name }}</h4>
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
                            <div v-for="(skill, index) in networkingTools" :key="'tool-'+index" 
                                 class="group flex items-center gap-3 p-3 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-500 hover:shadow-md cursor-pointer transform hover:-translate-y-1">
                                <div class="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-md bg-gray-50 dark:bg-gray-700 shadow-sm group-hover:bg-white dark:group-hover:bg-gray-600 transition-colors">
                                <img :src="skill.icon" :alt="skill.name + ' icon'" class="h-5 w-5 object-contain transition-transform duration-300 group-hover:scale-110" loading="lazy" />
                                </div>
                                <div class="flex-1 min-w-0">
                                <h4 class="text-sm font-semibold text-gray-800 dark:text-gray-100 truncate group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">{{ skill.name }}</h4>
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
                            <div v-for="(skill, index) in networkingKnowledge" :key="'knowledge-'+index" 
                                 class="group flex items-center gap-3 p-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-md cursor-pointer transform hover:-translate-y-1">
                                <div class="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-md bg-gray-50 dark:bg-gray-700 shadow-sm group-hover:bg-white dark:group-hover:bg-gray-600 transition-colors">
                                <img :src="skill.icon" :alt="skill.name + ' icon'" class="h-5 w-5 object-contain transition-transform duration-300 group-hover:scale-110" loading="lazy" />
                                </div>
                                <div class="flex-1 min-w-0">
                                <h4 class="text-sm font-semibold text-gray-800 dark:text-gray-100 truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{{ skill.name }}</h4>
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
                        <div v-for="(skill, index) in devTools" :key="index" 
                             class="group flex items-center gap-3 p-3 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-500 hover:shadow-md cursor-pointer transform hover:-translate-y-1">
                            <div class="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-md bg-gray-50 dark:bg-gray-700 shadow-sm group-hover:bg-white dark:group-hover:bg-gray-600 transition-colors">
                                <img :src="skill.icon" :alt="skill.name + ' icon'" class="h-5 w-5 object-contain transition-transform duration-300 group-hover:scale-110" loading="lazy" />
                            </div>
                            <div class="flex-1 min-w-0">
                                <h4 class="text-sm font-semibold text-gray-800 dark:text-gray-100 truncate group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">{{ skill.name }}</h4>
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
        { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
        { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg' },
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' }
    ],
    networkingTools: [
        {
        name: "Cisco Packet Tracer",
        icon: new URL('@/assets/images/sisco_packet_tracer.png', import.meta.url).href
        },
        {
        name: "GNS3",
        icon: new URL('@/assets/images/GNS3.png', import.meta.url).href
        },
    ],
    networkingKnowledge: [
        {
        name: "TCP/IP Stack",
        icon: "https://cdn-icons-png.flaticon.com/512/1085/1085497.png"
        },
        {
        name: "Subnetting",
        icon: "https://cdn-icons-png.flaticon.com/512/2885/2885257.png"
        },
        {
        name: "Routing Protocols",
        icon: "https://cdn-icons-png.flaticon.com/512/3603/3603923.png"
        },
        {
        name: "DNS & DHCP",
        icon: "https://cdn-icons-png.flaticon.com/512/518/518713.png"
        },
    ],
    devTools: [
        { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
        { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
        { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' }
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