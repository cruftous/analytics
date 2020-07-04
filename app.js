const hdr = document.querySelector("h2");

hdr.addEventListener("click",(e) => {
  console.log('something works here!');
  e.target.innerHTML = "Welcome!";
});

if (window.location.href === "https://cruftous.github.io/analytics") {
  alert("You are on the original site!");
} else {
  alert("You are not on the original site!");
}
