package com.example.RBM.controller;

import com.example.RBM.domain.todayRunning.TodayRunning;
import com.example.RBM.domain.todayRunning.TodayRunningDto;
import com.example.RBM.service.TodayRunningService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class TodayRunningController {

    @Autowired
    private TodayRunningService service;

    @PostMapping("/writeTodayRunning")
    public TodayRunning writeTodayRunning(@RequestBody TodayRunningDto todayRunningDto) {
        TodayRunning result = service.createTodayRunning(todayRunningDto);
        return result;
    }

    @GetMapping("/listTodayRunning")
    public List<TodayRunning> getTodayRunningAll() {
        return service.readTodayRunningAll();
    }

    @GetMapping("/getTodayRunningUser")
    public List<TodayRunning> readTodayRunningUser(@RequestParam String user) {
        return service.readTodayRunningUser(user);
    }

    @GetMapping("/getRunning")
    public TodayRunning getTodayRunning(@RequestParam long no) {
        return service.readTodayRunning(no);
    }

    @PostMapping("/updateTodayRunning")
    public void updateTodayRunning(@RequestBody TodayRunningDto todayRunningDto) {
        service.updateTodayRunning(todayRunningDto);
    }

    @DeleteMapping("/deleteTodayRunning")
    public void deleteTodayRunning(@RequestParam long no) {
        service.deleteTodayRunning(no);
    }

}
