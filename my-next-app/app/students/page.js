import React from "react";

const getStudent = async () => {
  const response = await fetch("http://localhost:3000/api/students");
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};
export default async function StudentPage() {
  const data = await getStudent();
  console.log(data);
  return (
    <div>
      <h1 className='text-3xl mb-8'>Students</h1>
      {data.students.map((s) => (
        <div className='bg-gray-800 text-gray-100 m-4' key={s.id}>
          <h2>{s.name}</h2>
          <p>{s.age}</p>
        </div>
      ))}
    </div>
  );
}
