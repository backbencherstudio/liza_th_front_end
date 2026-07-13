import UserDashboardIcons from "@/components/icons/UserDashboardIcons";

export default function StatsSection() {
  return (
    <div>
      <h2 className="text-[26px] font-medium leading-[34px] text-gray-900">
        Welcome, B. Cooper. What would you like to understand today?
      </h2>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatsCard
          icon={<UserDashboardIcons.Created />}
          title="Insights Created"
          value="120"
        />
        <StatsCard
          icon={<UserDashboardIcons.Saved />}
          title="Saved Insights"
          value="80"
        />
        <StatsCard
          icon={<UserDashboardIcons.Uploaded />}
          title="Reports Uploaded"
          value="100"
        />
      </div>
    </div>
  );
}

interface StatsCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
}

const StatsCard = ({ icon, title, value }: StatsCardProps) => {
  return (
    <div className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-5">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
        {icon}
      </div>

      <div>
        <p className="mb-1.5 text-base font-normal leading-[22px] text-gray-600">
          {title}
        </p>

        <h4 className="text-2xl font-medium leading-8 text-gray-900">
          {value}
        </h4>
      </div>
    </div>
  );
};