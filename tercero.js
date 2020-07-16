
    function empleado(nombre, cedula, edad, salario){
        this.nombre = nombre;
        this.cedula = cedula;
        this.edad = edad;
        this.salario = salario;
    }
    
    var empleados  = new Array();
    var retencion = 0.07;
    var salud = 0.125;
    var pension = 0.16;
    var arl = 0.035;

    for(i = 0; i < 1; i++){

        var nombre = prompt("Escriba el nombre del empleado "+(i+1));
        var cedula = parseInt(prompt("Escriba la cedula del empleado "+(i+1)));
        var edad = parseInt(prompt("Escriba la edad del empleado "+(i+1)));
        var salario = parseFloat(prompt("Escriba el salario del empleado "+(i+1)));
           
        empleados[i] = new empleado(nombre, cedula, edad, salario);

        if(empleados[i].salario > 879000){
           var salarioNeto = empleados[i].salario-(empleados[i].salario * retencion); 
        }

        salud = (empleados[i].salario*salud);
        pension = (empleados[i].salario*pension);
        arl = (empleados[i].salario*arl);
    }

    alert("El salario neto del empleado es: " +salarioNeto);
    alert("El valor de salud empleado es: " +salud);
    alert("El valor pension del empleado es: " +pension);
    alert("El valor de riesgos profesionales del empleado es: " +arl);
