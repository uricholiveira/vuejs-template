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
          class="mx-auto h-12 w-auto purple-100"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#4F46E5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
          />
        </svg>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in with your account
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          Or
          <router-link
            :to="{ name: 'Register' }"
            class="font-medium text-indigo-600 hover:text-indigo-500"
          >
            register here.
          </router-link>
        </p>
      </div>
      <div
        class="container bg-white pl-8 pr-8 pb-8 pt-2 border border-gray-200 border-opacity-100 rounded"
      >
        <form class="space-y-6" action="#" method="POST">
          <div class="mt-4 rounded-md shadow-sm -space-y-px">
            <FormulateInput
              v-model="userForm.username"
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
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <FormulateInput
                v-model="rememberMe"
                type="checkbox"
                input-class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                label="Remember me"
                label-position="after"
                label-class="ml-6 -mt-6 block text-sm text-gray-900"
              />
            </div>
            <div class="text-sm">
              <a
                href="#"
                class="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              @click.prevent="login"
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
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      userForm: {
        username: "",
        password: ""
      },
      rememberMe: true
    };
  },
  methods: {
    login() {
      this.$axios
        .post("user/login/", this.userForm)
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
