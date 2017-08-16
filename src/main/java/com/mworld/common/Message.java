package com.mworld.common;

/**
 * Created by bolom on 2017/8/4.
 */
public class  Message<T> {

    private T target;
    private boolean success;
    private String msg;

    public T getTarget() {
        return target;
    }

    public void setTarget(T target) {
        this.target = target;
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public Message() {
    }

    public Message(boolean success, String msg) {
        this.success = success;
        this.msg = msg;
    }

    public Message(T target, boolean success, String msg) {
        this.target = target;
        this.success = success;
        this.msg = msg;
    }
}
