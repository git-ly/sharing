package com.mworld.resume.dao;

import com.mworld.resume.po.Department;
import com.mworld.resume.po.Project;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface DeptProjDao {

    public Integer saveDpt(String dptName);

    public Integer savePrj(String proName);

    public Integer saveDptPo(Department dpt);

    public Integer savePrjPo(Project pro);

    public Integer saveDptPrj(@Param("dptId") Integer dptName, @Param("proId") Integer proId);

    public List<Project> findPrjOfDpt(Integer dptId);

    public Integer findDptCntByName(String dptName);

    public Integer findPrjCntByName(String proName);

    public Integer findDptCntPrj(@Param("dptName") String dptName, @Param("proName") String proName);

    public Integer findDptIdByName(String dptName);

    public Integer findProIdByName(String proName);

    public Integer findDptProCnt(@Param("dptId") Integer dptId, @Param("proId") String proId);

    public Integer saveDptAndPros(@Param("dptId") Integer dptId, @Param("list") List<Integer> list);

    public Integer saveProAndDpts(@Param("proId") Integer proId, @Param("list") List<Integer> list);
}
