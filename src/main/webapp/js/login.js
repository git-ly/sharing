/**
 * Created by bolom on 2017/8/4.
 */

$(function () {
    $(".register-contain").hide();
    $(".register-btn").click(function () {
        $(".login-contain").slideUp(1000);
        $(".register-contain").slideDown(1000);
    });
    $(".bk-btn").click(function () {
        $(".register-contain").slideUp(1000);
        $(".login-contain").slideDown(1000);
    })

    $(".rgt-btn").click(function () {
        var acc = $(".u-acc").val(),
            pwd = $(".u-pwd").val(),
            repwd = $(".u-repwd").val(),
            name = $(".u-name").val();

        if (!acc || !pwd || !name || pwd != repwd) {
            alert("请确认数据信息");
            return;
        }

        $.ajax({
            url: host + "register",
            type:'POST',
            data: {
                acct : acc.trim(),
                pwd : pwd.trim(),
                name : name.trim()
            },
            success : function (data) {
                var result = JSON.parse(data)
                if (result.success){
                    $(".register-msg").addClass("text-success").text(result.msg);
                } else {
                    $(".register-msg").addClass("text-danger").text(result.msg);
                }
                console.info(data)
            },
            error: function (result) {
                console.info("Server Error");
            }
        })
    });
})
