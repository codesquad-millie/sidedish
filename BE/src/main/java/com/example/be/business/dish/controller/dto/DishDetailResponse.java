package com.example.be.business.dish.controller.dto;

import com.example.be.business.dish.domain.Badge;
import com.example.be.business.dish.domain.DeliveryPriceOption;
import com.example.be.business.dish.domain.Dish;
import com.example.be.business.dish.domain.DishStatus;

import java.math.BigDecimal;

public class DishDetailResponse {

    private Long dishId;
    private String name;
    private String description;
    private BigDecimal normalPrice;
    private Badge badge;
    private DeliveryPriceOption deliveryPriceOption;
    private String thumbnail;
    private DishStatus dishStatus;

    public DishDetailResponse(Dish dish) {
        this.dishId = dish.getDishId();
        this.name = dish.getName();
        this.description = dish.getDescription();
        this.normalPrice = dish.getPrice();
        this.badge = dish.getBadge();
        this.deliveryPriceOption = dish.getDeliveryType();
        this.thumbnail = dish.getThumbnail();
        this.dishStatus = dish.getDishStatus();
    }

    public Long getDishId() {
        return dishId;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public BigDecimal getNormalPrice() {
        return normalPrice;
    }

    public Badge getBadge() {
        return badge;
    }

    public DeliveryPriceOption getDeliveryType() {
        return deliveryPriceOption;
    }

    public String getThumbnail() {
        return thumbnail;
    }

    public DishStatus getDishStatus() {
        return dishStatus;
    }

}
