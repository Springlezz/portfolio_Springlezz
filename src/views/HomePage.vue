<template>
  <header class="taskbar">
    <div class="taskbar-content">
      <nav class="taskbar-left">
        <button class="start-button" :class="{ active: isStartOpen, inactive: !isStartOpen }" @click="startButton">
          <img :src="isStartOpen ? startOnIcon : startOffIcon" alt="Start" />
        </button>

        <button class="portfolio-button" :class="{ active: isPortfolioOpen, inactive: !isPortfolioOpen }" @click="portfolioButton">
          <img :src="isPortfolioOpen ? portfolioOnIcon : portfolioOffIcon" alt="portfolio" />
        </button>

        <button class="diploma-button" :class="{ active: isDiplomaOpen, inactive: !isDiplomaOpen }" @click="diplomaOpen">
          <img :src="isDiplomaOpen ? diplomaOnIcon : diplomaOffIcon" alt="diploma" />
        </button>

        <button class="home-button" :class="{ active: isHomeOpen, inactive: !isHomeOpen }" @click="homeOpen">
          <img :src="isHomeOpen ? homeOnIcon : homeOffIcon" alt="home" />
        </button>
      </nav>
      
      <div class="taskbar-right">
        <span id="clock">Timer</span>
      </div>
    </div>
  </header>

  <div class="item-container">

  </div>
</template>

<script setup>
import { ref } from 'vue'

import startOnIcon from '/src/icon/start-pressed.svg'
import startOffIcon from '/src/icon/start-normal.svg'

import portfolioOnIcon from '/src/icon/portfolio-pressed.svg'
import portfolioOffIcon from '/src/icon/portfolio-unpressed.svg'

import diplomaOnIcon from '/src/icon/diploma-pressed.svg'
import diplomaOffIcon from '/src/icon/diploma-unpressed.svg'

import homeOnIcon from '/src/icon/home-pressed.svg'
import homeOffIcon from '/src/icon/home-unpressed.svg'

const isStartOpen = ref(false)
const isPortfolioOpen = ref(false)
const isDiplomaOpen = ref(false)
const isHomeOpen = ref(false)

function startButton() {
  isStartOpen.value = !isStartOpen.value
}

function portfolioButton() {
  isPortfolioOpen.value = !isPortfolioOpen.value
}

function diplomaOpen() {
  isDiplomaOpen.value = !isDiplomaOpen.value
}

function homeOpen() {
  isHomeOpen.value = !isHomeOpen.value
}
</script>

<style scoped>
  .taskbar {
  position: fixed;
  width: 100%;
  height: 30px;
  background: url("/src/icon/NavBar.svg") no-repeat center center;
  background-size: cover;
  display: flex;
  align-items: center;
  z-index: 999;
}

.taskbar-content {
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  width: 100%;
  padding: 0 10px;
}

.taskbar-left {
  display: flex;
  gap: 5px;
  align-items: center;
}

.taskbar-left button {
  border: none;
  padding: 0;
  margin: 0;
  background: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.taskbar-left button:focus {
  outline: none;
}

.taskbar-left button img {
  width: 100%;
  height: 100%;
  display: block;
}

.taskbar-right {
  display: flex;
  align-items: center;
  font-family: monospace;
  color: white;
}

</style>
