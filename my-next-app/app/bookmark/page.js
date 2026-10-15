import { prisma } from "../../lib/prisma";
import React from "react";

export default async function BookMarkPage() {
  const TableBookmarks = await prisma.bookmark.findMany();
  console.log(TableBookmarks);
  return (
    <div>
      <h1>Bookmarks</h1>
      <div></div>
    </div>
  );
}
