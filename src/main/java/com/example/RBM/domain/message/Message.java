package com.example.RBM.domain.message;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.sql.Date;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;

@Table(name = "message")
@Entity
@NoArgsConstructor
@Getter
public class Message {
    @Id
    private long no;
    private int room;
    private String send;
    private String recv;
    private String title;
    private String content;
    private String regDate;


    public Message(MessageDto messageDto) {
        Long nowDate = System.currentTimeMillis();
        Timestamp ts = new Timestamp(nowDate);
        String strStamp = String.valueOf(ts.getTime());
        Date date = new Date(Long.parseLong(strStamp));
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd kk:mm:ss");

        this.room = messageDto.getRoom();
        this.send = messageDto.getSend();
        this.recv = messageDto.getRecv();
        this.title = messageDto.getTitle();
        this.content = messageDto.getContent();
        this.regDate = String.valueOf(sdf.format(date));

    }


}
