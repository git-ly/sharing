package com.mworld.login.dao;


import com.mworld.login.po.User;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * Created by qi on 2017/8/3.
 */
public interface UserDao {

    public Integer registUser(User user);

    public User findUserByAcct(@Param("acct") String acct, @Param("pwd") String pwd);

    public Integer checkUser(@Param("acct") String acct);

    public User initUser(@Param("acct") String acct, @Param("pwd") String pwd);

    public List<User> findUsers(@Param("keyword") String keyword, @Param("role") Integer role);

    public Integer findUsersCnt(@Param("keyword") String keyword, @Param("role") Integer role);

    public Integer updatePwdById(@Param("newPwd") String newPwd, @Param("id") String id, @Param("tagRole") Integer tagRole);

    public Integer updatePwd(@Param("id") String id, @Param("oldPwd") String oldPwd, @Param("newPwd") String newPwd);

    public Integer updateUserRole(@Param("newRole") Integer newRole, @Param("id") String id, @Param("tagRole") Integer tagRole);

}
