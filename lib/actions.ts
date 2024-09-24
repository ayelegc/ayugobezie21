'use server'

import { z } from 'zod';
import { Resend } from 'resend';
import { ContactFormSchema } from '@/lib/schemas';
import ContactFormEmail from '@/emails/contactemail';

type ContactFormInputs = z.infer<typeof ContactFormSchema>;

// Ensure environment variables are set
const apiKey = process.env.RESEND_API_KEY;

if (!apiKey) {
  throw new Error('Missing RESEND_API_KEY environment variable');
}

const resend = new Resend(apiKey);

function logError(error: unknown) {
  console.error('Error:', error instanceof Error ? error.message : 'Unknown error');
}

export async function sendEmail(data: ContactFormInputs) {
  
  const result = ContactFormSchema.safeParse(data);

  if (!result.success) {
    return { error: result.error.format() };
  }

  const { name, email, message } = result.data;

  try {

    const response = await resend.emails.send({
      from: 'onboarding@resend.dev', 
      to: ['ayele.gobezie@gmail.com'], 
      subject: 'Contact form submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      react: ContactFormEmail({ name, email, message }) 
    });

    console.log('Email response:', response);

    if (response.error) {
      throw new Error(`Failed to send email: ${response.error.message}`);
    }

    return { success: true };
  } catch (error) {
    logError(error);
    return { error: error instanceof Error ? error.message : 'Unknown error occurred while sending email.' };
  }
}
