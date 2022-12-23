package com.example.RBM.domain.user;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class UserDto { //

    private long id; // PK
    private String user;
    private String password;
    private String name;
    private String phone;
    private String email;
    private String addressNumber;
    private String address;
    private String addressDetail;

}
