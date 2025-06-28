<template>
  <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8">
      <!-- Judul -->
      <h1 class="text-3xl font-bold text-center text-gray-800 mb-8">
        Contact Me
      </h1>

      <!-- Form Kontak -->
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <!-- Input Nama -->
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            v-model="form.name"
            type="text"
            id="name"
            required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
          />
        </div>

        <!-- Input Email -->
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            v-model="form.email"
            type="email"
            id="email"
            required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
          />
        </div>

        <!-- Input Pesan -->
        <div>
          <label for="message" class="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            v-model="form.message"
            id="message"
            rows="4"
            required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
          ></textarea>
        </div>

        <!-- Tombol Submit -->
        <div>
          <button
            type="submit"
            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Send Message
          </button>
        </div>
      </form>

      <!-- Info Kontak Alternatif -->
      <div class="mt-8 border-t border-gray-200 pt-6">
        <h2 class="text-lg font-medium text-gray-900">Other Ways to Reach Me</h2>
        <div class="mt-4 flex space-x-4">
          <a href="mailto:youremail@example.com" class="text-gray-600 hover:text-primary">
            <span class="sr-only">Email</span>
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </a>
          <!-- Tambahkan icon media sosial lainnya -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const handleSubmit = () => {
  // Ganti dengan logika pengiriman form
  console.log('Form submitted:', form.value)
  alert('Message sent successfully!')
  form.value = { name: '', email: '', message: '' }
}
</script>

<style scoped>
/* Warna kustom sesuai tailwind.config.js */
.bg-primary {
  background-color: #3a86ff;
}
.hover\:bg-primary-dark:hover {
  background-color: #2667cc;
}
.focus\:ring-primary:focus {
  ring-color: #3a86ff;
}
</style>