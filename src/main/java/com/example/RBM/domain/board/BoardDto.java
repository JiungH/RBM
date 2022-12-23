package com.example.RBM.domain.board;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Timestamp;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter

public class BoardDto {
    private long no; // PK
    private String title;
    private String content;
    private String user;
    private int viewCnt;
}
