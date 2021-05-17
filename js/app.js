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

		return base + 1;
	}

	turista_17(dias){
	
		var precio = 0;

		if (dias > 90) return 0;
		
		else if (dias > 0 && dias <= 5 ) {
			return 11;
		}

		else if (dias >= 6 && dias <= 9) {

			precio = this.ciclo(dias, 5 , 10.46,1.41);

			return parseInt(precio);
		}

		else if (dias >= 10 && dias <= 15) {

			precio = this.ciclo(dias,10, 21.68, 1.41);
			return parseInt(precio);
		}

		else if (dias >= 16 && dias <= 21) {

			precio = this.ciclo(dias,16,35.70, 1.41);
			return parseInt(precio);
		}


		else if (dias >= 22 && dias <= 29) {

			precio = this.ciclo(dias,22 ,45.05, 1.41);
			return parseInt(precio);
		}

		else if (dias >= 30 && dias <= 44) {

			precio = this.ciclo(dias, 30, 54.93, 1.41);
			return parseInt(precio);
		}

		else if (dias == 45) return 78;

		else if (dias >= 46 && dias <= 50) {

			precio = this.ciclo(dias, 46, 1.66, 93.16);
			return parseInt(precio); 
		}

		else if (dias >= 51 && dias <= 60) return 102;

		else if (dias == 61) return 102 ;
		
		else if (dias >= 62 && dias <= 66) {

			precio = this.ciclo(dias, 62, 104.22, 1.66);
			return parseInt(precio);
		}

		else if (dias >= 67 && dias <= 90) return 110;
	}


	internacional_27(dias){

		var precio = 0; 

		if(dias > 90) {
			return 0
		}

		else if (dias > 0 && dias <= 5) return 15;

		else if (dias >= 6 && dias <= 9) {

			precio = this.ciclo(dias, 6, 14.96, 1.87);
			return parseInt(precio);
		}

		else if ( dias >= 10 && dias <= 15 ){

			precio = this.ciclo(dias, 10, 26.35, 1.87);
			return parseInt(precio);
		}

		
		else if ( dias >= 16 && dias <= 21 ){

			precio = this.ciclo(dias, 16, 40.21, 1.87);
			return parseInt(precio);
		}

		else if (dias >= 22 && dias <= 27 ) {

			precio = this.ciclo(dias, 22, 50.49, 1.87);
			return parseInt(precio);
		}

		else if ( dias >= 28 && dias <= 30 ) return 62;
		
		else if (dias >= 31 && dias <= 44 ) {

			precio = this.ciclo(dias, 31, 63.58, 1.87);
			return parseInt(precio);
		}

		else if (dias == 45) return 92;

		else if ( dias >= 46 && dias <= 59 ) return 108;
		
		else if (dias >= 60 && dias <= 70 ) {

			precio = this.ciclo(dias, 60, 110, 1.85);
			return parseInt(precio);
		}

		else if ( dias >= 71 && dias <= 90 ) return 130;
	}
		

	universal_50(dias){

		var precio = 0; 

		if ( dias > 90 ) return 0; 

		else if (dias > 0 && dias <= 5) return 18;

		else if (dias >= 6 && dias <= 9 ) {
			precio = this.ciclo(dias, 6, 20.38, 2.62);
			return parseInt(precio);
		}

		else if (dias >= 10 && dias <= 15 ) {
			precio = this.ciclo(dias, 10, 29.92, 2.62);
			return parseInt(precio);
		}

		else if (dias >= 16 && dias <= 21 ) {
			precio = this.ciclo(dias, 16, 45.05, 2.62);
			return parseInt(precio);
		}

		else if (dias >= 22 && dias <= 27 ) {
			precio = this.ciclo(dias, 22, 59.84, 2.62);
			return parseInt(precio);
		}

		else if (dias >= 28 && dias <= 30) return 73;

		else if (dias >= 31 && dias <= 41 ) {
			precio = this.ciclo(dias, 31, 75.55, 2.62);
			return parseInt(precio);
		}

		else if (dias >= 42 && dias <= 45) return 105;

		else if (dias == 46) return 126;

		else if (dias >= 47 && dias <= 60) return 130;

		else if (dias >= 61 && dias <= 63 ) {
			precio = this.ciclo(dias, 61, 132.5, 3.08);
			return parseInt(precio);
		}

		else if (dias >= 64 && dias <= 90) return 141;
	}
}


