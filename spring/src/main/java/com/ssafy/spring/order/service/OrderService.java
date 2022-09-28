package com.ssafy.spring.order.service;

import com.ssafy.spring.order.dto.BranchDto;
import com.ssafy.spring.order.dto.OrderResponse;

import java.util.List;

public interface OrderService {
    List<BranchDto> getStores(float minlat, float maxlat, float minlng, float maxlng);
    List<OrderResponse.MenuDto> getMenuList();
    List<OrderResponse.IngredientDto> getIngredientList();

//    OrderDto.responseDto order(OrderDto.requestDto orderRequestDto);
}
