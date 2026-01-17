package com.finance.risk.model;

import com.finance.risk.dto.LoanRequest;
import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name = "loan_applications")
public class LoanApplication {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "borrower_name", nullable = false, length = 100)
    private String borrowerName;

    @Column(name = "monthly_income", nullable = false)
    private double monthlyIncome;

    @Column(name = "monthly_debt", nullable = false)
    private double monthlyDebt;

    @Column(name = "loan_amount", nullable = false)
    private double loanAmount;

    @Column(name = "collateral_value")
    private double collateralValue;

    @Column(name = "risk_score", length = 20)
    private String riskScore;

    @CreationTimestamp
    @Column(name = "created_at")
    private LocalDateTime createdAt;

    public LoanApplication() {}

    public LoanApplication(LoanRequest request, String riskScore) {
        this.borrowerName = request.getBorrowerName();
        this.monthlyIncome = request.getMonthlyIncome();
        this.monthlyDebt = request.getMonthlyDebt();
        this.loanAmount = request.getLoanAmount();
        this.collateralValue = request.getCollateralValue();
        this.riskScore = riskScore;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getBorrowerName() { return borrowerName; }
    public void setBorrowerName(String borrowerName) { this.borrowerName = borrowerName; }

    public double getMonthlyIncome() { return monthlyIncome; }
    public void setMonthlyIncome(double monthlyIncome) { this.monthlyIncome = monthlyIncome; }

    public double getMonthlyDebt() { return monthlyDebt; }
    public void setMonthlyDebt(double monthlyDebt) { this.monthlyDebt = monthlyDebt; }

    public double getLoanAmount() { return loanAmount; }
    public void setLoanAmount(double loanAmount) { this.loanAmount = loanAmount; }

    public double getCollateralValue() { return collateralValue; }
    public void setCollateralValue(double collateralValue) { this.collateralValue = collateralValue; }

    public String getRiskScore() { return riskScore; }
    public void setRiskScore(String riskScore) { this.riskScore = riskScore; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}
