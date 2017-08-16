package com.mworld.login.util;

/**
 * Created by bolom on 2017/8/15.
 */
public enum RoleType {
    SYSTEM("系统管理员", 1), ADMIN("管理员", 2), USER("用户", 3);
    private String zhName;
    private int value;

    private RoleType(String zhName, int value) {
        this.zhName = zhName;
        this.value = value;
    }

    public String getZhName() {
        return zhName;
    }

    public int getValue() {
        return value;
    }

}

