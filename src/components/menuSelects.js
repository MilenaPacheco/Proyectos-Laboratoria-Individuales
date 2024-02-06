export const selectsComponent = () => {
    const selects = document.createElement("div");
    selects.id = "inputs";
    selects.innerHTML = `
            <label for="genre"><strong>Filtrar por género</strong></label>
            <select name="genre" id="genre" data-testid="select-filter">
                <option value="a" selected disabled>Selecciona filtro</option>
                <option value="fiction">Ciencia Ficción</option>
                <option value="animation">Animación</option>
                <option value="thriller">Thriller</option>
                <option value="documental">Documental</option>
                <option value="drama">Drama</option>
            </select>
    
            <label for="alfa"><strong>Ordenar alfabéticamente</strong></label>
            <select name="alfa" id="alfa" data-testid="select-sort">
                <option value="a" selected disabled>Selecciona orden</option>
                <option value="asc">A - Z</option>
                <option value="desc">Z - A</option>
            </select>

            <label for="year"><strong>Ordenar por año</strong></label>
            <select name="year" id="year" data-testid="select-sort-year">
                <option value="a" selected disabled>Selecciona orden</option>
                <option value="asc">Ascendente</option>
                <option value="desc">Descendente</option>
            </select>

            <label for="statistics"><strong>Estadísticas RT</strong></label>
            <select name="statistics" id="statistics">
                <option value="a" selected disabled>Estadísticas</option>
                <option value="score50">50% y 70% en RT</option>
                <option value="score70">70% y 90% en RT</option>
                <option value="score90">90% y 100% en RT</option>
            </select>
    
            <label for="statistics-country"><strong>Estadísticas por países</strong></label>
                <select name="statistics-country" id="statistics-country">
                <option value="a" selected disabled>Estadísticas</option>
                <option value="country">Películas por país</option>
            </select>

            <button id="btn" data-testid="button-clear">Limpiar</button>

        `;

    return selects;
};


const selectElement = document.getElementById("genre");

let selectedValue;
let selectedText;

selectElement.addEventListener("change", function () {

    const options = selectElement.options;
    const selectedIndex = selectElement.selectedIndex;

    selectedValue = options[selectedIndex].value;
    selectedText = options[selectedIndex].text;

    return { selectedValue, selectedText };
});

//comentario: terminar hoy 6