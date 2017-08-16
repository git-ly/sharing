package com.mworld.resume.dao;

import com.mworld.resume.po.Project;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface DeptProjDao {

    public Integer saveDpt(String dptName);

    public Integer savePrj(String proName);

    public Integer saveDptPrj(@Param("dptName") String dptName, @Param("proName") String proName);

    public List<Project> findPrjOfDpt(Integer dptId);

    public Integer findDptCntByName(String dptName);

    public Integer findPrjCntByName(String proName);

    public Integer findDptCntPrj(@Param("dptName") String dptName, @Param("proName") String proName);
}
