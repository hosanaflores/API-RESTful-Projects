function login() {
  var varEmail = email.value;
  var varPassword = password.value;

  fetch("http://localhost:8080/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: varEmail,
      password: varPassword,
    }),
  })
    .then(function (resposta) {
      console.log("ESTOU NO THEN DO entrar()!");

      console.log(resposta);
      if (resposta.status == 302) {
        const json = resposta.json();
        console.log("Cadastro realizado com sucesso:", json);

        Swal.fire({
          title: "Sucesso!",
          text: "Cadastro realizado com sucesso!",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          sessionStorage.userEmail = json.email;
          sessionStorage.userID = json.id;
          setTimeout(function () {
            window.location = "./intern.html";
          }, 1000); // apenas para exibir o loading
        });
      } else {
        const errorData = resposta.json();
        console.error("Erro no cadastro:", errorData);
        Swal.fire({
          title: "Erro!",
          text: "Erro no login",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    })
    .catch(function (erro) {
      console.log(erro);
    });
}
