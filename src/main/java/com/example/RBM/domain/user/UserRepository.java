package com.example.RBM.domain.user;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {


    public User findByUserAndPassword(String user, String password);

    public User findUserByUserAndPassword(String user, String password);

    public User findByUser(String user);

}