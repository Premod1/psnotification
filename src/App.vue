<script setup>
import { ref } from "vue";
import Notification from "./components/Notification.vue";

const status = ref("error");
const message = ref("Notification created successfully");
const position = ref("bottom-right");
</script>

<template>
  <Notification :status="status" :message="message" :position="position" />
</template>
