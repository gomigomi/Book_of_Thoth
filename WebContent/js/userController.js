var id = window.sessionStorage.getItem('id');

$(function() {
	if(!sessionStorage.id) {
		$('#firstView').show();
		$('#story_wrapper').hide();
		
		$('#login_submit').click(function() {
			var id = $('#user_id').val();
			var pass = $('#user_pass').val();
			
			if(id == '') {
				alert("ID를 입력해주세요.")
				$('#user_id').focus();
				return false;
			} else if(pass =='') {
				alert("비밀번호를 입력해주세요.")
				$('#user_pass').focus();
				return false;
			} 
			
			$.ajax({
				url : 'http://localhost:8080/getUser?type=2',
				method : 'GET',
				dataType : 'JSON',
				async : false,
				success : function(res) {
					if(res.result.id) {
						$('user_id').val('');
						$('user_pass').val('');
						
						window.sessionStorage.setItem('id', res.result.id);
						window.sessionStorage.setItem('psaa', res.result.pass);
						window.sessionStorage.setItem('bookmark', res.result.bookmark);
						console.log("User "+id+" Logged-in.");
						
						$('#firstView').hide();
						$('#story_wrapper').show();
					} else {
						alert("로그인에 실패하였습니다.\n다시 시도해 주세요.")
					}
				}
			})
		}) 
		
	} else {
		$('#firstView').hide();
		$('#story_wrapper').show();
	}
})