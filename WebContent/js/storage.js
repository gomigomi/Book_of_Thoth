
var thisPage;

$(function(){
	getVisibleDiv();
	var id=window.sessionStorage.getItem('id');
	
	$(window).unload(function() {
		$.ajax({
			url : '/postUser?type=2',
			type : 'POST',
			data : {
				id: id,
				bookmark: thisPage
			},
			success : function(res) {
				alert('bye!');
			}
		});
	});
})

function getVisibleDiv(){
	if($('#1').is(':visible')){thisPage='1';}
	else if($('#2').is(':visible')){thisPage='2';}
	else if($('#3').is(':visible')){thisPage='3';}
	else if($('#4').is(':visible')){thisPage='4';}
	else if($('#5').is(':visible')){thisPage='5';}
	else if($('#6').is(':visible')){thisPage='6';}
	else if($('#selection7').is(':visible')){thisPage='selection7';}
	else if($('#7').is(':visible')){thisPage='7';}
	else if($('#7-1').is(':visible')){thisPage='7-1';}
	else if($('#7-2').is(':visible')){thisPage='7-2';}
	else if($('#8').is(':visible')){thisPage='8';}
	else if($('#9').is(':visible')){thisPage='9';}
	else if($('#selection10').is(':visible')){thisPage='selection10';}
	else if($('#10').is(':visible')){thisPage='10';}
	else if($('#10-1').is(':visible')){thisPage='10-1';}
	else if($('#11').is(':visible')){thisPage='11';}
	else if($('#12').is(':visible')){thisPage='12';}
	else if($('#13').is(':visible')){thisPage='13';}
	else if($('#14').is(':visible')){thisPage='14';}
	else if($('#selection15').is(':visible')){thisPage='selection15';}
	else if($('#15').is(':visible')){thisPage='15';}
	else if($('#15-1').is(':visible')){thisPage='15-1';}
	else if($('#15-2').is(':visible')){thisPage='15-2';}
	else if($('#16').is(':visible')){thisPage='16';}
	else if($('#selection17').is(':visible')){thisPage='selection17';}
	else if($('#17').is(':visible')){thisPage='17';}
	else if($('#17-1').is(':visible')){thisPage='17-1';}
	else if($('#18').is(':visible')){thisPage='18';}
	else if($('#19').is(':visible')){thisPage='19';}
	else if($('#20').is(':visible')){thisPage='20';}
	else if($('#selection21').is(':visible')){thisPage='selection21';}
	else if($('#21').is(':visible')){thisPage='21';}
	else if($('#21-1').is(':visible')){thisPage='21-1';}
	else if($('#22').is(':visible')){thisPage='22';}
}