package com.ssafy.spring.comb.repository;

import com.ssafy.spring.comb.entity.Ingredient;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IngredientRepository extends JpaRepository<Ingredient, String> {
}
