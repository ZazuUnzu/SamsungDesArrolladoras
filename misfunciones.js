 
 // Aquí las funciones para los tres botones. Realizado por Arantxa Unzueta. //

  function MostrarValoracion() {
    var valor=document.getElementById("valoracion").value;
    alert ("Tu valoración ha sido de " +valor +" puntos." );
  }

function MostrarCuenta() {
    var pais=document.getElementById("pais").value; //Recoge el valor ES//
    var iban=document.getElementById("iban").value; //Recoge el IBAN//
    var entidad=document.getElementById("entidad").value; //Recoge los datos de la entidad//
    var sucursal=document.getElementById("sucursal").value; //Recoge los dígitos de la sucursal//
    var dc=document.getElementById("dc").value; //Recoge los dígitos de control//
    var cuenta=document.getElementById("cuenta").value; //Esta variable recoge el número de cuenta//
  alert ("Le informamos de que su cuenta bancaria es: " +pais+iban+"-"+entidad+"-"+sucursal+"-"+dc+"-"+cuenta );
  }

//Llegar a dar con esto con el nivel de JavaScript que tenemos ha sido un verdadero reto, pero aquí está//

function MostrarDiaSemana() {
  var fecha = document.getElementById("fecha").value; //Esta variable recupera la fecha del campo correspondiente//
  var d = new Date(fecha); //Con esta variable llamo a esa fecha para la función siguiente//
  var diaSemana = [d.getDay(fecha)]; //Utilizo la función getDay() para obtener el día de la semana de la fecha obtenida con la variable anterior, en un valor numérico del 1 al 7//
  var weekday = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"]; //Ahora necesito convertir ese número en un día de la semana. Para esto establezco un array con los siete días, empezando por el domingo, que sería el 0//
  alert ("La fecha seleccionada en el elemento de fecha es un "+weekday[diaSemana]+"." ); //Y por fin, llamo a ese array con el número obtenido en la variable diaSemana.//
}