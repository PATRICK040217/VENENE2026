const items = [
    { name: "GALLETA DE AVENA ABIERTA SIN BOLSA - V:1 DIA", vida: 24 },
    { name: " TOPPING FRESA - V: 5 DIAS ", vida: 120 },
    { name: " TOPPING MARACUYÁ - V: 5 DIAS ", vida: 120 },
    { name: " TOPPING CHOCOLATE EN POMO - V:7 DIAS ", vida: 168 },
    { name: " TOPPING CHOCOLATE BOLSA ABIERTA - V: 30 DIAS ", vida: 720 },
    { name: " TOPPING CARAMELO EN POMO - V:7 DIAS ", vida: 168 },
    { name: " TOPPING CARAMELO BOLSA ABIERTA - V:60 DIAS", vida: 1440 },
    { name: " CONOS EN TAPER - V: 1 DIA", vida: 24 },
    { name: " CONOS CAJA ABIERTA - V:7 DIAS", vida: 168 },
    { name: " OREO EN TAPER - V:12 Hrs ", vida: 12 },
    { name: " OREO BOLSA ABIERTA - V:30 DIAS", vida: 720 },
    { name: " BASE DE HELADO EN LECHERA - V:1 DIA", vida: 24 },
    { name: " PAN N°4 EN BOLSA ABIERTA - V:1 DIA", vida: 24 },
    { name: " PAN BRIOCHE EN BOLSA ABIERTA - V:1 DIA ", vida: 24 },
    { name: " TORTILLA BIMBO EN BOLSA ABIERTA - V:3 DIAS", vida: 72 },
    { name: " SALSA OCOPA BOLSA ABIERTA - V:7 DIAS ", vida: 168 },
    { name: " SALSA BBQ BOLSA ABIERTA - V:3 DIAS", vida: 72 },
    { name: " SALSA ROCOTO BOLSA ABIERTA - V:7 DIAS ", vida: 168 },
    { name: " MAYONESA BOLSA ABIERTA - V:4 DIAS", vida: 96 },
    { name: " QUESO BOLSA ABIERTA - V:7 DIAS", vida: 168 },
    { name: " SAL EN POMO - V:7 DIAS", vida: 168 },
    { name: " SAL BOLSA ABIERTA - V:30 DIAS", vida: 720 },
    { name: " PURÉ EN BOLSA ABIERTA -V:2 DIAS", vida: 48 },
    { name: " TOCINO BOLSA ABIERTA -V:3 DIAS", vida: 72 },
    { name: " SALSA MELTZ BOLSA ABIERTA - V:3 DIAS", vida: 72 },
    { name: " LECHUGA PICADA - V:12Hrs", vida: 12 },
    { name: " LECHUGA EN CABEZA - V:11 DIAS", vida: 264 },
    { name: " TOMATE PICADO -V:4Hrs", vida: 4 },
    { name: " TOMATE SANITIZADO -V:1 DIA", vida: 24 },
    { name: " TOMATE ENTERO - V:14 DIAS", vida: 336 },
    { name: " MARGARINA LIQUIDA EN POMO ABIERTO - V:15 DIAS", vida: 360 },
    { name: " MARGARINA LIQUIDA EN DIP - V:12Hrs", vida: 12 },
    { name: " PICKLES EN DIP -V:2 DIAS", vida: 48 },
    { name: " PICKLES BOLSA ABIERTA - V:7 DIAS", vida: 168 },
    { name: " ENSALADA PREPARADA - V:1 DIA", vida: 24 },
    { name: " SALSA PURE BOLSA ABIERTA -V:4 DIAS", vida: 96 },
    { name: " SALSA HONEY MUSTARD BOLSA ABIERTA -V:3 DIAS", vida: 72 },
    { name: " PAPAS AL HILO BOLSA ABIERTA -V:2 DIAS", vida: 48 },
    { name: " PAPAS AL HILO MESA DE PREPARACION -V:8Hrs", vida: 8 },
    { name: " TORTILLA EN MITADES -V:12Hrs", vida: 12 },
    { name: " HARINA PREPARADA SIN CONTACTO CON POLLO - V:2 DIAS", vida: 48 },
    { name: " HARINA PREPARADA CONTACTO CON POLLO - V:1 DIA", vida: 24 },
    { name: "GALLETA SELLADA CON BOLSA - D:12Hrs V:2 DIAS", descongelamiento: 12, vida: 48 },
    { name: "3 LECHES VAINILLA - D:12H V:3 DIAS ", descongelamiento: 12, vida: 72 },
    { name: "3 LECHES CHOCOLATE - D:12H V:3 DIAS ", descongelamiento: 12, vida: 72 },
    { name: " MOUSSE LUCMA - D:12H V:2 DIAS ", descongelamiento: 12, vida: 48 },
    { name: " TORTA TRUFADA - D:12H V:2 DIAS ", descongelamiento: 12, vida: 48 },
    { name: " TOCINO BOLSA SELLADA - D:2 DIAS V:6 DIAS", descongelamiento: 48, vida: 144 },
    { name: " POP CORN CONGELADO MDO -D:4 DIAS V:2 DIAS", descongelamiento: 96, vida: 48 },
    { name: " FILETE KRUNCHY CONGELADO MDO-D:4 DIAS V:2 DIAS ", descongelamiento: 96, vida: 48 },
    { name: " HOT WING CONGELADO MARINADO -D:4 DIAS V:2 DIAS ", descongelamiento: 96, vida: 48 },
    { name: " POLLO PICANTE CONGELADO MARINADO -D:4 DIAS V:2 DIAS ", descongelamiento: 96, vida: 48 },
    { name: " POLLO ETC CONGELADO CRUDO -D:4 DIAS V:3 DIAS ", descongelamiento: 96, vida: 72 },
    { name: " POLLO RO CONGELADO CRUDO -D:4 DIAS V:3 DIAS ", descongelamiento: 96, vida: 72 },
    { name: " CRISPY STRIP CONGELADO CRUDO -D:4 DIAS V:3 DIAS ", descongelamiento: 96, vida: 72 },
    { name: " HOT WING CONGELADO CRUDO -D:4 DIAS V:3 DIAS ", descongelamiento: 96, vida: 72 },
    { name: " FILETE ETC CONGELADO CRUDO -D:4 DIAS V:3 DIAS ", descongelamiento: 96, vida: 72 },
    { name: " FILETE KRUNCHY CONGELADO CRUDO -D:4 DIAS V:3 DIAS ", descongelamiento: 96, vida: 72 },
    { name: " TENDER CONGELADO CRUDO -D:4 DIAS V:3 DIAS ", descongelamiento: 96, vida: 72 },
    { name: " TENDER CONGELADO MARINADO -D:4 DIAS V:2 DIAS ", descongelamiento: 96, vida: 48 },
    { name: " POLLO RO MARINADO- M:2 Hrs V:2 DIAS ", Marinado: 2, vida: 46 },
    { name: " POLLO ETC MARINADO- M:2 Hrs V:2 DIAS ", Marinado: 2, vida: 46 },
    { name: " TENDER MARINADO- M:2 Hrs V:2 DIAS ", Marinado: 2, vida: 46 },
    { name: " HOTWING MARINADO- M:2 Hrs V:2 DIAS ", Marinado: 2, vida: 46 },
    { name: " NUGGET MARINADO- M:2 Hrs V:2 DIAS ", Marinado: 2, vida: 46 },
    { name: " STRIP MARINADO- M:2 Hrs V:2 DIAS ", Marinado: 2, vida: 46 },
    { name: " FILETE ETC MARINADO- M:2 Hrs V:2 DIAS ", Marinado: 2, vida: 46 },
    { name: " FILETE KRUNCHY MARINADO- M:2 Hrs V:2 DIAS ", Marinado: 2, vida: 46 },
    { name: " POP CORN MARINADO- M:2 Hrs V:2 DIAS ", Marinado: 2, vida: 46 },
    { name: " SALSA AJI DE LA CASA - V:3 DIAS ", vida: 72 },
    { name: " SALSA BBQ AHUMADA BOLSA ABIERTA - V:3 DIAS ", vida: 72 },
    { name: " SALSA AJI DE LA CASA ENVASADA - V:12Hrs ", vida: 12 },
    { name: " SALSA BBQ ENVASADA - V:12Hrs ", vida: 12 },
    { name: " POLLO PICANTE MARINADO- M:2 Hrs V:2 DIAS ", Marinado: 2, vida: 46 },
    { name: " TOCINO EN MITAD PACKER - V:12Hrs ", vida: 12 },
    { name: " POLLO RO CRUDO - V:3 DIAS", vida: 72 },
    { name: " POLLO ETC CRUDO - V:3 DIAS ", vida: 72 },
    { name: " NUGGET CRUDO - V:3 DIAS ", vida: 72 },
    { name: " HOT WING CRUDO - V:3 DIAS ", vida: 72 },
    { name: " TENDER CRUDO - V:3 DIAS ", vida: 72 },
    { name: " FILETE ETC CRUDO - V:3 DIAS ", vida: 72 },
    { name: " POP CORN CRUDO - V:3 DIAS ", vida: 72 },
    { name: " FILETE KRUNCHY CRUDO - V:3 DIAS ", vida: 72 },
    { name: " PIE DE MANZANA - V:30 DIAS ", vida: 720 },
    { name: " HARVEST-DONACION - V:11 DIAS", vida: 264 },
    { name: " SALSA TARTARA BOLSA ABIERTA - V:3 DIAS", vida: 72 },
    { name: " SALSA DE AJO BOLSA ABIERTA - V:3 DIAS", vida: 72 },
    { name: " SALSA MIEL PICANTE o CHILI TAY - V:14 DIAS", vida: 336 },
    { name: " PIE DULCE DE LECHE - V:30 DIAS", vida: 720 },
    { name: " MIEL PICANTE EN ESTACION - R:2H V:12H", Marinado: 2, vida: 12 },
    { name: " BBQ EN ESTACION - R:2H V:12H ", Marinado: 2, vida: 12 },
    { name: " TORTILLA CONGELADA- D:12H V:48H", Marinado: 12, vida: 48 },
    { name: " TORTILLA DESCONGELADA B/ABIERTA - V:12 Hrs", vida: 12 },
    { name: " TOCINO CERDEÑA DESCONGELAMIENTO - D:36H V:6D", Marinado: 36, vida: 144 },
    { name: " TOCINO CERDEÑA B/ABIERTA - V:3 Dias", vida: 72 },
    { name: " BIMBOLETE - V:8 HRS", vida: 8 },
    // AQUÍ EL CAMBIO: vida: "3M" para identificar meses
    { name: " CANELA EN POLVO - V:3 MESES", vida: "3M" }, 
    { name: " DULCE DE LECHE 1KG BOLSA ABIERTA- V:10 DIAS", vida: 240 },
    { name: " DULCE DE LECHE – 1KG POMO EN ESTACION V:1 DIA", vida: 24 },
    { name: " SALSA HONEY CHIPOTLE BOLSA ABIERTA- V:3 DIAS", vida: 72 },
    { name: " SALSA HONEY CHIPOTLE EN PIROTIN- V:12 HRS", vida: 12 },
  { name: " PURE BOLSA ABIERTA- V:2 DIAS", vida: 48 },
];

