package com.mworld.resume.service.impl;

import com.mworld.resume.dao.DeptProjDao;
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
    public Integer saveDptPrj(String dptName, String proName) {
        return deptProjDao.saveDptPrj(dptName, proName);
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
}
