package com.ssafy.spring.review.dto;

import com.ssafy.spring.review.entity.Review;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;

import java.sql.Timestamp;
import java.util.List;
import java.util.stream.Collectors;


public class ReviewResponse {
    @Data
    @Builder
    public static class ResponseDto {
        private int reviewId;
        private String content;
        private Timestamp createdAt;
        private int score;
        private int combinationPostId;
        private int userId;
    }
}
