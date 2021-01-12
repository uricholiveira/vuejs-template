<template>
  <div class="absolute flex justify-end h-auto w-full" v-show="show">
    <div class="relative mx-4 my-4 w-full sm:w-1/2 md:w-1/3">
      <div
        class="px-3 py-3 rounded-md text-lgw-full shadow-md"
        :class="[wrapperClass]"
      >
        <div
          class="inline-flex justify-start align-middle mt-0.5"
          :class="[textClass]"
        >
          <svg
            viewBox="0 0 24 24"
            class="w-5 h-5 sm:w-5 sm:h-5 mr-3 mb-1"
            v-if="variant === 'success'"
          >
            <path
              fill="currentColor"
              d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
            ></path>
          </svg>
          <svg
            class="w-5 h-5 sm:w-5 sm:h-5 mr-3 mb-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            v-else-if="variant === 'error'"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clip-rule="evenodd"
            />
          </svg>
          <svg
            viewBox="0 0 24 24"
            class="w-5 h-5 sm:w-5 sm:h-5 mr-3 mb-1"
            v-else-if="variant === 'warning'"
          >
            <path
              fill="currentColor"
              d="M23.119,20,13.772,2.15h0a2,2,0,0,0-3.543,0L.881,20a2,2,0,0,0,1.772,2.928H21.347A2,2,0,0,0,23.119,20ZM11,8.423a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Zm1.05,11.51h-.028a1.528,1.528,0,0,1-1.522-1.47,1.476,1.476,0,0,1,1.448-1.53h.028A1.527,1.527,0,0,1,13.5,18.4,1.475,1.475,0,0,1,12.05,19.933Z"
            ></path>
          </svg>
          <svg
            viewBox="0 0 24 24"
            class="w-5 h-5 sm:w-5 sm:h-5 mr-3 mb-1"
            v-else-if="variant === 'info'"
          >
            <path
              fill="currentColor"
              d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"
            ></path>
          </svg>
        </div>
        <span class="text-sm font-medium" :class="[textClass]">
          <slot name="message">
            {{ message }}
          </slot>
          <div
            class="flex justify-end -mt-6 -mr-3"
            v-if="closable"
            :class="[textClass]"
          >
            <button @click="closeAlert" class="focus:outline-none">
              <svg
                class="w-5 h-5 sm:w-5 sm:h-5 mr-3 mb-0.5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </span>
      </div>
      <div class="bg-gray-100 h-1 rounded-b ml-1.5 mr-2" v-show="progress > 0">
        <div
          class="bg-gray-400 h-1 rounded-b"
          :style="{ width: progressBar }"
        ></div>
      </div>
    </div>
  </div>
</template>

<!--TODO: Adicionar tempo de duração do alerta-->
<script>
export default {
  name: "Alert",
  components: {},
  props: {
    message: { type: String, required: false, default: "This is an alert!" },
    variant: { type: String, required: false, default: "success" },
    show: { type: Boolean, required: false, default: false },
    closable: { type: Boolean, required: false, default: true },
    secondsToClose: { type: Number, required: false, default: 0 }
  },
  data() {
    return {
      progress: this.secondsToClose > 0 ? 100 : 0
    };
  },
  methods: {
    closeAlert() {
      this.$emit("update:message", "");
      this.$emit("update:variant", "success");
      this.$emit("update:show", false);
      this.$emit("update:secondsToClose", 0);
    }
  },
  computed: {
    progressBar() {
      return this.progress;
    },
    wrapperClass() {
      switch (this.variant) {
        case "success":
          return "bg-green-400";
        case "info":
          return "bg-blue-400";
        case "error":
          return "bg-red-400";
        case "warning":
          return "bg-yellow-400";
        default:
          return "bg-white";
      }
    },
    textClass() {
      switch (this.variant) {
        case "success":
          return "text-green-800";
        case "info":
          return "text-blue-800";
        case "error":
          return "text-red-800";
        case "warning":
          return "text-yellow-800";
        default:
          return "text-gray-800";
      }
    }
  },
  mounted() {}
};
</script>

<style scoped></style>
