"use client";
import React from "react";

type TabButtonProps = {
  children: React.ReactNode;
  selectTab: () => void;
  active: boolean;
};

const TabButton: React.FC<TabButtonProps> = ({ children, selectTab, active }) => {
  const base = "mr-3 font-semibold hover:text-primary transition-colors";
  const state = active ? "text-white border-b-2 border-primary text-primary" : "text-gray-400";
  return (
    <button type="button" onClick={selectTab} className={`${base} ${state}`}>
      {children}
    </button>
  );
};

export default TabButton;