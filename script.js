//some change to file
var x0=300/2, y0=300/2;
var X=150, Y=150;
	//var numSide=[];


var allData;
//var allData={"longTermDisability":[[60,70,70,80,90],[10,30,40,50,60]],
var graphcolors = ['rgba(0,155,40,0.7','rgba(155,30,0,0.7'];
function createNormalizedArrayFromSection() {
	var outputarray = [];
	
	var allNormObj=[];
	var unNormObj;
			
			for(m in employerData.sections) {
			var normObj = [];
			for(k in employerData.sections[m].parameters) {
				
				unNormObj = employerData.sections[m].parameters[k];
				normObj.push (100*(unNormObj.current-unNormObj.min)/(unNormObj.max-unNormObj.min).toFixed(2));
				 
			}	
			allNormObj.push(normObj);
			//allNormObj[m].push(normObj);
			}	
		
	outputarray = allNormObj;
	return outputarray;
};



var employerData = {
	industry:"not set",
	employeeCount:0,
	zipcode:"not set",
	sections:{
		"longTermDisability":{
		label:"Long-Term Disability",
		id:"longTermDisability-sliders",
		graphid:"longTermDisability-graph",
		inputgrID:"longTermDisability-graph-input",
		//sections[key].parameters[0]
		//sections[key].parameters[1]
		
		
			parameters:[
				{label:"Benefit Amount 1",min:1000,max:50000,sign:"$",current:20000},
				{label:"Elimination Period 1",min:90,max:1825,sign:"days",current:250},
				{label:"Benefit Amount 1",min:500,max:5000,sign:"$",current:2500},
				{label:"Benefit duration 1",min:6,max:60,sign:"mo",current:24},
				{label:"MM duration 1",min:800,max:980,sign:"MM",current:950}
			]
		},
		"shortTermDisability":{
			label:"Short-Term Disability",
			id:"shortTermDisability-sliders",
			graphid:"shortTermDisability-graph",
			inputgrID:"shortTermDisability-graph-input",
			parameters:[
				{label:"Benefit Amount 2",min:1000,max:50000,sign:"$",current:40000},
				{label:"Elimination Period 2",min:90,max:1825,sign:"days",current:200},
				{label:"Benefit Amount 2",min:500,max:5000,sign:"$",current:2500},
				{label:"Benefit duration 2",min:6,max:60,sign:"mo",current:24}
			]
		},
		"dental":{
		label:"Dental",
		id:"dental-sliders",
		graphid:"dental-graph",
		inputgrID:"dental-graph-input",
			parameters:[
				{label:"Benefit Amount 3",min:1000,max:50000,sign:"$",current:10000},
				{label:"Elimination Period 3",min:90,max:1825,sign:"days",current:200},
				{label:"Benefit Amount 3",min:500,max:5000,sign:"$",current:2500}
				//{label:"Benefit duration 3",min:6,max:60,sign:"mo",current:24}
			]
		},
		"vision":{
		label:"Vision",
		id:"vision-sliders",
		graphid:"vision-graph",
		inputgrID:"vision-graph-input",
			parameters:[
				{label:"Benefit Amount 4",min:1000,max:50000,sign:"$",current:1000},
				{label:"Elimination Period 4",min:90,max:1825,sign:"days",current:200},
				{label:"Benefit Amount 4",min:500,max:5000,sign:"$",current:2500},
				{label:"Benefit duration 4",min:6,max:60,sign:"mo",current:24}
			]
		},
		"life":{
		label:"Life",
		id:"life-sliders",
		graphid:"life-graph",
		inputgrID:"life-graph-input",
			parameters:[
				{label:"Benefit Amount 5",min:1000,max:50000,sign:"$",current:40000},
				{label:"Elimination Period 5",min:90,max:1825,sign:"days",current:200},
				{label:"Benefit Amount 5",min:500,max:5000,sign:"$",current:2500},
				{label:"Benefit duration 5",min:6,max:60,sign:"mo",current:24}
			]
		},
		"wellness":{
		label:"Wellness",
		id:"wellness-sliders",
		graphid:"wellness-graph",
		inputgrID:"wellness-graph-input",
			parameters:[
				{label:"Benefit Amount 6",min:1000,max:50000,sign:"$",current:50000},
				{label:"Elimination Period 6",min:90,max:1825,sign:"days",current:200},
				{label:"Benefit Amount 6",min:500,max:5000,sign:"$",current:2500},
				{label:"Benefit duration 6",min:6,max:60,sign:"mo",current:24}
			]
		},
		"medical":{
		label:"Medical",
		id:"medical-sliders",
		graphid:"medical-graph",
		inputgrID:"medical-graph-input",
			parameters:[
				{label:"Benefit Amount 7",min:1000,max:50000,sign:"$",current:2000},
				{label:"Elimination Period 7",min:90,max:1825,sign:"days",current:260},
				{label:"Benefit Amount 7",min:500,max:5000,sign:"$",current:2500},
				{label:"Benefit duration 7",min:6,max:60,sign:"mo",current:24}
			]
		}
	},
	
		
	
	generateAccordionHTML:function(sectionKey) {
		
		var html01="";
		var counter = 0;
		var sign=["$","days","$","mo","MM"];
		var sliderid;
		var labelid;
		html01+='<h3 id="'+sectionKey+'"><a href="#">'+this.sections[sectionKey].label+'</a></h3><div style="font-size:14px;">';
		//console.log(this.sections[sectionKey].label);
		for(i_index in this.sections[sectionKey].parameters) {
		sliderid=sectionKey+"-slider-"+counter;
		labelid=sectionKey+"-label-"+counter;
		slideramount=sectionKey+"-slideramount-"+counter;
		sliderinputamount= sectionKey+"-sliderinputamount-"+counter;
		
		sliderclass="inner-accordion-slider";	
		slidersign=sign[counter];
		this.sections[sectionKey].parameters[i_index].sliderid=sliderid;
		this.sections[sectionKey].parameters[i_index].labelid=labelid;
		this.sections[sectionKey].parameters[i_index].slideramount=slideramount;
		this.sections[sectionKey].parameters[i_index].sliderinputamount=sliderinputamount;
		this.sections[sectionKey].parameters[i_index].slidersign=slidersign;
		
		html01+='<div id="'+sliderid+'" class='+'"'+sliderclass+'" data-valuespot="'+slideramount+'" data-sign="'+slidersign+'"data-sectionkey="'+sectionKey+'" data-parameter-index="'+i_index+'"></div><div id="'+labelid+'">'+this.sections[sectionKey].parameters[i_index].label+'</div><div>  Min: '+this.sections[sectionKey].parameters[i_index].min+' Max: '+this.sections[sectionKey].parameters[i_index].max+'</div><input id="'+slideramount+'" slider-id="'+sliderid+'" input-data-sectionkey="'+sectionKey+'" input-data-parameter-index="'+i_index+'"/><br/>';
																																					
		counter++;

		}
		html01+='</div>';
		return html01;
	},
	generateAllAccordionHTML:function() {
		var html01="";
		for(i in this.sections) {
			html01+=this.generateAccordionHTML(i);
		}
		//console.log(JSON.stringify(this.sections));
		return html01;
	},
	
	createSliders:function () {
	
	var thisObj;
	
		for(i in employerData.sections) {
		
			for(j in employerData.sections[i].parameters) {
			
				thisObj = employerData.sections[i].parameters[j];
				//console.log("Adam",thisObj.sliderid,thisObj.slideramount);
				//console.log(thisObj.sliderid);
				
				//var myID=thisObj.slideramount+"";
					
					$("#"+thisObj.sliderid+"").slider({
					
					range: "min",
					min: thisObj.min,
					max: thisObj.max,
					value:  thisObj.current,
					
					slide: function( event, ui ) {
					
														/*
														switch ($(this).attr('data-parameter-index'))
														{
														case '1':
															if (ui.value<365){
															$( "#"+$(this).attr('data-valuespot')).val( ui.value + " " + $(this).attr('data-sign'));
															}else{
															$( "#"+$(this).attr('data-valuespot')).val(  Math.floor(ui.value/365) + " Years" );
															}
														break;
														
														case '3':
															if (ui.value<12){
															$( "#"+$(this).attr('data-valuespot')).val( ui.value + " " + $(this).attr('data-sign'));
															}else{
															$( "#"+$(this).attr('data-valuespot')).val(  Math.floor(ui.value/12)+" Years");
															}
														break;
														default:
														$( "#"+$(this).attr('data-valuespot')).val($(this).attr('data-sign')+ " " + ui.value);
														}
															*/
					$( "#"+$(this).attr('data-valuespot')).val($(this).attr('data-sign')+ " " + ui.value);
					employerData.sections[$(this).attr('data-sectionkey')].parameters[$(this).attr('data-parameter-index')].current=ui.value;
					
																		//console.log ($(this).attr('data-sectionkey'),$(this).attr('data-parameter-index'));
																		//console.log($("input").change);
																		//console.log ($(this).attr('input-data-sectionkey'));
					createGraphfromSlider();
					//createGraphfromDatabase();
					}
						
					});
				
					$( "#"+thisObj.slideramount ).val( thisObj.sign + " " + $( "#"+thisObj.sliderid ).slider( "value" ) );
					
				
					
			
				}
	
		}
	}
	
};

			
function generateGraphAccordionHTML(sectionGraphKey) {
		
		var html02="";
		html02+='<h3 id="'+sectionGraphKey+'"><a href="#">'+this.employerData.sections[sectionGraphKey].label+'</a></h3><div> <canvas id="'+employerData.sections[sectionGraphKey].graphid+'" input-graph-id="'+employerData.sections[sectionGraphKey].inputgrID+'"  width="300" height="300"></canvas> </div>';
			
		return html02;
};

