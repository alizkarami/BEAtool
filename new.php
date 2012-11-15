<!doctype html>
 
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>jQuery UI Slider - Vertical slider</title>
    <link rel="stylesheet" href="http://code.jquery.com/ui/1.9.0/themes/base/jquery-ui.css" />
    <script src="http://code.jquery.com/jquery-1.8.2.js"></script>
    <script src="http://code.jquery.com/ui/1.9.0/jquery-ui.js"></script>
    <link rel="stylesheet" href="/resources/demos/style.css" />
    <script>
    $(function() {
        $( "#slider-vertical" ).slider({
            //orientation: "vertical",
            range: "min",
            min: 0,
            max: 100,
            value: 60,
            slide: function( event, ui ) {
                $( "#amount" ).val( ui.value );
            }
        });
        $( "#amount" ).val( $( "#slider-vertical" ).slider( "value" ) );
    });
    </script>
</head>
<body>
 
<p>
    <label for="amount">Volume:</label>
    <input type="text" id="amount" style="border: 0; color: #f6931f; font-weight: bold;" />
</p>
 
<div id="slider-vertical" ></div>
 
 
</body>
</html>