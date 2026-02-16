<template>
  <div class="pre-header">PROJECTS</div>
  <header>
    <h3>Please select project</h3>
  </header>

  <div class="bios-menu">
    <a class="menu-item" v-for="(item, index) in menuItems" :key="index" :href="item.link" :class="{selected: selectedIndex === index}" @click="goTo(item.link)">
      {{ item.name }}
    </a>
  </div>

  <!-- подумать над правой частью -->
  
  <footer>
    <p>up and down to move selection</p>
    <p>ENTER to select</p>
    <p>ESC to return</p>
  </footer>
</template>

<script>
import { ref, onMounted } from "vue";

const menuItems = [
  { name: "Jester Protocol old version", link: "#" },
  { name: "Goodsearch", link: "#" },
  { name: "Restobot: automation of restaurant business", link: "#" },
  { name: "Jester Protocol new version: in development", link: "#" },
  ]
</script>

<style scoped>
body::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
    0deg,
    rgba(0, 255, 0, 0.05),
    rgba(0, 255, 0, 0.05) 3px,
    transparent 3px,
    transparent 6px
  );
  pointer-events: none;
}
</style>
