import { ref } from "vue";

export function useMovableWindows(startX = 50, startY = 50) {
  const x = ref(startX);
  const y = ref(startY);

  let isMoving = false;
  let offsetX = 0;
  let offsetY = 0;

  function startMove(e) {
    isMoving = true;
    offsetX = e.clientX - x.value;
    offsetY = e.clientY - y.value;

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", stopMove);
    
  }

  function onMove(e) {
    if (!isMoving) return
    x.value = e.clientX - offsetX;
    y.value = e.clientY - offsetY;
  }

  function stopMove() {
    isMoving = false;
    document.removeEventListener("mousemove", onMove);
    document.removeEventListener("mouseup", stopMove);
  }

  return { x, y, startMove };
}
