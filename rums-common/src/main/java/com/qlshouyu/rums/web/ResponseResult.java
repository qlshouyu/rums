package com.qlshouyu.rums.web;

public class ResponseResult {
    private int code;
    private Object data;
    private String tip;

    public ResponseResult() {
        this(REST_RESULT.OK, REST_RESULT.OK.getValue(), "成功");
    }

    public ResponseResult(Object data) {
        this(REST_RESULT.OK, data, "成功");
    }

    public ResponseResult(REST_RESULT result, Object data, String tip) {
        this.code = result.getCode();
        this.data = data;
        this.tip = tip;
    }

    public ResponseResult(String tip) {
        this(REST_RESULT.ERROR, REST_RESULT.ERROR.getValue(), "未知的服务器错误");
    }

}

