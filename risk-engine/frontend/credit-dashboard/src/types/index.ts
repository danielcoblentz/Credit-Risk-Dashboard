export interface CreditRisk {
  id: number
  customerId: number
  creditScore: number
  probabilityOfDefault: number
  exposureAtDefault: number
  lossGivenDefault: number
  expectedLoss: number
  riskRating: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL"
  createdAt: string
  updatedAt: string
}

export interface Customer {
  id: number
  name: string
  email: string
  creditRisks: CreditRisk[]
}

export interface ChartDataPoint {
  month: string
  [key: string]: string | number
}

export interface ApiResponse<T> {
  data: T
  message?: string
  success: boolean
}
