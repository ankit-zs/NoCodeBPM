package com.zopsmart.dto;

public class responseBodyDTO {
    private String message;

    public responseBodyDTO() {
    }

    public responseBodyDTO(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
