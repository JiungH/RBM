package com.example.RBM.controller;

import com.example.RBM.domain.message.Message;
import com.example.RBM.domain.message.MessageDto;
import com.example.RBM.service.MessageService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class MessageController {

    private final MessageService service;

    @PostMapping("/writeMessage")
    public Message writeMessage(@RequestBody MessageDto messageDto) {
        Message message = service.createMessage(messageDto);
        return message;
    }

    @GetMapping("/getMessage")
    public List<Message> getMessage(@RequestParam int room) {
        return service.getMessage(room);
    }

    @GetMapping("/getMessageUser")
    public List<Message> getMessageUser(@RequestParam String recv) {
        return service.getMessageRecv(recv);
    }

    @DeleteMapping("/deleteRecvMessage")
    public void deleteRecvMessage(@RequestParam long no, @RequestParam String recv) {
        service.deleteRecvMessage(no, recv);
    }

    @DeleteMapping("/deleteSendMessage")
    public void deleteSendMessage(@RequestParam long no, @RequestParam String send) {
        service.deleteSendMessage(no, send);
    }
}
