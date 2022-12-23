package com.example.RBM.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {
    @GetMapping("/")
    public String index() {
        return "user/index";
    }

    @GetMapping("/join")
    public String join() {
        return "user/join";
    }

    @GetMapping("/join2")
    public String join2() {
        return "user/join2";
    }

    @GetMapping("/login")
    public String login() {
        return "user/login";
    }

    @GetMapping("/next")
    public String next() {
        return "testWithTeacher/next";
    }

    @GetMapping("/core")
    public String core() {
        return "testWithTeacher/core";
    }

    @GetMapping("/test")
    public String test() {
        return "test";
    }

    @GetMapping("/board")
    public String board() {
        return "board/board";
    }

    @GetMapping("/boardView")
    public String boardView() {
        return "board/boardView";
    }

    @GetMapping("/festival")
    public String festival() {
        return "festival/festival";
    }

    @GetMapping("/boardWrite")
    public String boardWrite() {
        return "board/boardWrite";
    }

    @GetMapping("/boardUpdate")
    public String boardUpdate() {
        return "board/boardUpdate";
    }

    @GetMapping("/todayRunning")
    public String Running() {
        return "todayRunning/todayRunning";
    }

    @GetMapping("/todayRunningWrite")
    public String RunningWrite() {
        return "todayRunning/todayRunningWrite";
    }

    @GetMapping("/message")
    public String Message() {
        return "message/message";
    }

    @GetMapping("/sendMessage")
    public String sendMessage() {
        return "message/sendMessage";
    }

    @GetMapping("/myPage")
    public String myPage() {
        return "mypage/myPage";
    }

    @GetMapping("/userUpdate")
    public String userUpdate() {
        return "mypage/userUpdate";
    }

    @GetMapping("/userMessage")
    public String userMessage() {
        return "mypage/userMessage";
    }

    @GetMapping("/userWrite")
    public String userWrite() {
        return "mypage/userWrite";
    }

    @GetMapping("/userLeave")
    public String userLeave() {
        return "mypage/userLeave";
    }

    @GetMapping("/checkPwAll")
    public String checkPwAll() {
        return "mypage/checkPwAll";
    }
}
