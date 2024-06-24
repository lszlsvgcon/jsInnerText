document.addEventListener("DOMContentLoaded", function () {
  // Captura dos elementos do HTML
  const titulo = document.getElementById("titulo");
  const listaNaoOrdenada = document.querySelector("ul");
  const link = document.getElementById("link");
  const listaOrdenada = document.getElementById("lista-ordenada");

  // Adicionando conteúdo aos elementos
  titulo.innerText = "Título da Página";

  console.log(titulo.innerText);

  link.innerText = "Visite Proz Educação";

  console.log(link.innerText);

  // Adicionando itens à lista não ordenada usando innerHTML
  listaNaoOrdenada.innerHTML = `
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    `;

  console.log(listaNaoOrdenada.innerHTML);

  // Adicionando itens à lista ordenada usando innerHTML (com links)
  listaOrdenada.innerHTML = `
        <li><a href="https://desenvum.com">Link 1</a></li>
        <li><a href="https://desenvdois.com">Link 2</a></li>
        <li><a href="https://desenvtres.com">Link 3</a></li>
    `;
  console.log(listaOrdenada.innerHTML);
});
