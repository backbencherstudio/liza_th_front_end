import React from "react";

interface ToggleProps {
  billingPeriod: "monthly" | "yearly";
  setBillingPeriod: React.Dispatch<React.SetStateAction<"monthly" | "yearly">>;
}

export default function PricingToggle({ billingPeriod, setBillingPeriod }: ToggleProps) {
  return (
    <div>
      <div className="text-[#151513] text-center text-2xl font-medium leading-8 py-6">
        Available Plans
      </div>
      <div className="flex items-center gap-4 md:gap-2  select-none flex-col md:flex-row">
        <div className="relative flex w-[219px] h-12 bg-[#ECEFF3] p-1 rounded-[32px] items-center cursor-pointer">
          {/* Sliding Indicator */}
          <div
            className={`absolute h-10 w-[104px] rounded-full [background:linear-gradient(144deg,#0A206D_0%,#3B69D0_100%)] transition-all duration-300 ease-out shadow-sm ${billingPeriod === "yearly" ? "translate-x-[102px]" : "translate-x-0"
              }`}
          />

          <button
            type="button"
            onClick={() => setBillingPeriod("monthly")}
            className={`relative z-10 flex-1 text-center font-['Archivo'] text-base font-medium transition-colors duration-200 ${billingPeriod === "monthly" ? "text-white" : "text-[#525251]"
              }`}
          >
            Monthly
          </button>

          <button
            type="button"
            onClick={() => setBillingPeriod("yearly")}
            className={`relative z-10 flex-1 text-center font-['Archivo'] text-base font-medium transition-colors duration-200 ${billingPeriod === "yearly" ? "text-white" : "text-[#525251]"
              }`}
          >
            Yearly
          </button>
        </div>

        <span className="font-['Archivo'] text-base font-medium text-[#107C41] whitespace-nowrap animate-pulse">
          Save 30% - limited time!
        </span>
      </div>
    </div>
  );
}