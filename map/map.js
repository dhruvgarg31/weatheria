

// scale values and gradient values for each weather scale legend
let scales = {
	CLOUDS_STYLE: {
        scaleDetails: {linearScale: true, width: '300px', siText: '%', legendText: 'Clouds'},
        scaleVal: [{
            value: 0,
            color: 'rgba(147,147,155, 0)'
        }, {
            value: 10,
            color: 'rgba(151,147,155, 0)'
        }, {
            value: 20,
            color: 'rgba(144,148,155, 0.1)'
        }, {
            value: 30,
            color: 'rgba(140,149,155, 0.2)'
        }, {
            value: 40,
            color: 'rgba(121,150,155, 0.4)'
        }, {
            value: 50,
            color: 'rgba(124, 124, 124, 0.76)'
        }, {
            value: 60,
            color: 'rgba(124, 124, 124, 0.9)'
        }, {
            value: 70,
            color: 'rgba(128, 128, 128, 0.9)'
        }, {
            value: 80,
            color: 'rgba(132, 132, 132, 0.9)'
        }, {
            value: 90,
            color: 'rgba(114, 113, 113, 1)'
        }, {
            value: 95,
            color: 'rgba(110, 110, 110, 1)'
        }, {
            value: 100,
            color: 'rgba(83, 83, 83, 1)'
        }]
    },
	PRESSURE_STYLE: {
        scaleDetails: {linearScale: true, width: '300px', siText: 'hPa', legendText: 'Pressure'},
        scaleVal: [{
            value: 949.92,
            color: 'rgba(0,115,255,1)'
        }, {
            value: 960.00,
            color: 'rgba(0,170,255,1)'
        }, {
            value: 980.00,
            color: 'rgba(75,208,214,1)'
        }, {
            value: 1000.00,
            color: 'rgba(141,231,199,1)'
        }, {
            value: 1010.00,
            color: 'rgba(176,247,32,1)'
        }, {
            value: 1020.00,
            color: 'rgba(240,184,0,1)'
        }, {
            value: 1040.00,
            color: 'rgba(251,85,21,1)'
        }, {
            value: 1060.00,
            color: 'rgba(243,54,59,1)'
        }, {
            value: 1070.63,
            color: 'rgba(198,0,0,1)'
        }]
    },
	WINDSPEED_STYLE: {
        scaleDetails: {linearScale: false, width: '300px', siText: 'm/s', legendText: 'Wind Speed'},
        scaleVal: [{
            value: 0,
            color: 'rgba(255,255,0, 0)'
        }, {
            value: 2,
            color: 'rgba(170, 128, 177, 0.44)'
        }, {
            value: 3,
            color: 'rgba(170, 128, 177, 0.54)'
        }, {
            value: 6,
            color: 'rgba(176, 128, 177, 0.71)'
        }, {
            value: 12,
            color: 'rgba(170, 128, 177, 0.84)'
        }, {
            value: 25,
            color: 'rgba(164, 123, 170, 1)'
        }, {
            value: 50,
            color: 'rgba(116,76,172, 0.9)'
        }, {
            value: 100,
            color: 'rgba(158, 128, 177, 1)'
            // {
            //   value: 200,
            //   color: 'rgba(48, 6, 53, 0.82)'
            // }
        }]
    },
	TEMP_STYLE: {
        scaleDetails: {linearScale: true, width: '300px', siText: '°C', legendText: 'Temperature'},
        scaleVal: [{
            value: -40, //0%
            color: 'rgba(159, 85, 181, 1)'
        }, {
            value: -33, // 8.5%
            color: 'rgba(44, 106, 187, 1)'
        }, {
            value: -30, // 12.5%
            color: 'rgba(82, 139, 213, 1)'
        }, {
            value: -25, // 18.75%
            color: 'rgba(103, 163, 222, 1)'
        }, {
            value: -20, // 25%
            color: 'rgba(142, 202, 240, 1)'
        }, {
            value: -15, // 31.25%
            color: 'rgba(155, 213, 244, 1)'
        }, {
            value: -10, // 37.5%
            color: 'rgba(172, 225, 253, 1)'
        }, {
            value: -5, // 43.75%
            color: 'rgba(194, 234, 255, 1)'
        }, {
            value: 0, // 50%
            color: 'rgba(255, 255, 208, 1)'
        }, {
            value: 5, // 56.25%
            color: 'rgba(254, 248, 174, 1)'
        }, {
            value: 10, // 62.5%
            color: 'rgba(254, 232, 146, 1)'
        }, {
            value: 15, // 68.75%
            color: 'rgba(254, 226, 112, 1)'
        }, {
            value: 20, // 75%
            color: 'rgba(253, 212, 97, 1)'
        }, {
            value: 26, // 81.25% ~ 81.13
            color: 'rgba(244, 168, 94, 1)'
        }, {
            value: 30, // 87.5%
            color: 'rgba(244, 129, 89, 1)'
        }, {
            value: 35, // 93.75%
            color: 'rgba(244, 104, 89, 1)'
        }, {
            value: 40, // 100%
            color: 'rgba(244, 76, 73, 1)'
        }]
    },
	PRECIPITATION_STYLE: {
        scaleDetails: {linearScale: false, width: '300px', siText: 'mm', legendText: 'Precipitation'},
        scaleVal: [{
            value: 0,
            color: 'rgba(172,170,247, 0)'
        }, {
            value: 1,
            color: 'rgba(172,170,247, 0.4)'
        }, {
            value: 10,
            color: 'rgba(141,138,243, 0.9)'
        }, {
            value: 20,
            color: 'rgba(112,110,194, 1)'
        }, {
            value: 40,
            color: 'rgba(86,88,255, 1)'
        }, {
            value: 60,
            color: 'rgba(90,95,212,1)'
        },
        {
            value: 100,
            color: 'rgba(91, 93, 177, 1)'
        },
        {
            value: 200,
            color: 'rgba(62, 63, 133, 1)'
        }
        ]
    }
};


