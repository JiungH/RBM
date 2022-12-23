package com.example.RBM.service;

import com.example.RBM.domain.board.Board;
import com.example.RBM.domain.board.BoardDto;
import com.example.RBM.domain.board.BoardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
public class BoardService {


    @Autowired
    private BoardRepository repository;

    public Board createBoard(BoardDto boardDto) {
        Board board = new Board(boardDto);
        return repository.save(board);
    }

    public List<Board> readBoardAll() {
        return repository.findAll();
    }

    public List<Board> readBoardUser(String user) {
        return repository.findByUser(user);
    }

    public Board readBoardByUser(String user) {
        Board board = repository.findBoardByUser(user);
        return board;
    }

    public Board readBoardByNo(long no) {
        Board board = repository.findById(no).orElseThrow(() -> new IllegalArgumentException("사용자를 찾지 못했습니다."));
        return board;
    }


    @Transactional
    public void updateBoard(BoardDto boardDto) {
        Board board = repository.findBoardByNoAndUser(boardDto.getNo(), boardDto.getUser());
        if (board != null) {
            board.setBoard(boardDto);
        }
    }

    @Transactional
    public void deleteBoard(long no) {
        repository.deleteById(no);
    }

    @Transactional
    public void updateCnt(BoardDto boardDto) {
        Board board = repository.findBoardByNo(boardDto.getNo());
        if (board != null) {
            board.setBoardCnt(boardDto);
        }
    }


}
