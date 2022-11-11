package com.example.demo.domain.user;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Getter
public class UserDto { //

    private long id; // PK
    private String user;
    private String password;
    private String name;
    private String email;

}
