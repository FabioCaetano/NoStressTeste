
import React from "react";
import { Mail, Phone, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

function Card({ children, className = "" }) {
  return <div className={`bg-white rounded shadow p-4 ${className}`}>{children}</div>;
}

function CardContent({ children, className = "" }) {
  return <div className={`p-2 ${className}`}>{children}</div>;
}

function Button({ children, className = "", ...props }) {
  return (
    <button {...props} className={`rounded px-4 py-2 font-semibold transition ${className}`}>
      {children}
    </button>
  );
}

function Input({ className = "", ...props }) {
  return (
    <input {...props} className={`border px-3 py-2 rounded w-full ${className}`} />
  );
}

// App content continued (truncated for brevity in this snippet)
export default function NoStressEnglishClub() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-800 relative">
      {/* Full content already in the canvas */}
    </div>
  );
}
