package com.example.RBM.domain.board;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.sql.Date;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;


@Table(name = "board")
@Entity
@NoArgsConstructor
@Getter

public class Board {

    @Id
    private long no;
    private String title;
    private String content;
    private String user;
    private int viewCnt;
    private String regDate;
    private String modDate;

    public Board(BoardDto boardDto) {
        Long nowDate = System.currentTimeMillis();
        java.sql.Timestamp ts = new Timestamp(nowDate);
        String strStamp = String.valueOf(ts.getTime());
        Date date = new Date(Long.parseLong(strStamp));
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd kk:mm:ss");


        this.title = boardDto.getTitle();
        this.content = boardDto.getContent();
        this.user = boardDto.getUser();
        this.regDate = String.valueOf(sdf.format(date));

    }

    public void setBoard(BoardDto boardDto) {
        Long nowDate = System.currentTimeMillis();
        Timestamp ts = new Timestamp(nowDate);
        String strStamp = String.valueOf(ts.getTime());
        Date date = new Date(Long.parseLong(strStamp));
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd kk:mm:ss");

        this.title = boardDto.getTitle();
        this.content = boardDto.getContent();
        this.user = boardDto.getUser();
        this.modDate = String.valueOf(sdf.format(date));
    }

    public void setBoardCnt(BoardDto boardDto) {
        this.viewCnt = boardDto.getViewCnt();
    }


}
