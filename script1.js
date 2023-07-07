const dataBase = ['¿Qué hace un mudo bailando? Una mudanza.', '¿Qué le dice una impresora a otra? Esta hoja es tuya o es impresión mía.', '¿Qué hace un perro con un taladro? Ta-ladrando.', '¿Qué le dice un pingüino a una pingüina? ¡Como tú ningüina!', '¿Qué hace una abeja en el gimnasio? Zumba', '¿Y qué le dice una morsa a otra morsa? ¿Almorsamos o qué?'];

/* prueba de que esto funciona */
for (const item of dataBase) {
    console.log(item);
};
/* Comienzo del script */
const message = () => {
    let randomElement = dataBase[Math.floor(Math.random() * dataBase.length)];
    console.log('La frase random que salio es:')
    console.log(randomElement);
};
message();


