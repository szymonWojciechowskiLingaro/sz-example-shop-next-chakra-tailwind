import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from '@chakra-ui/react'
import Button from '@components/ui/button'

const CheckoutForm: React.FC = () => {
  return (
    <>
      <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-6 xl:mb-8">
        Shipping Address
      </h2>
      <form className="w-full mx-auto flex flex-col justify-center " noValidate>
        <div className="flex flex-col space-y-4 lg:space-y-5">
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0">
            <FormControl className="pr-3">
              <FormLabel htmlFor="email">Email address</FormLabel>
              <Input id="email" type="email" />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email">Email address</FormLabel>
              <Input id="email" type="email" />
            </FormControl>
          </div>
          <FormControl>
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input id="email" type="email" />
          </FormControl>
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0">
            <FormControl className="pr-3">
              <FormLabel htmlFor="email">Email address</FormLabel>
              <Input id="email" type="email" />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="email">Email address</FormLabel>
              <Input id="email" type="email" />
            </FormControl>
          </div>
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0">
            <FormControl className="pr-3">
              <FormLabel htmlFor="email">Email address</FormLabel>
              <Input id="email" type="email" />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email">Email address</FormLabel>
              <Input id="email" type="email" />
            </FormControl>
          </div>
          <FormControl className="pr-3">
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Textarea
              placeholder="Here is a sample placeholder"
              className="relative pt-3 xl:pt-6"
            />
          </FormControl>
          <div className="flex w-full">
            <Button
              className="w-full sm:w-auto"
              loading={false}
              disabled={false}
            >
              Save
            </Button>
          </div>
        </div>
      </form>
    </>
  )
}

export default CheckoutForm