// setting gradient when layers switch
function setGradient(gradientDetails){
    gradient = gradientDetails.scaleVal;// gradient color list
    if(gradientDetails.scaleDetails.linearScale){ // checking if the scale is linear or not

        // caluclating max and min values of the scale as well as interval
        let minVal = Math.round(gradient[0].value);
        let maxVal = Math.round(gradient[gradient.length - 1].value);
        let section = Math.round((maxVal - minVal) / 4);
        let scale_dividers = document.getElementById("gradient-color-value");
        scale_dividers.innerHTML = " ";
        for (let i = 0; i <= 4; i++) {
            scale_dividers.innerHTML += '<div>' + (minVal + section * i) + '</div>'; // setting scale values 
        }


        let str = '';
        let len = gradient.length;
        let percent = (gradient[len - 1].value - gradient[0].value) / 100;
        let offset = 0 - gradient[0].value;

        for (let i = 0; i < gradient.length; i++) {
            str += gradient[i].color + ' ' + (gradient[i].value + offset) / percent + '%'; // making the gradient
            if (i < gradient.length - 1) str += ', ';
        }
        str = 'linear-gradient(to right, ' + str + ')';
        document.getElementById("gradient-color-scale").style.backgroundImage = str; // setting the gradient
    }
    else{ // scale is not linear
        let values = document.getElementById("gradient-color-value");
        values.innerHTML = " ";
        gradient.forEach(function (item) {
            values.innerHTML += '<div>' + item.value + '</div>'; // setting scale values
        });

        let s = 'linear-gradient(to left ';
        for (let i = gradient.length - 1; i >= 0; i--) {
            s += ', ' + gradient[i].color; // making the gradient
        }
        s += ')';
        document.getElementById("gradient-color-scale").style.background = s; // setting the gradient

    }
}

// updating the units of the scale
function setGradientScaleUnit(scale){
    let s = 1 ? scale.legendText + ', ' + scale.siText : '';
    document.getElementById("legend-unit").innerHTML = s;
}

// returns the unit of the scale
function getGradientScaleUnit(scale){
    let s = 1 ? scale.legendText + ', ' + scale.siText : ''; 
    return s;

}

// returns the gradient of the linear scale
function getLinearGradient(gradient){
    let str = '';
    let len = gradient.length;
    let percent = (gradient[len - 1].value - gradient[0].value) / 100;
    let offset = 0 - gradient[0].value;

    for (let i = 0; i < gradient.length; i++) {
        str += gradient[i].color + ' ' + (gradient[i].value + offset) / percent + '%';
        if (i < gradient.length - 1) str += ', ';
    }
    str = 'linear-gradient(to right, ' + str + ')';
    return str;

}

// returns the gradient of the non linear scale
function getNonLinearGradient(gradient){
    let s = 'linear-gradient(to left ';
    for (let i = gradient.length - 1; i >= 0; i--) {
        s += ', ' + gradient[i].color;
    }
    s += ')';
    return s;
}

