package com.example.demo.domain.user;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class UserDto  {
    private long id;
    private String user;
    private String password;
    private String name;
    private String email;
}
