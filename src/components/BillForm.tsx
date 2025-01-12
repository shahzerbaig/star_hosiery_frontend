const BillCard = ({ title, amount }: { title: string; amount: number }) => {
    return (
      <div className="p-4 bg-red-100 rounded shadow-md">
        <h3 className="text-lg font-bold text-black">{title}</h3>
        <p className="text-2xl font-semibold text-red-600">${amount}</p>
      </div>
    );
  };
  
  export default BillCard;
  