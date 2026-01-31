<template>
  <header class="taskbar">
    <div class="taskbar-content">
      <nav class="taskbar-left">
        <button
          class="start-button"
          :class="{ active: isStartOpen, inactive: !isStartOpen }"
          @click="startButton"
        >
          <img :src="isStartOpen ? startOnIcon : startOffIcon" alt="Start" />
        </button>

        <div class="buttons-small">
          <button
            class="portfolio-button"
            :class="{ active: isPortfolioOpen, inactive: !isPortfolioOpen }"
            @click="portfolioButton"
          >
            <img
              :src="isPortfolioOpen ? portfolioOnIcon : portfolioOffIcon"
              alt="portfolio"
            />
          </button>

          <button
            class="diploma-button"
            :class="{ active: isDiplomaOpen, inactive: !isDiplomaOpen }"
            @click="diplomaOpen"
          >
            <img
              :src="isDiplomaOpen ? diplomaOnIcon : diplomaOffIcon"
              alt="diploma"
            />
          </button>

          <button
            class="home-button"
            :class="{ active: isHomeOpen, inactive: !isHomeOpen }"
            @click="homeOpen"
          >
            <img :src="isHomeOpen ? homeOnIcon : homeOffIcon" alt="home" />
          </button>
        </div>
      </nav>

      <div class="taskbar-right">
        <span id="clock">Timer</span>
      </div>
    </div>
  </header>

  <div class="item-container"></div>

  <transition name="window-fade">
    <div
      class="window"
      :class="{ maximized: isMaximized, hidden: isClosed }"  :style="windowStyle" 
    >
      <div class="title-bar" @mousedown="startMove">
        <img src="/src/icon/notepad.svg" />
        <div class="title-bar-text">{{ $t("title-main-window") }}</div>
        <div class="title-bar-controls">
          <button aria-label="Minimaze"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close"></button>
        </div>
      </div>
      <div class="window-body"></div>
      <div class="status-bar">
        <p class="status-bar-field">Press F1 for help</p>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, computed } from "vue";
import { useMovableWindows } from "../../scripts/movableWindows";

import startOnIcon from "/src/icon/start-pressed.svg";
import startOffIcon from "/src/icon/start-normal.svg";

import portfolioOnIcon from "/src/icon/portfolio-pressed.svg";
import portfolioOffIcon from "/src/icon/portfolio-unpressed.svg";

import diplomaOnIcon from "/src/icon/diploma-pressed.svg";
import diplomaOffIcon from "/src/icon/diploma-unpressed.svg";

import homeOnIcon from "/src/icon/home-pressed.svg";
import homeOffIcon from "/src/icon/home-unpressed.svg";

const isStartOpen = ref(false);
const isPortfolioOpen = ref(false);
const isDiplomaOpen = ref(false);
const isHomeOpen = ref(false);

const {x, y, startMove} = useMovableWindows(50,50);
const windowStyle = computed(() => ({
  left: x.value + "px",
  top: y.value + "px",
  width: "620px",
  height: "500px",
}));

function displayUserTime() {
  const timeElement = document.getElementById("clock");
  const now = new Date();

  const options = {
    hour: "numeric",
    minute: "numeric",
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  };

  const formattedTime = now.toLocaleString("en-US", options);
  timeElement.textContent = formattedTime;
}

window.onload = displayUserTime;
setInterval(displayUserTime, 10000);

function startButton() {
  isStartOpen.value = !isStartOpen.value;
}

function portfolioButton() {
  isPortfolioOpen.value = !isPortfolioOpen.value;
}

function diplomaOpen() {
  isDiplomaOpen.value = !isDiplomaOpen.value;
}

function homeOpen() {
  isHomeOpen.value = !isHomeOpen.value;
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
  width: 100%;
  padding: 0 15px;
}

.taskbar-left {
  display: flex;
  gap: 10px;
  align-items: center;
}

.taskbar-left button {
  background: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
}

.buttons-small {
  display: flex;
  gap: 10px;
  height: 100%;
}

.start-button {
  display: flex;
  height: 100%;
}

.start-button img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.taskbar-left button:focus {
  outline: none;
}

.taskbar-left button img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
}

.taskbar-right {
  display: flex;
  align-items: center;
}

span {
  color: var(--main-text-color);
  font-size: 9.3px;
}







.title-bar {
  background: var(--dialog-blue);
  padding: 3px 2px 3px 3px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title-bar.inactive {
  background: var(--dialog-gray);
}

.title-bar-text {
  font-weight: bold;
  color: var(--main-text-color);
  letter-spacing: 0;
  margin-right: 24px;
}

.title-bar-controls {
  display: flex;
}

.title-bar-controls button {
  padding: 0;
  border: none;

  display: block;
  min-width: 16px;
  min-height: 14px;
}

.title-bar-controls button:active {
  padding: 0;
}

.title-bar-controls button:focus {
  outline: none;
}

.title-bar-controls button {
  width: 16px;
  height: 14px;
  display: block;
  background-color: var(--button-face);
  cursor: pointer;

  border-top: 2px solid var(--button-highlight);
  border-left: 2px solid var(--button-highlight);
  border-bottom: 2px solid var(--button-shadow);
  border-right: 2px solid var(--button-shadow);
}

.title-bar-controls button[aria-label="Minimaze"] {
  background-image: url("src/icon/minimaze.svg");
  background-repeat: no-repeat;
  background-position: top 5px left 1.8px;
}

.title-bar-controls button[aria-label="Maximize"] {
  background-image: url("src/icon/maximize.svg");
  background-repeat: no-repeat;
  background-position: top 1px left 1.8px;
}

.title-bar-controls button[aria-label="Close"] {
  margin-left: 2px;
  background-image: url("src/icon/close.svg");
  background-repeat: no-repeat;
  background-position: top 1px left 1.8px;
}




</style>