function generateAllGraphAccordionHTML() {
		var html02="";
		for(L in this.employerData.sections) {
			html02+=this.generateGraphAccordionHTML(L);
		}
		//console.log(html02);
		//console.log(JSON.stringify(this.employerData.sections));
		return html02;
};

function createGraphfromSlider() {
		var graphObj;
		count=0;
		for(i in employerData.sections) {
						
				graphObj = employerData.sections[i];
				allData = [createNormalizedArrayFromSection()[count]];
				//console.log(allData);
				draw(graphObj.graphid);
				
				count++;
				
		}
};

function createGraphfromInput() {
		var inputGraphObj;
		count=0;
		for(i in employerData.sections) {
														
		inputGraphObj = employerData.sections[i];
		allData = [createNormalizedArrayFromSection()[count]];
		//console.log(allData);
		draw(inputGraphObj.graphid);	
		count++;	
		}
};





$(function() {
		$( "#tabs-sec-1" ).tabs();
		
	});
	
	$(function() {
		$( "#dialog" ).dialog();
	});
	
	
	
	
function draw(graphid,graphcolor){
	if(!graphcolor) {
		//graphcolor='rgba(  255, 155, 0, 0.7)';
		graphcolor='rgba(  0, 205, 0, 0.7)';
		}
  var canvas = document.getElementById(graphid);
  if (canvas.getContext){
  
	var axSide = canvas.getContext('2d');
	var graph = canvas.getContext('2d');
	var person = canvas.getContext('2d');
	
	graph.clearRect ( 0 , 0 , 300 , 300 );
	
	var xoutput = [];
	var youtput = [];
	
	var xperson = [];
	var yperson = [];
	var userData=allData[0];
	for (l= 0; l < 5 ; l++){
	
	for (i = 0; i < userData.length; i++) {
		xoutput.push([x0+(X*((l+1)*0.20))*(Math.sin(Math.PI/(userData.length)+2*i*Math.PI/(userData.length)))]);
		youtput.push([y0+(Y*((l+1)*0.20))*(Math.cos(Math.PI/(userData.length)+2*i*Math.PI/(userData.length)))]);
		}
		
		//graph.fillStyle=graphcolors[INDEX]
		
		graph.beginPath();
	    graph.strokeStyle = 'rgba(0,0,0,1)';
		graph.lineWidth = 1;
		graph.moveTo(xoutput[l*userData.length],youtput[l*userData.length]);
	       for(j=1; j<i; j++){
        graph.lineTo(xoutput[l*userData.length+j],youtput[l*userData.length+j]);
		        }
				graph.closePath();
				graph.stroke();
				}
				graph.fillStyle = 'rgba(0,100,250,'+0.10+')';
				//graph.fillStyle = 'white';
				graph.fill();
				
				
				axSide.beginPath();
				
				graph.lineWidth = 0.5;
				for (a=1; a<=userData.length; a++){
					axSide.moveTo(x0,y0);
					axSide.lineTo(xoutput[l*i-a],youtput[l*i-a]);
				}
				graph.strokeStyle = 'rgba(0,0,0,'+0.5+')';
				 axSide.stroke();
				 
		
				for (ex=0; ex<allData.length; ex++){
				//for (ex=0; ex<allData[sectionGraphKey].length; ex++){
				
			var userData = allData[ex];
			//var userData=allData[sectionGraphKey][ex]
	for (i = 0; i < userData.length; i++) {
	//P= prompt("Insert value of each side between 0 to 100:");
	xperson.push([x0+(X*userData/100)*(Math.sin(Math.PI/(userData.length)+2*i*Math.PI/(userData.length)))]);
	yperson.push([y0+(Y*userData/100)*(Math.cos(Math.PI/(userData.length)+2*i*Math.PI/(userData.length)))]);
	}
      var coordinates = coordinatesFromArray(userData);
  
		var rndColor=Math.random();
		person.fillStyle = graphcolor;
		
		//person.fillStyle = 'rgba('+ Math.floor(100-100*rndColor) + ',' + Math.floor(200-200*rndColor)+ ',' + Math.floor(100-100*rndColor) + ', 0.6)';
		person.beginPath();
		
		person.strokeStyle = 'rgba(  0, 0, 0, 0.7)';
		
		//person.strokeStyle = 'rgb(' + Math.floor(100-100*rndColor) + ',' + Math.floor(250-250*rndColor) + ',' + Math.floor(50-50*rndColor)+')';
					  
		person.lineWidth = 1;
		person.moveTo(coordinates[0][0],coordinates[0][1]);
		//person.moveTo(xperson[0],yperson[0]);
		//for(k = 0; k < allData.length; k++) {
		
		
		for(j=1; j<i; j++){
		//graph.lineTo(xperson[j],yperson[j]);
		//graph.lineTo
		person.lineTo(coordinates[j][0],coordinates[j][1]);
				}
  				person.closePath();
				person.stroke();
				person.fill();
   
  }
  }
  }
  
  function coordinatesFromArray(userDataArray) {
	var outputArray = [];
	var numSides = userDataArray.length;
		for(i = 0; i < numSides; i++) {
		outputArray.push([x0+(X*userDataArray[i]/100)*(Math.sin(Math.PI/(numSides)+2*i*Math.PI/(numSides))),y0+(Y*userDataArray[i]/100)*(Math.cos(Math.PI/(numSides)+2*i*Math.PI/(numSides)))]);
		}
	return outputArray;
	}
