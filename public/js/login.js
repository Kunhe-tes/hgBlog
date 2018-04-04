/**
 * Create by Hg on 2017/12/19.
 */

$(function(){
    $('.loginBtn').click(function(){
        if( $('input[name="password"]').val() != '' && $('input[name="username"]').val() != '' ){
            $.ajax({
                url: '/api/user/login',
                type: 'post',
                data: {
                    username: $('input[name="username"]').val(),
                    password: $('input[name="password"]').val()
                },
                dataType: 'json',
                success: function(rs){
                    alert(rs.message);
                    /*if(rs.code == '200'){
                        window.location.href = './index';???
                    }*/
                }
            });
        }else{
            alert('请填写完整信息！');
        }

    });

});