import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    gender: "male",
    subjects: {
      english: true,
      maths: false,
      physics: false,
    },
    resume: null,
    url: "",
    level: "",
    about: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const toggleSubject = (sub) => {
    setForm({
      ...form,
      subjects: {
        ...form.subjects,
        [sub]: !form.subjects[sub],
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Form submitted! Check console 👀");
  };

  const handleReset = () => {
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
      gender: "male",
      subjects: { english: true, maths: false, physics: false },
      resume: null,
      url: "",
      level: "",
      about: "",
    });
  };

  /* ---------- STYLES ---------- */

  const page = {
    minHeight: "120vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "var(--bg-primary)",
  };

  const card = {
    background: "var(--card-bg)",
    padding: "30px",
    width: "100%",
    maxWidth: "500px",
    borderRadius: "18px",
    boxShadow: "0 20px 45px rgba(0,0,0,0.35)",
    color: "var(--text-primary)",
  };

  const input = {
    width: "100%",
    padding: "10px",
    marginBottom: "14px",
    borderRadius: "8px",
    border: "1px solid var(--border-color)",
    background: "var(--bg-secondary)",
    color: "var(--text-primary)",
  };

  const label = {
    fontSize: "14px",
    marginBottom: "6px",
    display: "block",
  };

  const button = {
    padding: "12px",
    borderRadius: "10px",
    border: "solid",
    cursor: "pointer",
    background: "var(--accent)",
    color: "var(--text-primary)",
    marginRight: "10px",
  };

  /* ---------- JSX ---------- */

  return (
    <div style={page}>
      <form style={card} onSubmit={handleSubmit}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          📋 React Form
        </h2>

        <label style={label}>First Name</label>
        <input
          style={input}
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
          required
        />

        <label style={label}>Last Name</label>
        <input
          style={input}
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
          required
        />

        <label style={label}>Email</label>
        <input
          style={input}
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <label style={label}>Contact</label>
        <input
          style={input}
          type="tel"
          name="contact"
          value={form.contact}
          onChange={handleChange}
          required
        />

        <label style={label}>Gender</label>
        {["male", "female", "other"].map((g) => (
          <label key={g} style={{ marginRight: "10px" }}>
            <input
              type="radio"
              name="gender"
              value={g}
              checked={form.gender === g}
              onChange={handleChange}
            />{" "}
            {g}
          </label>
        ))}

        <label style={label}>Best Subject</label>
        {["english", "maths", "physics"].map((s) => (
          <label key={s} style={{ marginRight: "10px" }}>
            <input
              type="checkbox"
              checked={form.subjects[s]}
              onChange={() => toggleSubject(s)}
            />{" "}
            {s}
          </label>
        ))}

        <label style={label}>Upload Resume</label>
        <input
          style={input}
          type="file"
          onChange={(e) =>
            setForm({ ...form, resume: e.target.files[0] })
          }
        />

        <label style={label}>Portfolio URL</label>
        <input
          style={input}
          type="url"
          name="url"
          value={form.url}
          onChange={handleChange}
        />

        <label style={label}>Skill Level</label>
        <select
          style={input}
          name="level"
          value={form.level}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
          <option value="js">JavaScript</option>
          <option value="react">React</option>
        </select>

        <label style={label}>About You</label>
        <textarea
          style={input}
          rows="4"
          name="about"
          value={form.about}
          onChange={handleChange}
        />

        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button type="button" style={button} onClick={handleReset}>
            Reset
          </button>
          <button type="submit" style={button}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;