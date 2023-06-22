
import FormPropsTextFields from './Component/ContactForm.js'
const styles = {
    display: "Flex",
    
}
const ContactPage = () => {
    return (
        <>
            <h1>Contact Me!</h1>
           {
            FormPropsTextFields()
          }
        </>
    )
}

export default ContactPage