
function PlanetInfo() {}

/*
	Sets the mass of the sun. The sun's mass
	determines the duration of a planet's orbit.
*/
PlanetInfo.setSunMass = function( mass ) {
	this.sunMass = mass;
}

/* 
	Returns the current mass of the sun.
*/
PlanetInfo.getSunMass = function() {
	return this.sunMass;
}

/*
	Sets the speed at which all planets rotate
	on their axis. 
*/
PlanetInfo.setRotationSpeed = function( speed ) {
	this.rotation = speed;
}

/*
	Returns the current speed at which planets
	are rotating.
*/
PlanetInfo.getRotationSpeed = function() {
	return this.rotation;
}

PlanetInfo.setSunMass ( 1.989 * Math.pow(10, 25)); //not accurate, scaled down
PlanetInfo.setRotationSpeed( 0.05 );

/*
	All constants about planets such as orbital
	ecentricity, axial tilts, and information
	about each planet's orbit.
*/
const G                       =  6.67*Math.pow(10, -11);

		window["MERCURY_ECCENTRICITY"] = 0.2100;
	  window["VENUS_ECCENTRICITY"] = 0.0067;
	  window["EARTH_ECCENTRICITY"] = 0.0167;
	  window["MARS_ECCENTRICITY"] = 0.0934;
	  window["JUPITER_ECCENTRICITY"] = 0.0489;
	  window["SATURN_ECCENTRICITY"] = 0.0565;
	  window["URANUS_ECCENTRICITY"] = 0.0473;
	  window["NEPTUNE_ECCENTRICITY"] = 0.0113;
	  window["PLUTO_ECCENTRICITY"] = 0.2488;

	  window["MERCURY_TILT"] = 0.03;
	  window["VENUS_TILT"] = 177.36;
	  window["EARTH_TILT"] = 23.44;
	  window["MARS_TILT"] = 25.19;
	  window["JUPITER_TILT"] = 3.13;
	  window["SATURN_TILT"] = 26.73;
	  window["URANUS_TILT"] = 97.77;
	  window["NEPTUNE_TILT"] = 28.32;
	  window["PLUTO_TILT"] = 122.53;

 		window["SUN_RADIUS_REAL"] = 695800;
		window["MERCURY_RADIUS_REAL"] = 2439.7;
	  window["VENUS_RADIUS_REAL"] = 6051.8;
	  window["EARTH_RADIUS_REAL"] = 6371.0;
	  window["MARS_RADIUS_REAL"] = 3389.5;
	  window["JUPITER_RADIUS_REAL"] = "69,911",
	  window["SATURN_RADIUS_REAL"] = "58,232",
	  window["URANUS_RADIUS_REAL"] = "25,362",
	  window["NEPTUNE_RADIUS_REAL"] = "24,622",
	  window["PLUTO_RADIUS_REAL"] = 1185;


		window["DISTANCE_ORDER"] = 6;
		window["MERCURY_PERIHELION"] = 46.00;
	  window["VENUS_PERIHELION"] = 107.48;
	  window["EARTH_PERIHELION"] = 147.09;
	  window["MARS_PERIHELION"] = 206.62;
	  window["JUPITER_PERIHELION"] = 740.52;
	  window["SATURN_PERIHELION"] = 1352.55;
	  window["URANUS_PERIHELION"] = 2741.30;
	  window["NEPTUNE_PERIHELION"] = 4444.45;
	  window["PLUTO_PERIHELION"] = 4436.82;

		window["MERCURY_APHELION"] = 69.82;
	  window["VENUS_APHELION"] = 108.94;
	  window["EARTH_APHELION"] = 152.10;
	  window["MARS_APHELION"] = 249.23;
	  window["JUPITER_APHELION"] = 816.62;
	  window["SATURN_APHELION"] = 1514.50;
	  window["URANUS_APHELION"] = 3003.62;
	  window["NEPTUNE_APHELION"] = 4545.67;
	  window["PLUTO_APHELION"] = 7375.93;

		window["SUN_RADIUS"] = 75;
	  window["MERCURY_RADIUS"] = 5;
	  window["VENUS_RADIUS"] = 10;
	  window["EARTH_RADIUS"] = 10;
	  window["MARS_RADIUS"] = 5;
	  window["JUPITER_RADIUS"] = 20;
	  window["SATURN_RADIUS"] = 15;
	  window["URANUS_RADIUS"] = 15;
	  window["NEPTUNE_RADIUS"] = 17;
	  window["PLUTO_RADIUS"] = 5;

const DISTANCE_FACTOR    	  =  1 + (SUN_RADIUS - MERCURY_PERIHELION + 2 * MERCURY_RADIUS) / MERCURY_PERIHELION;

		window["MASS_ORDER"] = 24;
		window["MERCURY_MASS"] = 0.33;
	  window["VENUS_MASS"] = 4.87;
	  window["EARTH_MASS"] = 5.97;
	  window["MARS_MASS"] = 0.64;
	  window["JUPITER_MASS"] = 1898.30;
	  window["SATURN_MASS"] = 568.36;
	  window["URANUS_MASS"] = 86.81;
	  window["NEPTUNE_MASS"] = 102.42;
	  window["PLUTO_MASS"] = 0.0146;

		window["MERCURY_DAY"] = 4222;
	  window["VENUS_DAY"] = 2802;
	  window["EARTH_DAY"] = 24;
	  window["MARS_DAY"] = 24;
	  window["JUPITER_DAY"] = 9;
	  window["SATURN_DAY"] = 10;
	  window["URANUS_DAY"] = 17;
	  window["NEPTUNE_DAY"] = 16;
	  window["PLUTO_DAY"] = 153;

		window["MERCURY_YEAR"] = 88;
	  window["VENUS_YEAR"] = 225;
	  window["EARTH_YEAR"] = 365;
	  window["MARS_YEAR"] = 687;
	  window["JUPITER_YEAR"] = 4333;
	  window["SATURN_YEAR"] = "10,759",
	  window["URANUS_YEAR"] = "30,685", 
	  window["NEPTUNE_YEAR"] = "60,189",
	  window["PLUTO_YEAR"] = "90,560";















