package com.mworld.login.po;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

/**
 * Created by qi on 2017/8/2.
 */
public class User implements Serializable {
    private String id;
    private String acct;//账号
    private String pwd;//密码
    private String name;//姓名
    private int role;//角色 1、超级管理员 2、管理员 3、普通用户
    private Date rgtTime; //注册时间
    private List<Menu> menus;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getAcct() {
        return acct;
    }

    public void setAcct(String acct) {
        this.acct = acct;
    }

    public String getPwd() {
        return pwd;
    }

    public void setPwd(String pwd) {
        this.pwd = pwd;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getRole() {
        return role;
    }

    public void setRole(int role) {
        this.role = role;
    }

    public Date getRgtTime() {
        return rgtTime;
    }

    public void setRgtTime(Date rgtTime) {
        this.rgtTime = rgtTime;
    }

    public List<Menu> getMenus() {
        return menus;
    }

    public void setMenus(List<Menu> menus) {
        this.menus = menus;
    }
}