function createGraphfromDatabase(compareObject) {
	var inputGraphDB;
	count=0;
	for(i in employerData.sections) {
		inputGraphDB = employerData.sections[i];
		allData = [createNormalizedArrayFromSection()[count],compareObject[i].parameters];
		draw(inputGraphDB.graphid);
		count++;
	}
};

$(document).ready(function(){

	$("#newAccordion").html(employerData.generateAllAccordionHTML());
	employerData.createSliders();
	
	$("#newAccordion").accordion();
	$( "#accordion" ).accordion();
	
	$("#graphAccordion").html(generateAllGraphAccordionHTML());
	createGraphfromSlider();
	$("#graphAccordion").accordion();
	
	
	//generateRandomQuery();
	//console.log(compareMaxObj);

	$("#generateGraphButton").button();
	$("#generateGraphButton").click(function() {
		allData = createNormalizedArrayFromSection();
		draw('insurance');
	});
	
	
	$("#comparetomaxbutton").click(function() {
		$.post('dbinterface.php',{compareto:"max"},function(data) {
			json = $.parseJSON(data);
				
			var compareMaxObj = {};
			
			var parameters=[];
			var normParameters=[];
			var newkey= json[0].sectionKey;
			var newvalue;
			var id;
			
			
			for(i in json) {
				
				id = {toString: function(){ return newkey; }};
				//newvalue=json[i].value;
				if ( json[i].sectionKey == newkey){
				newvalue=json[i].value;
				parameters.push({"current":newvalue});
				
				} 
				
				else{
				for (j in parameters){
				normParameters.push(100*(parameters[j].current-$("#"+id+'-slider-'+j).slider("option","min"))/($("#"+id+'-slider-'+j).slider("option","max")-$("#"+id+'-slider-'+j).slider("option","min")));
				}
				compareMaxObj[id] = {"parameters":normParameters};
				
				parameters=[];
				normParameters=[];
				newvalue=json[i].value;
				parameters.push({"current":newvalue});
				
				}
				newkey=json[i].sectionKey;
			}
			
			for (j in parameters){
				normParameters.push(100*(parameters[j].current-$("#"+id+'-slider-'+j).slider("option","min"))/($("#"+id+'-slider-'+j).slider("option","max")-$("#"+id+'-slider-'+j).slider("option","min")));
			}
				
				compareMaxObj[id] = {"parameters":normParameters};
				createGraphfromDatabase(compareMaxObj);
			});
		
	});
	
	$("#comparetominbutton").click(function() {
		$.post('dbinterface.php',{compareto:"min"},function(data) {
			json = $.parseJSON(data);
				
			var compareMinObj = {};
			
			var parameters=[];
			var normParameters=[];
			var newkey= json[0].sectionKey;
			var newvalue;
			var id;
			
			
			for(i in json) {
				
				id = {toString: function(){ return newkey; }};
				//newvalue=json[i].value;
				if ( json[i].sectionKey == newkey){
				newvalue=json[i].value;
				parameters.push({"current":newvalue});
				
				} 
				
				else{
					
				
				for (j in parameters){
				normParameters.push(100*(parameters[j].current-$("#"+id+'-slider-'+j).slider("option","min"))/($("#"+id+'-slider-'+j).slider("option","max")-$("#"+id+'-slider-'+j).slider("option","min")));
				}
				compareMinObj[id] = {"parameters":normParameters};
				
				parameters=[];
				normParameters=[];
				newvalue=json[i].value;
				parameters.push({"current":newvalue});
				
				}
				newkey=json[i].sectionKey;
			}
			
			for (j in parameters){
				normParameters.push(100*(parameters[j].current-$("#"+id+'-slider-'+j).slider("option","min"))/($("#"+id+'-slider-'+j).slider("option","max")-$("#"+id+'-slider-'+j).slider("option","min")));
			}
				
				compareMinObj[id] = {"parameters":normParameters};
			
			createGraphfromDatabase(compareMinObj);
			 
		});
		
	});
	
	$("#comparetoavgbutton").click(function() {
		$.post('dbinterface.php',{compareto:"avg"},function(data) {
			json = $.parseJSON(data);
				
			var compareAvgObj = {};
			
			var parameters=[];
			var normParameters=[];
			var newkey= json[0].sectionKey;
			var newvalue;
			var id;
			
			
			for(i in json) {
				
				id = {toString: function(){ return newkey; }};
				//newvalue=json[i].value;
				if ( json[i].sectionKey == newkey){
				newvalue=json[i].value;
				parameters.push({"current":newvalue});
				
				} 
				
				else{
					
				
				for (j in parameters){
				normParameters.push(100*(parameters[j].current-$("#"+id+'-slider-'+j).slider("option","min"))/($("#"+id+'-slider-'+j).slider("option","max")-$("#"+id+'-slider-'+j).slider("option","min")));
				}
				compareAvgObj[id] = {"parameters":normParameters};
				
				parameters=[];
				normParameters=[];
				newvalue=json[i].value;
				parameters.push({"current":newvalue});
				
				}
				newkey=json[i].sectionKey;
			}
			
			for (j in parameters){
				normParameters.push(100*(parameters[j].current-$("#"+id+'-slider-'+j).slider("option","min"))/($("#"+id+'-slider-'+j).slider("option","max")-$("#"+id+'-slider-'+j).slider("option","min")));
			}
				
				compareAvgObj[id] = {"parameters":normParameters};
			
			createGraphfromDatabase(compareAvgObj);
			 
		});
		
	});
	
	
	draw('insurance');
	
		$("input").change(function () {
										
			var value = this.value.replace(/\D/g, '');
			//console.log($("#"+$(this).attr('slider-id')).slider("option", "min" ));
			if ( parseInt(value) >= $("#"+$(this).attr('slider-id')).slider("option", "min" ) &&  parseInt(value) <= $("#"+$(this).attr('slider-id')).slider("option", "max" )){
						
			function createObjectforInput() {
			var inputObj;
	
				for(i in employerData.sections) {
						
					for(j in employerData.sections[i].parameters) {
							
						inputObj = employerData.sections[i].parameters[j];
				}
				}
			};
						
						//set value of slider defined as $(this).attr('slider-id')
		employerData.sections[$(this).attr('input-data-sectionkey')].parameters[$(this).attr('input-data-parameter-index')].current=parseInt(value);
		$("#"+$(this).attr('slider-id')).slider(
			"value",
			parseInt(value)
		);
						
		createGraphfromInput();
		}
		else if( parseInt(value) < $("#"+$(this).attr('slider-id')).slider("option", "min" )){
			alert( "The value of "+parseInt(value)+" is less than min, enter at least "+$("#"+$(this).attr('slider-id')).slider("option", "min" )+" or greater!");
		}
		else{
			alert(  "The value of "+parseInt(value)+" is greater than max, enter less than "+$("#"+$(this).attr('slider-id')).slider("option", "max" )+" !");
		}
		});
	});
	
	function generateRandomQuery() {
		var query="";
		var competitorID = 0;
		
		for(i in employerData.sections) 	{
		var me=employerData.sections[i];
		for(j in me.parameters) 	{
			var inner=me.parameters[j];
			var unNormRandvalue=inner.min+Math.random()*(inner.max-inner.min);
			var normRandvalue= 100*(unNormRandvalue-inner.min)/(inner.max-inner.min);
			query+='("'+i+'","'+j+'","'+normRandvalue.toFixed(2)+'","'+competitorID+'"),';
		}
	}
	$("#query").html(query);
	
	
	}