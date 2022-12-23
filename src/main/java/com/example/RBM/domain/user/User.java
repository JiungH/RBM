package com.example.RBM.domain.user;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.sql.Date;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;

@Table(name = "user")
@Entity  // 테이블
@NoArgsConstructor // 기본 생성자
@Getter // 게터

public class User { // VO (viewOnly)


    @Id
    private long id; // PK
    private String user;
    private String password;
    private String name;
    private String phone;
    private String email;

    private String addressNumber;
    private String address;
    private String addressDetail;
    private String manager;
    private String regDate;

    public User(UserDto userDto) {
        Long nowDate = System.currentTimeMillis();
        java.sql.Timestamp ts = new Timestamp(nowDate);
        String strStamp = String.valueOf(ts.getTime());
        Date date = new Date(Long.parseLong(strStamp));
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd kk:mm:ss");

        this.user = userDto.getUser();
        this.password = userDto.getPassword();
        this.name = userDto.getName();
        this.phone = userDto.getPhone();
        this.email = userDto.getEmail();
        this.addressDetail = userDto.getAddressDetail();
        this.addressNumber = userDto.getAddressNumber();
        this.address = userDto.getAddress();

        this.regDate = String.valueOf(sdf.format(date));
    }

    // update를 setter
    public void setUser(UserDto userDto) {
        this.user = userDto.getUser();
        this.password = userDto.getPassword();
        this.name = userDto.getName();
        this.phone = userDto.getPhone();
        this.email = userDto.getEmail();
        this.addressDetail = userDto.getAddressDetail();
        this.addressNumber = userDto.getAddressNumber();
        this.address = userDto.getAddress();
    }

}
