package com.finance.risk.service;
import org.springframework.stereotype.Service;

@Service
public class RiskCalculatorService {
    private static String gradeScore(float dti) {
        if (dti >= 0.40f) return "HIGH";
        if (dti <= 0.20f) return "LOW";
        return "MEDIUM";
    }

    // clac debt to income ratio
    public static String calculateFinalRisk (float monthlyDebt, float monthlyIncome) {
        if (monthlyIncome <= 0) return "INCOMPLETE DATA";
       
        float dti = getDebtToIncomeRatio(monthlyDebt, monthlyIncome);

        return gradeScore(dti);
    };
    
    private static float getDebtToIncomeRatio (float loanAmt, float CollateralVal) {
       return (loanAmt / CollateralVal);
    };


    
}
