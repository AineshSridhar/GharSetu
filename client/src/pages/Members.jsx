import React, { useState } from "react";

const Members = () => {
  const [members, setMembers] = useState([]);
  const [newMember, setNewMember] = useState("");

  const addMember = () => {
    if (newMember) {
      setMembers([...members, newMember]);
      setNewMember(""); // Clear input field
    }
  };

  const removeMember = (member) => {
    setMembers(members.filter((m) => m !== member));
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl text-red-500 mb-4">Manage Members</h1>

      <div className="mb-4">
        <input
          type="text"
          value={newMember}
          onChange={(e) => setNewMember(e.target.value)}
          className="p-2 border-2 border-gray-300 rounded-lg"
          placeholder="Enter member name"
        />
        <button
          onClick={addMember}
          className="ml-4 p-2 bg-red-500 text-white rounded-lg"
        >
          Add Member
        </button>
      </div>

      <ul className="space-y-2">
        {members.map((member, index) => (
          <li
            key={index}
            className="flex justify-between items-center px-4 py-2 rounded-lg bg-gray-800"
          >
            <span>{member}</span>
            <button
              onClick={() => removeMember(member)}
              className="bg-red-500 text-white px-2 py-1 rounded-lg"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Members;
