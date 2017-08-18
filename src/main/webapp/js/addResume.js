jQuery(function () {
    var $ = jQuery,
        $list = $('#thelist'),
        $btn = $('#ctlBtn'),
        state = 'pending',
        uploader;

    uploader = WebUploader.create({


        // swf文件路径
        swf: host + 'webuploader-0.1.5/Uploader.swf',
        // 文件接收服务端。
        server: 'http://localhost:8090/resume/uploadResume',
        // 不压缩image
        resize: false,

        // 内部根据当前运行是创建，可能是input元素，也可能是flash.
        pick: '#picker',
        chunked: false,
        chunkSize: 1014 * 1024,
        threads: true,
        fileNumLimit: 1,
        fileSingleSizeLimit: 1000 * 1024 * 1024,
        duplicate: true

    });

    // 当有文件添加进来的时候
    uploader.on('fileQueued', function (file) {
        var fileName = file.name.length > 28 ? file.name.substr(0, 28) + '…' : file.name
        $list.append('<div id="' + file.id + '" class="item">' +
            '<span class="doc-icon"></span> ' +
            '<h5 class="info" title="' + file.name + '">' + fileName + '</h5>' +
            '<p class="state">等待上传...</p>' +
            '</div>');
    });

    // 文件上传过程中创建进度条实时显示。
    uploader.on('uploadProgress', function (file, percentage) {
        var $li = $('#' + file.id),
            $percent = $li.find('.progress .progress-bar');

        // 避免重复创建
        if (!$percent.length) {
            $percent = $('<div class="progress progress-striped active">' +
                '<div class="progress-bar" role="progressbar" style="width: 0%">' +
                '</div>' +
                '</div>').appendTo($li).find('.progress-bar');
        }

        $li.find('p.state').text('上传中');

        $percent.css('width', percentage * 100 + '%');
    });

    uploader.on('uploadSuccess', function (file, response) {
        $('#' + file.id).find('p.state').text('已上传');
        $.ajax({
            url: host + "resume/storeResume",
            type: 'post',
            data: {
                name: $(".resume-name").val(),
                education: $(".resume-education").val(),
                graduate: $(".resume-graduate").val(),
                project: $(".resume-project").val(),
                fileName: file.name
            },
            success: function (data) {

                console.info(data);
            },
            error: function () {

            }
        })
    });

    uploader.on('uploadError', function (file, reason) {
        $('#' + file.id).find('p.state').text('上传出错');
    });

    uploader.on('uploadComplete', function (file) {
        $('#' + file.id).find('.progress').fadeOut();
    });

    uploader.on('all', function (type) {
        if (type === 'startUpload') {
            state = 'uploading';
        } else if (type === 'stopUpload') {
            state = 'paused';
        } else if (type === 'uploadFinished') {
            state = 'done';
        }

        if (state === 'uploading') {
            $btn.children("span").eq(1).text('暂停上传');
        } else {
            $btn.children("span").eq(1).text('开始上传');
        }
    });

    $btn.on('click', function () {
        var name = $(".resume-name").val(),
            education = $(".resume-education").val(),
            graduate = $(".resume-graduate").val(),
            project = $(".resume-project").val();
        if (!name || !education || !graduate || !project) {
            alert("请完整填写相关信息");
            return;
        }
        if (state === 'uploading') {
            uploader.stop();
        } else {
            uploader.upload();
        }
    });
});


