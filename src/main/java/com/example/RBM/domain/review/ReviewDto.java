package com.example.RBM.domain.review;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Timestamp;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter

public class ReviewDto {
    private long no;
    private int boardno;
    private String writer;
    private String user;
    private String content;

}
