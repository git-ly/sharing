// var pageCtrId = null;
var optCtr = '';
var ctrFn = {
    url: {
        dptCheck: host + 'organize/dpt/checkExist',
        proCheck: host + 'organize/pro/checkExist',
        dptAdd: host + 'organize/dpt/add',
        proAdd: host + 'organize/pro/add'
    },
    initMsgBox: function (init) {
        $("#alertModal .help-block").text('');
        $("#alertModal [name='checkName']").val('');
        if (init) {
            if (init.title)
                $("#alertModal .modal-title").html(init.title);
            if (init.label)
                $("#alertModal .label-name").html(init.label);
            if (init.text)
                $("#alertModal .modal-body").html(init.text);
            if (init.notice)
                $("#alertModal .help-block").html(init.notice);
        }
    },
    addOpt: function (options, optionCtr) {
        options.dom.unbind().bind("click", function () {
            if (optionCtr && !optCtr){
                alert("请先选择中心")
                return;
            }
            ctrFn.initMsgBox(options.init);
            $("#alertModal").modal();
            options.checkCtx.unbind().bind("blur", function () {
                if (!options.checkCtx.val()) {
                    ctrFn.initMsgBox({
                        notice: "数据为空"
                    })
                    return;
                }
                options.ajax.checkData.checkName = options.checkCtx.val();
                if (optionCtr) {
                    options.ajax.checkData.ctrId = optCtr;
                }
                $.ajax({
                    url: options.ajax.url,
                    type: 'POST',
                    async: false,
                    // data: {checkName: options.checkCtx.val()},
                    data: options.ajax.checkData,
                    success: options.ajax.success,
                    error: options.ajax.error
                })
            })
        })
    }
}


$(function () {
    $("#search").hide();
    $("#ctr-center .glyphicon-search,#pro-center .glyphicon-search,#worker-center .glyphicon-search").unbind().bind("click", function () {
        $("#search").show(500);
    })
    $(document).keydown(function (e) {
        if (e.keyCode == 27)
            $("#search").hide(500);
    });
    $.ajax({
        url: host + "organize/dpt/searchList",
        type: 'POST',
        data: {
            page: 1,
            size: 9
        },
        success: function (data) {
            var result = JSON.parse(data);
            $("#ctr-center .panel-body").html("");
            if (result.success) {
                for (var i = 0; i < result.target.length; i++) {
                    $("#ctr-center .panel-body").append('<div class="roadmap-item") ctrId="' + result.target[i].id + '" ctrName="' + result.target[i].dptName + '">\n' +
                        '            <span class="roadmap-ico"></span>\n' +
                        // '            <span class="glyphicon glyphicon-minus pull-right"></span>\n' +
                        '            <span class="roadmap-title">' + result.target[i].dptName + '</span>\n' +
                        '        </div>');
                }
                $("#ctr-center .roadmap-item").unbind().bind("click", function () {
                    if (!$(this).hasClass("active")) {
                        $(this).siblings(".roadmap-item").removeClass("active");
                        $(this).addClass("active");
                        findPrt($(this).attr("ctrId"));
                        optCtr = $(this).attr("ctrId");
                        $("#pro-center .process,#worker-center .process:eq(0)").text(">>" + $(this).attr("ctrName"));
                        $("#worker-center .process:eq(1)").text("");

                        $("#worker-center .panel-body").text("未选择项目");
                    }
                })
            } else {
                $("#ctr-center .panel-body").text("未查询到数据");
            }
        }
    })
})

function findPrt(id) {
    $(this).siblings(".roadmap-item").removeClass("active");
    $(this).addClass("active");
    $.ajax({
        url: host + "organize/proOfDpt/searchList",
        type: 'POST',
        data: {
            ctrId: id,
            page: 1,
            size: 9
        },
        success: function (data) {
            var result = JSON.parse(data);
            $("#pro-center .panel-body").html("");
            if (result.success) {
                for (var i = 0; i < result.target.length; i++) {
                    $("#pro-center .panel-body").append('<div class="roadmap-item" pCtrId="' + id + '" iProId="' + result.target[i].id + '" iProName="' + result.target[i].proName + '">\n' +
                        '            <span class="roadmap-ico"></span>\n' +
                        '            <span class="roadmap-title">' + result.target[i].proName + '</span>\n' +
                        '        </div>')
                }
                $("#pro-center .roadmap-item").unbind().bind("click", function () {
                    $(this).siblings(".roadmap-item").removeClass("active");
                    $(this).addClass("active");
                    findWorker($(this).attr("pCtrId"), $(this).attr("iProId"));
                    $("#worker-center .process:eq(1)").text(">>" + $(this).attr("iProName"))
                });
            } else {
                $("#pro-center .panel-body").text("未查询到数据");
            }
        }
    })
}

