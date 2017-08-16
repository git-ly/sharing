package com.mworld.resume.controller;

import com.mworld.common.BaseController;
import com.mworld.common.Message;
import com.mworld.common.NoticeConst;
import com.mworld.resume.service.DeptProjService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Created by bolom on 2017/8/14.
 */
@Controller
@RequestMapping("/organize")
public class DeptProjController extends BaseController {

    @Autowired
    private DeptProjService deptProjService;

    public void getDptList(HttpServletRequest request, HttpServletResponse response){

//        deptProjService.findDptByName()

    }


    public void getProList(HttpServletRequest request, HttpServletResponse response){


    }

    public void checkDptExist(HttpServletRequest request, HttpServletResponse response){
        String dptName = request.getParameter("dptName");
        if (StringUtils.isEmpty(dptName)){
            responseMsg(response, new Message(false, NoticeConst.LACK_PARAMETERS));
            return;
        }
        Integer cnt = deptProjService.findDptCntByName(dptName);
        if (cnt > 0){
            responseMsg(response, new Message(false, NoticeConst.REPEAT_DATA));
            return;
        }

    }

    public void checkProExist(HttpServletRequest request, HttpServletResponse response){

    }

    @RequestMapping(value = "/addDpt", method = RequestMethod.POST)
    public void addDpt(HttpServletRequest request, HttpServletResponse response){
        String dptName = request.getParameter("dptName");

        Integer saveCnt = deptProjService.saveDpt(dptName);
        if (saveCnt == null || saveCnt < 1){
            responseMsg(response, new Message(false, NoticeConst.DATA_SAVE_FAIL));
            return;
        }
        responseMsg(response, new Message(false, NoticeConst.CAN_BE_USE));
    }

    @RequestMapping(value = "/addPro", method = RequestMethod.POST)
    public void addProj(HttpServletRequest request, HttpServletResponse response){


        String proName = request.getParameter("proName");
        if (StringUtils.isEmpty(proName)){
            responseMsg(response, new Message(false, NoticeConst.LACK_PARAMETERS));
            return;
        }
        Integer cnt = deptProjService.findPrjCntByName(proName);
        if (cnt > 0){
            responseMsg(response, new Message(false, NoticeConst.REPEAT_DATA));
            return;
        }
        Integer saveCnt = deptProjService.savePrj(proName);
        if (saveCnt == null || saveCnt < 1){
            responseMsg(response, new Message(false, NoticeConst.DATA_SAVE_FAIL));
            return;
        }
        responseMsg(response, new Message(false, NoticeConst.DATA_SAVE_SUCCESS));
    }
}
