const pi = 3.14;
class Planeta{
	constructor(radio,nsatelites,habitable){
		this.radio=radio;
		this.nsatelites=nsatelites;
		this.habitable=habitable;
	};

	area(){
		return 4*pi*(Math.pow(this.radio,2));
	};
}

class Satelite{
	constructor(radio,tipo,planeta){
		this.radio=radio;
		this.tipo=tipo;
		this.planeta=planeta;
	};

	orbita(){
		return this.radio*4;
	};
}
export { Planeta, Satelite, pi};
