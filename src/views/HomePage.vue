<template>
  <header class="taskbar">
    <div class="taskbar-content">
      <nav class="taskbar-left">
        <button>
          <img src="/src/icon/taskbar/computer.svg" />
          <p>{{ $t("start-btn") }}</p>
        </button>

        <button>
          <img src="/src/icon/taskbar/computer.svg" />
          <p>{{ $t("portfolio-btn") }}</p>
        </button>

        <button>
          <img src="/src/icon/taskbar/computer.svg" />
          <p>{{ $t("diploms-btn") }}</p>
        </button>

        <button>
          <img src="/src/icon/taskbar/computer.svg" />
          <p>Springlezz</p>
        </button>
      </nav>

      <div class="taskbar-right">
        <span id="clock">Timer</span>
      </div>

    </div>
  </header>

  <div class="item-container"></div>

  <!-- Общее окно -->
  <transition name="window-fade">
    <div
      class="window"
      :class="{ maximized: isMaximized, hidden: isClosed }"  :style="window1Style">
      <div class="title-bar" @mousedown="win1.startMove">
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
        <p class="status-bar-field">{{ $t("objects-main-window") }}</p>
      </div>
    </div>
  </transition>


  <transition name="window-fade">
    <div
      class="window"
      :class="{ maximized: isMaximized, hidden: isClosed }"  :style="window2Style" 
    >
      <div class="title-bar" @mousedown="win2.startMove">
        <img src="/src/icon/notepad.svg" />
        <div class="title-bar-text">{{ $t("who_i_am") }}</div>
        <div class="title-bar-controls">
          <button aria-label="Minimaze"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close"></button>
        </div>
      </div>
      <div class="window-body" style="white-space: pre-line;">
        <p>{{ $t("who_i_am_description") }}</p>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, computed } from "vue";
import { useMovableWindows } from "../scripts/movableWindows";

const win1 = useMovableWindows(50, 50);
const window1Style = computed(() => ({
  left: win1.x.value + "px",
  top: win1.y.value + "px",
  width: "620px",
  height: "500px",
}));

const win2 = useMovableWindows(500, 120);
const window2Style = computed(() => ({
  left: win2.x.value + "px",
  top: win2.y.value + "px",
  width: "420px",
  height: "200px",
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
  gap: 6px;
  align-items: center;
}

.taskbar-left button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  gap: 6px;
  background: var(--surface-with-text);
  border-top: 2px solid #ffffff;
  border-left: 2px solid #ffffff;
  border-bottom: 2px solid var(--button-shadow);
  border-right: 2px solid var(--button-shadow);
  padding: 2px 6px;
  cursor: pointer;
  background: var(--surface-with-text);
}

.taskbar-left button:active {
  background: var(--surface-active);
  border-top: 2px solid var(--button-shadow);
  border-left: 2px solid var(--button-shadow);
  border-bottom: 2px solid #ffffff;
  border-right: 2px solid #ffffff;
  background: var(--surface-active);
}

.taskbar-right {
  display: flex;
  align-items: center;
}

span {
  color: var(--main-text-color);
  font-size: 9.3px;
}
</style>
