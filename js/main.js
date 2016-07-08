$(".card").toggleClass('hidden')


$(".item").click( function() {
	var sectionName = this.className.split(/\s+/)[1];
	$(".card").toggleClass('hidden')
	$('.purple').toggleClass('opaque')
	$("#"+sectionName).toggleClass('hidden')
}
) 

$(".close").click( function() {
	var sectionName = this.className.split(/\s+/)[1];
	$(".card").addClass('hidden')
	$('.purple').toggleClass('opaque')
}
)


// $("body").click( function() {
// 	var sectionName = this.className.split(/\s+/)[1];
// 	$(".card").addClass('hidden')
// 	$('.purple').toggleClass('opaque')
// }
// )

