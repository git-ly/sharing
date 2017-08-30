/**
 * Created by bolom on 2017/8/4.
 */

$(function () {
    var modalTem = $('<div class="modal fad noticeModal" id="noticeModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">' +
        '<div class="modal-dialog">' +
        '<div class="modal-content">' +
        '<div class="modal-header">' +
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' +
        '<h4 class="modal-title" id="myModalLabel">Notice</h4>' +
        '</div>' +
        '<div class="modal-text">text</div>' +
        '<div class="modal-footer">' +
        '<button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>' +
        '<button type="button" class="btn btn-primary" id="sure-btn">提交更改</button>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>')


    var menu = loginInfo.menus;
    var mainTitle = [];
    var n = 0;
    for (var i = 0; i < menu.length; i++) {
        if (menu[i].pMenuNo == 0) {
            console.log(menu[i].menuName);
            mainTitle.push(menu[i]);
            mainTitle[n].childs = [];
            n++
        }
    }

    for (var j = 0; j < menu.length; j++) {
        if (menu[j].pMenuNo == 0)
            continue;
        for (var m = 0; m < mainTitle.length; m++) {
            if (menu[j].pMenuNo != mainTitle[m].menuNo)
                continue;
            mainTitle[m].childs.push(menu[j]);
        }
    }

    var mDom = "";
    for (var t = 0; t < mainTitle.length; t++) {

        var cDom = "";
        for (var s = 0; s < mainTitle[t].childs.length; s++) {
            // cDom += '<li><a href="' + host + mainTitle[t].childs[s].url + '">' + mainTitle[t].childs[s].menuName + '</a> </li>';
            cDom += '<li class="menu-list-item" menuUrl="' + mainTitle[t].childs[s].url + '"><a href="javascript:void(0);">' + mainTitle[t].childs[s].menuName + '</a> </li>';
        }
        mDom += '<li>' + mainTitle[t].menuName + '</li><li><ul class="nav nav-pills nav-stacked"> ' + cDom + '</ul></li>';
    }

    $(".menu").html(mDom);

    var roleNum = parseInt(loginInfo.role), roleName;
    if (roleNum == 1) {
        $(".main-contain").html('<span class="loading"></span>').load(host + "authorization/view");
        roleName="系统管理员";
        // $("[menuUrl='addAdmin']").addClass("active");
    } else if (roleNum == 2) {
        $(".main-contain").html('<span class="loading"></span>').load(host + "resumeList/view");
        roleName="管理员";
    } else if (roleNum == 3) {
        $(".main-contain").html('<span class="loading"></span>').load(host + "sourceList/view");
        roleName="用户";
    }
    
    $(".login-acct").text(loginInfo.acct);
    $(".login-role").text(roleName);

    $("#login-down").unbind().bind("click", function () {
        $("#login-info").slideToggle(100);
    });

    $(".menu-list-item").click(function () {
        var url = $(this).attr("menuUrl");
        if (url)
            $(".main-contain").html('<span class="loading"></span>').load(host + url + "/view");
    })


    $("#reset-pwd-btn").click(function () {
        $("#notice-contain").html(modalTem);
        tip.tipMod({
            title: '修改密码',
            text: '<div class="input-group"><span class="input-group-addon">新密码</span> <input type="password" class="form-control"></div>' +
            '<div class="info-tip"></div>' +
            '<div class="input-group"><span class="input-group-addon">确认密码</span> <input type="password" class="form-control"></div>' +
            '<div class="info-tip"></div>'
        })

    })

    var fillMsgBox = function (info) {

        if (!info)
            return;
        if (info.title)
            $("#noticeModal .modal-title").html(info.title);
        if (info.text)
            $("#noticeModal .modal-text").html(info.text);
        if (info.closeBtnName)
            $("#noticeModal .close-btn").text(info.closeBtnName);
        if (info.closeBtnHide)
            $("#noticeModal .close-btn").hide();
        if (info.sureBtnName)
            $("#noticeModal .sure-btn").text(info.sureBtnName);
        if (info.sureBtnHide)
            $("#noticeModal .sure-btn").hide();
        console.log(info)

    }

    $("#exit-btn").unbind().bind("click", function () {
        document.location.href = host + "logout";
    })

    $(".main-contain").on('click','.resume-list tr a',function(){
        var id = $(this).attr("resumeId");
        var url = "/resumeModify"
        $(".main-contain").html('<span class="loading"></span>').load(host + "resume/" + id + url);
    })
})
