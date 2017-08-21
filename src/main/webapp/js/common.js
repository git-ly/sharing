var tip = {
    modalTem : $('<div class="modal fad noticeModal" id="noticeModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">' +
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
            '</div>'),
    fillMsgBox : function (info) {

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


    }


}