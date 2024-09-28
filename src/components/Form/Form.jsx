import styles from "./Form.module.css"

import { useState } from "react"
import { z } from "zod"

import Field from "../Field"
import Label from "../Label"
import Input from "../Input"
import Fieldset from "../Fieldset"
import RadioButton from "../RadioButton"
import TextArea from "../TextArea"
import Checkbox from "../Checkbox"
import Button from "../Button"
import ErrorMessage from "../ErrorMessage"

export default function Form() {
  const [zodErrorsObject, setZodErrorsObject] = useState({})

  const formSchema = z.object({
    firstName: z.string().trim().min(1, { message: "This field is required" }),
    lastName: z.string().trim().min(1, { message: "This field is required" }),
    email: z.string().email({ message: "Please enter a valid email address" }),
    queryType: z.string({ required_error: "Please select a query type" }),
    message: z.string().trim().min(1, { message: "This field is required" }),
    consent: z.string({
      required_error: "To submit this form, please consent to being contacted",
    }),
  })

  function handleSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.target)
    const formDataObject = Object.fromEntries(formData)

    const parseResult = formSchema.safeParse(formDataObject)

    if (!parseResult.success) {
      setZodErrorsObject(parseResult.error.flatten().fieldErrors)
    } else setZodErrorsObject({})
  }

  return (
    <div className={styles.formWrapper}>
      <h2 className={styles.formTitle}>Contact Us</h2>
      <form
        noValidate
        onSubmit={handleSubmit}
        className={styles.formElementsWrapper}
      >
        <Field name="firstName" errors={zodErrorsObject}>
          <Label>First Name</Label>
          <Input />
          <ErrorMessage />
        </Field>

        <Field name="lastName" errors={zodErrorsObject}>
          <Label>Last Name</Label>
          <Input />
          <ErrorMessage />
        </Field>

        <Field name="email" errors={zodErrorsObject}>
          <Label>Email Address</Label>
          <Input type="email" />
          <ErrorMessage />
        </Field>

        <Fieldset legend="Query Type">
          <RadioButton name="queryType" value="general">
            General Enquiry
          </RadioButton>
          <RadioButton name="queryType" value="support">
            Support Request
          </RadioButton>
        </Fieldset>

        <div className={styles.formElementsBottomWrapper}>
          <Field name="message" errors={zodErrorsObject}>
            <Label>Message</Label>
            <TextArea rows="8" />
            <ErrorMessage />
          </Field>

          <Checkbox name="consent">
            I consent to being contacted by the team
          </Checkbox>

          <Button>Submit</Button>
        </div>
      </form>
    </div>
  )
}
