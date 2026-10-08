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
export async function POST(request) {
  // request is simply the data that is sent to the server from the frontend
  const body = await request.json();
  // server validation
  if (!body.name || !body.age) {
    //this checks if the name or age is missing in the request body
    return Response.json(
      {
        message: "Name or age is missing",
      },
      {
        status: 400,
      },
    );
  }
  if (typeof body.age !== "number") {
    return Response.json(
      {
        message: "Age must be a number",
      },
      {
        status: 400,
      },
    );
  }

  return Response.json(
    {
      message: "Student created successfully",
      student: body,
    },
    {
      status: 201,
    },
  );
}
