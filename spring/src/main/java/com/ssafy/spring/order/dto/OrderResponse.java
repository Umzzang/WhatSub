package com.ssafy.spring.order.dto;

import com.ssafy.spring.comb.entity.Ingredient;
import com.ssafy.spring.comb.entity.Menu;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

public class OrderResponse {

    @Getter
    public static class MenuDto {
        private String menuId;
        private String imgUrl;
        private String menuName;
        private String ingredients;
        private String menuDesc;
        private String allergies;
        private int price;
        private float kcal;
        private float protein;
        private float sodium;
        private float fat;
        private float sugar;

        public MenuDto(Menu menu) {
            this.menuId = menu.getMenuId();
            this.imgUrl = menu.getImgUrl();
            this.menuName = menu.getMenuName();
            this.ingredients = menu.getIngredients();
            this.menuDesc = menu.getMenuDesc();
            this.allergies = menu.getAllergies();
            this.price = menu.getPrice();
            this.kcal = menu.getKcal();
            this.protein = menu.getProtein();
            this.sodium = menu.getSodium();
            this.fat = menu.getFat();
            this.sugar = menu.getSugar();
        }
    }

    @Getter
    public static class IngredientDto {
        private String ingredientId;
        private String category;
        private String name;
        private String imgUrl;
        private float kcal;
        private float protein;
        private float sodium;
        private float fat;
        private float sugar;
        private String allergies;
        private int price;

        public IngredientDto(Ingredient ingredient) {
            this.ingredientId = ingredient.getIngredientId();
            this.imgUrl = ingredient.getImgUrl();
            this.name = ingredient.getName();
            this.category = ingredient.getCategory();
            this.allergies = ingredient.getAllergies();
            this.price = ingredient.getPrice();
            this.kcal = ingredient.getKcal();
            this.protein = ingredient.getProtein();
            this.sodium = ingredient.getSodium();
            this.fat = ingredient.getFat();
            this.sugar = ingredient.getSugar();
        }
    }

}
