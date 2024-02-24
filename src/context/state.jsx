import React, { useState } from "react";

import Context from "./context";
import { useAlert } from "./AlertContext";

const State = (props) => {
  const [isDark, setDark] = useState(false);
  const [notes, setNotes] = useState(null);
  const [user, setUser] = useState(null);
  const { showAlert } = useAlert();

  const url = import.meta.env.VITE_BASE_URL;

  const toggleDark = () => {
    setDark(!isDark);
  };
  const checkLogin = () => {
    if (localStorage.getItem("Token")) {
      setUser(true);
    } else {
      setUser(false);
    }
  };
  const logout = () => {
    localStorage.removeItem("Token");
    checkLogin();
    showAlert("success", "Logged out Successfully");
  };

  const fetchNotes = async () => {
    const data = await fetch(`${url}/api/notes/fetchnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("Token"),
      },
    });
    const result = await data.json();
    if (result.status === "success") {
      setNotes(result.data);
    }
  };
  const addNote = async (title, description) => {
    const newNote = {
      title: "",
      description: "",
    };
    if (title) {
      newNote.title = title;
    }
    if (description) {
      newNote.description = description;
    }

    const data = await fetch(`${url}/api/notes/addNote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("Token"),
      },
      body: JSON.stringify(newNote),
    });
    const res = await data.json();
    if (res.status === "success") {
      fetchNotes();
      showAlert("success", "Note Added Successfully");
    } else {
      showAlert("error", "Something went wrong. Try again!");
    }
  };

  const updateNote = async (id, title, description) => {
    const newNote = {
      title: "",
      description: "",
    };
    if (title) {
      newNote.title = title;
    }
    if (description) {
      newNote.description = description;
    }
    const data = await fetch(`${url}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("Token"),
      },
      body: JSON.stringify(newNote),
    });
    const res = await data.json();
    if (res.status === "success") {
      fetchNotes();
      showAlert("success", "Note Updated successfully");
    } else {
      showAlert("error", "Something went wrong. Try again!");
    }
  };

  const deleteNote = async (id) => {
    const data = await fetch(`${url}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("Token"),
      },
    });
    const res = await data.json();
    if (res.status === "success") {
      fetchNotes();
      showAlert("success", "note deleted successfully");
    } else {
      showAlert("error", "Something went wrong. Try again!");
    }
  };
  const addUser = async (name, email, password) => {
    const body = {
      name: name,
      email: email,
      password: password,
    };
    const data = await fetch(`${url}/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const res = await data.json();
    if (res.authToken) {
      localStorage.setItem("Token", res.authToken);
      checkLogin();
      showAlert("success", "Signed up Successfully");
    } else {
      showAlert("error", "Something went wrong. Try again!");
    }
  };
  const logUser = async (email, password) => {
    const body = {
      email: email,
      password: password,
    };
    const data = await fetch(`${url}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const res = await data.json();
    if (res.authToken) {
      localStorage.setItem("Token", res.authToken);
      checkLogin();
      showAlert("success", "Logged in Successfully");
    } else {
      showAlert("error", "Something went wrong. Try again!");
    }
  };

  return (
    <Context.Provider
      value={{
        notes,
        fetchNotes,
        addNote,
        updateNote,
        deleteNote,
        addUser,
        user,
        checkLogin,
        logout,
        logUser,
        isDark,
        toggleDark,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default State;
