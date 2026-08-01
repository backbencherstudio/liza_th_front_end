import { GeneratedDashboard } from '@/types/dashboard'
import OperationalSatusCard from './operationalTemplate/OperationalSatusCard'
import OperationalSummeryTag from './operationalTemplate/OperationalSummeryTag'
import CustomStatusUpdate from './operationalTemplate/CustomStatusUpdateData'
import { monthlyData } from '../FinancialPerformanceDashboard/financial-perfomance/data'
import OperationalCatergoryTable from './operationalTemplate/OperationalCatergoryTable'
import OperationMonthyTrendChart from './operationalTemplate/MonthlyTrednDepartment'
import VendorMonthyTrendChart from './operationalTemplate/MonthlyTrendVendor'
import { monthlyDataVendor } from './operationalTemplate/TableDataVendor'
import VendorCatergoryTable from './operationalTemplate/VendorTable'
import TopHeader from '../TopHeader'

const editTypes = [
  { label: "No. of Departments", value: "numberOfDepartments" },
  { label: "Avg Spend/Dept.", value: "avgSpendPerDepartment" },
  { label: "No. of Vendors", value: "numberOfVendors" },
  { label: "Avg Spend/Vendor", value: "avgSpendPerVendor" },
];

export default function OperationalKPIDashboard({ dashboard }: { dashboard: GeneratedDashboard }) {
  const dateOnly = dashboard.title.split('–')[1]?.trim();
  return (
    <div className=''>
      
      <TopHeader title={"Operational KPIs"} subtitle={"Track key performance indicators for your operations"} handleOpen={() => { }} editTypes={editTypes} editType={null} setEditType={() => { }} dateOnly={dateOnly} />

      <div className='bg-[#F8FAFB] rounded-xl p-4.5 mt-6'>
        <div className='mt-4'>
          <OperationalSatusCard />
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 py-4'>
          <div className="w-full  bg-white p-7 pb-5  font-sans border [background:var(--W,#FFF)] px-4 py-5 rounded-2xl border-solid border-[#EDEDED]">
            <h2 className="mb-6 mt-1 font-[Archivo] font-medium text-[#1C1C1E] text-[18px] leading-[24px] md:text-[20px] md:leading-[26px]">
            Monthly Trend by Department
            </h2>

            <div className=''>
              <OperationMonthyTrendChart data={monthlyData} />
              <div className="mt-5">
                <OperationalCatergoryTable data={monthlyData} />
              </div>
            </div>


          </div>

          <div className="w-full bg-white p-7 pb-5  font-sans border [background:var(--W,#FFF)] px-4 py-5 rounded-2xl border-solid border-[#EDEDED]">
            <h2 className="mb-6 mt-1 font-[Archivo] font-medium text-[#1C1C1E] text-[18px] leading-[24px] md:text-[20px] md:leading-[26px]">
              Monthly Trend by Vendor
            </h2>

            <div className=''>
              <VendorMonthyTrendChart data={monthlyDataVendor} />
              <div className="mt-5">
                <VendorCatergoryTable data={monthlyDataVendor} />
              </div>
            </div>


          </div>
        </div>

        <div className=''>
          <div className='py-7.5 px-4.5'>
            <div className='py-5'>
              <OperationalSummeryTag />
            </div>

            <div>
              <CustomStatusUpdate />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
