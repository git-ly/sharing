$(function () {
    $(".add-dom span:eq(0)").unbind().bind("click", function () {
        $("#notice-contain").html(tip.modalTem);
        tip.fillMsgBox({
            title: '提示:添加新中心',
            text: '<div id="newCtr" class="input-group"><span class="input-group-addon">中心名称</span><input type="text" name="checkName" class="form-control"/> </div>',
            sureBtnName: '确定'

        });
        $("#noticeModal").modal();

        $("#sure-btn").unbind().bind("click", function () {
            $("#newCtr").bootstrapValidator('validate');
            $.ajax({
                url: host + 'organize/dpt/add',
                type: 'POST',
                data: {saveName: $("#newCtr [name='checkName']").val()},
                success: function (data) {
                    if (data && data.success == true){

                        tip.fillMsgBox({
                            title: '提示:添加新中心',
                            text: '中心添加成功',
                            sureBtnName: '确定'

                        });
                        $("#sure-btn").modal('hide');
                    }
                }
            })
        })



    })


    $("#newCtr").bootstrapValidator({
        message: 'This value not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            checkName: {
                group: 'col-lg-5',
                validators: {
                    notEmpty: {
                        message: '项目名不可为空'
                    },
                    remote: {
                        type: 'POST',
                        url: host + 'organize/dpt/checkExist',
                        message: '该中心已添加'
                    }
                }
            }
        }
    })

})