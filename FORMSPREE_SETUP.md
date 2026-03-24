# Formspree Setup Instructions (Easiest Option)

## Step 1: Create Formspree Account
1. Go to https://formspree.io/
2. Click **Sign Up** (free account)
3. Sign up with your email or Google account
4. Verify your email if needed

## Step 2: Create a New Form
1. Once logged in, click **New Form**
2. Give it a name like "Ponce Floor Cleaning Contact"
3. **Copy your Form ID** (looks like: `xvgkqyzw` or `YOUR_FORM_ID`)

## Step 3: Set Recipient Email
1. In your form settings, set the recipient email to: `poncefloorscs@gmail.com`
2. This is where form submissions will be sent

## Step 4: Update the Code
Open `index.html` and find line 335:
```html
<form id="contactForm" class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

Replace `YOUR_FORM_ID` with your actual Formspree Form ID.

Example:
```html
<form id="contactForm" class="contact-form" action="https://formspree.io/f/xvgkqyzw" method="POST">
```

## Step 5: Test the Form
1. Fill out the contact form on your website
2. Submit it
3. Check `poncefloorscs@gmail.com` - you should receive the form submission
4. You may need to confirm the email address in Formspree first (they'll send a confirmation email)

## Benefits of Formspree
- ✅ **Free tier**: 50 submissions/month
- ✅ **No API keys needed** - just the form ID
- ✅ **Automatic spam protection**
- ✅ **Works immediately** - no complex setup
- ✅ **Email notifications** sent directly to your inbox

## Free Tier Limits
- 50 form submissions per month
- Perfect for small businesses
- Upgrade available if needed ($19/month for 1,000 submissions)

## That's It!
Once you replace `YOUR_FORM_ID` with your actual Form ID, the form will work immediately. No other configuration needed!