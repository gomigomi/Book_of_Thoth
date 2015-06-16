$(function() {
	$('.prebtn').click(function(){
		var thisNum=parseInt($(this).parents('div').attr('id'));
		var preNum=thisNum-1;
		var preid=preNum.toString();
		if(thisNum==1){
			alert('첫 페이지 입니다.');
		}else{
			$('#'+thisNum).hide();
			$('#'+preNum).show();
		}
	});
	$('.nextbtn').click(function(){
		var thisNum=parseInt($(this).parents('div').attr('id'));
		var nextNum=thisNum+1;
		var nextid=nextNum.toString();
		$('#'+thisNum).hide();
		if(nextid==23){
			$('#goodEnding').show();
		}else{
			$('#'+nextNum).show();
		}
	});
});