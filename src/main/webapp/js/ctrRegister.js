var ctrFc = {
    initMsgBox: function (init) {
        $("#alertModal .help-block").text('');
        $("#alertModal [name='checkName']").val('');
        if (init){
            if (init.title)
                $("#alertModal .modal-title").html(init.title);
            if (init.text)
                $("#alertModal .modal-text").html(init.text);
            if (init.notice)
                $("#alertModal .help-block").html(init.notice);
        }
    }
}

$(function () {
    $(".add-dom span:eq(0)").unbind().bind("click", function () {
        $("#alertModal").modal();
        var used = false;
        $("[name='checkName']").unbind().bind("blur change",function () {
            $("#alertModal .help-block").text('');
            $.ajax({
                url: host + 'organize/dpt/checkExist',
                async: false,
                type: 'POST',
                data: {checkName: $("#alertModal [name='checkName']").val()},
                success: function (data) {
                    var result = JSON.parse(data);
                    $("#alertModal .help-block").text(result.msg);
                    if (result.success){
                        $("#alertModal .commit-btn").unbind().bind("click", function () {
                            // $("#newCtr").bootstrapValidator('validate');
                            $.ajax({
                                url: host + 'organize/dpt/add',
                                type: 'POST',
                                data: {saveName: $("#alertModal [name='checkName']").val()},
                                success: function (data) {
                                    if (data && data.success == true) {

                                        setTimeout(function () {
                                            $("#alertModal").modal('hide');
                                        },1000)
                                    }
                                }
                            })
                        })
                    }
                }
            })
        })
    })


    $(".add-dom span:eq(1)").unbind().bind("click", function () {
        $("#alertModal").modal();
        var used = false;
        $("[name='checkName']").change(function () {
            $("#alertModal .help-block").text('');
            $.ajax({
                url: host + 'organize/pro/checkExist',
                async: false,
                type: 'POST',
                data: {checkName: $("#alertModal [name='checkName']").val()},
                success: function (data) {
                    var result = JSON.parse(data);
                    $("#alertModal .help-block").text(result.msg);
                    if (result.success){
                        $("#alertModal .commit-btn").unbind().bind("click", function () {
                            // $("#newCtr").bootstrapValidator('validate');
                            $.ajax({
                                url: host + 'organize/pro/add',
                                type: 'POST',
                                data: {saveName: $("#alertModal [name='checkName']").val()},
                                success: function (data) {
                                    if (data && data.success == true) {

                                        setTimeout(function () {
                                            $("#alertModal").modal('hide');
                                        },1000)
                                    }
                                }
                            })
                        })
                    }
                }
            })
        })
    })

})