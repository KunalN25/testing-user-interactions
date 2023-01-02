import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FileUpload from '../components/FileUpload'

test("Test single file upload", () => {
    render(<FileUpload/>)
    const file = new File(['hello'], 'hello.png', {type: 'image/png'})
    userEvent.upload(screen.getByLabelText(/upload file/i), file)

    expect(screen.getByLabelText(/upload file/i).files[0]).toEqual(file);
    
})

 