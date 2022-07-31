$(document).ready(function() {
    $('select').change(function() {
     $('select option')[0].value=$('select option:selected').val();
     $('select option')[0].innerHTML=$('select option:selected').val();
     $("select").val($('select option:selected').val());
			
			console.log($('select option:selected').val());
    });
  });