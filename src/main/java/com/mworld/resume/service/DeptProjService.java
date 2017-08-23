package com.mworld.resume.service;

import com.mworld.resume.po.Department;
import com.mworld.resume.po.Project;

import java.util.List;

public interface DeptProjService {

    public Integer saveDpt(String dptName);

    public Integer savePrj(String proName);

    public Integer saveDptPo(Department dpt);

    public Integer savePrjPo(Project pro);

    public Integer saveDptPrj(Integer dptId, Integer proId);

    public List<Project> findPrjOfDpt(Integer dptId);

    public Integer findDptCntByName(String dptName);

    public Integer findPrjCntByName(String proName);

    public Integer findDptCntPrj(String dptName, String proName);

    public Integer findDptIdByName(String dptName);

    public Integer findProIdByName(String proName);

    public Integer findDptProCnt(Integer dptId, String proId);

    public Integer saveDptAndPros(Integer dptId, List<Integer> list);

    public Integer saveProAndDpts(Integer proId, List<Integer> list);

    public List<Department> findDpts(String dptName);
}
