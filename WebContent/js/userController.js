$(function() {
	if(!sessionStorage.id) {
		location.href="/NewFront.jsp";
	} 
	 var id = sessionStorage.getItem('id');
	 $('#userid').append('<span id="userid_ex"> 님 플레이중입니다.</span>'+'<span id="userid_id">'+id+'</span>');

	
	 $('#logout').click(function() {
		 sessionStorage.clear();
		 location.href="/NewFront.jsp";
	 })
	 
})




//$(function() {
//	if(!sessionStorage.id) {
//		$('#firstView').show();
//		$('#story_wrapper').hide();
//		
//		$('#login_submit').click(function() {
//			var id = $('#user_id').val();
//			var pass = $('#user_pass').val();
//			
//			if(id == '') {
//				alert("ID를 입력해주세요.")
//				$('#user_id').focus();
//				return false;
//			} else if(pass =='') {
//				alert("비밀번호를 입력해주세요.")
//				$('#user_pass').focus();
//				return false;
//			} 
//			
//			$.ajax({
//				url : '/getUser?type=1',
//				method : 'GET',
//				dataType : 'JSON',
//				async : false,
//				success : function(res) {
//					if(res.result.id) {
//						$('user_id').val('');
//						$('user_pass').val('');
//						alert(res.result);
//						window.sessionStorage.setItem('id', res.result.id);
//						window.sessionStorage.setItem('pass', res.result.pass);
//						window.sessionStorage.setItem('bookmark', res.result.bookmark);
//						console.log("User "+id+" Logged-in.");
//						
//						$('#firstView').hide();
//						$('#story_wrapper').show();
//					} else {
//						console.log(res.result);
//						alert("로그인에 실패하였습니다.\n다시 시도해 주세요.")
//					}
//				}, error : function() {
//					alert("Fail");
//				}
//			})
//		}) 
//		
//	} else {
//		$('#firstView').hide();
//		$('#story_wrapper').show();
//	}
//})