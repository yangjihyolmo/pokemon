let url = "https://pokeapi.co/api/v2/pokemon/";

$(document).ready(function () {
    $("#searchBtn").click(function () {
        let name = $("#searchInput").val();

        $.ajax(
            {
                url: url + name,
                method: "GET",
                success: success,
                error: error
            })
    })
})

function success(data) {
    let pokemonHTML = `
                    <div class="card">
                        <h2>${data.name.toUpperCase()}</h2>
                        <img src="${data.sprites.front_default}" />
                        <p><strong>Height:</strong> ${data.height}</p>
                        <p><strong>Weight:</strong> ${data.weight}</p>
                        <p><strong>Type:</strong> ${data.types[0].type.name}</p>
                    </div>
                `;

    $("#result").html(pokemonHTML);
}

