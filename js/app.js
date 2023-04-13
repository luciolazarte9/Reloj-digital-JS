function obtenerfecha(){
    let fecha = document.querySelector('#fecha');
    let hora = document.querySelector('#hora'), ampm;
    let fechaActual = new Date();
    let pmam = document.getElementById ('pmam');
    
    const daysOfWeek = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    
    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    
    if (hora >= 12){
        hora = hora - 12;
        pmam = 'AM';
    }else {
        pmam = 'PM'
    }
    if (hora == 0){
        horas == 12;
    }
    
    
    fecha.innerHTML = `${daysOfWeek[fechaActual.getDay()]}  ${fechaActual.getDate()} de ${months[fechaActual.getMonth()]}  del ${fechaActual.getFullYear()}`
    
    
    hora.innerHTML = `${fechaActual.getHours()}:${fechaActual.getMinutes()}:${fechaActual.getSeconds()} ${pmam}`;
    
    }
    
    
    setInterval(obtenerfecha)
    