package com.ssafy.spring.order.service;

import com.ssafy.spring.comb.repository.IngredientRepository;
import com.ssafy.spring.comb.repository.MenuRepository;
import com.ssafy.spring.order.dto.BranchDto;
//import com.ssafy.spring.order.dto.OrderDto;
import com.ssafy.spring.order.dto.OrderResponse;
import com.ssafy.spring.order.repository.BranchRepositoryCustom;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private BranchRepositoryCustom branchRepository;
    @Autowired
    private MenuRepository menuRepository;
    @Autowired
    private IngredientRepository ingredientRepository;

    @Override
    public List<BranchDto> getStores(float minlat, float maxlat, float minlng, float maxlng) {
        return branchRepository.findByLatAndLng(minlat, maxlat, minlng, maxlng);
    }

//    @Override
//    public List<OrderResponse.Menu> getMenuList() {
//        return null;
//    }

    @Override
    public List<OrderResponse.MenuDto> getMenuList() {
        return menuRepository.findAll().stream().map(OrderResponse.MenuDto::new).collect(Collectors.toList());
    }

    @Override
    public List<OrderResponse.IngredientDto> getIngredientList() {
        return ingredientRepository.findAll().stream().map(OrderResponse.IngredientDto::new).collect(Collectors.toList());
    }

//    @Override
//    public OrderDto.responseDto order(OrderDto.requestDto orderRequestDto) {
//        return null;
//    }
}
