var Construcor = function() {
	this.cities = [
		nashville = {
			name: "Nashville",
			abbr: "TN",
			long: 36.17,
			lat: -86.78
		},
		ny = {
			name: "New York",
			abbr: "NY",
			long: 40.71,
			lat: -74.00
		},
		atlanta = {
			name: "Atlanta",
			abbr: "GA",
			long: 33.75,
			lat: -84.39
		},
		denver = {
			name: "Denver",
			abbr: "CO",
			long: 39.74,
			lat: -104.98
		},
		seattle = {
			name: "Seattle",
			abbr: "WA",
			long: 47.61,
			lat: -122.33
		},
		la = {
			name: "Los Angeles",
			abbr: "CA",
			long: 34.05,
			lat: -188.724
		},
		memphis = {
			name: "Memphis",
			abbr: "TN",
			long: 35.15,
			lat: -90.05
		}
	];
	this.utmost = function(utmost) {
		let  lat = [], long = [];

		this.cities.map(function(item, index) {
		long.push({coor:item.long, name:item.name})
		lat.push({coor:item.lat, name:item.name})

		});

		let latMax = lat.reduce(function(item1, item2){
         if(item1.coor > item2.coor){
         	return item1;
         }
         else{
         	return item2;
         }
		}, )

 		let latMin = lat.reduce(function(item1, item2){
         if(item1.coor > item2.coor){
         	return item2;
         }
         else{
         	return item1;
         }
		}, )	

		let longMax = lat.reduce(function(item1, item2){
         if(item1.coor > item2.coor){
         	return item1;
         }
         else{
         	return item2;
         }
		}, )

		let longMin = lat.reduce(function(item1, item2){
         if(item1.coor > item2.coor){
         	return item2;
         }
         else{
         	return item1;
         }
		},)	

		
		if (utmost == "northernmost"){
			return latMax.name;
		}
		else if(utmost == "southernmost"){
			return latMin.name;
		}

		if (utmost == "easternmost"){
			return longMax.name;
		}
		else if(utmost == "westernmost"){
			return longMin.name;
		}
	}
	this.nearest = function(lng,ltd) {
		let cities = this.cities;
		let index = 0;
		let min = Math.sqrt(Math.pow(lng-cities[0].long,2) + Math.pow(ltd-cities[0].lat,2));
			for(let i = 1, length = cities.length; i < length; i++){
				if(min > Math.sqrt(Math.pow(lng-cities[i].long,2) + Math.pow(ltd-cities[i].lat,2))){
					index = i;
					min = Math.sqrt(Math.pow(lng-cities[i].long,2) + Math.pow(ltd-cities[i].lat,2));
				}
			}
			return cities[index].name;
	
	}

	this.abbr = function() {
	let abbreviations = this.cities;
	let arrAbbr = [];
	abbreviations.map(function(item){
		arrAbbr.push(item.abbr);
	})
	let sortedArrAbbr = arrAbbr.filter(function(item,i){
		return arrAbbr.indexOf(item) == i;
	})
	return sortedArrAbbr.join(" ");
	 }
}
var Map = new Construcor();
Map.utmost("westernmost");
Map.nearest(35,-70);
Map.abbr();