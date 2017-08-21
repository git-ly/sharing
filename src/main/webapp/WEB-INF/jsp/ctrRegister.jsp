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
    <link href="<%=path%>js/bootstrap-3.3.5-dist/css/bootstrap.css" rel="stylesheet" type="text/css">
    <link href="<%=path%>css/bootstrapValidator.min.css" rel="stylesheet" type="text/css">
    <style>
        .add-dom{
            text-align: center;
            margin-top: 50px;
        }

        .add-dom .glyphicon.glyphicon-plus {
            width:250px;
            height: 250px;
            line-height: 250px;
            text-align: center;
            font-size: 50px;
            border: 4px solid rgba(2, 2, 2, 0.2);
            color: rgba(2, 2, 2, 0.2);
            margin: 50px;
        }
    </style>
</head>
<body>
<div class="add-dom">
    <span class="glyphicon glyphicon-plus"></span>
    <span class="glyphicon glyphicon-plus"></span>
</div>
</body>
<script type="text/javascript" src="<%=basePath%>js/jquery-3.2.1.min.js"></script>
<script type="text/javascript" src="<%=basePath%>js/bootstrap-3.3.5-dist/js/bootstrap.min.js"></script>
<script type="text/javascript" src="<%=basePath%>js/bootstrapValidator.min.js"></script>
<script type="text/javascript" src="<%=basePath%>js/common.js"></script>
<script type="text/javascript" src="<%=basePath%>js/ctrRegister.js"></script>
</html>
