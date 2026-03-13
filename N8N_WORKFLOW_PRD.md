# PRD: n8n Workflow Architecture for Nyoro Campaign HQ

## 1. Executive Summary
The goal of the n8n automation layer is to serve as the "bridge" between Hon. Ndindi Nyoro's digital headquarters (Website/CRM) and real-world campaign operations (M-Pesa payments, WhatsApp outreach, and Social Media broadcasting). This system ensures zero-latency response to supporters and automated financial reconciliation.

---

## 2. Core Workflows

### **WF-1: M-Pesa Payment Verification & CRM Sync**
**Objective:** Automate the reconciliation of donations.
- **Trigger:** Webhook (Callback URL from Safaricom/Daraja).
- **Process:**
    1. Receive payment metadata (Transaction ID, Phone, Amount).
    2. Search **Donors** table in Airtable for a matching phone number.
    3. If found: Update the record status to "Verified" and increment Lifetime Value.
    4. If not found: Create a "Walk-in" donor record.
    5. Trigger an "Appreciation" WhatsApp message via Kapso/Twilio.
- **Success Metric:** 100% reconciliation accuracy between Safariom and Airtable.

### **WF-2: WhatsApp Lead Generation (The "Ground" Engine)**
**Objective:** Capture and categorize inbound leads from social posters and field rallies.
- **Trigger:** WhatsApp Inbound Webhook (Keyword: "JOIN").
- **Process:**
    1. Check if the user exists in the **Supporters** table.
    2. If new user: Send a multi-step diagnostic flow (Ask Name -> Ask Ward -> Ask Interest).
    3. Update Airtable with responses in real-time.
    4. Apply "Interest Tags" (e.g., Education, Jobs) based on user response.
- **Success Metric:** < 5-second response time for inbound leads.

### **WF-3: Legislative Update Broadcaster (The "Narrative" Engine)**
**Objective:** Push official content from Airtable to social platforms and WhatsApp groups.
- **Trigger:** Airtable Record Update (Status changed to "Published" in **Content CMS**).
- **Process:**
    1. Extract snippet and media asset (image/PDF).
    2. Post to **X (Twitter)** using official API.
    3. Post to **Facebook/Instagram** via Meta API.
    4. Forward to moderated **WhatsApp Broadcast Channels**.
- **Success Metric:** Single-click multi-channel publishing.

### **WF-4: AI-Enhanced Media Response**
**Objective:** Assist the press team in drafting responses to media inquiries.
- **Trigger:** New record in **Media Contacts** / Press Inquiry.
- **Process:**
    1. Send inquiry text to **Google Gemini API**.
    2. Prompt: "Generate a press response following the Kiharu Model style guide (Trustworthy, Accountable)."
    3. Email draft back to `press@ndindinyoro.com` for final human approval.
- **Success Metric:** Reduced lead time for press releases.

---

## 3. Data Integration Map
| Source | Middleware (n8n) | Destination (CRM) |
| :--- | :--- | :--- |
| **Website Form** | STK Push Trigger | **Donors Table** |
| **Safaricom** | Payment Verification | **Donors Table** |
| **WhatsApp** | NLP/Keyword Parser | **Supporters Table** |
| **Airtable** | Post Scheduler | **Social Media (X/FB)** |

---

## 4. Technical Constraints
- **Security:** Use Environment Variables for all API Keys (Safaricom, Airtable, Meta).
- **Redundancy:** Implement "Error Node" handlers in n8n to notify the technical team via Slack/Telegram if a webhook fails.
- **Rate Limiting:** Sequential processing for WhatsApp messages to avoid number banning.

## 5. Implementation Roadmap
1. **Phase 1 (Active):** M-Pesa STK Push and Callbacks.
2. **Phase 2:** WhatsApp Lead Intake Flow.
3. **Phase 3:** Automated CMS to Social Media Publishing.
