import React from "react";

// List component for displaying persons and handling updates and deletions
function P_List({ persons, onUpdatePerson, onDeletePerson }) {
  return (
    <div className="container">
      {/* Row for alignment */}
      <div className="row justify-content-center mt-4">
        {/* Column for layout */}
        <div className="col-md-6">
          {/* Unordered list for displaying persons */}
          <ul className="list-group">
            {/* Mapping through the list of persons */}
            {persons.map((person) => (
              <li
                key={person.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {/* Displaying person details */}
                {person.name} - {person.email} - {person.mobileNumber} -{" "}
                {person.dateOfBirth}
                {/* Buttons for deleting and updating a person */}
                <div>
                  {/* Delete button */}
                  <button
                    onClick={() => onDeletePerson(person.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                  {/* Update button */}
                  <button
                    onClick={() =>
                      onUpdatePerson(person.id, {
                        name: prompt("Enter new name", person.name),
                        email: prompt("Enter new email", person.email),
                        mobileNumber: prompt(
                          "Enter new mobile number",
                          person.mobileNumber
                        ),
                        dateOfBirth: prompt(
                          "Enter new date of birth",
                          person.dateOfBirth
                        ),
                      })
                    }
                    className="btn btn-warning ms-2"
                  >
                    Update
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default P_List;
