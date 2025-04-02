import "./Event.css";
import { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";

//! Yups validation schema

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  date: Yup.date().required("Date is required"),
  category: Yup.string().required("Category is required"),
});

const Event = () => {
  //! State for create event and filter event visibility
  const [visibleForm, setVisibleForm] = useState(""); // 'create' or 'filter'

  //! State for events
  const [event, setEvent] = useState([]);

  //! State for filter category
  const [filterCategory, setFilterCategory] = useState("");

  //! Function to toggle Create Event form visibility
  const handleCreateEvent = () => {
    setVisibleForm((prev) => (prev === "create" ? "" : "create"));
  };

  //! Function to toggle Filter Events form visibility
  const handleFilterEvent = () => {
    setVisibleForm((prev) => (prev === "filter" ? "" : "filter"));
  };

  //! Function to remove an event
  const handleRemoveEvent = (index) => {
    const updatedEvents = event.filter((_, i) => i !== index);
    setEvent(updatedEvents);
  };

  //! Using formik for form handling
  const formik = useFormik({
    initialValues: {
      name: "",
      date: "",
      category: "",
    },
    validationSchema,
    onSubmit: (values) => {
      setEvent([...event, values]);
      setVisibleForm(""); // Close Create Event form after submission
      console.log(event);
    },
  });

  return (
    <section className="event-section">
      <div className="event-container">
        {/* Create Event Form */}
        {visibleForm === "create" && (
          <div className="event-form-container">
            <form onSubmit={formik.handleSubmit} className="event-form">
              <h1 className="event-form-title">Create Event Form</h1>
              <div className="event-form-inputs">
                {/* Event Name */}
                <input
                  type="text"
                  name="name"
                  className="event-form-input"
                  placeholder="Event Name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />
                {formik.errors.name && formik.touched.name && (
                  <div className="error-message">{formik.errors.name}</div>
                )}

                {/* Event Date */}
                <input
                  type="date"
                  name="date"
                  className="event-form-input"
                  value={formik.values.date}
                  onChange={formik.handleChange}
                />
                {formik.errors.date && formik.touched.date && (
                  <div className="error-message">{formik.errors.date}</div>
                )}

                {/* Event Category */}
                <input
                  type="text"
                  name="category"
                  className="event-form-input"
                  placeholder="Event Category"
                  value={formik.values.category}
                  onChange={formik.handleChange}
                />
                {formik.errors.category && formik.touched.category && (
                  <div className="error-message">{formik.errors.category}</div>
                )}
              </div>
              <div className="event-form-buttons">
                <button type="submit" className="event-form-button-submit">
                  Submit
                </button>
                <button
                  type="button"
                  className="event-form-button-cancel"
                  onClick={() => setVisibleForm("")}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Filter Events Form */}
        {visibleForm === "filter" && (
          <div className="filter-popup-container">
            <form className="filter-form">
              <h1 className="filter-form-title">Filter Events</h1>
              <div className="filter-form-inputs">
                <select
                  name="category"
                  className="filter-form-select"
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                >
                  <option value="">All Categories</option>
                  {[...new Set(event.map((e) => e.category))].map(
                    (category, index) => (
                      <option key={index} value={category}>
                        {category}
                      </option>
                    )
                  )}
                </select>
              </div>
              <div className="filter-form-buttons">
                <button
                  type="button"
                  className="filter-form-button-apply"
                  onClick={() => setVisibleForm("")}
                >
                  Apply
                </button>
                <button
                  type="button"
                  className="filter-form-button-cancel"
                  onClick={() => {
                    setVisibleForm("");
                    setFilterCategory(""); // Reset filter
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Event List */}
        <div className="event-content">
          <div className="event-container-title">
            <h1 className="event-title">Your Events</h1>
          </div>
          {/* Render dynamic list of events */}
          <div className="event-list-container">
            <ul className="event-list">
              {event
                .filter(
                  (e) => filterCategory === "" || e.category === filterCategory
                )
                .map((e, index) => (
                  <li key={index} className="event">
                    <span
                      className="remove-event-icon"
                      onClick={() => handleRemoveEvent(index)}
                    >
                      ✖️
                    </span>{" "}
                    {e.name} - {e.date} - {e.category}
                  </li>
                ))}
            </ul>
          </div>
        </div>

        {/* Buttons */}
        <div className="event-buttons">
          <button className="event-button" onClick={handleCreateEvent}>
            Create Event
          </button>
          <button className="event-button" onClick={handleFilterEvent}>
            Filter Events
          </button>
        </div>
      </div>
    </section>
  );
};

export default Event;
