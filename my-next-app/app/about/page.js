//"use client" this means that this component will be rendered on the client
import React from "react";
import Header from "@/components/header";
import Mepage from "./me/page";
// next js uses file based routing by creating folders and page.js files
export default function AboutPage() {
  return (
    <div>
      About Page
      <Header />
      <Mepage />
    </div>
  );
}
