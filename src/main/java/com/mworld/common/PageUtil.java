package com.mworld.common;

public class PageUtil {
    private final static int DEFAULT_PAGE = 1;
    private final static int DEFAULT_SIZE = 10;

    private Integer page;
    private Integer size;
    private Integer start;

    public PageUtil(Integer page, Integer size) {
        if (page == null || page < 1)
            page = DEFAULT_PAGE;
        if (size == null || size < 1)
            size = DEFAULT_SIZE;
        this.page = page;
        this.size = size;
    }

    public Integer getPage() {
        if (page == null || page < 1) {
            return DEFAULT_PAGE;
        }
        return page;
    }

    public void setPage(Integer page) {
        this.page = page;
    }

    public Integer getSize() {
        if (size == null || size < 1)
            return DEFAULT_SIZE;
        return size;
    }

    public void setSize(Integer size) {
        this.size = size;
    }

    public Integer getStart() {
        setStart();
        return start;
    }

    private void setStart() {
        start = (getPage() - 1) * getSize();
    }

}
