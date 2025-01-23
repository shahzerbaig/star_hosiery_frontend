import BillCard from "@/components/BillForm";
import CollectionCard from "@/components/CollectionForm";
import DashboardLayout from "@/components/DashboardLayout";



export default function Dashboard() {
  return (
    <DashboardLayout>
      <h2 className="text-2xl font-bold mb-6 ">Overview</h2>
      <div className="grid grid-cols-2 gap-6">
        
        <BillCard title="Total Bills" amount={3200} />
      </div>
    </DashboardLayout> );
}
