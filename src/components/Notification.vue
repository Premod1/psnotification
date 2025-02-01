<script setup>
import { ref, onMounted } from "vue";
import "../style.css";

const props = defineProps({
  message: String,
  status: {
    type: String,
    default: "",
    validator: (value) =>
      ["success", "error", "warning", "info"].includes(value),
  },
  position: {
    type: String,
    default: "top-right",
    validator: (value) =>
      [
        "top-left",
        "top-right",
        "bottom-left",
        "bottom-right",
        "center-top",
        "center-bottom",
      ].includes(value),
  },
  duration: {
    type: Number,
    default: 3000,
  },
});

const isVisible = ref(true);

onMounted(() => {
  setTimeout(() => {
    isVisible.value = false;
  }, props.duration);
});
</script>

<template>
  <transition name="fade">
    <div
      v-if="isVisible && status"
      class="notification"
      :class="[status, position]"
    >
      <div class="icon-box">
        <span class="icon" :class="status"></span>
      </div>
      <p>{{ message }}</p>
    </div>
  </transition>
</template>
