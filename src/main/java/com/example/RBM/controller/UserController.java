package com.example.RBM.controller;

import com.example.RBM.domain.user.User;
import com.example.RBM.domain.user.UserDto;
import com.example.RBM.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.List;

@RestController
@RequiredArgsConstructor
public class UserController {

    @Autowired
    private UserService service;

    @PostMapping("/search/login2")
    public boolean login2(@RequestBody UserDto userDto, HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        User login = null;
        login = service.readUserByUserAndPassword(userDto.getUser(), userDto.getPassword());
        if (login != null) {
            HttpSession session = request.getSession();
            session.setAttribute("user", login.getUser());
            session.setAttribute("manager", login.getManager());
            return true;
        }
        return false;
    }

    @PostMapping("/search/login")
    public boolean login(@RequestParam String user, @RequestParam String password, HttpServletRequest request) {
        User login = null;
        login = service.readUserByUserAndPassword(user, password);
        if (login != null) {
            HttpSession session = request.getSession();
            session.setAttribute("user", login.getUser());
            session.setAttribute("manager", login.getManager());
            return true;
        }
        return false;
    }

    @PostMapping("/search/userLogout")
    public void logout(HttpServletRequest request) {
        HttpSession session = request.getSession();
        session.invalidate();
    }


    @PostMapping("/search/userCreate")
    public User createUser(@RequestBody UserDto userDto) {
        User user = service.creatUser(userDto);
        return user;
    }


    @GetMapping("/search/id")
    public User getUser(@RequestParam long id) {
        User user = service.readUserById(id);
        return user;
    }

    @GetMapping("/search/user")
    public User getUser(@RequestParam String user) {
        User userId = service.readUserByUser(user);
        return userId;
    }

    @GetMapping("/search/userId")
    public int getUserId(@RequestParam String user) {
        List<User> users = service.readUserIdAll(user);
        for (int i = 0; i < users.size(); i++) {
            String id = "";
            id += users.get(i).getUser();
            if (id.equals(user)) {
                return 1;
            }
        }
        return 0;
    }

    @GetMapping("/search/idPassword")
    public User getUserByUserAndPassword(@RequestParam String user, @RequestParam String password) {
        User result = service.readUserByUserAndPassword(user, password);
        return result;
    }

    @GetMapping("/search/userList")
    public List<User> getUserAll() {
        return service.readUserAll();
    }

    @PostMapping("/update/user")
    public void updateUser(@RequestBody UserDto userDto) {
        service.updateUser(userDto);
    }

    @DeleteMapping("/leave/user")
    public List<User> leaveUser(@RequestParam long id) {
        service.deleteUser(id);
        return getUserAll();
    }
}
