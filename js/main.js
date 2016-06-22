$(".card").toggleClass('hidden')


$(".item").click( function() {
	var sectionName = this.className.split(/\s+/)[1];
	$(".card").addClass('hidden')
	$('.purple').addClass('opaque')
	$("#"+sectionName).toggleClass('hidden')
}
)

$(".close").click( function() {
	var sectionName = this.className.split(/\s+/)[1];
	$(".card").addClass('hidden')
	$('.purple').toggleClass('opaque')
}
)


$("body").click( function() {
	var sectionName = this.className.split(/\s+/)[1];
	$(".card").addClass('hidden')
	$('.purple').toggleClass('opaque')
}
)

