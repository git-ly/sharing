// var pageCtrId = null;

$(function () {
    $("#search").hide();
    $("#ctr-center .glyphicon-search,#pro-center .glyphicon-search,#worker-center .glyphicon-search").unbind().bind("click", function () {
        $("#search").show(500);

    })
    $(document).keydown(function (e) {
        if (e.keyCode == 27)
            $("#search").hide(500);
    })
    var ctrTmp = $('<div class="roadmap-item">\n' +
        '            <span class="roadmap-ico"></span>\n' +
        '            <span class="roadmap-title">深圳开发中心</span>\n' +
        '        </div>');

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
            $("#worker-center .panel-body").text("请选择中心和项目");
            if (result.success) {
                for (var i = 0; i < result.target.length; i++) {
                    // var clone = ctrTmp.clone(true);
                    // $(".roadmap-item", clone).attr("ctrId", result.target[i].id).attr("onclick", "ale()");
                    // $(".roadmap-title", clone).text(result.target[i].dptName);
                    // // $("#ctr-center .panel-body").append(clone);
                    // clone.appendTo($("#ctr-center .panel-body"));
                    $("#ctr-center .panel-body").append('<div class="roadmap-item" onclick="findPrt(' + result.target[i].id + ')">\n' +
                        '            <span class="roadmap-ico"></span>\n' +
                        // '            <span class="glyphicon glyphicon-minus pull-right"></span>\n' +
                        '            <span class="roadmap-title">' + result.target[i].dptName + '</span>\n' +
                        '        </div>')
                }
            } else {
                $("#ctr-center .panel-body").text("未查询到数据");
            }
        }
    })


})

function findPrt(id) {
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
                    // var clone = ctrTmp.clone(true);
                    // $(".roadmap-item", clone).attr("ctrId", result.target[i].id).attr("onclick", "ale()");
                    // $(".roadmap-title", clone).text(result.target[i].dptName);
                    // // $("#ctr-center .panel-body").append(clone);
                    // clone.appendTo($("#ctr-center .panel-body"));
                    $("#pro-center .panel-body").append('<div class="roadmap-item" pCtrId="' + id + '" onclick="findWorker(' + id + ',' + result.target[i].id + ')">\n' +
                        '            <span class="roadmap-ico"></span>\n' +
                        '            <span class="roadmap-title">' + result.target[i].proName + '</span>\n' +
                        '        </div>')
                }
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
                    // var clone = ctrTmp.clone(true);
                    // $(".roadmap-item", clone).attr("ctrId", result.target[i].id).attr("onclick", "ale()");
                    // $(".roadmap-title", clone).text(result.target[i].dptName);
                    // // $("#ctr-center .panel-body").append(clone);
                    // clone.appendTo($("#ctr-center .panel-body"));
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