function findWorker(ctrId, proId) {
    $.ajax({
        url: host + "organize/proOfResume/searchList",
        type: 'POST',
        data: {
            ctrId: ctrId,
            proId: proId,
            page: 1,
            size: 9
        },
        success: function (data) {
            var result = JSON.parse(data);
            $("#worker-center .panel-body").html("");
            if (result.success) {
                for (var i = 0; i < result.target.length; i++) {
                    $("#worker-center .panel-body").append('<div class="roadmap-item" resumeId="' + result.target[i].id + '">\n' +
                        '            <span class="roadmap-ico"></span>\n' +
                        '            <span class="roadmap-title">' + result.target[i].owner + '</span>\n' +
                        '        </div>')
                }
            } else {
                $("#worker-center .panel-body").text("未查询到数据");
            }
        }
    })
}


$(function () {
    ctrFn.addOpt({
        dom: $("#ctr-center .panel-title .glyphicon-plus"),
        checkCtx: $("#alertModal [name='checkName']"),
        init: {
            title: '新增中心',
            label: '中心名称'
        },
        ajax: {
            url: ctrFn.url.dptCheck,
            // checkData: {checkName: $("#alertModal [name='checkName']").val()},
            checkData: {},
            success: function (data) {
                var result = JSON.parse(data);
                if (!result.valid)
                    return;
                $("#alertModal .help-block").text("可以使用");
                $("#alertModal .commit-btn").unbind().bind("click", function () {
                    $.ajax({
                        url: ctrFn.url.dptAdd,
                        type: 'POST',
                        data: {saveName: $("#alertModal [name='checkName']").val()},
                        success: function (result) {
                            var data = JSON.parse(result)
                            if (data && data.success == true) {
                                alert("添加成功");
                                $("#alertModal").modal('hide');
                            }
                        },
                        error: function () {
                            alert("添加失败");
                            $("#alertModal").modal('hide');
                        }
                    })
                })
            }
        }
    })

    //给中心添加新项目
    ctrFn.addOpt({
        dom: $("#pro-center .panel-title .glyphicon-plus"),
        checkCtx: $("#alertModal [name='checkName']"),
        init: {
            title: '新增项目',
            label: '项目名称'
        },
        ajax: {
            url: ctrFn.url.proCheck,
            checkData: {},
            success: function (data) {
                var result = JSON.parse(data);
                if (!result.valid)
                    return;
                $("#alertModal .help-block").text("可以使用");
                $("#alertModal .commit-btn").unbind().bind("click", function () {
                    $.ajax({
                        url: ctrFn.url.proAdd,
                        type: 'POST',
                        data: {saveName: $("#alertModal [name='checkName']").val()},
                        success: function (result) {
                            var data = JSON.parse(result)
                            if (data && data.success == true) {
                                alert("添加成功");
                                $("#alertModal").modal('hide');
                            }
                        },
                        error: function () {
                            alert("添加失败");
                            $("#alertModal").modal('hide');
                        }
                    })
                })
            }
        }
    }, true)


    // $(".add-dom span:eq(1)").unbind().bind("click", function () {
    //     $("#alertModal").modal();
    //     var used = false;
    //     $("[name='checkName']").change(function () {
    //         $("#alertModal .help-block").text('');
    //         $.ajax({
    //             url: host + 'organize/pro/checkExist',
    //             async: false,
    //             type: 'POST',
    //             data: {checkName: $("#alertModal [name='checkName']").val()},
    //             success: function (data) {
    //                 var result = JSON.parse(data);
    //                 $("#alertModal .help-block").text(result.msg);
    //                 if (result.success) {
    //                     $("#alertModal .commit-btn").unbind().bind("click", function () {
    //                         // $("#newCtr").bootstrapValidator('validate');
    //                         $.ajax({
    //                             url: host + 'organize/pro/add',
    //                             type: 'POST',
    //                             data: {saveName: $("#alertModal [name='checkName']").val()},
    //                             success: function (data) {
    //                                 if (data && data.success == true) {
    //
    //                                     setTimeout(function () {
    //                                         $("#alertModal").modal('hide');
    //                                     }, 1000)
    //                                 }
    //                             }
    //                         })
    //                     })
    //                 }
    //             }
    //         })
    //     })
    // })

})

