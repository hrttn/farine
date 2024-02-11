"use client"
import { Levain } from "@/components/recipes/levain"
import { Box, Heading } from "@chakra-ui/react"

export default function LevainPage() {
  return (
    <Box>
      <Heading size="xl">Levain</Heading>
      <Levain />
    </Box>
  )
}
