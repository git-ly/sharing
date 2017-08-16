package com.mworld.common;

/**
 * Created by bolom on 2017/8/11.
 */
public class ResponseVo<T> {
    private T data;
    private Integer counts;

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

    public Integer getCounts() {
        return counts;
    }

    public void setCounts(Integer counts) {
        this.counts = counts;
    }

    public ResponseVo() {
    }

    public ResponseVo(T data, Integer counts) {
        this.data = data;
        this.counts = counts;
    }
}
