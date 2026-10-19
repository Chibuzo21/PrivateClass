import Button from "../../components/button";
import { prisma } from "../../lib/prisma";
import React from "react";

export default async function BookMarkPage() {
  //  Retrieving data from the database
  const TableBookmarks = await prisma.bookmark.findMany();
  console.log(TableBookmarks);

  // creating data in the database
  const createBookMark = async () => {
    "use server";
    try {
      await prisma.bookmark.create({
        data: {
          title: "BookMark2",
          url: "htttps://www.learnfactory.com.ng",
        },
      });
      console.log("bookmark created");
    } catch (error) {
      console.error("This operation was not successful");
    }
  };

  // updating data in the database
  const updateBookMark = async () => {
    "use server";
    try {
      await prisma.bookmark.update({
        where: {
          id: 1,
        },
        data: {
          title: "First Bookmark",
        },
      });
    } catch (error) {
      console.error("failed to update");
    }
  };
  // delete data in the database
  const deleteBookMark = async () => {
    "use server";
    try {
      // await prisma.bookmark.delete({
      //   where: {
      //     id: 12,
      //   },
      // }); this is when you want to delete a single row

      await prisma.bookmark.deleteMany({
        where: {
          title: {
            in: ["First BookMark", "BookMark2"],
          },
        },
      });
      console.log("delete successful");
    } catch (error) {
      console.error("Failed to delete");
    }
  };
  return (
    <div>
      <h1 className='text-lg font-semibold mb-4'>Bookmarks</h1>
      <div className='grid sm:grid-cols-3 gap-4'>
        {TableBookmarks.map((bookmark) => (
          <div key={bookmark.id} className='bg-gray-400 p-4'>
            <p>{bookmark.title}</p>
            <p className='text-sm italic'>{bookmark.url}</p>
          </div>
        ))}
        <Button Function={createBookMark} role={"Create"} />
        <Button Function={updateBookMark} role={"update"} />
        <Button Function={deleteBookMark} role={"delete"} />
      </div>
    </div>
  );
}
