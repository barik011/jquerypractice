$(document).ready(function () {
	$('#name').addClass(['a', 'b']);
  
	$('#name').html('<p class="b">Lorem Ipsum</p>');
  
	const name = $('#name');
  
	console.log(name, 'html instance');
  
	console.log(name.attr('class'), 'class attr');
  
	console.log($('#prop').val(), 'input val attr');
  
	setTimeout(() => {
	  console.log(
		$('#check').prop('checked', $('#prop').val() === 'on'),
		'prop check'
	  );
	}, 1000);
  
	$('#check').change(function (e) {
	  console.log(e.target.value, 'change');
	});
  
	$('#prop').change(function (e) {
	  console.log(e.target.value, 'keyup');
	});
  
	$('#prop').mouseenter(function (e) {
	  console.log(e, 'mouse enter');
	});
  });
  