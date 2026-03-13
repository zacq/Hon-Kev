# n8n Workflow Implementation Plan

## 1. Current Status
- **Verified & Restored:**
  - ✅ `M-Pesa Payment Callbacks` (WF-1)
  - ✅ `M-Pesa STK Push` (WF-1 Component)
  - ✅ `whatsapp final` (WF-2)
- **Built & Imported (Pending Configuration):**
  - 🛠️ `Legislative Update Broadcaster` (WF-3)
  - 🛠️ `AI-Enhanced Media Response` (WF-4)

## 2. Infrastructure Requirements (Airtable)
Before creating the new workflows, ensure the following tables exist in your Airtable Base (`app6j8ItePOm5UZbc`):

### For WF-3: `CMS Content` Table
*Matches `CMSContent` interface in `types.ts`*
- **Table Name:** `CMS Content`
- **Fields:**
  - `Title` (Single Line Text)
  - `Content Type` (Single Select: Speech, Event, Opinion, etc.)
  - `Status` (Single Select: Draft, **Published**, Archived)
  - `Social Snippets` (Long Text - for X/Facebook captions)
  - `Media Assets` (Attachments)
  - `Publish Date` (Date)

### For WF-4: `Press Inquiries` Table
*New Table Required (distinct from `Media Contacts` directory)*
- **Table Name:** `Press Inquiries`
- **Fields:**
  - `Journalist Name` (Single Line Text)
  - `Organization` (Single Line Text)
  - `Inquiry Text` (Long Text)
  - `Deadline` (Date/Time)
  - `Draft Response` (Long Text - *to be filled by AI*)
  - `Response Status` (Single Select: **New**, Drafted, Approved, Sent)
  - `Contact Email` (Email)

## 3. Implementation Steps

### WF-3: Legislative Update Broadcaster
**Objective:** Auto-post to socials when content status = "Published".

1.  **Trigger Node:** `Airtable Trigger`
    -   **Table:** `CMS Content`
    -   **Trigger Field:** `Status`
    -   **Trigger Value:** `Published`
2.  **Data Processing:** `Set` node to format text for different platforms (e.g., shorter for X, longer for FB).
3.  **Branch 1 (X/Twitter):**
    -   `HTTP Request` node (Twitter API v2) to post tweet.
4.  **Branch 2 (Facebook/Instagram):**
    -   `HTTP Request` node (Graph API) to publish post.
5.  **Branch 3 (WhatsApp Channel):**
    -   `Twilio` or `WhatsApp` node to send broadcast message.

### WF-4: AI-Enhanced Media Response
**Objective:** Draft PR responses using Gemini for incoming inquiries.

1.  **Trigger Node:** `Airtable Trigger`
    -   **Table:** `Press Inquiries`
    -   **Trigger Field:** `Response Status`
    -   **Trigger Value:** `New` (or triggers on creation).
2.  **AI Processing:** `Google Gemini Chat` Node
    -   **System Prompt:** "You are the Press Secretary for Hon. Kelvin Migongo. Draft a professional, trustworthy, and accountable response to the following press inquiry..."
    -   **Input:** Description/Inquiry Text from Airtable.
3.  **Update CRM:** `Airtable Update` Node
    -   **Action:** Update the specific record.
    -   **Field:** Set `Draft Response` with Gemini's output.
    -   **Field:** Set `Response Status` to `Drafted`.
4.  **Notification:** `Gmail` / `Email` Node
    -   **Action:** Send email to `press@ndindinyoro.com`.
    -   **Body:** "New Press Inquiry from [Organization]. AI Draft is ready for review in Airtable."

## 4. Next Actions
1.  **Confirm Airtable Structure:** Verify the `CMS Content` and `Press Inquiries` tables exist.
2.  **API Keys:** Ensure you have:
    -   Twitter/X Developer API Key/Secret.
    -   Meta (Facebook) Graph API Token.
    -   Google Gemini API Key (Verified in `.env.local` as `GEMINI_API_KEY`).
    -   Gmail/SMTP Credentials.
3.  **Configure & Activate:**
    -   Open each workflow in n8n.
    -   Add API Credentials for Twitter, Facebook, Gemini, and Email.
    -   Toggle workflows to "Active".
