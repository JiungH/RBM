package com.example.RBM.domain.review;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.sql.Date;
import java.sql.Time;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;

@Table(name = "Review")
@Entity
@NoArgsConstructor
@Getter

public class Review {
    @Id
    private long no;
    private int boardno;
    private String writer;
    private String user;
    private String content;

    private String regDate;
    private String modDate;

    public Review(ReviewDto reviewDto) {
        Long nowDate = System.currentTimeMillis();
        Timestamp ts = new Timestamp(nowDate);
        String strStamp = String.valueOf(ts.getTime());
        Date date = new Date(Long.parseLong(strStamp));
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd kk:mm:ss");

        this.boardno = reviewDto.getBoardno();
        this.writer = reviewDto.getWriter();
        this.user = reviewDto.getUser();
        this.content = reviewDto.getContent();
        this.regDate = String.valueOf(sdf.format(date));
    }

    public void setReview(ReviewDto reviewDto) {
        Long nowDate = System.currentTimeMillis();
        Timestamp ts = new Timestamp(nowDate);
        String strStamp = String.valueOf(ts.getTime());
        Date date = new Date(Long.parseLong(strStamp));
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd kk:mm:ss");

        this.content = reviewDto.getContent();
        this.modDate = String.valueOf(sdf.format(date));
    }

}
