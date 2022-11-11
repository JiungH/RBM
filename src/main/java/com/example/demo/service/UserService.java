package com.example.demo.service;

import com.example.demo.domain.user.User;
import com.example.demo.domain.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    @Autowired
    private UserRepository repository;


    public User readUserById(long id) {
        User user = repository.findById(id).orElseThrow(
                () -> new IllegalArgumentException("사용자를 찾지 못헀습니다.")
        );
        return user;
    }

}
