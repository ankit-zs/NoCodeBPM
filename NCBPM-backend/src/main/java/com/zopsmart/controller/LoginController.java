package com.zopsmart.controller;


import com.zopsmart.dto.UserDTO;
import com.zopsmart.dto.responseBodyDTO;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/")
public class LoginController {

    @PostMapping("/login")
    public ResponseEntity<?> checkUserAuthentication(@RequestBody UserDTO user){
        System.out.println("login api hit");
        if(user.getEmail().equals("ankit@gmail.com") && user.getPassword().equals("1234")){
            responseBodyDTO loginSuccess = new responseBodyDTO("login succcess");
            return ResponseEntity.status(HttpStatus.OK).body(loginSuccess);
        }
        else{
            responseBodyDTO loginFailed = new responseBodyDTO("please enter correct credentials");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(loginFailed);
        }
    }
    @GetMapping("/login")
    public ResponseEntity<?> checkUserAuthentication() {
        System.out.println("login api hit");
        return ResponseEntity.status(HttpStatus.OK).body("backend is working");
    }
}
