import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Let’s talk about
        Love to hear from you!."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
