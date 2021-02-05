import React from "react";
import { render, screen} from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";
import ContactForm from "./ContactForm";

// Write up the two tests here and make sure they are testing what the title shows





test("form shows success message on submit with form details", () => {
    render(<ContactForm />);

    const firstNameInput = screen.getByText(/First Name/i);
    const lastNameInput = screen.getByText(/last Name/i);
    const emailInput = screen.getByText(/email/i);
    const msgInput = screen.getByText(/message/i);
    

    userEvent.type(firstNameInput, 'Rob');
    userEvent.type(lastNameInput, "Lark");
    userEvent.type(emailInput, "robert.lark87@gmail.com");
    userEvent.type(msgInput, "testtesttest");
    

    // const submitButton = screen.getByRole("button")
    // userEvent.click(submitButton)

    // const success = screen.getByText(/firstName/i);
});


// test('form adds new values to the list', () => {
//     render(<ContactForm />)

//     const firstNameInput = screen.getByLabelText(/firstName/i);
//     const lastNameInput = screen.getByLabelText(/lastName/i);
//     const emailInput = screen.getByLabelText(/email/i);
//     const messageInput = screen.getByLabelText(/message/i);

//     fireEvent.change(firstNameInput, { target: { value: "Rob" } })
//     fireEvent.change(lastNameInput, { target: { value: "Lark" } })
//     fireEvent.change(emailInput, { target: { value: "Robert.lark87@gmail.com" } })
//     fireEvent.change(messageInput, { target: { value: "hello" } })

//     const submitButton = screen.getByText(/submit!/i)
//     fireEvent.click(submitButton)

//     //const newValue = screen.getByText(//i)

// })