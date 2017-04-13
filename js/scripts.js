function Telefon(marka, cena, kolor, waga) {
	this.marka = marka;
	this.cena = cena;
	this.kolor = kolor;
	this.waga = waga;
}

function Marka(marka1, marka2, marka3) {
	this.marka1 = marka1;
	this.marka2 = marka2;
	this.marka3 = marka3;
}

Telefon.prototype.printInfo = function() {
	console.log("Marka telefonu to " + this.marka + ", kolor to " + this.kolor + ", cena to " + this.cena + ", a waga to " + this.waga + ".");
}

Marka.prototype.pickOne = function() {
	console.log("Który telefon wybierzesz?: " + this.marka1 + ", " + this.marka2 + "czy " + this.marka3 + "?");
}

var GalaxyS6 = new Telefon("Samsung", "1500zł", "czarny", "166g");
var iPhone6S = new Telefon("Apple", "2250zł", "srebrny", "167g");
var One = new Telefon("OnePlus", "1100zł", "biały", "168g");
var wybór_marki = new Marka("Samsung", "Apple ", "OnePlus");

GalaxyS6.printInfo();
iPhone6S.printInfo();
One.printInfo();
wybór_marki.pickOne();