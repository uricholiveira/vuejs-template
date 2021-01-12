<template>
  <button
    class="group relative flex justify-center w-full py-2 px-4 border border-transparent text-sm font-medium
    rounded-md focus:outline-none focus:ring-1 focus:ring-offset-1"
    :class="[isLoading ? 'opacity-70 cursor-not-allowed' : '']"
    :disabled="isLoading"
    :type="type"
    @click="$emit('click', $event.target.value)"
    @click.prevent="isLoading = true"
  >
    <span class="absolute left-0 inset-y-0 flex items-center pl-3">
      <slot name="prefix-icon"></slot>
    </span>
    <span
      class="absolute inset-y-0 flex items-center justify-center"
      v-show="isLoading"
    >
      <slot name="loading-icon">
        <svg
          class="animate-spin h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="32"
          height="32"
          fill="white"
        >
          <path
            opacity=".25"
            d="M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"
          />
          <path d="M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z"></path>
        </svg>
      </slot>
    </span>
    <span class="absolute right-0 inset-y-0 flex items-center pr-3">
      <slot name="sufix-icon"></slot>
    </span>
    <span>
      <slot name="text" v-if="!isLoading">Button</slot>
      <span class="text-transparent" v-else-if="isLoading" v-show="isLoading"
        >Loading</span
      >
    </span>
  </button>
</template>

<script>
export default {
  name: "Button",
  components: {},
  props: {
    loading: { type: Boolean, required: false, default: false },
    type: { type: String, required: true, default: "text" }
  },
  data() {
    return {
      isLoading: false
    };
  },
  methods: {},
  computed: {}
};
</script>

<style scoped></style>