const itemList = document.getElementById("itemList");
const searchInput = document.getElementById("searchInput");

items.forEach((item) => {
    const option = document.createElement("option");
    option.value = JSON.stringify(item);
    option.textContent = item.name.trim();
    itemList.appendChild(option);
});

function filterItems() {
    const filter = searchInput.value.toLowerCase();
    const options = itemList.options;
    for (let i = 0; i < options.length; i++) {
        const text = options[i].textContent.toLowerCase();
        options[i].style.display = text.includes(filter) ? "" : "none";
    }
}

function calculateExpiry() {
    if (itemList.selectedIndex === -1) return;
    const item = JSON.parse(itemList.options[itemList.selectedIndex].value);
    const dateVal = document.getElementById("dateInput").value;
    if (!dateVal) return;

    const fechaInicial = new Date(dateVal);
    let fechaVencimiento = new Date(fechaInicial);
    let fechaL = null;
    let isSpecial24h = false;

    // Lógica para Descongelamiento o Marinado inicial
    if (item.descongelamiento) {
        fechaVencimiento.setHours(fechaVencimiento.getHours() + item.descongelamiento);
        fechaL = new Date(fechaVencimiento);
    } else if (item.Marinado) {
        fechaVencimiento.setHours(fechaVencimiento.getHours() + item.Marinado);
        fechaL = new Date(fechaVencimiento);
    }

    // --- CÁLCULO DE VIDA (MESES O HORAS) ---
    if (typeof item.vida === "string" && item.vida.includes("M")) {
        // Extrae el número de meses (ej: "3M" -> 3)
        const meses = parseInt(item.vida);
        fechaVencimiento.setMonth(fechaVencimiento.getMonth() + meses);
    } else {
        // Suma horas normal
        fechaVencimiento.setHours(fechaVencimiento.getHours() + item.vida);
    }

    // --- REGLA ESPECIAL 24:00 ---
    if (fechaVencimiento.getHours() < 12) {
        fechaVencimiento.setDate(fechaVencimiento.getDate() - 1);
        isSpecial24h = true;
    }

    document.getElementById("result").textContent = `Vencimiento: ${formatDateOnly(fechaVencimiento)} - ${isSpecial24h ? "24:00" : formatHourOnly(fechaVencimiento)}`;
    renderSticker(item.name, fechaInicial, fechaL, fechaVencimiento, isSpecial24h);
}

