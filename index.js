function dynamicallyLoadScript() {    

    var script1 = document.createElement("script");  // create a script DOM node
    script1.src = "https://unpkg.com/leaflet@1.5.1/dist/leaflet.js";  // set its src to the provided URL
    // script1.integrity="sha512-GffPMF3RvMeYyc1LWMHtK8EbPv0iNZ8/oTtHPx9/cc2ILxQ+u905qIwdpULaqDkyBKgOaB57QTMg7ztg8Jm2Og==";
    script1.crossorigin= "";
    document.head.appendChild(script1); // add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)

    var script2 = document.createElement("script");
    script2.src = "https://unpkg.com/esri-leaflet@2.3.2/dist/esri-leaflet.js";
    script2.crossorigin= "";
    document.head.appendChild(script2);

    var script3 = document.createElement("script");
    script3.src = "https://unpkg.com/esri-leaflet-geocoder@2.3.2/dist/esri-leaflet-geocoder.js";  
    script3.crossorigin= "";
    document.head.appendChild(script3);
}

window.onload=dynamicallyLoadScript;



{/* <script src="https://unpkg.com/leaflet@1.5.1/dist/leaflet.js"
integrity="sha512-GffPMF3RvMeYyc1LWMHtK8EbPv0iNZ8/oTtHPx9/cc2ILxQ+u905qIwdpULaqDkyBKgOaB57QTMg7ztg8Jm2Og=="
crossorigin=""></script>


<script src="https://unpkg.com/esri-leaflet@2.3.2/dist/esri-leaflet.js"
integrity="sha512-6LVib9wGnqVKIClCduEwsCub7iauLXpwrd5njR2J507m3A2a4HXJDLMiSZzjcksag3UluIfuW1KzuWVI5n/cuQ=="
crossorigin=""></script>



<script src="https://unpkg.com/esri-leaflet-geocoder@2.3.2/dist/esri-leaflet-geocoder.js"
  integrity="sha512-8twnXcrOGP3WfMvjB0jS5pNigFuIWj4ALwWEgxhZ+mxvjF5/FBPVd5uAxqT8dd2kUmTVK9+yQJ4CmTmSg/sXAQ=="
  crossorigin=""></script> */}