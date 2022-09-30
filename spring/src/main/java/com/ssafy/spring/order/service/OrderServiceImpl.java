package com.ssafy.spring.order.service;

import com.ssafy.spring.comb.repository.CombRepository;
import com.ssafy.spring.comb.repository.IngredientRepository;
import com.ssafy.spring.comb.repository.MenuRepository;
import com.ssafy.spring.order.dto.BranchDto;
//import com.ssafy.spring.order.dto.OrderDto;
import com.ssafy.spring.order.dto.OrderRequest;
import com.ssafy.spring.order.dto.OrderResponse;
import com.ssafy.spring.order.entity.OrderHistory;
import com.ssafy.spring.order.entity.Orders;
import com.ssafy.spring.order.repository.BranchRepository;
import com.ssafy.spring.order.repository.OrderHistoryRepository;
import com.ssafy.spring.order.repository.OrderRepository;
import com.ssafy.spring.user.entity.User;
import com.ssafy.spring.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private BranchRepository branchRepository;
    @Autowired
    private MenuRepository menuRepository;
    @Autowired
    private IngredientRepository ingredientRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private OrderHistoryRepository orderHistoryRepository;
    @Autowired
    private CombRepository combRepository;

    @Override
    public List<BranchDto> getStores(float minlat, float maxlat, float minlng, float maxlng) {
        return branchRepository.findByLatAndLng(minlat, maxlat, minlng, maxlng);
    }

    @Override
    public List<OrderResponse.MenuDto> getMenuList() {
        return menuRepository.findAll().stream().map(OrderResponse.MenuDto::new).collect(Collectors.toList());
    }

    @Override
    public List<OrderResponse.IngredientDto> getIngredientList() {
        return ingredientRepository.findAll().stream().map(OrderResponse.IngredientDto::new).collect(Collectors.toList());
    }

    @Override
    @Transactional
    public OrderResponse.orderDto order(OrderRequest.OrderDto orderRequest){
        // 주문 저장
        Orders order = Orders.builder()
                .branch(branchRepository.getReferenceById(orderRequest.getBranchId()))
                .user(userRepository.getReferenceById(orderRequest.getUserId()))
                .orderPrice(orderRequest.getOrderPrice()).build();
        orderRepository.save(order);
        System.out.println(order.getOrderId());
        // 주문 내역 저장
        User user = userRepository.findById(orderRequest.getUserId())
                .orElseThrow();
        System.out.println(orderRequest.getCombinationList());
        orderRequest.getCombinationList().forEach(comb -> {
            // 1. 조합이 있는지 확인 후, 없으면 생성
            // 2. 주문 내역 테이블에 넣기
            orderHistoryRepository.save(OrderHistory.builder()
                            .order(order)
                            .combination(combRepository.getReferenceById(comb.getCombinationId()))
                            .count(comb.getCount())
                            .gender(user.getGender())
                            .birthYear(user.getBirthYear())
                            .subti(user.getSubti()).build());
        });
        return new OrderResponse.orderDto(order);
    }

    @Override
    @Transactional
    public List<OrderResponse.orderDto> getOrderHistory(String userName) {
        List<OrderResponse.orderDto> orderList = orderRepository.findOrderHistory(userRepository.getUserByUserName(userName));
        orderList.forEach(order -> {
            order.getCombinationList().forEach(comb -> {
               System.out.println(comb);
            });
            System.out.println(order);
        });
        return orderList;
    }

}
