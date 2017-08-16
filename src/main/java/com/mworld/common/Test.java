package com.mworld.common;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Test {
//    Logger logger = LoggerFactory.getLogger(this.getClass());

    public void doTest(){
        PageUtil pageUtil = new PageUtil(2,-5);
        pageUtil.setPage(-3);
        System.out.println(pageUtil.getStart());
    }

    public static void main(String[] args){
        Test test = new Test();
        test.doTest();;
    }
}
