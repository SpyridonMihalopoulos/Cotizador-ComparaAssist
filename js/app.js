class Formulario {
	
	constructor( d = '', fS = '', fR = '' ) {
		this.destino = d;
		this.fechaSalida = fS;
		this.fechaRegreso = fR;
	}

	set destino(des) {
		this._destino = des;
	}

	get destino() {
		return this._destino;
	}
	
	set fechaSalida(fSalida) {
		this._fechaSalida = fSalida;
	}

	get fechaSalida() {
		return this._fechaSalida;
	}

	set fechaRegreso(fRegreso) {
		this._fechaRegreso = fRegreso;
	}

	get fechaRegreso() {
		return this._fechaRegreso;
	}

}


class TAS {

	ideal(dias){

		if(dias > 0 && dias <= 20){
			return dias * 4.13;
		}

		else if (dias >= 21 && dias <= 35) {
			return dias * 3.30;
		}

		else if (dias >= 36 && dias <= 120) {
			return dias * 2.48;
		}

		else if (dias >= 121 && dias <= 365) {
			return dias * 2.06;
		}
	}

	gold(dias) {

		if(dias > 0 && dias <= 20){
			return dias * 6.19;
		}

		else if (dias >= 21 && dias <= 35) {
			return dias * 4.95;
		}

		else if (dias >= 36 && dias <= 120) {
			return dias * 3.71;
		}

		else if (dias >= 121 && dias <= 365) {
			return dias * 2.28;
		}
	}
}


class AssistNet {

	basic(dias){

		if(dias>0 && dias <= 20){
			return dias * 1.7;
		}

		else if ( dias >= 21 && dias <= 35 ) {
			return dias * 1.6;
		}

		else if ( dias >= 36 && dias <= 89 ) {
			return dias * 1.15;
		}

		else if ( dias >= 90 && dias <= 120 ) {
			return dias * 0.8;
		}

		else if ( dias >= 121 && dias <= 365 ) {
			return dias * 0.7;
		}
	
	}

	classic(dias) {

		if(dias>0 && dias <= 15){
			return dias * 2.3;
		}

		if(dias> 16 && dias <= 20){
			return dias * 2.2;
		}

		else if ( dias >= 21 && dias <= 35 ) {
			return dias * 1.9;
		}

		else if ( dias >= 36 && dias <= 89 ) {
			return dias * 1.4;
		}

		else if ( dias >= 90 && dias <= 120 ) {
			return dias * 0.9;
		}

		else if ( dias >= 121 && dias <= 365 ) {
			return dias * 0.8;
		}
	
	} 

	standard(dias) {

		if(dias>0 && dias <= 15){
			return dias * 2.7;
		}

		if(dias> 16 && dias <= 20){
			return dias * 2.5;
		}

		else if ( dias >= 21 && dias <= 35 ) {
			return dias * 2.2;
		}

		else if ( dias >= 36 && dias <= 89 ) {
			return dias * 1.55;
		}

		else if ( dias >= 90 && dias <= 120 ) {
			return dias * 1;
		}

		else if ( dias >= 121 && dias <= 349 ) {
			return dias * 0.9;
		}

		else if ( dias >= 350 && dias <= 365 ) {
			return dias * 0.84;
		}
	
	}

}


class Interwelt {

	//VERGA MMGVO SI ERES NECIO CON LOS PRECIOS
	//
	
	ciclo(dias, diferencia, base, sumador) {

		var i;

		dias = dias - diferencia; 

		for(i=0; i < dias; i++) {

			base += sumador;

		} 

		return base;
	}

	turista_17(dias){
	
		var precio = 0;

		if (dias > 90) return null;
		
		else if (dias > 0 && dias <= 5 ) {
			return 10.46
		}

		else if (dias >= 6 && dias <= 9) {

			precio = this.ciclo(dias, 5 , 10.46,1.41)+1;

			return parseInt(precio);
		}

		else if (dias >= 10 && dias <= 15) {

			precio = this.ciclo(dias,10, 21.68, 1.41)+1;
			return parseInt(precio);
		}

		else if (dias >= 16 && dias <= 21) {

			precio = this.ciclo(dias,16,35.70, 1.41) + 1;
			return parseInt(precio);
		}


		else if (dias >= 22 && dias <= 29) {

			precio = this.ciclo(dias,22 ,45.05, 1.41) + 1;
			return parseInt(precio);
		}

		else if (dias >= 30 && dias <= 44) {

			precio = this.ciclo(dias, 30, 54.93, 1.41) + 1 ;
			return parseInt(precio);
		}

		else if (dias == 45) return 78;

		else if (dias >= 46 && dias <= 50) {

			precio = this.ciclo(dias, 46, 1.66, 93.16) + 1;
			return parseInt(precio); 
		}

		else if (dias >= 51 && dias <= 60) return 102;

		else if (dias == 61) return 102 ;
		
		else if (dias >= 62 && dias <= 66) {

			precio = this.ciclo(dias, 62, 104.22, 1.66) + 1;
			return parseInt(precio);
		}

		else if (dias >= 67 && dias <= 90) return 110;
	}
}


class Cotizador {

	constructor() {
		this.form = new Formulario();
		this.tas = new TAS();
		this.asn = new AssistNet();
		this.inter = new Interwelt();
	}

	getData() {

		this.form.destino = document.getElementById('lista-destinos').value,
		this.form.fechaSalida = document.getElementById('fecha-salida').value,
		this.form.fechaRegreso = document.getElementById('fecha-regreso').value;
		
	} 

	calcDias() {
	
		// Es necesario calcular los dias del viaje 

		var fecha1 = new Date(this.form.fechaSalida).getTime(),
		fecha2 = new Date(this.form.fechaRegreso).getTime(),
		diff = (fecha2 - fecha1) / (1000*60*60*24) + 1 ;

		return diff;
		//console.log(diff/(1000*60*60*24) + 1)
	}

	
	mostrarDatos() {

		var dias = document.getElementById('mostrar-dias');

		dias.innerHTML = `Cotizacion ${this.form.destino} por ${String(this.calcDias())} dias`;

	}


	cotizar() {

		this.getData();
		this.mostrarDatos(); 

		console.log(this.inter.turista_17(this.calcDias()).toFixed(2));
	}
}



var formBtn = document.getElementById('cotizarBtn');


formBtn.addEventListener('click', ()=>{

	const cotizador = new Cotizador();

	cotizador.cotizar();

});
