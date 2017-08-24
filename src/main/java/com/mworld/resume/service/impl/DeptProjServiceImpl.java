package com.mworld.resume.service.impl;

import com.mworld.resume.dao.DeptProjDao;
import com.mworld.resume.po.Department;
import com.mworld.resume.po.Project;
import com.mworld.resume.po.Resume;
import com.mworld.resume.service.DeptProjService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class DeptProjServiceImpl implements DeptProjService {

    @Autowired
    private DeptProjDao deptProjDao;
    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public Integer saveDpt(String dptName) {
        return deptProjDao.saveDpt(dptName);
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public Integer savePrj(String proName) {
        return deptProjDao.savePrj(proName);
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public Integer saveDptPo(Department dpt) {
        return deptProjDao.saveDptPo(dpt);
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public Integer savePrjPo(Project pro) {
        return deptProjDao.savePrjPo(pro);
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public Integer saveDptPrj(Integer dptId, Integer proId) {
        return deptProjDao.saveDptPrj(dptId, proId);
    }

    @Override
    @Transactional(propagation = Propagation.SUPPORTS)
    public List<Project> findPrjOfDpt(Integer dptId) {
        return deptProjDao.findPrjOfDpt(dptId);
    }

    @Override
    @Transactional(propagation = Propagation.SUPPORTS)
    public Integer findDptCntByName(String dptName) {
        return deptProjDao.findDptCntByName(dptName);
    }

    @Override
    @Transactional(propagation = Propagation.SUPPORTS)
    public Integer findPrjCntByName(String proName) {
        return deptProjDao.findPrjCntByName(proName);
    }

    public Integer findDptCntPrj(String dptName, String proName) {
        return deptProjDao.findDptCntPrj(dptName, proName);
    }

    @Override
    @Transactional(propagation = Propagation.SUPPORTS)
    public Integer findDptIdByName(String dptName) {
        return deptProjDao.findDptIdByName(dptName);
    }

    @Override
    @Transactional(propagation = Propagation.SUPPORTS)
    public Integer findProIdByName(String proName) {
        return deptProjDao.findProIdByName(proName);
    }

    @Override
    @Transactional(propagation = Propagation.SUPPORTS)
    public Integer findDptProCnt(Integer dptId, String proId) {
        return deptProjDao.findDptProCnt(dptId, proId);
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public Integer saveDptAndPros(Integer dptId, List<Integer> list) {
        return deptProjDao.saveDptAndPros(dptId, list);
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public Integer saveProAndDpts(Integer proId, List<Integer> list) {
        return deptProjDao.saveProAndDpts(proId, list);
    }

    @Override
    @Transactional(propagation = Propagation.SUPPORTS)
    public List<Department> findDpts(String dptName) {
        return deptProjDao.findDpts(dptName);
    }

    @Override
    public List<Resume> findResumeOfPro(Integer ctrId, Integer proId) {
        return deptProjDao.findResumeOfPro(ctrId, proId);
    }
}
