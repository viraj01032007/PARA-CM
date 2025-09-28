'use server';

/**
 * @fileOverview Implements the smart search and filtering functionality for consultants.
 *
 * - smartSearchAndFilter - A function that accepts search criteria and returns a list of consultants.
 * - SmartSearchAndFilterInput - The input type for the smartSearchAndFilter function.
 * - SmartSearchAndFilterOutput - The return type for the smartSearchAndFilter function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SmartSearchAndFilterInputSchema = z.object({
  category: z.string().describe('The category of consultant.'),
  location: z.string().describe('The location of the consultant.'),
  availability: z.string().describe('The availability of the consultant.'),
  priceRange: z.string().describe('The price range for the consultant.'),
  query: z.string().describe('The user query.'),
});

export type SmartSearchAndFilterInput = z.infer<
  typeof SmartSearchAndFilterInputSchema
>;

const SmartSearchAndFilterOutputSchema = z.object({
  consultants: z
    .array(z.string())
    .describe('A list of consultants that match the search criteria.'),
});

export type SmartSearchAndFilterOutput = z.infer<
  typeof SmartSearchAndFilterOutputSchema
>;

export async function smartSearchAndFilter(
  input: SmartSearchAndFilterInput
): Promise<SmartSearchAndFilterOutput> {
  return smartSearchAndFilterFlow(input);
}

const prompt = ai.definePrompt({
  name: 'smartSearchAndFilterPrompt',
  input: {schema: SmartSearchAndFilterInputSchema},
  output: {schema: SmartSearchAndFilterOutputSchema},
  prompt: `You are a search assistant that finds consultants based on user criteria.

  The user is looking for a consultant with the following criteria:
  Category: {{{category}}}
  Location: {{{location}}}
  Availability: {{{availability}}}
  Price Range: {{{priceRange}}}

  User Query: {{{query}}}

  Return a list of consultants that match the search criteria.
  `,
});

const smartSearchAndFilterFlow = ai.defineFlow(
  {
    name: 'smartSearchAndFilterFlow',
    inputSchema: SmartSearchAndFilterInputSchema,
    outputSchema: SmartSearchAndFilterOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
