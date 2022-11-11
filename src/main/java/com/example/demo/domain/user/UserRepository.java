package com.example.demo.domain.user;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserRepository extends JpaRepository<User, Long> {


    public User findByUserAndPassword(String user, String password);


    @Query(value = "SELECT * FROM user WHERE user=? and password=?", nativeQuery = true)
    public User findMyUser(String user, String password);


}