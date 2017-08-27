package com.mworld.resume.controller;

import com.mworld.common.*;
import com.mworld.resume.po.Department;
import com.mworld.resume.po.Project;
import com.mworld.resume.po.Resume;
import com.mworld.resume.service.DeptProjService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.CollectionUtils;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by bolom on 2017/8/14.
 */
@Controller
@RequestMapping("/organize")
public class DeptProjController extends BaseController {

    @Autowired
    private DeptProjService deptProjService;

    @RequestMapping(value = "{option}/searchList", method = RequestMethod.POST)
    public void getSearchList(HttpServletRequest request, HttpServletResponse response, @PathVariable("option") String option) {
        String startStr = request.getParameter("start");
        String sizeStr = request.getParameter("size");
        Integer start = StringUtils.isEmpty(startStr) ? 1 : Integer.valueOf(startStr);
        Integer size = StringUtils.isEmpty(sizeStr) ? 9 : Integer.valueOf(sizeStr);
        Integer count;
        switch (option) {
            case "dpt":
                String dptName = request.getParameter("dptName");
                count = deptProjService.findDptsCnt(dptName);
                if (null == count || count < 1) {
                    responseMsg(response, new Message<>(false, NoticeConst.NO_DATA_NOTICE));
                    return;
                }
                List<Department> dpts = deptProjService.findDpts(dptName, start, size);
                if (CollectionUtils.isEmpty(dpts)) {
                    responseMsg(response, new Message<>(false, NoticeConst.NO_DATA_NOTICE));
                    return;
                }
                response.setContentType("text/html;charset=UTF-8");
                responseMsg(response, new Message<>(new ResponseVo<>(dpts, count), true, NoticeConst.GET_DATA_NOTICE));
                break;
            case "dpsTotal":
                List<Department> dptsTotal = deptProjService.findDptsTotal();
                if (CollectionUtils.isEmpty(dptsTotal)) {
                    responseMsg(response, new Message<>(false, NoticeConst.NO_DATA_NOTICE));
                    return;
                }
                response.setContentType("text/html;charset=UTF-8");
                responseMsg(response, new Message<>(dptsTotal, true, NoticeConst.GET_DATA_NOTICE));
                break;
            case "proOfDpt":
                String dptId = request.getParameter("ctrId");
                if (StringUtils.isEmpty(dptId)) {
                    responseMsg(response, new Message<>(false, NoticeConst.LACK_PARAMETERS));
                    return;
                }
                count = deptProjService.findPrjOfDptCnt(Integer.valueOf(dptId.trim()));
                if (null == count || count < 1) {
                    responseMsg(response, new Message<>(false, NoticeConst.NO_DATA_NOTICE));
                    return;
                }
                List<Project> projects = deptProjService.findPrjOfDpt(Integer.valueOf(dptId.trim()), start, size);
                if (CollectionUtils.isEmpty(projects)) {
                    responseMsg(response, new Message<>(false, NoticeConst.NO_DATA_NOTICE));
                    return;
                }
                response.setContentType("text/html;charset=UTF-8");
                responseMsg(response, new Message<>(new ResponseVo<>(projects, count), true, NoticeConst.GET_DATA_NOTICE));
                break;
            case "proOfResume":
                String dptId2 = request.getParameter("ctrId");
                String proId = request.getParameter("proId");
                if (StringUtils.isEmpty(dptId2) || StringUtils.isEmpty(proId)) {
                    responseMsg(response, new Message<>(false, NoticeConst.LACK_PARAMETERS));
                    return;
                }
                count = deptProjService.findResumeOfProCnt(Integer.valueOf(dptId2.trim()), Integer.valueOf(proId.trim()));
                if (null == count || count < 1) {
                    responseMsg(response, new Message<>(false, NoticeConst.NO_DATA_NOTICE));
                    return;
                }
                List<Resume> resumes = deptProjService.findResumeOfPro(Integer.valueOf(dptId2.trim()), Integer.valueOf(proId.trim()), start, size);
                if (CollectionUtils.isEmpty(resumes)) {
                    responseMsg(response, new Message<>(false, NoticeConst.NO_DATA_NOTICE));
                    return;
                }
                response.setContentType("text/html;charset=UTF-8");
                responseMsg(response, new Message<>(new ResponseVo<>(resumes, count), true, NoticeConst.GET_DATA_NOTICE));
                break;
        }

    }

