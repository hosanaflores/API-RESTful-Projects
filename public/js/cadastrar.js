function signup() {
  var varEmail = email.value;
  var varPassword = password.value;
  var varConfirmPassword = confirm_password.value;

  if (varPassword != varConfirmPassword) {
    alert("Senhas não compatíveis");
    return;
  }

  fetch("http://localhost:8080/user", {
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

      if (resposta.ok) {
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
          text: "Erro no cadastro",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    })
    .catch(function (erro) {
      console.log(erro);
    });
}
