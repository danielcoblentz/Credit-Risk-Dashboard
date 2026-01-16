package com.finance.risk.service;

import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class RiskCalculatorService {

    private static String gradeScore(double dti) {
        if (dti >= 0.40) return "HIGH";
        if (dti <= 0.20) return "LOW";
        return "MEDIUM";
    }

    public String calculateFinalRisk(double monthlyDebt, double monthlyIncome) {
        if (monthlyIncome <= 0) return "INCOMPLETE DATA";

        double dti = getDebtToIncomeRatio(monthlyDebt, monthlyIncome);

        return gradeScore(dti);
    }

    private static double getDebtToIncomeRatio(double monthlyDebt, double monthlyIncome) {
        return monthlyDebt / monthlyIncome;
    }

    public Map<String, Object> getDashboardSummary() {
        Map<String, Object> summary = new HashMap<>();
        summary.put("totalApplications", 0);
        summary.put("highRiskCount", 0);
        summary.put("mediumRiskCount", 0);
        summary.put("lowRiskCount", 0);
        return summary;
    }
}
