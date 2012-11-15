<!doctype html>
 
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>jQuery UI Slider - Slider bound to select</title>
    <link rel="stylesheet" href="http://code.jquery.com/ui/1.9.1/themes/base/jquery-ui.css" />
    <script src="http://code.jquery.com/jquery-1.8.2.js"></script>
    <script src="http://code.jquery.com/ui/1.9.1/jquery-ui.js"></script>
    <link rel="stylesheet" href="/resources/demos/style.css" />
    <script>
		$(function() {
			   $("#slider").slider({
			//range: "min",
			//value: 1,
			//step: 1000,
			//min: 0,
			//max: 100,
			slide: function(event, ui) {
				$("input").val( ui.value);
			}
		});
		$("input").change(function () {
			var value = this.value;
			console.log(value);
			$("#slider").slider("value", parseInt(value));
		});
    });
    </script>
</head>
<body>
 

    <div id= "slider"></div>
    <input  id="input0">
    

 
 
</body>
</html>