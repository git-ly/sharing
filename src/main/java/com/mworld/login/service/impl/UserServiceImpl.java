package com.mworld.login.service.impl;

import com.mworld.login.dao.UserDao;
import com.mworld.login.po.User;
import com.mworld.login.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by qi on 2017/8/3.
 */
@Service
public class UserServiceImpl implements UserService {
    Logger logger = LoggerFactory.getLogger(this.getClass());
    @Autowired
    private UserDao userDao;

    @Transactional(propagation = Propagation.SUPPORTS)
    public User findUserByAcct(String acct, String pwd) {
        return userDao.findUserByAcct(acct.trim(), pwd.trim());
    }

    @Transactional(propagation = Propagation.SUPPORTS)
    public Integer checkUser(String acct) {
        return userDao.checkUser(acct);
    }

    @Transactional(propagation = Propagation.SUPPORTS)
    public User initUser(String act, String pwd) {
        return userDao.initUser(act, pwd);
    }

    @Override
    @Transactional(propagation = Propagation.SUPPORTS)
    public List<User> findUsers(String keyword, Integer role) {
        return userDao.findUsers(keyword, role);
    }

    @Transactional(propagation = Propagation.REQUIRED)
    public boolean register(User user) {
        Integer count = userDao.registUser(user);
        return count != null && count > 0 ? true : false;
    }

    @Override
    @Transactional(propagation = Propagation.SUPPORTS)
    public Integer findUsersCnt(String keyword, Integer role) {
        return userDao.findUsersCnt(keyword, role);
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public boolean updatePwdById(String newPwd, String id, Integer srcRole) {
        Integer updateRows = userDao.updatePwdById(newPwd, id, srcRole);
        return updateRows != null && updateRows >0 ? true : false;
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public boolean updateUserRole(Integer newRole, String id, Integer tagRole) {
        Integer updateRows = userDao.updateUserRole(newRole, id, tagRole);
        return updateRows != null && updateRows >0 ? true : false;
    }
}
