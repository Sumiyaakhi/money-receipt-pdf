import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

export default function StudentForm() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    navigate("/receipt", { state: data });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="card w-full max-w-2xl bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center">
            Student Course Form
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input
              {...register("studentName")}
              placeholder="Student Name"
              className="input input-bordered w-full"
            />

            <input
              {...register("studentId")}
              placeholder="Student ID"
              className="input input-bordered w-full"
            />

            <div>
              <p className="font-semibold">Course Name</p>
              <label className="mr-4">
                <input
                  type="radio"
                  value="Basic"
                  {...register("courseName")}
                  className="radio"
                />{" "}
                Basic
              </label>
              <label>
                <input
                  type="radio"
                  value="Basic to IELTS"
                  {...register("courseName")}
                  className="radio"
                />{" "}
                Basic to IELTS
              </label>
            </div>

            <select
              {...register("courseDuration")}
              className="select select-bordered w-full"
            >
              <option value="2 Months">2 Months</option>
              <option value="4 Months">4 Months</option>
            </select>

            <div>
              <p className="font-semibold">Purpose</p>
              <label className="mr-4">
                <input
                  type="radio"
                  value="Residential"
                  {...register("purpose")}
                  className="radio"
                />{" "}
                Residential
              </label>
              <label>
                <input
                  type="radio"
                  value="Non Residential"
                  {...register("purpose")}
                  className="radio"
                />{" "}
                Non Residential
              </label>
            </div>

            <input
              type="number"
              {...register("courseFee")}
              placeholder="Course Fee"
              className="input input-bordered w-full"
            />
            <input
              type="number"
              {...register("totalAmount")}
              placeholder="Total Amount"
              className="input input-bordered w-full"
            />
            <input
              type="number"
              {...register("dueAmount")}
              placeholder="Due Amount"
              className="input input-bordered w-full"
            />
            <input
              type="date"
              {...register("date")}
              className="input input-bordered w-full"
            />

            <Link to="/receipt">
              {" "}
              <button className="btn btn-primary w-full">
                Preview Receipt
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
