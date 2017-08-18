package com.mworld.resume.po;

public class Project {
    private Integer id;
    private String proName;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getProName() {
        return proName;
    }

    public void setProName(String proName) {
        this.proName = proName;
    }

    public Project() {
    }

    public Project(String proName) {
        this.proName = proName;
    }
}
