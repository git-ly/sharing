/**
 * Created by bolom on 2017/8/4.
 */

$(function () {
    $(".register-contain").hide();
    $("[name='goSignUp']").click(function () {
        $(".login-contain").slideUp(1000);
        $(".register-contain").slideDown(1000);
    });
    $("[name='backLogin']").click(function () {
        $(".register-contain").slideUp(1000);
        $(".login-contain").slideDown(1000);
    })


    $("#register-contain").bootstrapValidator({
        message: 'This value not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            account: {
                group: '.col-lg-4',
                validators: {
                    notEmpty: {
                        message: '帐号不能为空'
                    },
                    stringLength: {
                        min: 5,
                        max: 28,
                        message: '只允许5-28个字符长度'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_\.]+$/,
                        message: '只能包含字母、数字、点和下划线'
                    },
                    remote: {
                        type: 'POST',
                        url: host + 'validAcct',
                        message: '帐号已占用'
                    }
                }
            },
            username: {
                group: '.col-lg-4',
                validators: {
                    notEmpty: {
                        message: '用户名不能为空'
                    },
                    stringLength: {
                        min: 2,
                        max: 5,
                        message: '帐号为2-5个汉字'
                    },
                    regexp: {
                        regexp: /^[\u4e00-\u9fa5]+$/,
                        message: '请使用真实中文名'
                    }
                }
            },
            password: {
                group: '.col-lg-4',
                validators: {
                    notEmpty: {
                        message: '密码不可为空'
                    },
                    identical: {
                        field: 'confirmPassword',
                        message: '两次输入密码不一致'
                    },
                    different: {
                        field: 'account',
                        message: '密码不可与帐号一致'
                    }
                }
            },
            confirmPassword: {
                group: '.col-lg-4',
                validators: {
                    notEmpty: {
                        message: "密码不可为空"
                    },
                    identical: {
                        field: 'password',
                        message: '两次输入密码不一致'
                    },
                    different: {
                        field: 'account',
                        message: '密码不可与帐号一致'
                    }
                }
            }
        }
    })

    var fillData = function () {
        return {
            acct: $("[name='account']").val().trim(),
            name:$("[name='username']").val().trim(),
            pwd: $("[name='password']").val().trim()
        }
    }

    $("[name='signUp']").click(function () {
        $("#register-contain").bootstrapValidator('validate');
        $.ajax({
            url: host + "register",
            type:'POST',
            data: fillData(),
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
    })

})