    @RequestMapping(value = "{option}/checkExist", method = RequestMethod.POST)
    public void checkExists(HttpServletRequest request, HttpServletResponse response, @PathVariable("option") String option) {
        String checkName = request.getParameter("checkName");
        if (StringUtils.isEmpty(checkName)) {
            responseMsg(response, new ValidMsg(false));
            return;
        }
        int cnt = -1;
        switch (option) {
            case "dpt":
                cnt = deptProjService.findDptCntByName(checkName);
                break;
            case "pro":
                String dptId = request.getParameter("ctrId");
                if (StringUtils.isEmpty(dptId)) {
                    responseMsg(response, new ValidMsg(false));
                    return;
                }
                cnt = deptProjService.findDptPrjCnt(Integer.valueOf(dptId.trim()), checkName);
                break;
            default:
                responseMsg(response, new ValidMsg(false));
                return;
        }

        if (cnt > 0) {
            responseMsg(response, new ValidMsg(false));
            return;
        }
        responseMsg(response, new ValidMsg(true));
    }

    @RequestMapping(value = "{option}/add", method = RequestMethod.POST)
    public void addDptPrj(HttpServletRequest request, HttpServletResponse response, @PathVariable("option") String option) {
        String saveTag = request.getParameter("saveName");

        if (StringUtils.isEmpty(saveTag)) {
            responseMsg(response, new Message(false, NoticeConst.LACK_PARAMETERS));
            return;
        }
        Integer saveCnt = -1;
        switch (option) {
            case "dpt":
                saveCnt = deptProjService.saveDpt(saveTag);
                break;
            case "pro":
                String dptId = request.getParameter("ctrId");
                if (StringUtils.isEmpty(dptId)) {
                    responseMsg(response, new Message(false, NoticeConst.LACK_PARAMETERS));
                    return;
                }
                saveCnt = deptProjService.saveDptPrjMid(Integer.valueOf(dptId.trim()), saveTag);
                break;
            default:
                responseMsg(response, new Message(false, NoticeConst.LACK_PARAMETERS));
                return;
        }
        if (saveCnt != null && saveCnt > 0) {
            responseMsg(response, new Message(true, NoticeConst.DATA_SAVE_SUCCESS));
            return;
        }
        responseMsg(response, new Message(false, NoticeConst.DATA_SAVE_FAIL));
    }


    @RequestMapping(value = "{target}/unionShips")
    public void unionShips(HttpServletRequest request, HttpServletResponse response, @PathVariable("target") String target) {
        String opt = request.getParameter("opt");
        String opts = request.getParameter("opts");
        if (StringUtils.isEmpty(opt) || StringUtils.isEmpty(opts)) {
            responseMsg(response, new Message(false, NoticeConst.LACK_PARAMETERS));
            return;
        }
        String[] args = opts.split(",");
        List<Integer> list = new ArrayList<>();
        for (String item : args) {
            list.add(Integer.valueOf(item));
        }

        Integer cnt = -1;
        switch (target) {
            case "dpt":
                deptProjService.saveDptAndPros(Integer.valueOf(opt), list);
                break;
            case "prj":
                deptProjService.saveProAndDpts(Integer.valueOf(opt), list);
                break;
            default:
                responseMsg(response, new Message(false, NoticeConst.LACK_PARAMETERS));
                return;
        }
        if (cnt > 0) {
            responseMsg(response, new Message(true, NoticeConst.DATA_SAVE_SUCCESS));
            return;
        }
        responseMsg(response, new Message(false, NoticeConst.DATA_SAVE_FAIL));
//        Integer dptId = deptProjService.findDptIdByName(dptName);
//        Integer proId = deptProjService.findProIdByName(proName);
//        if (dptId == null || dptId < 1) {
//            Department dpt = new Department(dptName);
//            Integer depInCnt = deptProjService.saveDptPo(dpt);
//            if (depInCnt == null || depInCnt < 1) {
//                responseMsg(response, new Message(false, NoticeConst.DATA_SAVE_FAIL));
//                return;
//            }
//            dptId = dpt.getId();
//        }
//        if (proId == null || proId < 1){
//            Project pro = new Project(proName);
//            Integer proInCnt = deptProjService.savePrjPo(pro);
//            if (proInCnt == null || proInCnt < 1){
//                responseMsg(response, new Message(false, NoticeConst.DATA_SAVE_FAIL));
//                return;
//            }
//            proId = pro.getId();
//        }

    }
}
