'use client'
import { ReusableSelect } from "@/components/reusable/ReusableSelect";
import { useState } from "react";

export default function page() {

  const [selectedOption, setSelectedOption] = useState("this-month");
  return (
    <div>
      <h1>Test</h1>

      <ReusableSelect
        variant="outline"
        // placeholder="Select an option"
        // className="bg-white"
        value={selectedOption}
        options={[{ label: "This Month", value: "this-month" }, { label: "this-week", value: "this-week" }]}
        onValueChange={(value) => {
          setSelectedOption(value);
        }}
      />
    </div>
  )
}
