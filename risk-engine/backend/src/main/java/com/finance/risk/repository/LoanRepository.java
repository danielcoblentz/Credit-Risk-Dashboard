package com.finance.risk.repository;

import com.finance.risk.model.LoanApplication;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LoanRepository extends JpaRepository<LoanApplication, Long> {

    long countByRiskScore(String riskScore);

    List<LoanApplication> findByRiskScore(String riskScore);

    @Query("SELECT AVG(l.monthlyDebt / l.monthlyIncome) FROM LoanApplication l WHERE l.monthlyIncome > 0")
    Double getAverageDTI();

    @Query("SELECT AVG(l.loanAmount / l.collateralValue) FROM LoanApplication l WHERE l.collateralValue > 0")
    Double getAverageLTV();

    @Query("SELECT AVG(l.loanAmount) FROM LoanApplication l")
    Double getAverageLoanAmount();
}
