package com.finance.risk;

import static org.junit.jupiter.api.Assertions.assertEquals;

import com.finance.risk.service.RiskCalculatorService;

import org.junit.jupiter.api.Test;

public class RiskCalculatorServiceTest {

    private final RiskCalculatorService service = new RiskCalculatorService();

    @Test
    public void testHighRiskThreshold() {
        // DTI = 2000/4000 = 0.5 which is >= 0.40
        String result = service.calculateFinalRisk(2000, 4000);
        assertEquals("HIGH", result);
    }

    @Test
    public void testMediumRiskThreshold() {
        // DTI = 1500/5000 = 0.30 which is between 0.20 and 0.40
        String result = service.calculateFinalRisk(1500, 5000);
        assertEquals("MEDIUM", result);
    }

    @Test
    public void testLowRiskThreshold() {
        // DTI = 500/5000 = 0.10 which is <= 0.20
        String result = service.calculateFinalRisk(500, 5000);
        assertEquals("LOW", result);
    }

    @Test
    public void testZeroIncome() {
        String result = service.calculateFinalRisk(500, 0);
        assertEquals("INCOMPLETE DATA", result);
    }

    @Test
    public void testNegativeIncome() {
        String result = service.calculateFinalRisk(500, -1000);
        assertEquals("INCOMPLETE DATA", result);
    }
}
