/**
 * Created by bolom on 2017/8/8.
 */

$(function () {
    var count;
    var flag = true;
    var resumeList = {
        listTmp: $('<tr>' +
            '<td></td>' +
            '<td><a></a></td>' +
            '<td></td>' +
            '<td></td>' +
            '<td></td>' +
            '<td></td>' +
            '<td></td>' +
            '<td></td>' +
            '<td></td>' +
            '<td></td>' +
            '</tr>'),
        formatDate: function (tm, endMonth) {
            var date = new Date(parseInt(tm));
            var month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1)
            var day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();
            if (endMonth)
                return  month + "/" + date.getFullYear();
            return date.getFullYear() + "-" + month + "-" + day;
        },
        resumeOpts: function () {
            return {
                // owner: $(".owner-input").val() ? $(".owner-input").val().trim() : null,
                // education: $(".education-input").val() ? $(".education-input").val().trim() : null,
                // project: $(".project-input").val() ? $(".project-input").val().trim() : null,
                from: $(".from-input").val() ? $(".from-input").val().trim() : null,
                to: $(".to-input").val() ? $(".to-input").val().trim() : null,
                keyword: $(".keyword-input").val() ? $(".keyword-input").val().trim() : null
            }
        },
        fillList: function (start, size) {
            start = start ? start : 1;
            size = size ? size : 8;
            $(".resume-list").html("");
            $.ajax({
                url: host + "/resume/resumeList/" + start + "/" + size,
                type: "POST",
                data: resumeList.resumeOpts(),
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
                            var clone = resumeList.listTmp.clone();
                            $("td:eq(0)", clone).text(i + 1);
                            $("td:eq(1) a", clone).text(item.owner).attr("resumeId", item.id);
                            $("td:eq(2)", clone).text(item.education);
                            $("td:eq(3)", clone).text(item.major);
                            $("td:eq(4)", clone).text(resumeList.formatDate(item.graduateTime, true));
                            $("td:eq(5)", clone).text(resumeList.formatDate(item.uploadTime));
                            $("td:eq(6)", clone).text(item.ctrName);
                            $("td:eq(7)", clone).text(item.proName);
                            $("td:eq(8)", clone).text(item.dptName);
                            $("td:eq(9)", clone).html('<a href="' + host + "resume/" + item.id + '/resumeDown">下载</a>');
                            $(".resume-list").append(clone);
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
                                    resumeList.fillList(n, this.pageSize);
                                }
                            });
                            flag = false;
                        }
                    }
                }
            })
        }
    } 

    resumeList.fillList();
    $(".resume-search-btn").click(function () {
        resumeList.fillList();
    })
})


