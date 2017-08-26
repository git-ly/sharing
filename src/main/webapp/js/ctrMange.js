var ctrFn = {
    optCtr: '',
    url: {
        dptList: host + "organize/dpt/searchList",
        proList: host + "organize/proOfDpt/searchList",
        resumeList: host + "organize/proOfResume/searchList",
        dptCheck: host + 'organize/dpt/checkExist',
        proCheck: host + 'organize/pro/checkExist',
        dptAdd: host + 'organize/dpt/add',
        proAdd: host + 'organize/pro/add'
    },
    initMsgBox: function (init) {
        var $modal = init && init.modelId ? $("#" + init.modelId) : $("#alertModal");
        $modal.find(".help-block").text();
        $modal.find("[name='checkName']").val();
        if (init) {
            if (init.title)
                $modal.find(".modal-title").html(init.title);
            if (init.label)
                $modal.find(".label-name").html(init.label);
            if (init.text)
                $modal.find(".modal-body").html(init.text);
            if (init.notice)
                $modal.find(".help-block").html(init.notice);
        }
    },
    addOpt: function (options, optionCtr) {
        options.dom.unbind().bind("click", function () {
            if (optionCtr && !ctrFn.optCtr) {
                tip.tipBox({type: 'warn', text: "请先选择中心"});
                return;
            }
            ctrFn.initMsgBox(options.init);
            $("#alertModal").modal();
            options.checkCtx.unbind().bind("blur", function () {
                if (!options.checkCtx.val()) {
                    ctrFn.initMsgBox({
                        modelId: 'alertModal',
                        notice: "数据为空"
                    })
                    return;
                }
                options.ajax.checkData.checkName = options.checkCtx.val();
                if (optionCtr) {
                    options.ajax.checkData.ctrId = ctrFn.optCtr;
                }
                $.ajax({
                    url: options.ajax.url,
                    type: 'POST',
                    async: false,
                    // data: {checkName: options.checkCtx.val()},
                    data: options.ajax.checkData,
                    // success: options.ajax.success,
                    success: options.ajax.success ? options.ajax.success : function (data) {
                        var result = JSON.parse(data);
                        if (!result.valid)
                            return;
                        $("#alertModal .help-block").text("可以使用");
                        $("#alertModal .commit-btn").unbind().bind("click", function () {
                            $.ajax({
                                url: options.ajax.saveUrl,
                                type: 'POST',
                                data: {saveName: $("#alertModal [name='checkName']").val()},
                                success: function (result) {
                                    var data = JSON.parse(result)
                                    if (data && data.success == true) {
                                        tip.tipBox({text: options.checkCtx.val() + "添加成功"}, true);
                                        $("#alertModal").modal('hide');
                                    }
                                },
                                error: function () {
                                    tip.tipBox({type: 'warn', text: options.checkCtx.val() + "添加失败"}, true);
                                    $("#alertModal").modal('hide');
                                }
                            })
                        })
                    },
                    error: options.ajax.error ? options.ajax.error : function () {
                        tip.tipBox({
                            type: 'err',
                            text: '服务器故障'
                        })
                    }
                })
            })
        })
    },
    initSearchBox: function () {
        $("#search").hide();
        $("#ctr-center .glyphicon-search,#pro-center .glyphicon-search,#worker-center .glyphicon-search").unbind().bind("click", function () {
            $("#search").show(500);
        })
        $(document).keydown(function (e) {
            if (e.keyCode == 27)
                $("#search").hide(500);
        });
    },
    initCtrList: function () {
        $.ajax({
            url: ctrFn.url.dptList,
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
                            $(this).addClass("active").siblings(".roadmap-item").removeClass("active");
                            ctrFn.findPrt($(this).attr("ctrId"));
                            ctrFn.optCtr = $(this).attr("ctrId");
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
    },
    findPrt: function (id) {
        $.ajax({
            url: ctrFn.url.proList,
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
                        $(this).addClass("active").siblings(".roadmap-item").removeClass("active");
                        ctrFn.findWorker($(this).attr("pCtrId"), $(this).attr("iProId"));
                        $("#worker-center .process:eq(1)").text(">>" + $(this).attr("iProName"))
                    });
                } else {
                    $("#pro-center .panel-body").text("未查询到数据");
                }
            }
        })
    },
    findWorker: function (ctrId, proId) {
        $.ajax({
            url: ctrFn.url.resumeList,
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
}


$(function () {
    ctrFn.initSearchBox();
    ctrFn.initCtrList();
    ctrFn.addOpt({
        dom: $("#ctr-center .panel-title .glyphicon-plus"),
        checkCtx: $("#alertModal [name='checkName']"),
        init: {
            modelId: 'alertModal',
            title: '新增中心',
            label: '中心名称'
        },
        ajax: {
            url: ctrFn.url.dptCheck,
            // checkData: {checkName: $("#alertModal [name='checkName']").val()},
            checkData: {},
            saveUrl: ctrFn.url.dptAdd
        }
    })

    //给中心添加新项目
    ctrFn.addOpt({
        dom: $("#pro-center .panel-title .glyphicon-plus"),
        checkCtx: $("#alertModal [name='checkName']"),
        init: {
            modelId: 'alertModal',
            title: '新增项目',
            label: '项目名称'
        },
        ajax: {
            url: ctrFn.url.proCheck,
            checkData: {},
            saveUrl: ctrFn.url.proAdd
        }
    }, true)
})
