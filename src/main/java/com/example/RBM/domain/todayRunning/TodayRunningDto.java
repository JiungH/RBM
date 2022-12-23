package com.example.RBM.domain.todayRunning;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class TodayRunningDto {
    private long no;
    private String title;
    private String user;
    private String location;
    private String location2;
    private String meet;
}