function renderSticker(nombre, fechaP, fechaL, fechaV, isSpecial24h) {
    const dias = ["DOMINGO", "LUNES", "MARTES", "MIÉRCOLES", "JUEVES", "VIERNES", "SÁBADO"];
    const colores = ["black", "navy", "yellow", "red", "#804000", "green", "#FF8675"];
    const diaIdx = fechaP.getDay();
    const header = document.getElementById("stickerHeader");
    
    header.textContent = dias[diaIdx];
    header.style.backgroundColor = colores[diaIdx];
    header.style.color = (diaIdx === 2) ? "black" : "white";

    document.getElementById("pColumn").innerHTML = `P<br>${formatDateOnly(fechaP)}<br>H:<br>${formatHourOnly(fechaP)}`;
    document.getElementById("lColumn").innerHTML = fechaL ? `L<br>${formatDateOnly(fechaL)}<br>H:<br>${formatHourOnly(fechaL)}` : `L<br>--/--<br>H:<br>--:--`;
    
    const horaV = isSpecial24h ? "24:00" : formatHourOnly(fechaV);
    document.getElementById("vColumn").innerHTML = `V<br>${formatDateOnly(fechaV)}<br>H:<br>${horaV}`;

    document.getElementById("stickerProducto").textContent = nombre.split("-")[0].trim();
    document.getElementById("sticker").style.display = "block";
}

function formatDateOnly(date) {
    return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}`;
}

function formatHourOnly(date) {
    return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
}

function updateDayColor() {
    const dateValue = document.getElementById("dateInput").value;
    const dayColorBox = document.getElementById("dayColor");
    if (!dateValue) return;
    const dayColors = { 0: "black", 1: "navy", 2: "yellow", 3: "red", 4: "#804000", 5: "green", 6: "#FF8675" };
    dayColorBox.style.backgroundColor = dayColors[new Date(dateValue).getDay()];
}