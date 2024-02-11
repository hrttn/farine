import {
  Box,
  Input,
  InputGroup,
  InputRightAddon,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react"

export function Levain() {
  const ingredients = [
    {
      name: "Active sourdough starter",
      id: "sourdough",
    },
    {
      name: "Water",
      id: "water",
    },
    {
      name: "Flour",
      id: "flour",
    },
  ]

  return (
    <Box>
      <form>
        {ingredients.map((ingredient) => (
          <label key={ingredient.id}>
            {ingredient.name}:
            <InputGroup size="md">
              <NumberInput
                min={1}
                maxW={24}
                focusBorderColor="teal"
              >
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
                <NumberInputField />
              </NumberInput>
              <InputRightAddon>g</InputRightAddon>{" "}
            </InputGroup>
          </label>
        ))}
        <label>
          Waiting time:
          <Input
            color="teal"
            type="time"
            size="md"
          />
        </label>
      </form>
    </Box>
  )
}
