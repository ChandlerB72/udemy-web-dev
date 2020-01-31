//Click on Task to Strike Through
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Delete tasks by clicking X
$("ul").on("click", "span", function(event){
	event.stopPropagation();
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
});

//Submit a new ToDo
$("input[type='text']").on("keypress", function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		$("ul").append("<li><span><i class='fas fa-trash'></i> </span>" + todoText + "</li>");
		$(this).val("");
	}
});

//Fade Add New Todo
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})