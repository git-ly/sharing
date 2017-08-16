<%--
  Created by IntelliJ IDEA.
  User: bolom
  Date: 2017/8/8
  Time: 15:30
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
    <style>
        .person-info-contain{
            text-align: center;
            font-size: 24px;
        }
        .person-info-contain div{
            height: 47px;
            margin-bottom: 5px;
        }
        .person-info-contain div span{
            display: inline-block;
            /*margin-top: 5px;*/
            height: 100%;
            line-height: 45px;
            border: 1px;
        }
        .person-info-contain div span:first-child{
            width: 100px;
            color: #8a6d3b;
            margin-right: 30px;
        }
        .person-info-contain div span:last-child{
            width: 500px;
            font-weight: 100;
            text-align: left;
            border: solid rgba(2, 2, 1, 0.04);
            border-radius: 5px;
            padding-left: 5px;
        }
        .person-info-contain>div:last-child span:last-child{
            height: 180px;
        }
    </style>

</head>
<body>
<div class="person-info-contain">
    <div><span>姓名</span><span></span></div>
    <div><span>帐号</span><span></span></div>
    <div><span>职位</span><span></span></div>
    <div><span>兴趣爱好</span><span></span></div>
    <div><span>个人描述</span><span></span></div>
</div>
</body>
<script>

    $(function () {
        if (loginInfo.name)
                $(".person-info-contain div:eq(0) span:eq(1)").text(loginInfo.name);
        if (loginInfo.acct)
            $(".person-info-contain div:eq(1) span:eq(1)").text(loginInfo.acct);
        if (loginInfo.role){
            var roleName = "";
            switch (loginInfo.role){
                case 1:
                    roleName = "系统管理员";
                    break;
                case 2:
                    roleName = "管理员";
                    break
                case 3:
                    roleName = "用户";
                    break;
            }
            $(".person-info-contain div:eq(2) span:eq(1)").text(roleName);
        }
        $(".person-info-contain div:eq(3) span:eq(1)").text("未填入");
        $(".person-info-contain div:eq(4) span:eq(1)").text("未填入");

    })
</script>
</html>
