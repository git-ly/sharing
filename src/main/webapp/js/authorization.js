/**
 * Created by bolom on 2017/8/11.
 */

$(function () {
    var count;
    var flag = true;
    var userList = {
        modalTem: $('<div class="modal fad noticeModal" id="noticeModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">' +
            '<div class="modal-dialog">' +
            '<div class="modal-content">' +
            '<div class="modal-header">' +
            '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' +
            '<h4 class="modal-title" id="myModalLabel">Notice</h4>' +
            '</div>' +
            '<div class="modal-body">text</div>' +
            '<div class="modal-footer">' +
            '<button type="button" class="btn btn-default close-btn" data-dismiss="modal">关闭</button>' +
            '<button type="button" class="btn btn-primary sure-btn" id="sure-btn">提交更改</button>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>'),
        listTmp: $('<tr>' +
            '<td></td>' +
            '<td></td>' +
            '<td></td>' +
            '<td></td>' +
            '<td></td>' +
            '<td></td>' +
            '</tr>'),
        formatDate: function (tm) {
            var date = new Date(parseInt(tm));
            var month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1)
            var day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();
            return date.getFullYear() + "-" + month + "-" + day;
        },
        userOpts: function () {
            return {
                keyword: $(".keyword-input").val() ? $(".keyword-input").val().trim() : null
            }
        },
        setNoticeBox: function (info) {

            if (!info)
                return;
            if (info.title)
                $("#noticeModal .modal-title").html(info.title);
            if (info.text)
                $("#noticeModal .modal-body").html(info.text);
            if (info.closeBtnName)
                $("#noticeModal .close-btn").text(info.closeBtnName);
            if (info.closeBtnHide)
                $("#noticeModal .close-btn").hide();
            if (info.sureBtnName)
                $("#noticeModal .sure-btn").text(info.sureBtnName);
            if (info.sureBtnHide)
                $("#noticeModal .sure-btn").hide();
            console.log(info)

        },

        fillList: function (start, size) {
            start = start ? start : 1;
            size = size ? size : 8;
            $(".user-list").html("");
            $.ajax({
                url: host + "userList/" + start + "/" + size,
                type: "POST",
                data: userList.userOpts(),
                success: function (data) {
                    if (!data)
                        return;
                    var result = JSON.parse(data);
                    console.info(data)
                    if (result && result.success && result.success == true) {
                        var list = result.target.data;
                        count = result.target.counts;
                        for (var i = 0; i < list.length; i++) {
                            var item = list[i];
                            var clone = userList.listTmp.clone();
                            $("td:eq(0)", clone).text(i + 1);
                            $("td:eq(1)", clone).text(item.name);
                            $("td:eq(2)", clone).text(userList.checkRole(item.role));
                            $("td:eq(3)", clone).text(userList.formatDate(item.rgtTime));
                            if (loginInfo.role == 1 && item.role == 3)
                                $("td:eq(4)", clone).html('<span class="update-user-btn" uid="' + item.id + '" uname="' + item.name + '" opt="grade">升级</span>');
                            if (loginInfo.role == 1 && item.role == 2)
                                $("td:eq(4)", clone).html('<span class="update-user-btn" uid="' + item.id + '" uname="' + item.name + '" opt="degrade">降级</span>');
                            $(".user-list").append(clone);
                        }
                        while (flag) {
                            $(".box").jqPaginator({
                                first: '<li class="first"><a href="javascript:void(0);">首页</a></li>',
                                prev: '<li class="prev"><a href="javascript:void(0);">上一页</a></li>',
                                next: '<li class="next"><a href="javascript:void(0);">下一页</a></li>',
                                last: '<li class="last"><a href="javascript:void(0);">尾页</a></li>',
                                page: '<li class="page"><a href="javascript:void(0);">{{page}}</a></li>',
                                // totalPages: 5,
                                totalCounts: count,
                                pageSize: 8,
                                currentPage: 1,
                                visiblePages: 7,
                                disableClass: 'disabled',
                                activeClass: 'active',
                                onPageChange: function (n) {
                                    userList.fillList(n, this.pageSize);
                                }
                            });
                            flag = false;
                        }
                        $("span.update-user-btn").click(function () {
                            var userId = $(this).attr("uid"),
                                uname = $(this).attr("uname"),
                                opt = $(this).attr("opt");
                            $("#notice-contain").html(userList.modalTem);
                            userList.setNoticeBox({
                                title: "提示",
                                text: '<span class="glyphicon glyphicon-info-sign"> </span>您是否将' + uname + (opt == "grade" ? "提升为管理员！" : "降级为用户"),
                                closeBtnName: "取消",
                                sureBtnName: "确定"
                            })
                            $("#noticeModal").modal();
                            $("#sure-btn").click(function () {
                                userList.setNoticeBox({text: "正在执行" + (opt == "grade" ? "升级" : "降级") + "操作！………………"});
                                $.ajax({
                                    url: host + opt + '/update',
                                    type: "post",
                                    data: {
                                        userId: userId
                                    },
                                    success: function (result) {
                                        if (result && JSON.parse(result).success) {
                                            $("span[uid='" + userId + "']").parent("td").prev().prev().text(opt == "grade" ? "管理员" : "用户");
                                            $(".user-list span[uid='" + userId + "']").attr("opt", opt == "grade" ? "degrade" : "grade").text(opt == "grade" ? "降级" : "升级");
                                            userList.setNoticeBox({text: uname + (opt == "grade" ? "已升级为管理员！" : "已降为普通用户！")});
                                        } else {
                                            userList.setNoticeBox({text: (opt == "grade" ? "升级" : "降级") + "失败！"});
                                        }
                                        setTimeout(function () {
                                            $("#noticeModal").modal('hide');
                                        }, 1000)
                                    },
                                    error: function () {
                                        userList.setNoticeBox({
                                            text: "Server Error~~~~~~~~",
                                            closeBtnHide: true,
                                            sureBtnName: "确定"
                                        });

                                        $("#sure-btn").click(function () {
                                            $("#noticeModal").modal('hide');
                                        });
                                    }
                                })


                            })

                        })
                    }
                }
            })
        },
        checkRole: function (role) {
            switch (role) {
                case 1:
                    return "系统管理员";
                case 2:
                    return "管理员";
                case 3:
                    return "用户";
            }
        }
    }

    userList.fillList();
    $(".user-search-btn").click(function () {
        userList.fillList();
    })

})
