function encontrarMayor() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  

  if (num1 > num2 ) {
    document.getElementById("resultado").innerHTML = "El número mayor es: " + num1;
  } else if (num2 > num1) {
    document.getElementById("resultado").innerHTML = "El número mayor es: " + num2;
  } 
}