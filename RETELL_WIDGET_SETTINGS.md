# Retell AI Widget Settings - Complete List

## Current Configuration (from index.html)

```html
<script
  id="retell-widget"
  src="https://dashboard.retellai.com/retell-widget.js"
  type="module"
  data-public-key="public_key_c894825223963729a1ba5"
  data-agent-id="agent_54029e82c9c1dc4e6fdb7fdb60"
  data-show-ai-popup="true"
  data-show-ai-popup-time="5"
  data-auto-open="false"
  data-color="#0066CC"
  data-title="Chat with us"
  data-popup-message="Have questions? We're here to help!"
/>
```

---

## All Available Widget Settings

### **Required Settings**

1. **`data-public-key`**
   - **Current Value:** `public_key_c894825223963729a1ba5`
   - **Description:** Your Retell public key (required for authentication)
   - **Type:** String

2. **`data-agent-id`**
   - **Current Value:** `agent_54029e82c9c1dc4e6fdb7fdb60`
   - **Description:** Your chat agent ID (required to identify which agent to use)
   - **Type:** String

---

### **Optional Settings**

3. **`data-agent-version`**
   - **Current Value:** Not set (uses latest version)
   - **Description:** Specific agent version to use (if unset, uses latest version)
   - **Type:** String
   - **Example:** `"v1.2.3"`

4. **`data-title`**
   - **Current Value:** `"Chat with us"`
   - **Description:** Custom title displayed in the chat window
   - **Type:** String

5. **`data-logo-url`**
   - **Current Value:** Not set
   - **Description:** URL of your logo image to display in the widget
   - **Type:** String (URL)
   - **Example:** `"https://yoursite.com/logo.png"`

6. **`data-color`**
   - **Current Value:** `"#0066CC"` (blue)
   - **Description:** Hex color code for widget theme color
   - **Type:** String (hex color)
   - **Example:** `"#FFA07A"`

7. **`data-bot-name`**
   - **Current Value:** Not set
   - **Description:** Bot name shown in popup messages
   - **Type:** String

8. **`data-popup-message`**
   - **Current Value:** `"Have questions? We're here to help!"`
   - **Description:** Message displayed in popup before users open chat
   - **Type:** String

9. **`data-show-ai-popup`**
   - **Current Value:** `"true"`
   - **Description:** Enable/disable popup messages
   - **Type:** String ("true" or "false")

10. **`data-show-ai-popup-time`**
    - **Current Value:** `"5"`
    - **Description:** Seconds to delay before showing popup (default: 0)
    - **Type:** String (number)
    - **Example:** `"3"` (shows popup after 3 seconds)

11. **`data-auto-open`**
    - **Current Value:** `"false"`
    - **Description:** Auto-open chat widget when page loads
    - **Type:** String ("true" or "false")
    - **Options:**
      - `"true"` - Widget opens automatically
      - `"false"` - User must click to open

12. **`data-dynamic`**
    - **Current Value:** Not set
    - **Description:** JSON string with dynamic variables for the chat agent
    - **Type:** String (JSON)
    - **Example:** `'{"userName":"John","orderId":"12345"}'`

13. **`data-recaptcha-key`**
    - **Current Value:** Not set
    - **Description:** Google reCAPTCHA v3 site key for bot protection
    - **Type:** String
    - **Note:** Only reCAPTCHA v3 is supported

---

## Summary of Current Settings

| Setting | Value | Status |
|---------|-------|--------|
| Public Key | `public_key_c894825223963729a1ba5` | ✅ Required |
| Agent ID | `agent_54029e82c9c1dc4e6fdb7fdb60` | ✅ Required |
| Agent Version | (latest) | ⚪ Optional |
| Title | `"Chat with us"` | ✅ Set |
| Logo URL | Not set | ⚪ Optional |
| Color | `"#0066CC"` | ✅ Set |
| Bot Name | Not set | ⚪ Optional |
| Popup Message | `"Have questions? We're here to help!"` | ✅ Set |
| Show Popup | `"true"` | ✅ Set |
| Popup Delay | `"5"` seconds | ✅ Set |
| Auto Open | `"false"` | ✅ Set |
| Dynamic Variables | Not set | ⚪ Optional |
| reCAPTCHA Key | Not set | ⚪ Optional |

---

## Custom CSS Styling (in src/index.css)

The widget is also customized with CSS:
- Widget size: 120px × 100px (scaled to 50%)
- Scale transform: 0.5x
- Font: Poppins
- Custom styling for buttons, popups, and animations

---

## How to Modify Settings

To change any setting, edit the `<script>` tag in `index.html`:

```html
<script
  id="retell-widget"
  src="https://dashboard.retellai.com/retell-widget.js"
  type="module"
  data-public-key="YOUR_PUBLIC_KEY"
  data-agent-id="YOUR_AGENT_ID"
  data-color="#YOUR_COLOR"
  data-title="Your Title"
  data-popup-message="Your Message"
  data-show-ai-popup="true"
  data-show-ai-popup-time="5"
  data-auto-open="false"
/>
```


