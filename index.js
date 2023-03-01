

let seleccionUsuario = parseInt(
    prompt(
        "Seleccione el tipo de Paseo: \n 1. Paseo Basic \n 2. Paseo Full \n 3. Paseo Full HD \n 4. Salir"
));

switch(seleccionUsuario){
    case 1:
        alert("Selecciono Paseo Basic, que incluyen 45 minutos de ejercicio + hidratacion. Gs.50.000");
        break
    case 2:
        alert("Selecciono Paseo Full, que incluyen 45 minutos de ejercicio + hidratacion + Ducha. Gs.90.000");
        break
    case 3:
        alert("Selecciono Paseo Full HD, que incluyen 45 minutos de ejercicio + hidratacion + Ducha + Foto Playera. Gs.100.000");
        break
    case 4:
        alert("Hasta luego :)");
        break
    default:
        alert("No selecciono nada")
        break
}

