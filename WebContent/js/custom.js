var x=[];

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
		}else if(thisNum=='7-1' || thisNum=='7-2'|| thisNum=='10-1'|| thisNum=='17-1'|| thisNum=='21-1'){
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
	
	$('#to1_bad').click(function(){
		$('#badEnding').hide();
		$('#1').show();
	})
	
	$('#to1_good').click(function(){
		$('#goodEnding').hide();
		$('#1').show();
	})
	
	$('#gotofeel').click(function(){
		$('#goodEnding').hide();
		$('#howdoifeel').show();
	})
	
	$('#btn_1').click(function(){
		pushX('1');
		checkLength();
	})
	$('#btn_2').click(function(){
		pushX('2');
		checkLength();
	})
	$('#btn_3').click(function(){
		pushX('3');
		checkLength();
	})
	$('#btn_4').click(function(){
		pushX('4');
		checkLength();
	})
	$('#btn_5').click(function(){
		pushX('5');
		checkLength();
	})
	$('#btn_6').click(function(){
		pushX('6');
		checkLength();
	})
});

function checkLength(){
	if(x.length==6){
		if(x[0]=='1' && x[1]=='2' && x[2]=='3' && x[3]=='4' && x[4]=='5'&& x[5]=='6'){
			$('#selection17').hide();
			$('#17').show();
			$('#show').empty();
			x=[];
		}else{
			$('#selection17').hide();
			$('#17-1').show();
			$('#show').empty();
			x=[];
		}
	}
}

function pushX(input){
	x.push(input);
	var kor;
	if(input=='1'){
		kor="철";
	}else if(input=='2'){
		kor="청동";
	}else if(input=='3'){
		kor="단풍나무";
	}else if(input=='4'){
		kor="상아와 흑단";
	}else if(input=='5'){
		kor="은";
	}else if(input=='6'){
		kor="금";
	}
	$('#show').append(kor);
}