// calling the functions to change the scale on layer change
function updateScale(scaleID,legend){
    legend.getContainer().style.display = "block";
    if(scaleID === "cl"){
        setGradient(scales.CLOUDS_STYLE);
        setGradientScaleUnit(scales.CLOUDS_STYLE.scaleDetails);
    }
    else if(scaleID === "pr"){
        setGradient(scales.PRECIPITATION_STYLE);
        setGradientScaleUnit(scales.PRECIPITATION_STYLE.scaleDetails);
    }
    else if(scaleID === "ps"){
        setGradient(scales.PRESSURE_STYLE);
        setGradientScaleUnit(scales.PRESSURE_STYLE.scaleDetails);
    }
    else if(scaleID === "wn"){
        setGradient(scales.WINDSPEED_STYLE);
        setGradientScaleUnit(scales.WINDSPEED_STYLE.scaleDetails);
    }
    else if(scaleID === "tp"){
        setGradient(scales.TEMP_STYLE);
        setGradientScaleUnit(scales.TEMP_STYLE.scaleDetails);
    }
    else legend.getContainer().style.display = "none";
}


// remove element from array
function remEle(arr, ele){
    for(let i = 0; i < arr.length; i++){ 
    
        if ( arr[i] === ele) {
            arr.splice(i, 1); 
        }
    }
    return arr;
}

