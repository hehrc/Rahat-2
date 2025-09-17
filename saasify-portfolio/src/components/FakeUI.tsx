import React from "react";

const FakeUI = () => {
  return (
    <div className="w-full h-full bg-[#0A0F1F] p-2 flex flex-col gap-2">
      {/* Header */}
      <div className="h-8 bg-[#1E293B] rounded-sm flex items-center px-2 gap-1">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>
      {/* Main content */}
      <div className="flex-1 flex gap-2">
        {/* Sidebar */}
        <div className="w-1/4 bg-[#1E293B] rounded-sm p-2">
          <div className="h-4 bg-[#5A79C8] rounded-sm mb-2"></div>
          <div className="h-4 bg-[#5A79C8] bg-opacity-50 rounded-sm mb-2"></div>
          <div className="h-4 bg-[#5A79C8] bg-opacity-50 rounded-sm"></div>
        </div>
        {/* Main area */}
        <div className="w-3/4 bg-[#1E293B] rounded-sm p-2">
          <div className="h-16 bg-[#5A79C8] rounded-sm mb-2"></div>
          <div className="h-8 bg-[#5A79C8] bg-opacity-50 rounded-sm"></div>
        </div>
      </div>
    </div>
  );
};

export default FakeUI;
