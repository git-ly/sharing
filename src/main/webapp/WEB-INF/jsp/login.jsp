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
    <title>联龙博通简历系统</title>
    <link href="<%=path%>js/bootstrap-3.3.5-dist/css/bootstrap.css" rel="stylesheet" type="text/css">
    <link href="<%=path%>css/bootstrapValidator.min.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" type="text/css" href="<%=basePath%>webuploader-0.1.5/webuploader.css">
    <style>
        body {
            background: url("<%=basePath%>css/images/bg/bg.jpg") no-repeat;
            background-size: 100%;
        }

        /*.panel-title {*/
        /*color: #f88;*/
        /*}*/

        /*@-webkit-keyframes progress-menu {*/
        /*from {*/
        /*transform: scale(0.2);*/
        /*}*/
        /*to {*/
        /*transform: scale(1);*/
        /*}*/
        /*}*/

        /*form {*/
        /*-webkit-animation: progress-menu 2s;*/
        /*}*/

        /*.login-contain,.register-contain{*/
        /*position: absolute;*/
        /*top: 100px;*/
        /*!*left: calc(50% - 550px);*!*/
        /*}*/
        /*.register-contain{*/
        /*!*width: 1000px;*!*/
        /*!*margin-left: 50px;*!*/
        /*-webkit-animation: progress-menu 2s;*/
        /*}*/
        /*.input-group {*/
        /*padding-bottom: 5px;*/
        /*}*/

        /*!*.register-contain .input-group-addon {*!*/
        /*!*width: 100px;*!*/
        /*!*}*!*/

        /*!*.register-msg{*!*/
        /*!*width: 100%;*!*/
        /*!*}*!*/

        /*button span{*/
        /*margin-right: 5px;*/
        /*}*/

    </style>
</head>
<body>
<div class="login-contain col-lg-8 col-lg-offset-2">
    <div class="page-header">
        <h2>登录</h2>
    </div>
    <form action="<%=basePath%>home" class="form-horizontal" method="post">
        <div class="form-group"><label class="col-lg-3 control-label">登录帐号</label>
            <div class="col-lg-5"><input type="text" name="acct" class="form-control"></div>
        </div>
        <div class="form-group"><label class="col-lg-3 control-label">登录密码</label>
            <div class="col-lg-5"><input type="password" name="pwd" class="form-control"></div>
        </div>
        <div class="form-group">
            <div class="col-lg-9 col-lg-offset-4">
                <button type="submit" class="btn btn-primary">登录</button>
                <button type="button" class="btn btn-danger" name="goSignUp">注册</button>
            </div>
        </div>
        <%--<div class="container">--%>
        <%--<div class="panel-heading col-md-4 col-md-offset-4"><span class="panel-title"><h3>博通文件管理系统登录</h3></span>--%>
        <%--</div>--%>
        <%--<div class="panel-body col-md-4 col-md-offset-4">--%>
        <%--<div class="input-group">--%>
        <%--<span class="input-group-addon">用户：</span><input name="acct" type="text" class="form-control text-input">--%>
        <%--</div>--%>
        <%--<div class="input-group">--%>
        <%--<span class="input-group-addon">密码：</span><input name="pwd" type="password" class="form-control">--%>
        <%--</div>--%>
        <%--<div class="col-md-8 col-md-offset-2">--%>
        <%--<button type="submit" class="btn btn-success login-btn"><span class="glyphicon glyphicon-default glyphicon-log-in"></span>登录</button>--%>
        <%--<button type="button" class="btn btn-danger register-btn"><span class="glyphicon glyphicon-plus"></span>注册</button>--%>
        <%--</div>--%>
        <%--</div>--%>
        <%--</div>--%>
    </form>
</div>
<div id="register-contain" class="register-contain col-lg-8 col-lg-offset-2">
    <div class="page-header">
        <h2>注册</h2>
    </div>
    <div class="form-horizontal">
        <div class="form-group"><label class="col-lg-3 control-label">帐号</label>
            <div class="col-lg-5"><input type="text" class="form-control" name="account"></div>
        </div>
        <div class="form-group"><label class="col-lg-3 control-label">姓名</label>
            <div class="col-lg-5"><input type="text" class="form-control" name="username"></div>
        </div>
        <div class="form-group"><label class="col-lg-3 control-label">密码</label>
            <div class="col-lg-5"><input type="text" class="form-control" name="password"></div>
        </div>
        <div class="form-group"><label class="col-lg-3 control-label">确认密码</label>
            <div class="col-lg-5"><input type="text" class="form-control" name="confirmPassword"></div>
        </div>
        <div class="form-group">
            <div class="col-lg-9 col-lg-offset-4">
                <button class="btn btn-primary" name="signUp">提交注册</button>
                <button class="btn btn-danger" name="backLogin">返回登录</button>
            </div>
        </div>
    </div>
    <%--<div class="panel-heading col-md-4 col-md-offset-4"><span class="panel-title"><h3>博通文件管理系统注册</h3></span>--%>
    <%--</div>--%>
    <%--<div class="panel-body col-md-4 col-md-offset-4">--%>
    <%--<div class="input-group">--%>
    <%--<span class="input-group-addon">账号：</span><input name="acct" type="text" class="form-control text-input u-acc">--%>
    <%--</div>--%>
    <%--<div class="input-group">--%>
    <%--<span class="input-group-addon">姓名：</span><input name="name" type="text" class="form-control text-input u-name">--%>
    <%--</div>--%>
    <%--<div class="input-group">--%>
    <%--<span class="input-group-addon">密码：</span><input name="pwd" type="password" class="form-control u-pwd">--%>
    <%--</div>--%>
    <%--<div class="input-group">--%>
    <%--<span class="input-group-addon">确认密码：</span><input name="repwd" type="password" class="form-control u-repwd">--%>
    <%--</div>--%>
    <%--<div class="col-md-8 col-md-offset-2">--%>
    <%--<button type="button" class="btn btn-danger rgt-btn"><span class="glyphicon glyphicon-ok"></span>提交注册</button>--%>
    <%--<button type="button" class="btn btn-danger bk-btn"><span class="glyphicon glyphicon-arrow-left"></span>返回登录</button>--%>
    <%--</div>--%>
    <%--<div class="register-msg"></div>--%>
    <%--</div>--%>
</div>



<div class="col-md-1 col-md-offset-6" id="noticeM" >
        <div class="modal-dialog">
                <div class="modal-content">
                        <div class="modal-header">
                                <span class="close">&times;</span>
                                <h4 class="modal-title">提示</h4>
                            </div>
                        <div class="modal-body">
                            </div>
                        <div class="modal-footer">
                                <button type="button" class="close btn btn-default">确定</button>
                            </div>
                    </div>
            </div>
    </div>
</body>
<script type="text/javascript" src="<%=basePath%>js/jquery-3.2.1.min.js"></script>
<script type="text/javascript" src="<%=basePath%>js/bootstrap-3.3.5-dist/js/bootstrap.js"></script>
<script type="text/javascript" src="<%=basePath%>js/bootstrapValidator.min.js"></script>
<script type="text/javascript" src="<%=basePath%>js/login.js"></script>
<script>
    var host = '<%=basePath%>';

</script>
</html>
