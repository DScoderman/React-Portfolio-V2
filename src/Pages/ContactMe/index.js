
import ButtonMailto from "./Component/Mailbutton"

const styles = {
    display: "Flex",
}
const ContactPage = () => {
    return (
        <>
            <h1>Contact Me!</h1>
           {
            <ButtonMailto email="dsenour6@gmail.com" label="Send Email" />
          }
        </>
    );
}

export default ContactPage