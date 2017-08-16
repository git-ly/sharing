package com.mworld.login.interceptor;

import com.mworld.common.aop.LogAop;
import com.mworld.common.exception.NotLoginException;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

/**
 * Created by bolom on 2017/8/10.
 */

@Component
@Aspect
public class LogInterceptor extends LogAop {
    Logger logger = LoggerFactory.getLogger(this.getClass());

    @Override
    @Pointcut("execution(public * com.mworld.login.controller.UserController.*(..))")
    public void beforePointCut() {
        super.beforePointCut();
    }

    //    @Override
    @AfterThrowing(throwing = "e", pointcut = "within(com.mworld.*.controller.*)")
    public void afterThrowPointCut(NotLoginException e) {
        super.afterThrowPointCut(e);
    }
}
