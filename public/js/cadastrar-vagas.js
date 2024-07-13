function cadastrar(){
    var varParkingSpotNumber = parkingSpotNumber.value;
    var varLicensePlateCar = licensePlateCar.value;
    var varBrandCar = brandCar.value 
    var varModelCar = modelCar.value;
    var varColorCar = colorCar.value;
    var varResponsibleName = responsibleName.value;
    var varApartament = apartment.value;
    var varBlock = block.value;

    fetch("http://localhost:8080/parking-spot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          parkingSpotNumber: varParkingSpotNumber,
          licensePlateCar: varLicensePlateCar,
          brandCar: varBrandCar,
          modelCar: varModelCar,
          colorCar: varColorCar,
          responsibleName: varResponsibleName,
          apartment: varApartament,
          block: varBlock
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