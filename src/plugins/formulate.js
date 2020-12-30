import Vue from "vue";
import VueFormulate from "@braid/vue-formulate";

Vue.use(VueFormulate, {
  classes: {
    label: "md:flex pl-0.5 pb-0.5 text-sm font-medium text-gray-700",
    input:
      "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",
    error: "md:flex pl-0.5 pb-0.5 text-sm font-medium text-red-700"
  }
});
