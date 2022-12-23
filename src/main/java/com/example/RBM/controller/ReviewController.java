package com.example.RBM.controller;

import com.example.RBM.domain.board.Board;
import com.example.RBM.domain.review.Review;
import com.example.RBM.domain.review.ReviewDto;
import com.example.RBM.service.ReviewService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class ReviewController {

    @Autowired
    private ReviewService service;


    @PostMapping("/writeReview")
    public Review writeReview(@RequestBody ReviewDto reviewDto) {
        Review result = service.createReview(reviewDto);
        return result;
    }

    @GetMapping("/ReviewAllList")
    public List<Review> getReviewAll() {
        return service.readReviewAll();
    }

    @GetMapping("/ReviewList")
    public List<Review> getReviewBoard(@RequestParam int boardno) {
        return service.readReviewBoard(boardno);
    }

    @PostMapping("/updateReview")
    public void updateReview(@RequestBody ReviewDto reviewDto) {
        service.updateReview(reviewDto);
    }

    @DeleteMapping("/deleteReview")
    public void leaveReview(@RequestParam long no) {
        service.deleteReview(no);
    }


}
