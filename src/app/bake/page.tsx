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

const steps = [
  { title: "Levain", description: "Create your levain" },
  { title: "Autolyse", description: "Mix water & flour" },
  { title: "Bulk fermentation", description: "Stretch and fold" },
  { title: "Divide & preshape", description: "Let it rest on the counter" },
  { title: "Shaping", description: "Shape into a boule, batard, baguette" },
  { title: "Proofing", description: "Let the gluten do the wonder" },
  { title: "Baking", description: "Bake your bread" },
];

export default function BakePage() {
  const { activeStep, setActiveStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  return (
    <Box>
      <Heading as="h1" size="2xl">
        Farine: make better bread
      </Heading>
      <Stepper index={activeStep} orientation="vertical" colorScheme="teal">
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
            </Box>

            <StepSeparator />
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
