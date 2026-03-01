let url = "https://pokeapi.co/api/v2/pokemon/";

$(document).ready(function () {
    $(".searchBtn").click(function () {
        let name = $(".searchInput").val();

        $.ajax(
            {
                url: url + name,
                method: "GET",
                success: success,
                error: function () {
                    $(".results").html("<p>Pokémon not found </p>");
                }
            })
    })
})

function success(data) {
    console.log("Data received:", data);
    let pokemonHTML = `
                    <div class="card">
                        <h2 class="cardHeading">${data.name.toUpperCase()}</h2>
                        <img src="${data.sprites.front_default}" class="pokemonImg"/>
                        <p class="pokemonInfo"><strong class="label">Height:</strong> ${data.height}</p>
                        <p class="pokemonInfo"><strong class="label">Weight:</strong> ${data.weight}</p>
                        <p class="pokemonInfo"><strong class="label">Type:</strong> ${data.types[0].type.name}</p>
                    </div>
                `;

    $(".results").html(pokemonHTML);
}

