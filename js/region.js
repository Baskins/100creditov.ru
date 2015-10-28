$(document).ready(function () {	
        function hideallDropdowns() {
            $(".dropped .drop-menu-main-sub").hide();
            $(".dropped").removeClass('dropped');
            $(".dropped .drop-menu-main-sub .title").unbind("click");
        }
        function showDropdown(el) {			
			var el_li = $(el).parent().addClass('dropped');			
            el_li
                .find('.title')
                .click(function () {
                    hideallDropdowns();
                })
                .html($(el).html());

            el_li.find('.drop-menu-main-sub').show();
        }
		
        $(".drop-down").click(function(){
            showDropdown(this);
        });

        $(document).mouseup(function () {
            hideallDropdowns();
        });
		
		$(".drop-menu-main-sub li").click(function(){			
			$(".drop-down").text($(this).text());		
		});		 				
		
		$(".proverka-regiona").css("display","inline-block");
			$(".proverka-regiona button").click(function(){
				if($(this).attr('id')=="SelectRegionNo")
					showDropdown(".proverka-regiona");
				else
					$(".drop-down").text("Москва");
				$(".proverka-regiona").css("display","none");			
			});		
});

