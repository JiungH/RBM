package com.example.RBM.domain.todayRunning;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TodayRunningRepository extends JpaRepository<TodayRunning, Long> {

    public TodayRunning findTodayRunningByNoAndUser(long no, String user);

    public TodayRunning findByNo(long no);

    public List<TodayRunning> findByUser(String user);

}
