export const Practices = () => {
  const students = [];

  return (
    <>
      <h1>Interview Question</h1>

      {/* <p>{students.length === 0 && "No Students Found"}</p> */}

      <p>{!students.length === 0 && "No Students Found"}</p>
      <p>Number of students: {students.length}</p>
    </>
  );
};
