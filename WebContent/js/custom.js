$(function() {
	$('.prebtn').click(function(){
		var thisNum=parseInt($(this).parents('div').attr('id'));
		var preNum=thisNum-1;
		if(thisNum==1){
			alert('첫 페이지 입니다.');
		}else{
			$('#'+thisNum).hide();
			$('#'+preNum).show();
		}
	});
	$('.nextbtn').click(function(){
		var thisNum=$(this).parents('div').attr('id');
		var nextNum=parseInt(thisNum)+1;
		$('#'+thisNum).hide();
		if(thisNum==22){
			$('#goodEnding').show();
		}else if(thisNum==6){
			$('#selection7').show();
		}else if(thisNum==9){
			$('#selection10').show();
		}else if(thisNum==14){
			$('#selection15').show();
		}else if(thisNum==16){
			$('#selection17').show();
		}else if(thisNum==20){
			$('#selection21').show();
		}else if(thisNum=='15-1' || thisNum=='15-2'){
			$('#selection15').show();
		}else if(thisNum=='7-1' || thisNum=='7-2'|| thisNum=='10-1'|| thisNum=='21-1'){
			$('#badEnding').show();
		}else{
			$('#'+nextNum).show();
		}
	});
	
	$('#btn7').click(function(){
		$('#selection7').hide();
		$('#7').show();
	})	
	$('#btn7-1').click(function(){
		$('#selection7').hide();
		$('#7-1').show();
	})	
	$('#btn7-2').click(function(){
		$('#selection7').hide();
		$('#7-2').show();
	})	
	$('#btn10').click(function(){
		$('#selection10').hide();
		$('#10').show();
	})	
	$('#btn10-1').click(function(){
		$('#selection10').hide();
		$('#10-1').show();
	})	
	$('#btn15-1').click(function(){
		$('#selection15').hide();
		$('#15-1').show();
	})	
	$('#btn15-2').click(function(){
		$('#selection15').hide();
		$('#15-2').show();
	})	
	$('#btn15').click(function(){
		$('#selection15').hide();
		$('#15').show();
	})
	$('#btn17').click(function(){
		$('#selection17').hide();
		$('#17').show();
	})	
	$('#btn17-1').click(function(){
		$('#selection17').hide();
		$('#17-1').show();
	})	
	$('#btn21').click(function(){
		$('#selection21').hide();
		$('#21').show();
	})	
	$('#btn21-1').click(function(){
		$('#selection21').hide();
		$('#21-1').show();
	})
	
	$('#to1').click(function(){
		$('#badEnding').hide();
		$('#1').show();
	})
});