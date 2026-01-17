package com.finance.risk.model;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "risk_assessments")
public class RiskAssessment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "loan_id")
    private Loan loan;

    @Column(name = "dti_ratio", precision = 5, scale = 4)
    private BigDecimal dtiRatio;

    @Column(name = "ltv_ratio", precision = 5, scale = 4)
    private BigDecimal ltvRatio;

    @Column(name = "risk_score")
    private Integer riskScore;

    @Column(name = "risk_rating", length = 10)
    private String riskRating;

    @Column(name = "assessment_date")
    private LocalDateTime assessmentDate = LocalDateTime.now();

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public Loan getLoan() { return loan; }
    public void setLoan(Loan loan) { this.loan = loan; }

    public BigDecimal getDtiRatio() { return dtiRatio; }
    public void setDtiRatio(BigDecimal dtiRatio) { this.dtiRatio = dtiRatio; }

    public BigDecimal getLtvRatio() { return ltvRatio; }
    public void setLtvRatio(BigDecimal ltvRatio) { this.ltvRatio = ltvRatio; }

    public Integer getRiskScore() { return riskScore; }
    public void setRiskScore(Integer riskScore) { this.riskScore = riskScore; }

    public String getRiskRating() { return riskRating; }
    public void setRiskRating(String riskRating) { this.riskRating = riskRating; }

    public LocalDateTime getAssessmentDate() { return assessmentDate; }
    public void setAssessmentDate(LocalDateTime assessmentDate) { this.assessmentDate = assessmentDate; }
}
