package com.example.RBM.domain.todayRunning;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.sql.Date;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;

@Table(name = "running")
@Entity
@NoArgsConstructor
@Getter

public class TodayRunning {

    @Id
    private long no;
    private String title;
    private String user;
    private String location;
    private String location2;
    private String meet;
    private String regDate;
    private String modDate;

    public TodayRunning(TodayRunningDto todayRunningDto) {
        Long nowDate = System.currentTimeMillis();
        java.sql.Timestamp ts = new Timestamp(nowDate);
        String strStamp = String.valueOf(ts.getTime());
        Date date = new Date(Long.parseLong(strStamp));
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd kk:mm:ss");

        this.title = todayRunningDto.getTitle();
        this.user = todayRunningDto.getUser();
        this.location = todayRunningDto.getLocation();
        this.location2 = todayRunningDto.getLocation2();
        this.meet = todayRunningDto.getMeet();
        this.regDate = String.valueOf(sdf.format(date));
    }

    public void setTodayRunning(TodayRunningDto todayRunningDto) {
        Long nowDate = System.currentTimeMillis();
        Timestamp ts = new Timestamp(nowDate);
        String strStamp = String.valueOf(ts.getTime());
        Date date = new Date(Long.parseLong(strStamp));
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd kk:mm:ss");

        this.title = todayRunningDto.getTitle();
        this.location = todayRunningDto.getLocation();
        this.location2 = todayRunningDto.getLocation2();
        this.meet = todayRunningDto.getMeet();
        this.modDate = String.valueOf(sdf.format(date));
    }
}
