"use client";
import {
  Box,
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
import { steps } from "./steps";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

export default function SideNav() {
  const { activeStep } = useSteps({
    count: steps.length,
  });

  return (
    <Box marginRight={20}>
      <Stepper index={activeStep} orientation="vertical" colorScheme="teal">
        {steps.map((step) => (
          <Link key={step.key} as={NextLink} href={`/recipes/${step.slug}`}>
            <Step>
              <StepIndicator>
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
          </Link>
        ))}
      </Stepper>
    </Box>
  );
}
