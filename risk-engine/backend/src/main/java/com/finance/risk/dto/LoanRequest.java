package com.finance.risk.dto;

public class LoanRequest {
    private String borrowerName;
    private double monthlyIncome;
    private double monthlyDebt;
    private double loanAmount;
    private double collateralValue;

    public String getBorrowerName() {
        return borrowerName;
    }

    public void setBorrowerName(String borrowerName) {
        this.borrowerName = borrowerName;
    }

    public double getMonthlyIncome() {
        return monthlyIncome;
    }

    public void setMonthlyIncome(double monthlyIncome) {
        this.monthlyIncome = monthlyIncome;
    }

    public double getMonthlyDebt() {
        return monthlyDebt;
    }

    public void setMonthlyDebt(double monthlyDebt) {
        this.monthlyDebt = monthlyDebt;
    }

    public double getLoanAmount() {
        return loanAmount;
    }

    public void setLoanAmount(double loanAmount) {
        this.loanAmount = loanAmount;
    }

    public double getCollateralValue() {
        return collateralValue;
    }

    public void setCollateralValue(double collateralValue) {
        this.collateralValue = collateralValue;
    }
}