// Entry point for making the map
function initMap(){

    let legendOrder = [];
	
    // base layer URLs
	let streetViewLayerURL = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
	let satelliteViewLayerURL = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic3VtaXQtc2FpbmkiLCJhIjoiY2tueWhqeG41MWd1NjJucHN6ZDBvdXhlbyJ9.7Qf_L1_f-hcQ0uPOACdN3Q';

    // Attribution for using the maps
	let opnMapAttribution = "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors";
	let boxMapAttribution = "&copy <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> &copy <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>";
	
    // URL for weather tiles
	let weatherLayerURL = "https://tile.openweathermap.org/map/{id}/{z}/{x}/{y}.png?appid=89830c36ae5b21f4de1a7ac42ad3e349";

	
	let layoutMap2 = L.tileLayer(satelliteViewLayerURL,{ id: "mapbox/satellite-streets-v11", attribution: boxMapAttribution });
	let layoutMap1 = L.tileLayer(streetViewLayerURL, { attribution: opnMapAttribution })
	let clouds = L.tileLayer(weatherLayerURL,{id: 'clouds', attribution: boxMapAttribution});
	let precipitation = L.tileLayer(weatherLayerURL,{id: 'precipitation_new', attribution: boxMapAttribution});
	let pressure = L.tileLayer(weatherLayerURL,{id: 'pressure_new', attribution: boxMapAttribution});
	let wind = L.tileLayer(weatherLayerURL,{id: 'wind_new', attribution: boxMapAttribution});
	let temperature = L.tileLayer(weatherLayerURL,{id: 'temp_new', attribution: boxMapAttribution});

	const map = L.map("mapid",{
		center: [0, 0],
		minZoom: 2,
		zoom: 3,
		layers: [layoutMap2,clouds]
	});

	let baseLayer = {
		"Satelite": [layoutMap2,"dh"],
		"Street": [layoutMap1,"gl"]
	}

	let overlayMaps = {
		"Clouds": [clouds,"cl"],
		"Precipitation": [precipitation,"pr"],
		"Pressure": [pressure,"ps"],
		"Wind": [wind,"wn"],
		"Temperature": [temperature,"tp"]
	};

	var layerCntrl = L.control.layers(baseLayer,overlayMaps,{ collapsed: false});
	
	layerCntrl.addTo(map);

	var legend = L.control({position: 'bottomright'});
	legend.onAdd = function (map) {

		let container = L.DomUtil.create('div', 'leaflet-control-color-scale');
	    let CScale = L.DomUtil.create('div', 'leaflet-control-color-scale-line',container);
        let weather_layer = scales.CLOUDS_STYLE;
		let gradients = [weather_layer.scaleVal];
		let _scaleDetails = weather_layer.scaleDetails;
        legendOrder.push("cl");
		
		CScale.innerHTML = '';

		gradients.forEach(function (gradient, index) {

            container.style.display = 'block';
            container.style.background = 'none';
            container.style.boxShadow = 'none';
            container.style.borderRadius = 'none';
            container.style.borderWidth = 0;
            container.style.marginRight = '10px';
            container.style.width = parseInt('300px') + 60 + 'px';
            container.style.height = 27 * (index + 1) + 'px';

            CScale.style.backgroundImage = 'none';
            CScale.style.position = 'relative';
            CScale.style.borderWidth = 0;
            CScale.style.margin = 0;

            // add a new continer
            let _scale_details = document.createElement('div');
            _scale_details.className = "scale-details";

            let _name = document.createElement('div');
            _name.id = "legend-unit";
            _name.innerHTML = getGradientScaleUnit(_scaleDetails); //1 ? _scaleDetails.legendText + ', ' + _scaleDetails.siText : '';
            _scale_details.appendChild(_name);
            let width = 260;

			if (_scaleDetails.linearScale) {
				// building a legend with a linear scale
				let scale_gradient = document.createElement('div');
				scale_gradient.className = "scale-gradient";
				scale_gradient.style.width = width + 'px';
				let minVal = Math.round(gradient[0].value);
				let maxVal = Math.round(gradient[gradient.length - 1].value);
				let section = Math.round((maxVal - minVal) / 4);
				let scale_dividers = document.createElement('div');
				scale_dividers.className = "scale-dividers";
                scale_dividers.id = "gradient-color-value";
				for (let i = 0; i <= 4; i++) {
				  scale_dividers.innerHTML += '<div>' + (minVal + section * i) + '</div>';
				}
				scale_gradient.appendChild(scale_dividers);
  
				let gradient_line = document.createElement('div');
				gradient_line.className = 'horizontal-gradient-line';
                gradient_line.id = "gradient-color-scale";
                gradient_line.style.backgroundImage = getLinearGradient(gradient);
				
                scale_gradient.appendChild(gradient_line);
				_scale_details.appendChild(scale_gradient);
				CScale.appendChild(_scale_details);
			} else {

				// легенда с нелинейной шкалой non-linear scale legend 
				let line = document.createElement("div");
				let values = document.createElement("div");
				line.style.width = width + "px";
				values.style.width = width + "px";
				line.className = 'horizontal-gradient-line';
                line.id = "gradient-color-scale";
  
				values.className = 'scale-dividers ';
                values.id = "gradient-color-value";
  
				
				line.style.background = getNonLinearGradient(gradient);
  
				gradient.forEach(function (item) {
				  values.innerHTML += '<div>' + item.value + '</div>';
				});
  
				let container = document.createElement("div");
				container.className = 'gradient-container';
				container.appendChild(values);
				container.appendChild(line);
  
				_scale_details.appendChild(container);
				CScale.appendChild(_scale_details);
			  }
		});
	    return container;
	};


	legend.addTo(map);

    document.getElementById("cl").addEventListener("click",function(){
        if(this.checked){
            legendOrder.push("cl");
            updateScale("cl",legend);
        }
        else{
            if(legendOrder[legendOrder.length-1] === "cl"){
                legendOrder = remEle(legendOrder,"cl");
                legend.getContainer().style.display = "none";
                updateScale(legendOrder[legendOrder.length-1],legend);
            }
            else legendOrder = remEle(legendOrder,"cl");
        }
    
    });

    document.getElementById("pr").addEventListener("click",function(){
        if(this.checked){
            legendOrder.push("pr");
            updateScale("pr",legend);
        }
        else{
            if(legendOrder[legendOrder.length-1] === "pr"){
                legendOrder = remEle(legendOrder,"pr");
                legend.getContainer().style.display = "none";
                updateScale(legendOrder[legendOrder.length-1],legend);
            }
            else legendOrder = remEle(legendOrder,"pr");
        }
    
    });
    document.getElementById("ps").addEventListener("click",function(){
        if(this.checked){
            legendOrder.push("ps");
            updateScale("ps",legend);
        }
        else{
            if(legendOrder[legendOrder.length-1] === "ps"){
                legendOrder = remEle(legendOrder,"ps");
                legend.getContainer().style.display = "none";
                updateScale(legendOrder[legendOrder.length-1],legend);
            }
            else legendOrder = remEle(legendOrder,"ps");
        }
    
    });
    document.getElementById("wn").addEventListener("click",function(){
        if(this.checked){
            legendOrder.push("wn");
            updateScale("wn",legend);
        }
        else{
            if(legendOrder[legendOrder.length-1] === "wn"){
                legendOrder = remEle(legendOrder,"wn");
                legend.getContainer().style.display = "none";
                updateScale(legendOrder[legendOrder.length-1],legend);
            }
            else legendOrder = remEle(legendOrder,"wn");
        }
    
    });
    document.getElementById("tp").addEventListener("click",function(){
        if(this.checked){
            legendOrder.push("tp");
            updateScale("tp",legend);
        }
        else{
            if(legendOrder[legendOrder.length-1] === "tp"){
                legendOrder = remEle(legendOrder,"tp");
                legend.getContainer().style.display = "none";
                updateScale(legendOrder[legendOrder.length-1],legend);
            }
            else legendOrder = remEle(legendOrder,"tp");
        }
    
    });
}



