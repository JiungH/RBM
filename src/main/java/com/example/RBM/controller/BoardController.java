package com.example.RBM.controller;

import com.example.RBM.domain.board.Board;
import com.example.RBM.domain.board.BoardDto;
import com.example.RBM.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class BoardController {

    private final BoardService service;


    @PostMapping("/search/writeBoard")
    public Board writeBoard(@RequestBody BoardDto boardDto) {
        Board result = service.createBoard(boardDto);
        return result;
    }

    @GetMapping("/getBoardUser")
    public List<Board> getBoardUser(@RequestParam String user) {
        return service.readBoardUser(user);
    }

    @GetMapping("/search/boardList")
    public List<Board> getBoardAll() {
        return service.readBoardAll();
    }


    @PostMapping("/update/board")
    public void updateBoard(@RequestBody BoardDto boardDto) {
        service.updateBoard(boardDto);
    }

    @GetMapping("/search/boardView")
    public Board getBoard(@RequestParam long no) {
        Board board = service.readBoardByNo(no);
        return board;
    }

    @DeleteMapping("/leave/board")
    public void leaveBoard(@RequestParam long no) {
        service.deleteBoard(no);
    }

    @PostMapping("/update/viewCnt")
    public void updateViewCnt(@RequestBody BoardDto boardDto) {
        service.updateCnt(boardDto);
    }
}