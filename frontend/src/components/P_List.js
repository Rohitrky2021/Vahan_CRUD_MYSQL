import React from "react";

function P_List({ persons, onUpdatePerson, onDeletePerson }) {
  return (
    <div className="container">
      <div className="row justify-content-center mt-4">
        <div className="col-md-6">
          <ul className="list-group">
            {persons.map((person) => (
              <li
                key={person.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {person.name} - {person.email} - {person.mobileNumber} -{" "}
                {person.dateOfBirth}
                <div>
                  <button
                    onClick={() => onDeletePerson(person.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
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
