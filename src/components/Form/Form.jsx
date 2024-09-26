import styles from "./Form.module.css"

import Field from "../Field"
import Label from "../Label"
import Input from "../Input"
import Fieldset from "../Fieldset"
import RadioButton from "../RadioButton"
import TextArea from "../TextArea"
import Checkbox from "../Checkbox"
import Button from "../Button"

export default function Form() {
  return (
    <div className={styles.formWrapper}>
      <h2 className={styles.formTitle}>Contact Us</h2>
      <form
        noValidate
        onSubmit={(event) => event.preventDefault()}
        className={styles.formElementsWrapper}
      >
        <Field>
          <Label>First Name</Label>
          <Input name="firstName" />
        </Field>

        <Field>
          <Label>Last Name</Label>
          <Input name="lastName" />
        </Field>

        <Field>
          <Label>Email Address</Label>
          <Input type="email" name="email" />
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
          <Field>
            <Label>Message</Label>
            <TextArea name="message" rows="8" />
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
