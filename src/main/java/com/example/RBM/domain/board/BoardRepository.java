package com.example.RBM.domain.board;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BoardRepository extends JpaRepository<Board, Long> {

    public Board findBoardByNo(long no);

    public Board findBoardByUser(String user);

    public Board findBoardByNoAndUser(long no, String user);

    public List<Board> findByUser(String user);
}
