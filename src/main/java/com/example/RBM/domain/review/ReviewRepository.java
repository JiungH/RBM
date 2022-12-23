package com.example.RBM.domain.review;

import com.example.RBM.service.ReviewService;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Long> {

    public Review findReviewByNo(long no);


    public List<Review> findAllByBoardno(int Boardno);
}
