const students = [
  { id: 1, name: "John Doe", age: 20 },
  {
    id: 2,
    name: "Jane Smith",
    age: 22,
  },
  {
    id: 3,
    name: "Bob Johnson",
    age: 21,
  },
];
export async function GET() {
  return Response.json({ students });
}
