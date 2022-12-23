package com.example.RBM.service;

import com.example.RBM.domain.todayRunning.TodayRunning;
import com.example.RBM.domain.todayRunning.TodayRunningDto;
import com.example.RBM.domain.todayRunning.TodayRunningRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TodayRunningService {

    @Autowired
    private TodayRunningRepository repository;

    public TodayRunning createTodayRunning(TodayRunningDto todayRunningDto) {
        TodayRunning todayRunning = new TodayRunning(todayRunningDto);
        return repository.save(todayRunning);
    }

    public List<TodayRunning> readTodayRunningAll() {
        return repository.findAll();
    }

    public TodayRunning readTodayRunning(long no) {
        return repository.findByNo(no);
    }

    public List<TodayRunning> readTodayRunningUser(String user) {
        return repository.findByUser(user);
    }

    @Transactional
    public void updateTodayRunning(TodayRunningDto todayRunningDto) {
        TodayRunning todayRunning = repository.findTodayRunningByNoAndUser(todayRunningDto.getNo(), todayRunningDto.getUser());
        if (todayRunning != null) {
            todayRunning.setTodayRunning(todayRunningDto);
        }
    }

    @Transactional
    public void deleteTodayRunning(long no) {
        repository.deleteById(no);
    }
}
