<%--
  Created by IntelliJ IDEA.
  User: qi
  Date: 2017/8/3
  Time: 11:32
  To change this template use File | Settings | File Templates.
--%>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";
%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Login</title>
    <link href="<%=path%>js/bootstrap-3.3.5-dist/css/bootstrap.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" type="text/css" href="<%=basePath%>webuploader-0.1.5/webuploader.css">
    <style>
        body {
            background: url("<%=basePath%>css/images/bg/bg.jpg") no-repeat;
            background-size: 100%;
        }

        .panel-title {
            color: #f88;
        }

        @-webkit-keyframes progress-menu {
            from {
                transform: scale(0.2);
            }
            to {
                transform: scale(1);
            }
        }

        form {
            -webkit-animation: progress-menu 2s;
        }

        .login-contain,.register-contain{
            position: absolute;
            top: 100px;
            left: calc(50% - 550px);
        }
        .register-contain{
            /*width: 1000px;*/
            /*margin-left: 50px;*/
            -webkit-animation: progress-menu 2s;
        }
        .input-group {
            padding-bottom: 5px;
        }

        /*.register-contain .input-group-addon {*/
            /*width: 100px;*/
        /*}*/

        .register-msg{
            width: 100%;
        }

        button span{
            margin-right: 5px;
        }

    </style>
</head>
<body>
<div class="login-contain">
    <form action="<%=basePath%>home" method="post">
        <div class="container">
            <div class="panel-heading col-md-4 col-md-offset-4"><span class="panel-title"><h3>博通文件管理系统登录</h3></span>
            </div>
            <div class="panel-body col-md-4 col-md-offset-4">
                <div class="input-group">
                    <span class="input-group-addon">用户：</span><input name="acct" type="text" class="form-control text-input">
                </div>
                <div class="input-group">
                    <span class="input-group-addon">密码：</span><input name="pwd" type="password" class="form-control">
                </div>
                <div class="col-md-8 col-md-offset-2">
                    <button type="submit" class="btn btn-success login-btn"><span class="glyphicon glyphicon-default glyphicon-log-in"></span>登录</button>
                    <button type="button" class="btn btn-danger register-btn"><span class="glyphicon glyphicon-plus"></span>注册</button>
                </div>
            </div>
        </div>
    </form>
</div>
<div class="register-contain">
    <div class="panel-heading col-md-4 col-md-offset-4"><span class="panel-title"><h3>博通文件管理系统注册</h3></span>
    </div>
    <div class="panel-body col-md-4 col-md-offset-4">
        <div class="input-group">
            <span class="input-group-addon">账号：</span><input name="acct" type="text" class="form-control text-input u-acc">
        </div>
        <div class="input-group">
            <span class="input-group-addon">姓名：</span><input name="name" type="text" class="form-control text-input u-name">
        </div>
        <div class="input-group">
            <span class="input-group-addon">密码：</span><input name="pwd" type="password" class="form-control u-pwd">
        </div>
        <div class="input-group">
            <span class="input-group-addon">确认密码：</span><input name="repwd" type="password" class="form-control u-repwd">
        </div>
        <div class="col-md-8 col-md-offset-2">
            <button type="button" class="btn btn-danger rgt-btn"><span class="glyphicon glyphicon-ok"></span>提交注册</button>
            <button type="button" class="btn btn-danger bk-btn"><span class="glyphicon glyphicon-arrow-left"></span>返回登录</button>
        </div>
        <div class="register-msg"></div>
    </div>
</div>
</body>
<script type="text/javascript" src="<%=basePath%>js/jquery-1.8.3.min.js"></script>
<script type="text/javascript" src="<%=basePath%>js/login.js"></script>
<script>
    var host = '<%=basePath%>'
</script>
</html>
