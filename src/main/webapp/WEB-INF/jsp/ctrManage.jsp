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
        .roadmap-item {
            display: inline-block;
            width: 100px;
            height: 100px;
            border: 3px solid transparent;
        }

        .roadmap-title {
            display: inline-block;
            width: 100%;
            height: 20px;
            overflow: hidden;
        }

        .roadmap-ico {
            display: inline-block;
            width: 72px;
            height: 72px;
            background: url("<%=basePath%>css/images/png/group_x72.png") no-repeat;
            background-size: 72px 72px;
        }

        #pro-center .roadmap-ico {
            background: url("<%=basePath%>css/images/png/task_x72.png") no-repeat;
        }

        #worker-center .roadmap-ico {
            background: url("<%=basePath%>css/images/png/worker_x72.png") no-repeat;
        }

        .roadmap-item:hover {
            content: '-';
            border: 3px solid brown;
        }


        #search{
            position: fixed;
            top: 100px;
        }

    </style>
</head>
<body>
<div class="panel panel-default" id="ctr-center">
    <div class="panel-heading">
        <h3 class="panel-title">中心
            <span class="pull-right glyphicon glyphicon-plus col-md-1"></span>
            <span class="pull-right glyphicon glyphicon-search"></span>
        </h3>
    </div>
    <div class="panel-body">
        <h5>未选择中心</h5>
    </div>
</div>

<div class="panel panel-default" id="pro-center">
    <div class="panel-heading">
        <h3 class="panel-title">项目
            <span class="pull-right glyphicon glyphicon-plus col-md-1"></span>
            <span class="pull-right glyphicon glyphicon-search"></span>
        </h3>
    </div>
    <div class="panel-body">
        <h5>未选择中心</h5>
    </div>
</div>

<div class="panel panel-default" id="worker-center">
    <div class="panel-heading">
        <h3 class="panel-title">人员
            <span class="pull-right glyphicon glyphicon-plus col-md-1"></span>
            <span class="pull-right glyphicon glyphicon-search"></span>
        </h3>
    </div>
    <div class="panel-body">
        <h5>未选择项目</h5>
    </div>
</div>

<div class="input-group col-lg-5 col-lg-offset-2" id="search">
    <input class="form-control input-lg" type="search" placeholder="搜索关键字">
    <span class="input-group-addon btn btn-default"><span class="glyphicon glyphicon-search"></span></span>
</div>
</body>
<script type="text/javascript" src="<%=basePath%>js/ctrMange.js"></script>

</html>
