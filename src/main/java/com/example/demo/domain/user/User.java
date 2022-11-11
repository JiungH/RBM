package com.example.demo.domain.user;

import com.example.demo.util.Timestamp;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name = "user")
@Entity  // 테이블
@NoArgsConstructor // 기본 생성자
@Getter // 게터

public class User extends Timestamp { // VO (viewOnly)


    @Id
    private long id; // PK
    private String user;
    private String password;
    private String name;
    private String email;

    // super.regDate;
    // super.modDate;

    public User(UserDto userDto) {
        this.user = userDto.getUser();
        this.password = userDto.getPassword();
        this.name = userDto.getName();
        this.email = userDto.getEmail();
    }

    // update를 setter
    public void setUser(UserDto userDto) {
        this.password = userDto.getPassword();
        this.name = userDto.getName();
        this.email = userDto.getEmail();
    }

}
