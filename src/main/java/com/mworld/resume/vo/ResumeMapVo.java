package com.mworld.resume.vo;

import com.mworld.resume.po.Resume;

import java.util.List;

public class ResumeMapVo extends Resume {

    //    private List<DepartProjectVo> dps;
//
//    public List<DepartProjectVo> getDps() {
//        return dps;
//    }
//
//    public void setDps(List<DepartProjectVo> dps) {
//        this.dps = dps;
//    }
    private Integer dptId;
    private Integer proId;
    private String dptName;
    private String proName;
    private String keyword;

    public Integer getDptId() {
        return dptId;
    }

    public void setDptId(Integer dptId) {
        this.dptId = dptId;
    }

    public Integer getProId() {
        return proId;
    }

    public void setProId(Integer proId) {
        this.proId = proId;
    }

    public String getDptName() {
        return dptName;
    }

    public void setDptName(String dptName) {
        this.dptName = dptName;
    }

    public String getProName() {
        return proName;
    }

    public void setProName(String proName) {
        this.proName = proName;
    }

    public String getKeyword() {
        return keyword;
    }

    public void setKeyword(String keyword) {
        this.keyword = keyword;
    }
}
