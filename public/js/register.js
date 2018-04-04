/**
 * Create by Hg on 2017/12/19.
 */

$(function(){
    $('.signBtn').click(function(){
        if( $('input[name="password"]').val() != ''  && $('input[name="repwd"]').val() != '' && $('input[name="username"]').val() != '' ){
            $.ajax({
                url: '/api/user/register',
                type: 'post',
                data: {
                    username: $('input[name="username"]').val(),
                    password: $('input[name="password"]').val(),
                    repwd: $('input[name="repwd"]').val(),
                    userphone: $('input[name="phone"]').val()
                },
                dataType: 'json',
                success: function(rs){
                    $('.warning').html(rs.message);
                    if(rs.code == '200'){
                        alert('注册成功');
                        window.location.href = 'login';
                    }
                }
            });
        }else{
            alert('请填写完整信息！');
        }

    });

});