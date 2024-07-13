let currentPage = 0;
const pageSize = 3; 

async function fetchAndRenderParkingSpots(page) {
    try {
        const response = await fetch(`http://localhost:8080/parking-spot?page=${page}&size=${pageSize}`);
        if (!response.ok) {
            throw new Error('Erro ao buscar os dados.');
        }
        const data = await response.json();
        renderParkingSpots(data.content);
        updatePaginationControls(data);
    } catch (error) {
        console.error('Erro na requisição:', error);
    }
}

function renderParkingSpots(parkingSpots) {
    const content = document.getElementById('content');
    content.innerHTML = '';

    parkingSpots.forEach(element => {
        content.innerHTML += `
            <div class="card">
                <div class="img">
                    <img src="./images/parking_1.png" alt="Imagem do card" />
                </div>

                <div class="container">
                    <h4><b>${element.id}</b></h4>

                    <div>
                        <p>Número da Vaga:</p>
                        <span>${element.parkingSpotNumber}</span>
                    </div>

                    <div>
                        <p>Placa do Carro:</p>
                        <span>${element.licensePlateCar}</span>
                    </div>

                    <div>
                        <p>Marca do Carro:</p>
                        <span>${element.brandCar}</span>
                    </div>

                    <div>
                        <p>Modelo do Carro:</p>
                        <span>${element.modelCar}</span>
                    </div>

                    <div>
                        <p>Cor do Carro:</p>
                        <span>${element.colorCar}</span>
                    </div>

                    <div>
                        <p>Responsável:</p>
                        <span>${element.responsibleName}</span>
                    </div>

                    <div>
                        <p>Apartamento:</p>
                        <span>${element.apartment}</span>
                    </div>

                    <div>
                        <p>Bloco / Torre:</p>
                        <span>${element.block}</span>
                    </div>

                    <div class="buttons">
                        <button onclick="edit()" class="button-edit">Editar</button>
                        <button onclick="deleted()" class="button-delete">Deletar</button>
                    </div>
                </div>
            </div>
        `;
    });
}

function updatePaginationControls(data) {
    const prevPageBtn = document.getElementById('prevPageBtn');
    const nextPageBtn = document.getElementById('nextPageBtn');

    prevPageBtn.disabled = data.first;
    nextPageBtn.disabled = data.last;

    const currentPageElem = document.getElementById('currentPage');
    currentPageElem.textContent = `Página ${data.number + 1} de ${data.totalPages}`;
}

function nextPage() {
    if (!document.getElementById('nextPageBtn').disabled) {
        currentPage++;
        fetchAndRenderParkingSpots(currentPage);
    }
}

function prevPage() {
    if (!document.getElementById('prevPageBtn').disabled) {
        currentPage--;
        fetchAndRenderParkingSpots(currentPage);
    }
}

fetchAndRenderParkingSpots(currentPage);