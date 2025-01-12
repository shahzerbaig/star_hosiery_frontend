import { Flex, Text, Button } from "@radix-ui/themes";

export default function HelloWorld(){
    const buttonText = "Let's go"
    return (
        <Flex direction="column" gap="2" >
            <Text>Hello Radix </Text>
            <Button>{buttonText}</Button>
        </Flex>
    )
}