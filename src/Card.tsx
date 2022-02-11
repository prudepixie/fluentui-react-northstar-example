import { Card, Flex, Text } from '@fluentui/react-northstar'

const CardExampleHeader = () => (
  <Card aria-roledescription="card avatar">
    <Flex gap="gap.small">
        <img src={`${process.env.PUBLIC_URL}/matt.jpg`} alt="matt avatar"/>
    <Flex column>
        <Text content="Title goes here" weight="bold" />
        <Text content="Secondary line" size="small" />
    </Flex>
    </Flex>
    <Text content="Citizens of distant epochs muse about at the edge of forever hearts of the..." />
  </Card>
)

export default CardExampleHeader