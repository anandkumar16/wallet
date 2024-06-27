import React from "react";

export function Card({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}): JSX.Element {
  return (
    <div className="border p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
      <h1 className="text-2xl  border-b pb-2 mb-4 font-bold  mb-2 text-center text-blue-500">{title}</h1>
      <div className="text-gray-600">{children}</div>
    </div>
  );
}
