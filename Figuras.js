const PI=3.1415;
var radio,base,opcion,resultado,altura,lado,area;
opcion=parseInt(prompt("Seleccione el area a calcular: 1.Cuadrado, 2.Triangulo, 3.Circulo"));
switch (opcion) {
    case 1:
        lado=parseInt(prompt("Ingrese el lado del cuadrado"))
        resultado=lado*lado
        alert("El área del cuadrado es:"+ resultado,"centimetros cuadrados");
        
        break;
case 2:
    altura=parseInt(prompt("Ingrese la altura del triangulo en centimetros"));
    base=parseInt(prompt("Ingrese la base del triangulo en centimetros"));
    resultado=(altura*base)/2;
    alert("El area del triángulo es: "+resultado,"centimetros cuadrados");

break;
case 3:
    radio=parseInt(prompt("Ingrese el radio del circulo"));
    resultado=PI*(radio*radio);
    alert("El area del circulo es: "+resultado,"centimetros cuadrados");
break;
    default:
        alert("La opcion seleccionada no es valida")
        break;
}
/*Codigo para encotrar areas de figuras*/