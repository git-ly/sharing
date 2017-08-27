var ctrFn = {
    optCtr: '',
    ctrPage: {flag: true, cnt: 0},
    proPage: {flag: true, cnt: 0},
    resPage: {flag: true, cnt: 0},
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
                        if (!result.valid) {
                            $("#alertModal .help-block").text("已添加，不可使用");
                            return;
                        }
                        $("#alertModal .help-block").text("可以使用");
                        $("#alertModal .commit-btn").unbind().bind("click", function () {
                            var saveData = {
                                saveName: $("#alertModal [name='checkName']").val(),
                                ctrId: ctrFn.optCtr
                            };

                            $.ajax({
                                url: options.ajax.saveUrl,
                                type: 'POST',
                                // data: {saveName: $("#alertModal [name='checkName']").val()},
                                data: saveData,
                                success: function (result) {
                                    var data = JSON.parse(result)
                                    if (data && data.success == true) {
                                        tip.tipBox({text: options.checkCtx.val() + "添加成功"}, true);
                                        $("#alertModal").modal('hide');
                                    } else {
                                        tip.tipBox({type: 'warn', text: options.checkCtx.val() + "添加失败"}, true);
                                        $("#alertModal").modal('hide');
                                    }
                                },
                                error: function () {
                                    tip.tipBox({type: 'err', text: options.checkCtx.val() + "添加失败，服务器故障"}, true);
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
    initCtrList: function (start, size) {
        start = start ? start : 1;
        size = size ? size : 9;
        $.ajax({
            url: ctrFn.url.dptList,
            type: 'POST',
            data: {
                start: start,
                size: size
            },
            success: function (data) {
                var result = JSON.parse(data);
                $("#ctr-center .panel-body").html("");
                if (result.success) {
                    var list = result.target.data;
                    ctrFn.ctrPage.cnt = result.target.counts;
                    for (var i = 0; i < list.length; i++) {
                        $("#ctr-center .panel-body").append('<div class="roadmap-item" ctrId="' + list[i].id + '" ctrName="' + list[i].dptName + '">\n' +
                            '            <span class="roadmap-ico"></span>\n' +
                            // '            <span class="glyphicon glyphicon-minus pull-right"></span>\n' +
                            '            <span class="roadmap-title">' + list[i].dptName + '</span>\n' +
                            '        </div>');
                    }
                    while (ctrFn.ctrPage.flag) {
                        $(".ctr-box").jqPaginator({
                            // first: '<li class="first"><a href="javascript:void(0);">首页</a></li>',
                            prev: '<li class="prev"><!--<a href="javascript:void(0);">&lt;</a>-->&lt;</li>',
                            next: '<li class="next"><!--<a href="javascript:void(0);">&gt;</a>-->&gt;</li>',
                            // last: '<li class="last"><a href="javascript:void(0);">尾页</a></li>',
                            // page: '<li class="page"><a href="javascript:void(0);">{{page}}</a></li>',
                            // totalPages: 5,
                            totalCounts: ctrFn.ctrPage.cnt,
                            pageSize: 9,
                            currentPage: 1,
                            visiblePages: 0,
                            disableClass: 'disabled',
                            activeClass: 'active',
                            onPageChange: function (n) {
                                ctrFn.initCtrList(n, this.pageSize)
                                $("#ctr-center").find(".panel-heading").find("strong").find(".badge").text(n + "/" + this.totalPages);
                            }
                        });
                        ctrFn.ctrPage.flag = false;
                    }

                    $("#ctr-center .roadmap-item").unbind().bind("click", function () {
                        if (!$(this).hasClass("active")) {
                            $(this).addClass("active").siblings(".roadmap-item").removeClass("active");
                            $("#pro-center .process,#worker-center .process:eq(0)").text(">>" + $(this).attr("ctrName"));
                            $("#worker-center .process:eq(1)").text("");
                            $("#pro-center .panel-body").html("请选择中心");
                            $("#worker-center .panel-body").text("未选择项目");
                            $("#pro-center .pro-box, #worker-center .res-box").html("");
                            $("#pro-center, #worker-center").find(".panel-heading").find("strong").find(".badge").text("0/0");
                            ctrFn.proPage.flag = true;
                            ctrFn.resPage.flag = true;
                            ctrFn.findPrt($(this).attr("ctrId"));
                            ctrFn.optCtr = $(this).attr("ctrId");
                        }
                    })
                } else {
                    $("#ctr-center .panel-body").text("未查询到数据");
                }
            }
        })
    },
    findPrt: function (id, start, size) {
        start = start ? start : 1;
        size = size ? size : 9;
        $.ajax({
            url: ctrFn.url.proList,
            type: 'POST',
            data: {
                ctrId: id,
                start: start,
                size: size
            },
            success: function (data) {
                var result = JSON.parse(data);
                $("#pro-center .panel-body").html("");
                if (result.success) {
                    var list = result.target.data;
                    ctrFn.proPage.cnt = result.target.counts;
                    for (var i = 0; i < list.length; i++) {
                        $("#pro-center .panel-body").append('<div class="roadmap-item" pCtrId="' + id + '" iProId="' + list[i].id + '" iProName="' + list[i].proName + '">\n' +
                            '            <span class="roadmap-ico"></span>\n' +
                            '            <span class="roadmap-title">' + list[i].proName + '</span>\n' +
                            '        </div>')
                    }

                    while (ctrFn.proPage.flag) {
                        $(".pro-box").jqPaginator({
                            // first: '<li class="first"><a href="javascript:void(0);">首页</a></li>',
                            prev: '<li class="prev"><!--<a href="javascript:void(0);">&lt;</a>-->&lt;</li>',
                            next: '<li class="next"><!--<a href="javascript:void(0);">&gt;</a>-->&gt;</li>',
                            // last: '<li class="last"><a href="javascript:void(0);">尾页</a></li>',
                            // page: '<li class="page"><a href="javascript:void(0);">{{page}}</a></li>',
                            // totalPages: 5,
                            totalCounts: ctrFn.proPage.cnt,
                            pageSize: 9,
                            currentPage: 1,
                            visiblePages: 7,
                            disableClass: 'disabled',
                            activeClass: 'active',
                            onPageChange: function (n) {
                                ctrFn.findPrt(id, n, this.pageSize);
                                $("#pro-center").find(".panel-heading").find("strong").find(".badge").text(n + "/" + this.totalPages);
                            }
                        });
                        ctrFn.proPage.flag = false;
                    }
                    $("#pro-center .roadmap-item").unbind().bind("click", function () {
                        $(this).addClass("active").siblings(".roadmap-item").removeClass("active");
                        $("#worker-center .process:eq(1)").text(">>" + $(this).attr("iProName"));
                        $("#worker-center .panel-body").html("请选择项目");
                        $("#worker-center .res-box").html("");
                        $("#worker-center").find(".panel-heading").find("strong").find(".badge").text("0/0");
                        ctrFn.resPage.flag = true;
                        ctrFn.findWorker($(this).attr("pCtrId"), $(this).attr("iProId"));
                    });
                } else {
                    $("#pro-center .panel-body").text("未查询到数据");
                }
            }
        })
    },
    findWorker: function (ctrId, proId, start, size) {
        start = start ? start : 1;
        size = size ? size : 9;
        $.ajax({
            url: ctrFn.url.resumeList,
            type: 'POST',
            data: {
                ctrId: ctrId,
                proId: proId,
                start: start,
                size: size
            },
            success: function (data) {
                var result = JSON.parse(data);
                $("#worker-center .panel-body").html("");
                if (result.success) {
                    var list = result.target.data;
                    ctrFn.resPage.cnt = result.target.counts;
                    for (var i = 0; i < list.length; i++) {
                        $("#worker-center .panel-body").append('<div class="roadmap-item" resumeId="' + list[i].id + '">\n' +
                            '            <span class="roadmap-ico"></span>\n' +
                            '            <span class="roadmap-title">' + list[i].owner + '</span>\n' +
                            '        </div>')
                    }
                    while (ctrFn.resPage.flag) {
                        $(".res-box").jqPaginator({
                            // first: '<li class="first"><a href="javascript:void(0);">首页</a></li>',
                            prev: '<li class="prev"><!--<a href="javascript:void(0);">&lt;</a>-->&lt;</li>',
                            next: '<li class="next"><!--<a href="javascript:void(0);">&gt;</a>-->&gt;</li>',
                            // last: '<li class="last"><a href="javascript:void(0);">尾页</a></li>',
                            // page: '<li class="page"><a href="javascript:void(0);">{{page}}</a></li>',
                            // totalPages: 5,
                            totalCounts: ctrFn.resPage.cnt,
                            pageSize: 9,
                            currentPage: 1,
                            visiblePages: 7,
                            disableClass: 'disabled',
                            activeClass: 'active',
                            onPageChange: function (n) {
                                ctrFn.findWorker(ctrId, proId, n, this.pageSize);
                                $("#worker-center").find(".panel-heading").find("strong").find(".badge").text(n + "/" + this.totalPages);
                            }
                        });
                        ctrFn.resPage.flag = false;
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
    }, false)

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
    }, true);

    $("#worker-center .panel-title .glyphicon-plus").unbind().bind("click", function () {
        tip.tipMod({
            mod : 'wkAddMod'
        })
    })
})
