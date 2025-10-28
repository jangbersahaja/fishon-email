# @fishon/email

Shared email templates for Fishon applications using React Email.

## Features

- 🎨 Beautiful, responsive email templates
- 📱 Mobile-optimized designs
- 🌙 Dark mode support
- 🔧 TypeScript support
- 🧩 Reusable components
- 👀 Live preview during development

## Installation

```bash
npm install git+https://github.com/jangbersahaja/fishon-email#main
```

## Usage

### Basic Email Rendering

```typescript
import { renderBookingCreatedEmail } from "@fishon/email";
import { sendMail } from "@/lib/helpers/email";

// Render and send email
const html = await renderBookingCreatedEmail({
  userName: "Ahmad",
  charterName: "Full Day Deep Sea Adventure",
  tripDate: "Saturday, November 15, 2025",
  tripDuration: "1 Day",
  startTime: "6:00 AM",
  totalPrice: "RM 800",
  confirmationUrl: "https://fishon.my/book/confirm?id=123",
});

await sendMail({
  to: "user@example.com",
  subject: "Booking Request Received",
  html,
});
```

### Available Templates

- `renderBookingCreatedEmail` - Booking confirmation
- `renderBookingApprovedEmail` - Booking approval notification
- `renderBookingRejectedEmail` - Booking rejection with reason

### Custom Emails

You can also use the base components to create custom emails:

```typescript
import { EmailLayout, EmailHeader, EmailButton, InfoBox } from "@fishon/email";

function CustomEmail() {
  return (
    <EmailLayout preview="Your custom email">
      <EmailHeader title="Custom Title" subtitle="Custom subtitle" />
      <Section style={{ padding: "30px" }}>
        <Text>Your custom content</Text>
        <InfoBox label="Field" value="Value" />
        <EmailButton href="https://fishon.my">Click Here</EmailButton>
      </Section>
    </EmailLayout>
  );
}
```

## Development

### Preview Emails

Run the development server to preview emails:

```bash
npm run dev
```

This will start the React Email dev server at `http://localhost:3000` where you can see all email templates with live reload.

### Build

Compile TypeScript to JavaScript:

```bash
npm run build
```

### Export Static HTML

Export emails to static HTML files:

```bash
npm run export
```

## Components

### EmailLayout

Base wrapper for all emails with preview text and responsive container.

```typescript
<EmailLayout preview="Preview text shown in email clients">
  {children}
</EmailLayout>
```

### EmailHeader

Branded header with gradient background and logo.

```typescript
<EmailHeader 
  title="Welcome to Fishon" 
  subtitle="Start your fishing adventure"
/>
```

### EmailButton

Call-to-action button with Fishon brand styling.

```typescript
<EmailButton href="https://fishon.my/action">
  Click Here
</EmailButton>
```

### InfoBox

Labeled information box for displaying key details.

```typescript
<InfoBox label="Charter" value="Deep Sea Adventure" />
```

## Updating the Package

After making changes, commit and push to GitHub:

```bash
git add .
git commit -m "feat: update email templates"
git push origin main
```

Then update in consuming apps:

```bash
# In fishon-market or fishon-captain
npm install git+https://github.com/jangbersahaja/fishon-email#main
```

## License

MIT
