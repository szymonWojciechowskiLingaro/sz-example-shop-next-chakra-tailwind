import Container from '@components/ui/container'
import Layout from '@components/layout/layout'
import PageHeader from '@components/ui/page-header'
// import ContactForm from "@components/common/form/contact-form";
import ContactInfoBlock from '@containers/ContactInfoBlock'
import { FaWhatsapp, MdOutlineWhatshot, RiWhatsappFill } from 'react-icons/all'
import Link from '@components/ui/link'
import { IoHomeSharp } from 'react-icons/io5'

export default function ContactUsPage() {
  return (
    <>
      <PageHeader pageHeader="text-page-contact-us" />
      <Container>
        <div className="my-14 lg:my-16 xl:my-20 px-0 pb-2 lg: xl:max-w-screen-xl mx-auto flex flex-col md:flex-row w-full">
          <div className="md:w-full lg:w-2/5 2xl:w-2/6 flex flex-col h-full">
            <ContactInfoBlock />
          </div>
          <div className="md:w-full lg:w-3/5 2xl:w-4/6 flex h-full md:ms-7 flex-col lg:ps-7">
            <div className="flex pb-7 md:pb-9 mt-7 md:-mt-1.5">
              <h4 className="text-2xl 2xl:text-3xl font-bold text-heading">
                Be in touch
              </h4>
            </div>
            <RiWhatsappFill className="text-body transition duration-300 ease-in-out group-hover:text-black" />
            WhatsApp
          </div>
        </div>
      </Container>
    </>
  )
}

ContactUsPage.Layout = Layout
