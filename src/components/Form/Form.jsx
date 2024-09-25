import styles from "./Form.module.css"

import Field from "../Field"
import Label from "../Label"
import Input from "../Input"
import Fieldset from "../Fieldset"
import RadioButton from "../RadioButton"
import TextArea from "../TextArea"
import Button from "../Button"

export default function Form() {
  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      className={styles.formElementsWrapper}
    >
      <Field>
        <Label>First Name</Label>
        <Input name="fname" />
      </Field>

      <Field>
        <Label>Last Name</Label>
        <Input name="lname" />
      </Field>

      <Field>
        <Label>Email Address</Label>
        <Input type="email" name="email" />
      </Field>

      <Fieldset legend="Query Type">
        <RadioButton name="queryType">General Enquiry</RadioButton>
        <RadioButton name="queryType">Support Request</RadioButton>
      </Fieldset>

      <Field>
        <Label>Message</Label>
        <TextArea name="message" rows="8" />
      </Field>

      <Button>Submit</Button>
    </form>
  )
}
