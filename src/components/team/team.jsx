import React from "react";
import data from "../../assets/data";

const Team = ({ name }) => {
    console.log(name)
  const department = data.find(
    (d) => d.department.toLowerCase() === name.toLowerCase()
  );

  if (!department) {
    return <div>Department "{name}" not found.</div>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">{department.department}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {department.members.map((member, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-4 text-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-gray-500">{member.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
