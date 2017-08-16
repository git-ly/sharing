<%--
  Created by IntelliJ IDEA.
  User: bolom
  Date: 2017/8/8
  Time: 15:23
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
    <style>
        /*.box{*/
            /*position: absolute;*/
            /*right: 60px;*/
        /*}*/
        /*.box li{*/
            /*list-style: none;*/
            /*display: inline-block;*/
            /*padding: 5px 5px;*/
            /*margin: 5px 2px;*/
            /*border: 1px solid #cff6f4;*/
            /*border-radius: 5px;*/
        /*}*/
        /*.box li.active{*/
            /*border-color: #ebb822;*/
            /*background-color: blanchedalmond;*/
        /*}*/
        .source-search{
            margin-bottom: 20px;
        }
    </style>
</head>
<body>
    <div>
        <div class="source-search">
            <div class="input-group input-group-lg col-lg-4">
                <input type="text" class="form-control keyword-input" placeholder="文件内容、关键词">
                <span class="input-group-addon"><span class="glyphicon glyphicon-search source-search-btn"></span></span>
            </div>
        </div>
    </div>

<table class="table table-striped table-hover table-condensed">
    <thead>
    <tr>
        <td class="col-md-1">编号</td>
        <td class="col-md-2">文本内容</td>
        <td class="col-md-2">关键词</td>
        <td class="col-md-2">详细描述</td>
        <td class="col-md-2">上传时间</td>
        <td class="col-md-1">操作</td>
    </tr>
    </thead>
    <tbody class="source-list">
    </tbody>
</table>
<ul class="box"></ul>
</body>

<script type="text/javascript" src="<%=basePath%>js/jqPaginator.js"></script>
<script type="text/javascript" src="<%=basePath%>js/sourceList.js"></script>
</html>
