package com.finance.risk.controller;

import com.finance.risk.dto.LoanRequest;
import com.finance.risk.service.RiskCalculatorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@RequestMapping
@CrossOrigin(origins = "http://localhost:3000")
public class RiskController {

    @Autowired
    private RiskCalculatorService riskService;

    @PostMapping("/calculate")
    public String postMethodName(@RequestBody LoanRequest request) {
        
        return RiskCalculatorService.calculateFinalRisk(request.monthlyDebt, request.monthlyIncome);
    }
    
}
