<template>
  <!--
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ]
  }
  ```
-->
  <div
    class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full space-y-8">
      <div>
        <svg
          class="mx-auto h-12 w-auto"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="#4F46E5"
          stroke="#4F46E5"
        >
          <path
            fill-rule="evenodd"
            d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
            clip-rule="evenodd"
          />
        </svg>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create your account
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          Or
          <router-link
            :to="{ name: 'Login' }"
            class="font-medium text-indigo-600 hover:text-indigo-500"
          >
            sign in here.
          </router-link>
        </p>
      </div>
      <div
        class="container bg-white pl-8 pr-8 pb-8 pt-2 border border-gray-200 border-opacity-100 rounded"
      >
        <form class="space-y-6" action="#" method="POST">
          <div class="mt-4 rounded-md shadow-sm -space-y-px">
            <FormulateInput
              v-model="userForm.name"
              type="text"
              validation="required"
              label="Name"
              label-position="before"
              outer-class="mb-2"
            ></FormulateInput
            ><FormulateInput
              v-model="userForm.email"
              type="text"
              validation="required|email"
              label="Email address"
              label-position="before"
              outer-class="mb-2"
            ></FormulateInput>
            <FormulateInput
              v-model="userForm.password"
              validation="required"
              type="password"
              label="Password"
              label-position="before"
            ></FormulateInput>
          </div>

          <div>
            <button
              type="submit"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              @click.prevent="register"
            >
              <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                <!-- Heroicon name: lock-closed -->
                <svg
                  class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      userForm: {
        name: "",
        email: "",
        password: ""
      }
    };
  },
  methods: {
    register() {
      this.$axios
        .post("user/", this.userForm)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error.response);
        });
    }
  }
};
</script>

<style scoped></style>
