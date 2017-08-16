<%--
  Created by IntelliJ IDEA.
  User: bolom
  Date: 2017/8/4
  Time: 15:50
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

        .resume-options div,.wu-example div {
            margin-top: 5px;
        }

        .resume-options div span:first-child {
            display: inline-block;
            width: 100px;
            font-size: 20px;
        }
        .resume-options div span:first-child:after {
            content: ":";
        }

        .resume-options div input, .resume-options div select {
            width: 180px;
        }

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
    </style>
</head>
<body>
<%--<div>上传简历</div>--%>
<div class="resume-options">
    <div><span>姓名</span><input class="resume-name form-control" type="text"></div>
    <div><span>学历</span><input class="resume-education form-control" type="text"></div>
    <div><span>毕业时间</span><input class="resume-graduate form-control" type="date"></div>
    <%--<div><span>中心</span><input class="resume-center form-control" type="text"></div>--%>
    <div><span>中心</span>
        <select name="" class="form-control">
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
            <option value="">5</option>
        </select>
    </div>
    <div><span>入场项目</span>
        <select name="" class="form-control">
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
            <option value="">5</option>
        </select>
        <%--<input class="resume-project form-control" type="text">--%>
    </div>
</div>
<div id="uploader" class="wu-example">
    <!--用来存放文件信息-->
    <div id="thelist" class="uploader-list"></div>
    <div class="btns">
        <div id="picker"><span class="glyphicon glyphicon-folder-open"></span>选择简历</div>
        <button id="ctlBtn" class="btn btn-default"><span class="glyphicon glyphicon-cloud-upload"></span>上传提交</button>
    </div>

</div>

</body>
<script type="text/javascript" src="<%=basePath%>js/addResume.js"></script>
</html>
