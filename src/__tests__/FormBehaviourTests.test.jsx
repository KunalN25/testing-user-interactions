import {render, screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FormBehaviour from '../components/FormBehaviour'


test("Form getting submitted with correct input values", () => {
    render(<FormBehaviour/>)

    userEvent.type(screen.getByPlaceholderText(/enter name/i), 'kunal')
    userEvent.type(screen.getByPlaceholderText(/enter password/i), 'pass')
    userEvent.selectOptions(screen.getByLabelText(/select country/i), 'India')
    userEvent.click(screen.getByText(/submit/i))

    expect(screen.getByText(/form submitted/i)).toBeInTheDocument();
})

test("Empty fields error shown", () => {
    render(<FormBehaviour/>)
    userEvent.click(screen.getByText(/submit/i))
    expect(screen.getByText(/please fill all the details/i)).toBeInTheDocument();
})

test("Invalid name error shown", () => {
    render(<FormBehaviour/>)
    userEvent.type(screen.getByPlaceholderText(/enter name/i), '@###')
    userEvent.type(screen.getByPlaceholderText(/enter password/i), 'pass')
    userEvent.selectOptions(screen.getByLabelText(/select country/i), 'India')
    userEvent.click(screen.getByText(/submit/i))
    expect(screen.getByText(/Please enter a valid name/i)).toBeInTheDocument();
})

