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
      "Desenvolvedor Front-End: React, React Native, TypeScript, Next.js and Node.Js",
      "Me chama no WhatsApp / Linkedin 👇",
    ],
    loop: true,
  }).go();
});

let output = "";
let postsList = document.querySelector("#iteracao");
let userList = document.querySelector(".header");
let outputProfile = "";

const url = "https://api.github.com/users/AlecLimaDev/repos";
const addPostForm = document.querySelector(".box-container");
const button = document.querySelector("button");



addPostForm.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  }).then((res) => res.json());
});

const renderPost = (posts) => {
  posts.forEach((post) => {
    output += `<div class="box" data-id=${post.id}>
        <h1>Nome do projeto: ${post.name}</h1>
        <img src="assets/img/GitHub.png">
        <a target="_blank" href="${post.svn_url}">${post.svn_url}</a>
        <li>${post.language}</li>
        <p>${post.description}</p>
        <a href="${post.svn_url}" target="_blank" id="delete-post">Ir para o repositório</a>
    </div>`;
  });
  postsList.innerHTML = output;
};

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    renderPost(data);
  });


 