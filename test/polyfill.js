global.requestAnimationFrame = (func) => {
  setTimeout(func, 10);
}
