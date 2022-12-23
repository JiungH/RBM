package com.example.RBM.service;

import com.example.RBM.domain.user.User;
import com.example.RBM.domain.user.UserDto;
import com.example.RBM.domain.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {
    @Autowired
    private UserRepository repository;



   public User creatUser(UserDto userDto){
       User user = new User(userDto);
       repository.save(user);
       return user;
   }


    public User readUserById(long id) {
        User user = repository.findById(id).orElseThrow(
                () -> new IllegalArgumentException("사용자를 찾지 못헀습니다.")
        );
        return user;
    }

    public User readUserByUser(String user) {
        User userId = repository.findByUser(user);
        return userId;
    }



    public User readUserByUserAndPassword(String user , String password){
        User result = repository.findUserByUserAndPassword(user, password);
        return  result;
    }


    public List<User> readUserAll(){
        return repository.findAll();
    }

    public List<User> readUserIdAll(String user) {
        return repository.findAll();
    }

    @Transactional
    public void updateUser(UserDto userDto){
        User user = readUserByUser(userDto.getUser());
        if(user != null){
            user.setUser(userDto);
        }
    }

    @Transactional
    public void deleteUser(long id) {
        repository.deleteById(id);
    }
}
