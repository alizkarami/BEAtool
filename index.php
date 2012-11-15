<!DOCTYPE html>

<html>
<head>
<title>Eployee Benefit Analysis Tool</title>
		<link type="text/css" href="jqueryui/css/ui-lightness/jquery-ui-1.8.23.custom.css" rel="stylesheet" />
		<link type="text/css" href="style.css" rel="stylesheet" />
<script type = "text/javascript" src="http://code.jquery.com/jquery-1.8.1.min.js" ></script>
		<script type="text/javascript" src="jqueryui/js/jquery-ui-1.8.23.custom.min.js"></script>
</head>



<body>
<div id="query"></div>
<span id="generateGraphButton">Generate Graph</span>
<div class="HEAD">
<div style="color: #0606C2;
font-size: 1650%;
float: center;
position: absolute;
right: 30%;
top: 14%;
font-family: arial;
clear: both;">}</div>
<h1>
<div style="color:rgba(238, 103, 27, 1); ">EMPLOYEE</div> 
<div style="color:rgba(238, 103, 27, 1);">BENEFITS</div>
<div style="color:#6363E9;">ANALYSIS</div>
<div style="color:#0606C2; font-size: 170%;">TOOL</div>
</h1>
</div>




<div class="sec-1">

<div id="tabs-sec-1">
	<ul style="float: left; text-align: center;">
		<li><a href="#tabs-1">MY BUSINESS</a></li>
		<li><a href="#tabs-2">MY GOALS</a></li>
		<li><a href="#tabs-3">MY REPORT</a></li>
	</ul>
	<div id="tabs-1">
		<p>My Business Story Tool ("Tool") provided by.................Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer ut neque. Vivamus nisi metus, molestie vel, gravida in, condimentum sit amet, nunc. Nam a nibh.  </p>
	</div>
	<div id="tabs-2">
	<p style="position: absolute;  top: 33%; ">To be a very wealthy person......</P>
		</div>
	<div id="tabs-3">
		<p style="position: absolute;  top: 65%;">My Business Story Tool ("Tool") provided by.................
		Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer ut neque. Vivamus nisi metus, molestie vel, gravida in, condimentum sit amet, nunc. Nam a nibh.
		</p>
		</div>
</div>

</div>
<br>
<div class="select-tabs">

<ol id="selectable">
	<li class="ui-widget-content">BENEFIT ANALYSIS TOOL</li>
	<li class="ui-widget-content">LEARN ABOUT THE TOOL</li>
	<li class="ui-widget-content">Educational</li>
	<li class="ui-widget-content">Products</li>
	<li class="ui-widget-content">Using a Broker</li>
</ol>

</div>


<div class="sec-2">
<div class="hiddenInViewSource">

<form>
	<div id="p1">INDUSTRY</div><select id="selection">
		<option value="select1">Dental</option>
		<option value="select2">Vision</option>
		<option value="select3">Long-Term</option>
		<option value="select3">Short-Term</option>
	</select><br><br>
	<div id="p1"># OF EMPOLYEES</div><input id="No-Employee" ><br>
	<div id="p1">ZIP CODE</div><input id="ZIP-CODE" ><br>
</form><br><br>
<div id="newAccordion"></div>
</div>

</div><!-- End  -->
<div id="comparebuttons">
<button id="comparetomaxbutton" >Compare To Maximum</button>
<button id="comparetominbutton">Compare To Minimum</button>
<button id="comparetoavgbutton">Compare To Average</button>
</div>
<div class="report-analysis-sec">

<div id="graphAccordion"></div>

</div>

<div class="report-analysis">

<div id="accordion">
	<h3><a href="#">COMPETITIVE ANALYSIS</a></h3>
	<div>
	<div id="table1">
		<table cellpadding="10" cellspacing="0" >
			
			<thead>
			<tr>
			<th scope="column" ></th>
			<th scope="column" style="color:blue;">YOU</th>
			<th scope="column" style="color:blue;">COMPETITION</th>
			</tr>
			</thead>
			<tbody>
			<tr>
			<td>Preventive Deductible</td>
			<td>$100.00</td>
			<td>$25.00</td>
			</tr>
			<tr>
			<td>Other Deductible</td>
			<td>$110.00</td>
			<td>$50.00</td>
			</tr>
			<tr>
			<td>Coinsurance</td>
			<td>90%</td>
			<td>80%</td>
			</tr>
			<tr>
			<td>Befefit Maximum</td>
			<td>$2,000</td>
			<td>$1,500</td>
			</tr>
			<tr>
			<td>Orthodontia</td>
			<td>None</td>
			<td>Child Only</td>
			</tr>
			</tbody>
		</table>
		All jQuery UI plugins are designed to allow a developer to seamlessly integrate UI widgets into the look and feel of their site or application. 
		Each plugin is styled with CSS and contains two layers of style information: standard jQuery UI CSS Framework styles and plugin-specific styles. 
		
	</div>
		<canvas id="insurance" width="300" height="300"></canvas>
		<canvas id="insurance2" width="300" height="300"></canvas>
				
	</div>
	<h3><a href="#">LONG-TERM DISABILITY</a></h3>
	<div>
		<p>
		Sed non urna. Donec et ante. Phasellus eu ligula. Vestibulum sit amet
		purus. Vivamus hendrerit, dolor at aliquet laoreet, mauris turpis porttitor
		velit, faucibus interdum tellus libero ac justo. Vivamus non quam. In
		suscipit faucibus urna.
		</p>
	</div>
	
	
</div>

<script type = "text/javascript" src="script.js"></script>

</body>

</html>