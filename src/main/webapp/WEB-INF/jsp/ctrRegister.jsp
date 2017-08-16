<%--
  Created by IntelliJ IDEA.
  User: bolom
  Date: 2017/8/14
  Time: 11:38
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
        .add-dom .glyphicon {
            width: 100px;
            height: 100px;
        }
    </style>
</head>
<body>
<div class="add-dom"><span class="glyphicon glyphicon-plus"></span></div>
</body>
</html>
