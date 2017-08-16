package com.mworld.login.service;

import com.mworld.login.po.User;

import java.util.List;

/**
 * Created by qi on 2017/8/3.
 */
public interface UserService {
    public User findUserByAcct(String acct, String pwd);

    public boolean register(User user);

    public Integer checkUser(String acct);

    public User initUser(String act, String pwd);

    public List<User> findUsers(String keyword, Integer role);

    public Integer findUsersCnt(String keyword, Integer role);

    public boolean updatePwdById(String newPwd, String id, Integer srcRole);

    public boolean updateUserRole( Integer newRole, String id, Integer tagRole);
}
