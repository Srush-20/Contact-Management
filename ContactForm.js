import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

const ContactForm = ({ onAddContact }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddContact(formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      jobTitle: "",
    });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ maxWidth: 400, mx: "auto", mt: 3, display: "flex", flexDirection: "column", gap: 2 }}
    >
      <Typography variant="h5" textAlign="center">
        Add New Contact
      </Typography>
      <TextField
        label="First Name"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        required
      />
      <TextField
        label="Last Name"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        required
      />
      <TextField
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <TextField
        label="Phone Number"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <TextField
        label="Company"
        name="company"
        value={formData.company}
        onChange={handleChange}
      />
      <TextField
        label="Job Title"
        name="jobTitle"
        value={formData.jobTitle}
        onChange={handleChange}
      />
      <Button type="submit" variant="contained" color="primary">
        Add Contact
      </Button>
    </Box>
  );
};

export default ContactForm;
