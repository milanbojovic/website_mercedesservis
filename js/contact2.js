                $(function() {
			$('#one').ContentSlider({
		        width : '430px',
		        height : '200px',
		        speed : 1500,
		        easing : 'easeInOutQuart'
		        });
		function slideRight(){
			$('.cs_rightBtn').click();
		}
		function slideLeft(){
			$('.cs_leftBtn').click();
		}

		$(function(){
			cnt = 0;
			dir = 1;

			setInterval(function(){
			
				if(dir == 1){
					slideRight();
				}
				else{
					slideLeft();
				}
				
				cnt = cnt + 1; 
				
				if(cnt == 4){ 
					cnt = 0;
					dir = (dir + 1)%2;
				}
			} , 3000);
		});
                });
