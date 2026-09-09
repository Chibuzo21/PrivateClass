import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function DashboardLayout() {
  const navItems = [
    { title: "Home", url: "/dashboard" },
    { title: "Profile", url: "/dashboard/profile" },
    { title: "Products", url: "/dashboard/products" },
  ];
  return (
    <div className='flex min-h-screen'>
      <aside className='w-56 bg-slate-900 text-white p-4'>
        <h2 className='text-lg font-bold mb-6'>Dashboard</h2>
        <nav className='flex flex-col gap-2'>
          {navItems.map((item) => (
            <Link
              to={item.url}
              className='px-3 py-2 rounded hover:bg-slate-700'
              key={item.title}>
              {item.title}
            </Link>
          ))}
        </nav>
      </aside>
      <main className='flex-1 p-6'>
        <Outlet />
      </main>
    </div>
  );
}
