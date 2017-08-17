package com.mworld.resume.service.impl;

import com.mworld.resume.dao.DeptProjDao;
import com.mworld.resume.po.Department;
import com.mworld.resume.po.Project;
import com.mworld.resume.service.DeptProjService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DeptProjServiceImpl implements DeptProjService {

    @Autowired
    private DeptProjDao deptProjDao;
    @Override
    public Integer saveDpt(String dptName) {
        return deptProjDao.saveDpt(dptName);
    }

    @Override
    public Integer savePrj(String proName) {
        return deptProjDao.savePrj(proName);
    }

    @Override
    public Integer saveDptPo(Department dpt) {
        return deptProjDao.saveDptPo(dpt);
    }

    @Override
    public Integer savePrjPo(Project pro) {
        return deptProjDao.savePrjPo(pro);
    }

    @Override
    public Integer saveDptPrj(Integer dptId, Integer proId) {
        return deptProjDao.saveDptPrj(dptId, proId);
    }

    @Override
    public List<Project> findPrjOfDpt(Integer dptId) {
        return deptProjDao.findPrjOfDpt(dptId);
    }

    @Override
    public Integer findDptCntByName(String dptName) {
        return deptProjDao.findDptCntByName(dptName);
    }

    @Override
    public Integer findPrjCntByName(String proName) {
        return deptProjDao.findPrjCntByName(proName);
    }

    @Override
    public Integer findDptCntPrj(String dptName, String proName) {
        return deptProjDao.findDptCntPrj(dptName, proName);
    }

    @Override
    public Integer findDptIdByName(String dptName) {
        return deptProjDao.findDptIdByName(dptName);
    }

    @Override
    public Integer findProIdByName(String proName) {
        return deptProjDao.findProIdByName(proName);
    }

    @Override
    public Integer findDptProCnt(Integer dptId, String proId) {
        return deptProjDao.findDptProCnt(dptId, proId);
    }
}
