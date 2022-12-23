package com.example.RBM.service;

import com.example.RBM.domain.message.Message;
import com.example.RBM.domain.message.MessageDto;
import com.example.RBM.domain.message.MessageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
public class MessageService {

    @Autowired
    private MessageRepository repository;

    public Message createMessage(MessageDto messageDto) {
        Message message = new Message(messageDto);
        return repository.save(message);
    }

    public List<Message> getMessage(int room) {
        List<Message> messages = repository.findByRoom(room);
        return messages;
    }

    public List<Message> getMessageRecv(String recv) {
        List<Message> messages = repository.findByRecv(recv);
        return messages;
    }

    @Transactional
    public void deleteRecvMessage(long no, String recv) {
        repository.deleteByNoAndRecv(no, recv);
    }


    @Transactional
    public void deleteSendMessage(long no, String send) {
        repository.deleteByNoAndSend(no, send);
    }
}

