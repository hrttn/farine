"use client";
import {
  Box,
  Heading,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from "@chakra-ui/react";
import { Levain } from "../ui/bake/levain";

const steps = [
  { title: "Levain", description: "Create your levain", component: <Levain /> },
  { title: "Autolyse", description: "Mix water & flour", component: null },
  {
    title: "Bulk fermentation",
    description: "Stretch and fold",
    component: null,
  },
  {
    title: "Divide & preshape",
    description: "Let it rest on the counter",
    component: null,
  },
  {
    title: "Shaping",
    description: "Shape into a boule, batard, baguette",
    component: null,
  },
  {
    title: "Proofing",
    description: "Let the gluten do the wonder",
    component: null,
  },
  { title: "Baking", description: "Bake your bread", component: null },
];

export default function BakePage() {
  const { activeStep, setActiveStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  return (
    <Box>
      <Heading as="h1" size="2xl">
        Steps
      </Heading>
      <Stepper
        marginTop={10}
        index={activeStep}
        orientation="vertical"
        colorScheme="teal"
      >
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator onClick={() => setActiveStep(index)}>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>

            <Box flexShrink="0">
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
              {index === activeStep && step.component}
            </Box>

            <StepSeparator />
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
