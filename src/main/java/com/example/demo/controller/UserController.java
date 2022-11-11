package com.example.demo.controller;

import com.example.demo.domain.user.User;
import com.example.demo.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class UserController {

    @Autowired
    private UserService service;


//    public UserController(UserService service){
//        this.service = service;
//    }
    @GetMapping("v1/search/user")
    public User getUser(@RequestParam long id){
        User user = service.readUserById(id);
        return user;
    }



}
