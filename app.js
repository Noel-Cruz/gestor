if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sworkers.js');
};
document.onclick=(e)=>{
console.dir(e)
};