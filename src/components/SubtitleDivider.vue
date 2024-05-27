<template>
  <div>
    <p class="font-weight-medium" :class="`${textSize} ${textColor}`">
      <slot></slot>
    </p>
    <VDivider class="mb-4" />
  </div>
</template>

<script setup>
// eslint-disable-next-line no-undef
defineProps({
  textSize: {
    type: String,
    default: 'text-h5',
  },
  textColor: {
    type: String,
    default: 'text-primary',
  },
});
</script>
