"use server"; //it is compulsory to add this when you are doing server actions


async function addStudent(formData) {
  console.log("hi");
  const Mytitle = formData.get("title");
  const Myemail = formData.get("email");
  if (Mytitle.trim().length < 3)
    throw new Error("Title should not be less than 3 characters");

  if (Myemail.trim().length < 3 || !Myemail.includes("@"))
    throw new Error("Email is invalid");

  console.log("title is", Mytitle);
  console.log("my email is", Myemail);
  //   Mytitle and Myemail to my database
  return {
    success: true,
  };
}
