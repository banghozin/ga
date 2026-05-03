"use client";

import { useMemo, useState } from "react";
import { calcAll, type CalcInput, type IndustryKey } from "@/lib/tax-calc";

export interface CalcState {
  annualRevenue: number;
  industry: IndustryKey;
  customExpenseRate: number | null;
  dependents: number;
}

const DEFAULT_STATE: CalcState = {
  annualRevenue: 60_000_000,
  industry: "personal_service",
  customExpenseRate: null,
  dependents: 0,
};

export function useCalc(initial: Partial<CalcState> = {}) {
  const [state, setState] = useState<CalcState>({ ...DEFAULT_STATE, ...initial });

  const result = useMemo(() => {
    const input: CalcInput = {
      annualRevenue: state.annualRevenue,
      industry: state.industry,
      customExpenseRate: state.customExpenseRate ?? undefined,
      dependents: state.dependents,
    };
    return calcAll(input);
  }, [state]);

  return {
    state,
    setState,
    setRevenue: (v: number) => setState((s) => ({ ...s, annualRevenue: v })),
    setIndustry: (v: IndustryKey) => setState((s) => ({ ...s, industry: v })),
    setExpenseRate: (v: number | null) => setState((s) => ({ ...s, customExpenseRate: v })),
    setDependents: (v: number) => setState((s) => ({ ...s, dependents: v })),
    result,
  };
}
