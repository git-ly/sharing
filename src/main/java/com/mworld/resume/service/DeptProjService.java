package com.mworld.resume.service;

import com.mworld.resume.po.Project;

import java.util.List;

public interface DeptProjService {

    public Integer saveDpt(String dptName);

    public Integer savePrj(String proName);

    public Integer saveDptPrj(String dptName, String proName);

    public List<Project> findPrjOfDpt(Integer dptId);

    public Integer findDptCntByName(String dptName);

    public Integer findPrjCntByName(String proName);

    public Integer findDptCntPrj(String dptName, String proName);
}
