'use client'

import React, { useState } from "react";
import * as Label from "@radix-ui/react-label";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  amount: number;
  mode: string;
};

function CollectionForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const inputStyle = `appearance-none w-4 h-4 border border-gray-300 rounded-full 
  bg-white checked:bg-blue-500 checked:border-black 
  focus:outline-none focus:ring-2 focus:ring-blue-400 
  cursor-pointer `
  const [modalState, setModalState] = useState<{ show: boolean; success: boolean; message: string }>({
    show: false,
    success: false,
    message: "",
  });

  const closeModal = () => {
    setModalState({ show: false, success: false, message: "" });
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log("Form submitted:", data);

    try {
      const response = await fetch("https://api.malicc.store/api/collection", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const result = await response.json();
      console.log("API Response:", result);

      // Show success modal
      setModalState({
        show: true,
        success: true,
        message: "Request was successful!",
      });
    } catch (error) {
      console.error("Error submitting form:", error);

      // Show error modal
      setModalState({
        show: true,
        success: false,
        message: "Request failed. Please try again.",
      });
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4 text-black">Collection Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name Field */}
        <div className="flex flex-col space-y-2">
          <Label.Root htmlFor="name" className="text-sm font-medium text-gray-700">
            Name
          </Label.Root>
          <input
            id="name"
            className="px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <span className="text-sm text-red-500">{errors.name.message}</span>
          )}
        </div>

        {/* Amount Field */}
        <div className="flex flex-col space-y-2">
          <Label.Root htmlFor="amount" className="text-sm font-medium text-gray-700">
            Amount
          </Label.Root>
          <input
            id="amount"
            type="number"
            className="px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            {...register("amount", { 
              required: "Amount is required", 
              valueAsNumber: true,
              min: { value: 1, message: "Amount must be at least 1" },
            })}
          />
          {errors.amount && (
            <span className="text-sm text-red-500">{errors.amount.message}</span>
          )}
        </div>

        {/* Mode of Payment */}
        <div className="flex flex-col space-y-2">
          <Label.Root className="text-sm font-medium text-gray-700">
            Mode of Payment
          </Label.Root>
          <div className="flex items-center space-x-4 ">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                value="Cash"
                {...register("mode", { required: "Select a payment mode" })}
                className={inputStyle}
              />
              <span className="text-black">Cash</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                value="Gpay"
                {...register("mode", { required: "Select a payment mode" })}
                className={inputStyle}
              />
              <span className="text-black">Gpay</span>
            </label>
          </div>
          {errors.mode && (
            <span className="text-sm text-red-500">{errors.mode.message}</span>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
          >
            Submit
          </button>
        </div>
      </form>

      {/* Modal */}
      {modalState.show && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div
            className={`max-w-sm w-full p-4 rounded-md text-white text-center ${
              modalState.success ? "bg-green-500" : "bg-red-500"
            }`}
          >
            <p className="mb-4">{modalState.message}</p>
            <button
              onClick={closeModal}
              className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CollectionForm;
