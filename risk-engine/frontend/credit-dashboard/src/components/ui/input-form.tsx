import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function InputForm() {
  return (
    <div className="w-full min-w-[400px] rounded-lg border border-border bg-card p-6 shadow-sm">
      <form>
        <FieldGroup>
          <FieldSet>
            <FieldLegend>Credit Risk Assessment</FieldLegend>
            <FieldDescription>
              Enter your financial information below
            </FieldDescription>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="gross-monthly-income">
                  Gross Monthly Income
                </FieldLabel>
                <Input
                  id="gross-monthly-income"
                  placeholder="5000"
                  type="number"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="total-monthly-debt">
                  Total Monthly Debt
                </FieldLabel>
                <Input
                  id="total-monthly-debt"
                  placeholder="1500"
                  type="number"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="requested-loan-amount">
                  Requested Loan Amount
                </FieldLabel>
                <Input
                  id="requested-loan-amount"
                  placeholder="25000"
                  type="number"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="collateral-value">
                  Collateral Value
                </FieldLabel>
                <Input
                  id="collateral-value"
                  placeholder="50000"
                  type="number"
                  required
                />
              </Field>
            </FieldGroup>
          </FieldSet>
          <Field orientation="horizontal">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Submit
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
            >
              Cancel
            </button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  )
}
