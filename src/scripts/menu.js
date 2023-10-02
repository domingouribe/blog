document.querySelector(".hamburger").addEventListener("click", () => {
    console.log('Has dado click')
    document.querySelector(".nav__links").classList.toggle("expanded");
  });