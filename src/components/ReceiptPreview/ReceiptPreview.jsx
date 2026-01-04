import { useLocation, useNavigate } from "react-router-dom";

export default function ReceiptPreview() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    navigate("/");
    return null;
  }

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6 print:bg-white">
      {/* PRINT AREA */}
      <div
        id="invoice"
        className="max-w-3xl mx-auto bg-white p-8 shadow-lg print:shadow-none"
      >
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-4">
          <div>
            <h1 className="text-2xl font-bold">Money Receipt</h1>
            <p className="text-sm text-gray-500">English Learning Center</p>
          </div>

          <div className="text-right text-sm">
            <p>
              <b>Date:</b> {state.date}
            </p>
            <p>
              <b>Receipt ID:</b> #{state.studentId}
            </p>
          </div>
        </div>

        {/* Student Info */}
        <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
          <p>
            <b>Student Name:</b> {state.studentName}
          </p>
          <p>
            <b>Purpose:</b> {state.purpose}
          </p>
          <p>
            <b>Course:</b> {state.courseName}
          </p>
          <p>
            <b>Duration:</b> {state.courseDuration}
          </p>
        </div>

        {/* Table */}
        <div className="mt-6">
          <table className="table table-bordered w-full text-sm">
            <thead className="bg-base-200">
              <tr>
                <th>Description</th>
                <th className="text-right">Amount (৳)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Course Fee</td>
                <td className="text-right">{state.courseFee}</td>
              </tr>
              <tr>
                <td>Total Amount</td>
                <td className="text-right font-semibold">
                  {state.totalAmount}
                </td>
              </tr>
              <tr>
                <td>Due Amount</td>
                <td className="text-right text-red-500">{state.dueAmount}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="mt-8 flex justify-between text-sm">
          <p>Authorized Signature</p>
          <p className="text-right">Thank you for choosing us</p>
        </div>
      </div>

      {/* BUTTONS (NO PRINT) */}
      <div className="flex justify-center gap-4 mt-6 print:hidden">
        <button onClick={() => navigate("/")} className="btn btn-outline">
          Back
        </button>
        <button onClick={handlePrint} className="btn btn-primary">
          Print / Save PDF
        </button>
      </div>
    </div>
  );
}
