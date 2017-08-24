<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2017/8/24
  Time: 14:14
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
        .ctr-item, .pro-item, .worker-item{
            display: inline-block;
            width: 100px;
            height: 100px;
        }

        .ctr-title, .pro-title, .worker-title{
            display: inline-block;
        }

        .ctr-ico, .pro-ico, .worker-ico{
            display: inline-block;
            width: 72px;
            height: 72px;
            background: url("<%=basePath%>css/images/png/group_x72.png") no-repeat;
            background-size: 72px 72px;
        }
        .pro-ico{
            background: url("<%=basePath%>css/images/png/task_x72.png") no-repeat;
        }
        .worker-ico{
            background: url("<%=basePath%>css/images/png/worker_x72.png") no-repeat;
        }

    </style>
</head>
<body>
<div class="panel panel-default" id="ctr-center">
    <div class="panel-heading">
        <h3 class="panel-title">中心</h3>
    </div>
    <div class="panel-body">
        <h5>未选择中心</h5>
    </div>
</div>

<div class="panel panel-default" id="pro-center">
    <div class="panel-heading">
        <h3 class="panel-title">项目</h3>
    </div>
    <div class="panel-body">
        <h5>未选择中心</h5>
    </div>
</div>

<div class="panel panel-default" id="worker-center">
    <div class="panel-heading">
        <h3 class="panel-title">人员</h3>
    </div>
    <div class="panel-body">
        <h5>未选择项目</h5>
    </div>
</div>
</body>
<script type="text/javascript" src="<%=basePath%>js/ctrMange.js"></script>

</html>
