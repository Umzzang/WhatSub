package com.ssafy.spring.order.entity;

import com.ssafy.spring.comb.entity.Combination;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
public class OrderHistory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int orderHistoryId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="order_id")
    private Orders order;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="combination_id")
    private Combination combination;

    private int count;
}
