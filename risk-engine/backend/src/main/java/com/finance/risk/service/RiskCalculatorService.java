package com.finance.risk.service;

import com.finance.risk.repository.LoanRepository;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class RiskCalculatorService {

    private final LoanRepository loanRepository;

    public RiskCalculatorService(LoanRepository loanRepository) {
        this.loanRepository = loanRepository;
    }

    private static String gradeScore(double dti) {
        if (dti >= 0.40) return "HIGH";
        if (dti <= 0.20) return "LOW";
        return "MEDIUM";
    }

    public String getLTVRiskLevel(double ltv) {
        if (ltv > 0.90) return "HIGH";
        if (ltv > 0.80) return "MEDIUM";
        return "LOW";
    }

    public double calculatePD(double dti, double ltv, int creditScore) {
        double dtiScore = Math.min(dti / 0.5, 1.0);
        double ltvScore = Math.min(ltv / 1.0, 1.0);
        double creditAdj = (850 - creditScore) / 550.0;
        return (dtiScore + ltvScore + creditAdj) / 3.0;
    }

    public String calculateFinalRisk(double monthlyDebt, double monthlyIncome) {
        if (monthlyIncome <= 0) return "INCOMPLETE DATA";

        double dti = getDebtToIncomeRatio(monthlyDebt, monthlyIncome);

        return gradeScore(dti);
    }

    public double calculateLTV(double loanAmt, double propertyValue) {
        if (propertyValue <= 0) return 1;
        return loanAmt / propertyValue;
    }

    public double getDebtToIncomeRatio(double monthlyDebt, double monthlyIncome) {
        return monthlyDebt / monthlyIncome;
    }

    public Map<String, Object> getDashboardSummary() {
        long startTime = System.currentTimeMillis();

        Map<String, Object> summary = new HashMap<>();

        long totalApplications = loanRepository.count();
        long highRiskCount = loanRepository.countByRiskScore("HIGH");
        long mediumRiskCount = loanRepository.countByRiskScore("MEDIUM");
        long lowRiskCount = loanRepository.countByRiskScore("LOW");

        summary.put("totalApplications", totalApplications);
        summary.put("highRiskCount", highRiskCount);
        summary.put("mediumRiskCount", mediumRiskCount);
        summary.put("lowRiskCount", lowRiskCount);

        // Calculate percentages
        if (totalApplications > 0) {
            summary.put("highRiskPercent", round((highRiskCount * 100.0) / totalApplications));
            summary.put("mediumRiskPercent", round((mediumRiskCount * 100.0) / totalApplications));
            summary.put("lowRiskPercent", round((lowRiskCount * 100.0) / totalApplications));
        }

        // Get average metrics
        Double avgDTI = loanRepository.getAverageDTI();
        Double avgLTV = loanRepository.getAverageLTV();
        Double avgLoanAmount = loanRepository.getAverageLoanAmount();

        summary.put("averageDTI", avgDTI != null ? round(avgDTI * 100) : 0);
        summary.put("averageLTV", avgLTV != null ? round(avgLTV * 100) : 0);
        summary.put("averageLoanAmount", avgLoanAmount != null ? round(avgLoanAmount) : 0);

        // Add processing time for performance metrics
        long processingTime = System.currentTimeMillis() - startTime;
        summary.put("processingTimeMs", processingTime);

        return summary;
    }

    private double round(double value) {
        return Math.round(value * 100.0) / 100.0;
    }
}
