package com.qlshouyu.rums.web;

public enum REST_RESULT {

    OK(200, "OK"),
    NOT_AUTH(401, "No have authentication"),
    ERROR(500, "Server error");

    private int code;
    private String value;

    REST_RESULT(int code,String value){
        this.code=code;
        this.value=value;
    }

    public int getCode() {
        return code;
    }

    public String getValue() {
        return value;
    }
}
