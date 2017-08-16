<%--
  Created by IntelliJ IDEA.
  User: bolom
  Date: 2017/8/8
  Time: 15:28
  To change this template use File | Settings | File Templates.
--%>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";
%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
    <link rel="stylesheet" type="text/css" href="<%=basePath%>webuploader-0.1.5/webuploader.css">
    <style>

        .uploader-list{
            height: 80px;
            width: 260px;
            /*border: 1px solid rgba(7, 11, 6, 0.11);*/
        }
        .btns div, .btns button{
            display: inline-block;
            width: 120px;
            height: 40px;
        }
        .btns button{
            margin-bottom: 32px;
            margin-left: 15px;
        }
        .btns div span.glyphicon{
            margin-right: 5px;
        }
        .share-options>div{
            margin-bottom: 5px;
        }
        .share-dpt.form-control{
            height: 180px;
            resize: none;
        }
    </style>
</head>
<body>
<div class="share-options">
    <div class="input-group input-group-lg"><span class="input-group-addon">文件内容</span><input class="share-cnt form-control" type="text"></div>
    <div class="input-group input-group-lg"><span class="input-group-addon">关键词</span><input class="share-mark form-control" type="text"></div>
    <div class="input-group input-group-lg"><span class="input-group-addon">详细描述</span><textarea class="share-dpt form-control" type="text"></textarea> </div>
</div>
<div id="uploader" class="wu-example">
    <!--用来存放文件信息-->
    <div id="thelist" class="uploader-list"></div>
    <div class="btns">
        <div id="picker"><span class="glyphicon glyphicon-folder-open"></span>选择文件</div>
        <button id="ctlBtn" class="btn btn-default"><span class="glyphicon glyphicon-cloud-upload"></span>上传提交</button>
    </div>

</div>
</body>
<script type="text/javascript" src="<%=basePath%>js/uploadFile.js"></script>
</html>
