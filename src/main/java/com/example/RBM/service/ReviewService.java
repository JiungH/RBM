package com.example.RBM.service;

import com.example.RBM.domain.board.Board;
import com.example.RBM.domain.review.Review;
import com.example.RBM.domain.review.ReviewDto;
import com.example.RBM.domain.review.ReviewRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ReviewService {

    @Autowired
    private ReviewRepository repository;

    public Review createReview(ReviewDto reviewDto) {
        Review review = new Review(reviewDto);
        return repository.save(review);
    }

    public List<Review> readReviewAll() {
        return repository.findAll();
    }


    public List<Review> readReviewBoard(int boardno) {
        return repository.findAllByBoardno(boardno);
    }

    @Transactional
    public void updateReview(ReviewDto reviewDto) {
        Review review = repository.findReviewByNo(reviewDto.getNo());
        if (review != null) {
            review.setReview(reviewDto);
        }
    }

    @Transactional
    public void deleteReview(long no) {
        repository.deleteById(no);
    }
}
