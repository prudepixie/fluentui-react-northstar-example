import { Button, Checkbox, Flex, Input } from "@fluentui/react-northstar"
import VerticalRadio from './VerticalRadio'

const Form = () => {
    return <form>
        <h1>Example Form</h1>
        <h5>Text Input</h5>
        <Input placeholder="Type here..."/>
        <h5>Checkboxes</h5>
        <Checkbox label="Default" />
        <Checkbox label="Disabled" disabled checked/>
        <Checkbox label="Checked" checked/>
        <h5>Vertical Radio Group</h5>
        <VerticalRadio/>
        <h5>Button Group</h5>
        <Flex gap="gap.smaller">
            <Button content="Primary" primary />
            <Button content="Secondary" secondary />
        </Flex>
    </form>
}

export default Form