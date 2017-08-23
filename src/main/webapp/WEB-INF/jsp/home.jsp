<%@ page import="org.springframework.util.StringUtils" %><%--
  Created by IntelliJ IDEA.
  User: qi
  Date: 2017/8/3
  Time: 16:42
  To change this template use File | Settings | File Templates.
--%>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";
//    String loginRole = request.getSession().getAttribute("user_role") == null ? null : request.getSession().getAttribute("user_role").toString();

%>
<%@ page contentType="text/html;charset=UTF-8" language="java" pageEncoding="UTF-8" %>
<%--<%@ taglib prefix="c" uri="http://java.sun.com/jstl/core" %>--%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <title>home</title>
    <link href="<%=path%>js/bootstrap-3.3.5-dist/css/bootstrap.css" rel="stylesheet" type="text/css">
    <link href="<%=path%>css/bootstrapValidator.min.css" rel="stylesheet" type="text/css">
    <style>
        .loading{
            display: inline-block;
            background: url("/css/images/gif/loding.gif");
            background-size: 89px 90px;
            width: 89px;
            height: 90px;
        }

        .log_head {
            height: 80px;
            width: 100%;
            background: rgba(4, 5, 4, 0.05);
        }

        .menu-aside {
            background: rgba(4, 5, 9, 0.02);
            height: 560px;
        }

        .log_head div {
            display: inline-block;
        }

        .logo-div {
            width: 120px;
            margin-top: 5px;
            margin-left: 20px;
        }

        .logout-div {
            width: 200px;
            text-align: right;
        }

        .theme-div {
            width: calc(100% - 400px);
            text-align: center;
            font-size: 42px;
            font-family: 黑体;
            line-height: 80px;
            color: #8c8c8c;
        }

        .logo_browse {
            display: inline-block;
            width: 60px;
            height: 60px;
            background: url("<%=basePath%>css/images/logo/logo3.png") no-repeat;
            background-size: 60px 60px;
        }

        /*.log_head div{*/
        /*border: 1px solid black;*/
        /*}*/

        .box {
            position: absolute;
            right: 60px;
        }

        .box li {
            list-style: none;
            display: inline-block;
            padding: 5px 5px;
            margin: 5px 2px;
            border: 1px solid #cff6f4;
            border-radius: 5px;
        }

        .box li.active {
            border-color: #ebb822;
            background-color: blanchedalmond;
        }

        .modal-text {
            margin: 20px 20px 20px 20px;
            font-size: 16px;
        }

        .info-tip{
            height: 16px;
        }
    </style>
</head>
<body>
<div class="log_head">
    <div class="logo-div">
        <span class="logo logo_browse"></span></div>
    <div class="theme-div">
        <span>联龙博通简历管理系统</span>
    </div>
    <div class="logout-div">
        <a class="btn-group">
            <button class="btn btn-primary reset-pwd-btn" type="button">修改密码</button>
        </a>
        <a class="btn-group" href="<%=basePath%>logout">
            <button class="btn btn-danger" type="button">登出</button>
        </a></div>
</div>

<aside class="col-md-2 menu-aside">
    <ul class="nav nav-pills nav-stacked menu"></ul>
</aside>

<div class="col-md-9 main-contain">

</div>

<div></div>

<div id="notice-contain"></div>
<%--<div class="modal fad noticeModal" id="noticeModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">--%>
<%--<div class="modal-dialog">--%>
<%--<div class="modal-content">--%>
<%--<div class="modal-header">--%>
<%--<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>--%>
<%--<h4 class="modal-title" id="myModalLabel">Notice</h4>--%>
<%--</div>--%>
<%--<div class="modal-text">text</div>--%>
<%--<div class="modal-footer">--%>
<%--<button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>--%>
<%--<button type="button" class="btn btn-primary" id="sure-btn">提交更改</button>--%>
<%--</div>--%>
<%--</div>--%>
<%--</div>--%>
<%--</div>--%>
</body>
<script type="text/javascript" src="<%=basePath%>js/jquery-3.2.1.min.js"></script>
<script type="text/javascript" src="<%=basePath%>js/common.js"></script>
<script type="text/javascript" src="<%=basePath%>js/home.js"></script>
<script type="text/javascript" src="<%=basePath%>js/bootstrap-3.3.5-dist/js/bootstrap.min.js"></script>
<script type="text/javascript" src="<%=basePath%>js/bootstrapValidator.min.js"></script>

<script>
    var host = "<%=basePath%>";
    var loginInfo = JSON.parse('${login_user}');
</script>

</html>