class Vista {

	constructor(f = 0,c = 2){

		this.filas = f;
		this.columnas = c;
		this.contenedor = document.getElementById('salida-resultados');

	}

	mostrarCotizacion(plan,precio) {
	
		var cotizacion = document.createElement('li');

		this.contenedor.appendChild(cotizacion);
		//contenedor.appendChild(cotizacion);
		
		cotizacion.innerHTML ='Plan:' + '<span style = "color:var(--pink)">' + String(plan) + '</span>' +  
			"<br>" + 
			'<span style="color:var(--black-text); font-size:1.1rem">' + String(precio) + ' usd</span>';
	}

	limpiar() {

		this.contenedor.innerHTML = "";
	}
}


class Cotizador {

	constructor() {
		this.form = new Formulario();
		this.tas = new TAS();
		this.asn = new AssistNet();
		this.inter = new Interwelt();
		this.vista = new Vista();
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

	cotizar() {

		this.getData();

		if (isNaN(this.calcDias())) {

			alert('Inserta fechas');
		}

		else if (this.calcDias() <= 0) {
			alert('Fechas erroneas');
		}

		else if (this.calcDias() > 0) {
			var dias = this.calcDias();
			var info = document.getElementById('mostrar-dias');

			info.innerHTML = `Cotización ${this.form.destino} por `+ '<span style = "color:var(--pink)">'+`${String(dias)}`+'</span>'+` días`;

			this.vista.limpiar();

			switch(this.form.destino) {
		
				case 'Mundial':


					//ASN
					this.vista.mostrarCotizacion('Basic', this.asn.basic(dias).toFixed(2));
					this.vista.mostrarCotizacion('Classic', this.asn.classic(dias).toFixed(2));
					this.vista.mostrarCotizacion('Standard', this.asn.standard(dias).toFixed(2));
	
					//Interwelt
					
					this.vista.mostrarCotizacion('Turista 17', this.inter.turista_17(dias));
					this.vista.mostrarCotizacion('Internacional 27', this.inter.internacional_27(dias));
					this.vista.mostrarCotizacion('Universal 50', this.inter.universal_50(dias));

					//TAS

					this.vista.mostrarCotizacion('Ideal', this.tas.ideal(dias).toFixed(2));
					this.vista.mostrarCotizacion('Gold', this.tas.gold(dias).toFixed(2));

					break;

				case 'Europa':

					this.vista.mostrarCotizacion('Classic', this.asn.classic(dias).toFixed(2));
					this.vista.mostrarCotizacion('Standard', this.asn.standard(dias).toFixed(2));
					this.vista.mostrarCotizacion('Universal 50', this.inter.universal_50(dias));
					this.vista.mostrarCotizacion('Ideal', this.tas.ideal(dias).toFixed(2));

					break;

				case 'USA': 

					this.vista.mostrarCotizacion('Classic', this.asn.classic(dias).toFixed(2));
					this.vista.mostrarCotizacion('Universal 50', this.inter.universal_50(dias));
					this.vista.mostrarCotizacion('Ideal', this.tas.ideal(dias).toFixed(2));

					break;

				case 'Chile':

					this.vista.mostrarCotizacion('Classic', this.asn.classic(dias).toFixed(2));
					this.vista.mostrarCotizacion('Standard', this.asn.standard(dias).toFixed(2));
					this.vista.mostrarCotizacion('Ideal', this.tas.ideal(dias).toFixed(2));

					break;

				case 'Costa Rica':

					this.vista.mostrarCotizacion('Ideal', this.tas.ideal(dias).toFixed(2));
					this.vista.mostrarCotizacion('Gold', this.tas.gold(dias).toFixed(2));

					break;

				case 'Cirugía': 

					if(dias>90) {
						alert('Son más de 90 días');
					}
					this.vista.mostrarCotizacion('Turista 17', this.inter.turista_17(dias));
					this.vista.mostrarCotizacion('Internacional 27', this.inter.internacional_27(dias));
					this.vista.mostrarCotizacion('Universal 50', this.inter.universal_50(dias));

					break;

				default:

					break;
			}

		}

	}
}



var formBtn = document.getElementById('cotizarBtn');


formBtn.addEventListener('click', ()=>{

	const cotizador = new Cotizador();

	cotizador.cotizar();

});
