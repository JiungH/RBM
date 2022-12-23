package com.example.RBM.domain.message;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MessageRepository extends JpaRepository<Message, Long> {

    public List<Message> findByRoom(int room);

    public void deleteByNoAndRecv(long no, String recv);

    public void deleteByNoAndSend(long no, String send);

    public List<Message> findByRecv(String Recv);
}
