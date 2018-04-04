/**
 * Create by Hg on 2017/12/19.
 */

$(function(){
    $('.log-out').click(function(){
        $.ajax({
            url: '/api/user/logout',
            success: function(rs){
                if(rs.code == 200){
                    alert(rs.message)
                    window.location.href = 'login';
                }
            }
        })
    });

});