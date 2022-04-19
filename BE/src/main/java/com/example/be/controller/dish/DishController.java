package com.example.be.controller.dish;

import com.example.be.controller.dish.dto.PlanningDataRequest;
import com.example.be.service.dish.DishService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class DishController {

    private final DishService dishService;

    public DishController(DishService dishService) {
        this.dishService = dishService;
    }

    @GetMapping
    public List<PlanningDataRequest> getPlanningData(){
        return dishService.getPlanningData();
    }
}
