package com.mworld.common.aop;

import com.mworld.common.annotation.Mark;
import com.mworld.common.exception.NotLoginException;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.reflect.MethodSignature;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.util.StringUtils;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.lang.annotation.Annotation;

public class LogAop {

    Logger logger = LoggerFactory.getLogger(this.getClass());

    public void beforePointCut(){}


    @Before(value = "beforePointCut()")
    public void before(JoinPoint joinPoint){
        MethodSignature ms = (MethodSignature)joinPoint.getSignature();
        Annotation[] annotations = ms.getMethod().getAnnotations();
        for (Annotation a : annotations){
            if (a instanceof Mark){
                Mark mark = ms.getMethod().getAnnotation(Mark.class);
                if (!StringUtils.isEmpty(mark.value()))
                    logger.info("|----------->程序当前正在执行{}操作",mark.value());
            }
        }
    }


    public void afterThrowPointCut(NotLoginException e){
        logger.info("登录异常：", e);
    }
}
