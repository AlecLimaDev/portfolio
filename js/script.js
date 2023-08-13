let menu = document.querySelector("#menu-btn");
let header = document.querySelector(".header");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  header.classList.toggle("active");
};

let themeToggler = document.querySelector("#theme-toggler");

themeToggler.onclick = () => {
  themeToggler.classList.toggle("fa-sun");
  if (themeToggler.classList.contains("fa-sun")) {
    document.body.classList.add("active");
  } else {
    document.body.classList.remove("active");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  new TypeIt(".animate", {
    speed: 100,
    strings: [
      "Desenvolvedor Front-End: React, TypeScript, Next.js and Node.Js",
      "Me chama no WhatsApp / Linkedin 👇",
    ],
    loop: true,
  }).go();
});

let output = "";
let getList = document.querySelector("#iteracao");

const url = "https://api.github.com/users/AlecLimaDev/repos";

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((post) => {
      console.log(post);
      output += `<div class="box">
          <h1>Nome do projeto: ${post.name}</h1>
          <img src="assets/img/GitHub.png">
          <a target="_blank" href="${post.svn_url}">${post.svn_url}</a>
          <li>${post.language}</li>
          <div class="content">
          <p>${post.description}</p>
          </div>
      </div>`;
    });
    getList.innerHTML = output;
  });
