      function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(44.831716,20.37672),
          zoom: 17,
          mapTypeId: google.maps.MapTypeId.HYBRID
        };
        var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

		var marker = new google.maps.Marker({
		map:map,
		draggable:true,
		animation: google.maps.Animation.DROP,
		position: new google.maps.LatLng(44.831792, 20.376771)
		});		
		google.maps.event.addListener(marker, 'click', toggleBounce);	
      }
	  
	  function toggleBounce() {

			if (marker.getAnimation() != null) {
				marker.setAnimation(null);
			} else {
				marker.setAnimation(google.maps.Animation.BOUNCE);
			}
	  }