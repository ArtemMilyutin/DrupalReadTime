(function ($) {
  Drupal.behaviors.libraryExBehavior = {
    attach: function (context, settings) {
		
		
		content=document.getElementsByClassName("field__item")[1].innerText;
		//alert(content);
		words=content.split(/[ ,.?!;:-]/);
		//words=content.split(/[/\|,.!?;:( )]/);
		for(var i=0;i<words.length;i++)
		{
			if(words[i]=="")
			{
				words.splice(i,1);
			}
		}
		
		var new_h=document.createElement("h2");
		new_h.id="time";
		time=((words.length*60)/140);
		if(time>120)
		{
			new_h.textContent=" (Чтение займет больше "+parseInt(time/60)+" минут)";
		}
		if(time>60 && time<119)
		{
			new_h.textContent=" (Чтение займет больше 1 минуты)";
		}
		if(time<60)
		{
			new_h.textContent=" (Чтение займет меньше 1 минуты)";
		}
		divs1=document.getElementsByClassName('content')[3];
		//alert(divs1.innerText);
		divs1.appendChild(new_h);
				
		
		something();
	}
	
	
  };
})(jQuery);