<template>
  <v-navigation-drawer v-model="modelDrawer" elevation="3" color="#0ff000" width="256">
    <div>
      <slot name="sidebar"></slot>
    </div>
  </v-navigation-drawer>
  <v-app-bar color="#ff0000" elevation="3" height="56">
    <template v-if="mobile" v-slot:prepend>
      <v-app-bar-nav-icon @click="() => (modelDrawer = !modelDrawer)" />
    </template>
    <template v-slot:append>
      <slot name="toolbar-right"></slot>
    </template>
    <div class="app-bar-container">
      <slot name="toolbar-left"></slot>
    </div>
  </v-app-bar>
  <div class="page-container">
    <div class="page-container-content" :style="{ padding: `${paddingY} ${paddingX}` }">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { shallowRef } from 'vue';
import { useDisplay } from 'vuetify';

const modelDrawer = shallowRef<boolean>(true);
const { mobile } = useDisplay();

withDefaults(
  defineProps<{
    paddingX?: string;
    paddingY?: string;
  }>(),
  {
    paddingX: '24px',
    paddingY: '12px',
  },
);
</script>

<style scoped>
.page-container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
}

.page-container-content {
  flex-grow: 3;
}
</style>
