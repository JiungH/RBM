package com.example.RBM.domain.message;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class MessageDto {
    private long no;
    private int room;
    private String send;
    private String recv;
    private String title;
    private String content;


}
