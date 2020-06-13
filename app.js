const hdr = document.querySelector("h2");

hdr.addEventListener("click",(e) => {
  console.log('something works here!');
  e.target.innerHTML = "Welcome!";
});
