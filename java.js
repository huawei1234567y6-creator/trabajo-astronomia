// Mostrar contenido dinámicamente
function mostrar(area) {
    const cont = document.getElementById("resultado");

    if (area === "if") brilloEstelar();
    if (area === "for") distanciasPlanetas();
    if (area === "while") crateresLunares();
    if (area === "switch") cuerpoCeleste();
    if (area === "do") nivelesLuz();
}

// 1. IF – Clasificación de brillo estelar
function brilloEstelar() {
    let mag = Number(prompt("Ingresa la magnitud aparente de la estrella:"));

    let clasificacion = "";

    if (mag <= 0) clasificacion = "Extremadamente brillante";
    else if (mag <= 2) clasificacion = "Muy brillante";
    else if (mag <= 4) clasificacion = "Brillante";
    else if (mag <= 6) clasificacion = "Débil";
    else clasificacion = "No visible a simple vista";

    resultado.innerHTML = `
        <h2>Brillo Estelar</h2>
        <p>Magnitud ingresada: <b>${mag}</b></p>
        <p>Clasificación: <b>${clasificacion}</b></p>
    `;
}

// 2. FOR – Distancias de planetas
function distanciasPlanetas() {
    let cantidad = Number(prompt("¿Cuántas distancias de planetas registrarás?"));
    let suma = 0;

    for (let i = 1; i <= cantidad; i++) {
        let d = Number(prompt(`Distancia ${i} en millones de km:`));
        suma += d;
    }

    let promedio = (suma / cantidad).toFixed(2);

    resultado.innerHTML = `
        <h2>Distancias Planetarias</h2>
        <p>Planetas registrados: ${cantidad}</p>
        <p>Promedio: <b>${promedio} millones de km</b></p>
    `;
}

// 3. WHILE – Contar cráteres lunares > 50 km
function crateresLunares() {
    let diam = 0;
    let contador = 0;

    diam = Number(prompt("Ingrese diámetro del cráter (0 para terminar):"));

    while (diam > 0) {
        if (diam > 50) contador++;
        diam = Number(prompt("Ingrese diámetro del cráter (0 para terminar):"));
    }

    resultado.innerHTML = `
        <h2>Cráteres Lunares Grandes</h2>
        <p>Cráteres mayores a 50 km: <b>${contador}</b></p>
    `;
}

// 4. SWITCH – Identificación de cuerpo celeste
function cuerpoCeleste() {
    let code = Number(prompt("Ingrese código (1-5):"));

    let tipo = "";
    switch (code) {
        case 1: tipo = "Estrella"; break;
        case 2: tipo = "Planeta"; break;
        case 3: tipo = "Cometa"; break;
        case 4: tipo = "Asteroide"; break;
        case 5: tipo = "Galaxia"; break;
        default: tipo = "Código inválido";
    }

    resultado.innerHTML = `
        <h2>Cuerpo Celeste Identificado</h2>
        <p>Resultado: <b>${tipo}</b></p>
    `;
}

// 5. DO WHILE – Registro de luz (lux)
function nivelesLuz() {
    let lux;
    let lista = [];

    do {
        lux = prompt("Ingrese nivel de luz (lux) o escriba 'no' para terminar:");

        if (lux.toLowerCase() !== "no") {
            let valor = Number(lux);
            lista.push(valor);
        }

    } while (lux.toLowerCase() !== "no");

    let mensaje = "";
    if (lista.some(v => v < 5)) mensaje = "Noche profunda";
    else mensaje = "Condiciones normales";

    resultado.innerHTML = `
        <h2>Niveles de Luz Registrados</h2>
        <p>Valores: <b>${lista.join(", ")}</b></p>
        <p>Resultado: <b>${mensaje}</b></p>
    `;
}
