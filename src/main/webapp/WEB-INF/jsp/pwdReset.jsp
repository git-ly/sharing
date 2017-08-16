<%--
  Created by IntelliJ IDEA.
  User: bolom
  Date: 2017/8/8
  Time: 15:27
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
        .update-user-btn{
            color: rgba(46, 109, 164, 0.61);
            cursor: pointer;
        }
        .update-user-btn:hover{
            color: #2e6da4;
            text-decoration-line: underline;
        }
    </style>
</head>
<body>
<div>
    <div class="user-search">
        <div class="input-group input-group-lg col-lg-4">
            <input type="text" class="form-control keyword-input" placeholder="用户帐号、姓名">
            <span class="input-group-addon user-search-btn"><span class="glyphicon glyphicon-search"></span></span>
        </div>
    </div>
</div>
<table class="table table-striped table-hover table-condensed">
    <thead>
    <tr>
        <td class="col-md-1">编号</td>
        <td class="col-md-3">用户姓名</td>
        <td class="col-md-2">职务</td>
        <td class="col-md-3">注册时间</td>
        <td class="col-md-3">操作</td>
    </tr>
    </thead>
    <tbody class="user-list"></tbody>
</table>
<ul class="box"></ul>
</body>
<script type="text/javascript" src="<%=basePath%>js/jqPaginator.js"></script>
<script type="text/javascript" src="<%=basePath%>js/pwdManager.js"></script>
</html>
