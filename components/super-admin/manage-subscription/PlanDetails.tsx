"use client";

import { X } from "lucide-react";
import {
  getSubscriptionDetails,
  RecentSubscription,
} from "./subscription.types";

interface PlanDetailsProps {
  subscription: RecentSubscription;
  onClose?: () => void;
}

export default function PlanDetails({ subscription, onClose }: PlanDetailsProps) {
  const details = getSubscriptionDetails(subscription);

  return (
    <div className="relative flex w-full flex-col items-start gap-6 bg-white">
      <div className="flex w-full items-center justify-between">
        <h3 className="font-[Archivo] text-2xl font-medium leading-8 text-[#070707]">
          Transaction Details
        </h3>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F3F4F6] text-[#070707] transition-colors hover:bg-gray-200"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      <div className="grid w-full grid-cols-1 gap-x-12 gap-y-5 rounded-xl bg-[#F9FAFB] px-6 py-6 sm:grid-cols-2 sm:px-8">
        <DetailRow label="Transaction ID" value={details.transactionId} />
        <DetailRow label="User Name" value={details.userName} />
        <DetailRow label="Plan" value={details.plan} />
        <DetailRow label="Transaction Type" value={details.transactionType} />
        <DetailRow label="Status" value={details.status} />
        <DetailRow label="Payment Status" value={details.paymentStatus} />
        <DetailRow label="Payment Method" value={details.paymentMethod} />
        <DetailRow label="Amount" value={details.amount} />
        <DetailRow label="Discount" value={details.discount} />
        <DetailRow label="Net Amount" value={details.netAmount} />
        <DetailRow label="Discount Code" value={details.discountCode} />
        <DetailRow label="Join Date" value={details.date} />
        <DetailRow label="End Date" value={details.endDate} />
        <DetailRow label="Time" value={details.time} />
      </div>
    </div>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col items-start justify-start gap-1">
      <p className="font-[Archivo] text-lg font-normal leading-5 text-[#9CA3AF]">
        {label}
      </p>
      <p className="font-[Archivo] text-base font-semibold leading-6 text-[#070707]">
        {value}
      </p>
    </div>
  );
}
