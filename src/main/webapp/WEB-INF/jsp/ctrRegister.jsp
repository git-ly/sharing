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
    <link href="<%=basePath%>css/bootstrap-select.min.css">
    <style>
        .add-dom {
            text-align: center;
            margin-top: 50px;
        }

        .add-dom .glyphicon.glyphicon-plus {
            width: 250px;
            height: 250px;
            line-height: 250px;
            text-align: center;
            font-size: 50px;
            border: 4px solid rgba(2, 2, 2, 0.2);
            color: rgba(2, 2, 2, 0.2);
        }

        .add-dom div{
            display: inline-block;
            width: 260px;
            text-align: center;
            font-size: 50px;
            margin: 50px;
            color: rgba(2, 2, 2, 0.2);
        }

        .add-dom div:first-child:after {
            content: '添加工程';
        }

        .add-dom div:last-child:after {
            content: '添加项目';
        }
    </style>
</head>
<body>
<div class="add-dom">
    <div>
        <span class="glyphicon glyphicon-plus"></span>
    </div>
    <div>
        <span class="glyphicon glyphicon-plus"></span>
    </div>
</div>
<div id="alertModal" class="modal fad" tabindex="-1" role="alertdialog" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title">添加中心</h4>
            </div>
            <div class="modal-text">
                <div class="input-group">
                    <label for="" class="input-group-addon">元素名称</label>
                    <input type="text" class="form-control" name="checkName">
                </div>
                <small class="help-block"></small>
            </div>
            <div class="modal-footer">
                <button class="btn btn-default" type="button" data-dismiss="modal">关闭</button>
                <button class="btn btn-primary commit-btn" type="button">提交</button>
            </div>
        </div>
    </div>
</div>

<div id="projectModal" class="modal fad" tabindex="-1" role="alertdialog" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title">添加新项目</h4>
            </div>
            <div class="modal-text">
                <div class="input-group">
                    <label for="" class="input-group-addon">元素名称</label>
                    <input type="text" class="form-control" name="checkName">
                </div>
                <small class="help-block"></small>
                <input type="checkbox">
            </div>
            <div class="modal-footer">
                <button class="btn btn-default" type="button" data-dismiss="modal">关闭</button>
                <button class="btn btn-primary commit-btn" type="button">提交</button>
            </div>
        </div>
    </div>
</div>

</body>
<%--<script type="text/javascript" src="<%=basePath%>js/jquery-3.2.1.min.js"></script>--%>
<%--<script type="text/javascript" src="<%=basePath%>js/bootstrap-3.3.5-dist/js/bootstrap.min.js"></script>--%>
<%--<script type="text/javascript" src="<%=basePath%>js/bootstrapValidator.min.js"></script>--%>
<script type="text/javascript" src="<%=basePath%>js/common.js"></script>
<script type="text/javascript" src="<%=basePath%>js/ctrRegister.js"></script>
</html>
