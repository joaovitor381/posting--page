document
  .getElementById("postForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const titulo = document.getElementById("titulo").value;
    const conteudo = document.getElementById("conteudo").value;

    const data = {
      title: titulo,
      body: conteudo,
      userId: 1,
    };

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const renderizadorTitulo = document.getElementById(
          "renderizador-titulo"
        );
        const renderizadorConteudo = document.getElementById(
          "renderizador-conteudo"
        );

        renderizadorTitulo.innerHTML = data.title;
        renderizadorConteudo.innerHTML = data.body;
      })
      .catch((error) => console.error("Erro:", error));
  });
