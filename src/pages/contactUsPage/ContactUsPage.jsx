import React from "react";
import ContactNavbar from "./ContactNavbar";
import ContactForm from "./ContactForm";
const ContactUsPage = () => {
  const addDataHandler = async (data) => {
    const response = await fetch(
      "https://e-commerce-project-d85d3-default-rtdb.firebaseio.com/contactData.json",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "content-type": "application/json",
        },
      },
    );
    const responseData = await response.json();
  };
  return (
    <>
      <ContactNavbar />
      <ContactForm onAddData={addDataHandler} />
    </>
  );
};
export default ContactUsPage;
