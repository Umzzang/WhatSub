package com.ssafy.spring.comb.dto;

import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
public class CombDto {

    private String combinationId;
    private float kcal;
    private float protein;
    private float sodium;
    private float fat;
    private float sugar;
    private int price;


//    private String allergies;
//
//    private int soft;
//    private int salty;
//    private int chewy;
//    private int sour;
//    private int sweet;
//    private int nutty;
//    private int spicy;
//    private int bland;

}
