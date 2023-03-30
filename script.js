const correr = () => {

  //biblioteca de cifrado SJCL (Stanford Javascript Crypto Library)

  const btnEncriptar = document.getElementById("btn-encriptar");
  const btnDesencriptar = document.getElementById("btn-desencriptar");

  btnEncriptar.addEventListener("click", () => {
    const textoEncriptar = document.getElementById("texto-encriptar").value;
    const clave = "alditoguapo";
    const textoEncriptado = sjcl.encrypt(clave, textoEncriptar);
    document.getElementById("texto-encriptado").value = textoEncriptado;
  });

  btnDesencriptar.addEventListener("click", () => {
    const textoDesencriptado = document.getElementById("texto-desencriptado").value;
    const clave = "alditoguapo";
    const textoDesencriptado2 = sjcl.decrypt(clave, textoDesencriptado);
    document.getElementById("texto-desencriptado2").value = textoDesencriptado2;
  });

}
