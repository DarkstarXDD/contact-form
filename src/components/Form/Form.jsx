import styles from "./Form.module.css"

import { useState } from "react"
import { z } from "zod"

import { FormContext } from "./FormContext"

import Field from "../Field"
import Label from "../Label"
import Input from "../Input"
import Fieldset from "../Fieldset"
import RadioButton from "../RadioButton"
import TextArea from "../TextArea"
import Checkbox from "../Checkbox"
import Button from "../Button"
import ErrorMessage from "../ErrorMessage"
import FieldsetErrorMessage from "../FieldsetErrorMessage"
import Toast from "../Toast"

export default function Form() {
  const [isFormValid, setIsFormValid] = useState(false)
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
      setIsFormValid(false)
    } else {
      setZodErrorsObject({})
      setIsFormValid(true)
    }
  }

  return (
    <>
      <div className={styles.formWrapper}>
        <h2 className={styles.formTitle}>Contact Us</h2>

        <FormContext.Provider value={{ errors: zodErrorsObject }}>
          <form
            noValidate
            onSubmit={handleSubmit}
            className={styles.formElementsWrapper}
          >
            <div className={styles.namesWrapper}>
              <Field name="firstName">
                <Label>First Name</Label>
                <Input />
                <ErrorMessage />
              </Field>

              <Field name="lastName">
                <Label>Last Name</Label>
                <Input />
                <ErrorMessage />
              </Field>
            </div>

            <Field name="email">
              <Label>Email Address</Label>
              <Input type="email" />
              <ErrorMessage />
            </Field>

            <Fieldset name="queryType" legend="Query Type">
              <div className={styles.radioWrapper}>
                <RadioButton value="general">General Enquiry</RadioButton>
                <RadioButton value="support">Support Request</RadioButton>
              </div>
              <FieldsetErrorMessage />
            </Fieldset>

            <div className={styles.formElementsBottomWrapper}>
              <Field name="message">
                <Label>Message</Label>
                <TextArea />
                <ErrorMessage />
              </Field>

              <Field name="consent" layout="row">
                <Checkbox />
                <Label>I consent to being contacted by the team</Label>
                <ErrorMessage />
              </Field>

              <Button>Submit</Button>
            </div>
          </form>
        </FormContext.Provider>
      </div>

      {isFormValid && (
        <Toast
          icon="/assets/images/icon-success-check.svg"
          title="Message Sent!"
          message="Thanks for completing the form. We’ll be in touch soon!"
        />
      )}
    </>
  )
}
