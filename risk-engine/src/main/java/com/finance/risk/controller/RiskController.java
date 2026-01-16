package com.finance.risk.controller;

import com.finance.risk.dto.LoanRequest;
import com.finance.risk.model.LoanApplication;
import com.finance.risk.repository.LoanRepository;
import com.finance.risk.service.RiskCalculatorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/risk")
@CrossOrigin(origins = "http://localhost:3000")
public class RiskController {

    @Autowired
    private RiskCalculatorService riskService;

    @Autowired
    private LoanRepository loanRepository;

    @PostMapping("/calculate")
    public String calculateRisk(@RequestBody LoanRequest request) {
        return riskService.calculateFinalRisk(request.getMonthlyDebt(), request.getMonthlyIncome());
    }

    @PostMapping("/applications")
    public LoanApplication saveApplication(@RequestBody LoanRequest request) {
        String riskScore = riskService.calculateFinalRisk(request.getMonthlyDebt(), request.getMonthlyIncome());
        return loanRepository.save(new LoanApplication(request, riskScore));
    }

    @GetMapping("/applications")
    public List<LoanApplication> getAllApplications() {
        return loanRepository.findAll();
    }

    @GetMapping("/stats/summary")
    public Map<String, Object> getSummary() {
        return riskService.getDashboardSummary();
    }
    
    
    
    
}
