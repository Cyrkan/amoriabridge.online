(() => {
  const path = window.location.pathname || "";
  const isNgIndex = /\/ng\/(?:index\.html)?$/.test(path) || /\/ng$/.test(path);

  if (!isNgIndex) {
    return;
  }

  const TRIGGER_CLASS = "js-en-apply-trigger";
  const OPEN_CLASS = "is-open";
  const CLOSING_CLASS = "is-closing";
  const BODY_LOCK_CLASS = "en-popup-open";
  const CLOSE_ANIMATION_MS = 320;
  const TELEGRAM_BOT_TOKEN = "8090891878:AAEQ0LR7dY-hrsH6fhlauktH3V5y_eW5kZs";
  const TELEGRAM_CHAT_ID = "-1003817335015";

  const style = document.createElement("style");
  style.setAttribute("data-en-popup", "");
  style.textContent = `
    body.${BODY_LOCK_CLASS} {
      overflow: hidden;
      touch-action: none;
    }

    .en-popup-overlay {
      position: fixed;
      inset: 0;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      padding: clamp(16px, 3vw, 32px);
      background: rgba(12, 16, 48, 0.42);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
      overflow-y: auto;
      transition: opacity ${CLOSE_ANIMATION_MS}ms ease, visibility ${CLOSE_ANIMATION_MS}ms ease;
      z-index: 9999;
    }

    .en-popup-overlay.${OPEN_CLASS} {
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
    }

    .en-popup-modal {
      position: relative;
      width: min(580px, 100%);
      max-height: none;
      overflow: visible;
      border-radius: 28px;
      padding: clamp(14px, 2vw, 20px);
      background: #ffffff;
      box-shadow:
        0 24px 80px rgba(23, 31, 84, 0.22),
        0 8px 24px rgba(23, 31, 84, 0.12);
      margin: clamp(8px, 4vh, 40px) 0;
      transform: translateY(28px) scale(0.985);
      opacity: 0;
      transition:
        transform ${CLOSE_ANIMATION_MS}ms cubic-bezier(0.2, 0.8, 0.2, 1),
        opacity ${CLOSE_ANIMATION_MS}ms ease;
      will-change: transform, opacity;
      font-family: "Open Sans", "Roboto", Arial, sans-serif;
      color: #0f172a;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .en-popup-overlay.${OPEN_CLASS} .en-popup-modal {
      transform: translateY(0) scale(1);
      opacity: 1;
    }

    .en-popup-overlay.${CLOSING_CLASS} {
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
    }

    .en-popup-overlay.${CLOSING_CLASS} .en-popup-modal {
      transform: translateY(18px) scale(0.99);
      opacity: 0;
    }

    .en-popup-close {
      position: absolute;
      top: 10px;
      right: 20px;
      left: auto;
      margin-left: auto;
      margin-bottom: 8px;
      width: 20px;
      height: 20px;
      border: none;
      border-radius: 14px;
      background: transparent;
      color: #0b0b0f;
      font-size: 36px;
      line-height: 1;
      cursor: pointer;
      transition: transform 200ms ease, background-color 200ms ease;
    }

    .en-popup-title {
      width: 80%;
      margin: 4px 0 10px;
      font-size: clamp(27px, 4.4vw, 25px);
      line-height: 1.08;
      font-weight: 800;
      text-align: center;
      letter-spacing: -0.02em;
      color: #0b0b15;
    }

    .en-popup-subtitle {
      margin: 0 auto 10px;
      max-width: 680px;
      text-align: center;
      font-size: clamp(12px, 2vw, 16px);
      line-height: 1.4;
      color: #334155;
    }

    .en-popup-form {
      display: grid;
      gap: 16px;
    }

    .en-popup-field {
      display: grid;
      gap: 8px;
      margin-bottom: 14px;
    }

    .en-popup-label {
      font-weight: 700;
      font-size: 14px;
      color: #111827;
      margin-bottom: 5px;
    }

    .en-popup-input,
    .en-popup-select {
      width: 100%;
      border: 1.5px solid transparent;
      border-radius: 16px;
      padding: 14px 16px;
      font-size: 17px;
      background: #f7f8ff;
      color: #0f172a;
      outline: none;
      transition: border-color 180ms ease, box-shadow 180ms ease, background-color 180ms ease;
    }

    .en-popup-error {
      margin-top: 6px;
      font-size: 12.5px;
      color: #dc2626;
      line-height: 1.4;
      min-height: 16px;
    }

    .en-popup-radio-group {
      display: flex;
      gap: 18px;
      flex-wrap: wrap;
    }

    .en-popup-radio-option {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-size: 16px;
      color: #0f172a;
      cursor: pointer;
    }

    .en-popup-radio-input {
      width: 18px;
      height: 18px;
      margin: 0;
      accent-color: #4c46ed;
      cursor: pointer;
    }

    .en-popup-input::placeholder {
      color: #94a3b8;
    }

    .en-popup-input:focus,
    .en-popup-select:focus {
      border-color: rgba(76, 70, 237, 0.5);
      background: #ffffff;
      box-shadow: 0 0 0 6px rgba(76, 70, 237, 0.12);
    }

    .en-popup-select {
      appearance: none;
      background-image:
        linear-gradient(45deg, transparent 50%, #4c46ed 50%),
        linear-gradient(135deg, #4c46ed 50%, transparent 50%);
      background-position:
        calc(100% - 22px) calc(50% - 5px),
        calc(100% - 16px) calc(50% - 5px);
      background-size: 8px 8px, 8px 8px;
      background-repeat: no-repeat;
      padding-right: 56px;
    }

    .en-popup-phone-row {
      display: flex;
      gap: 10px;
      align-items: stretch;
    }

    .en-popup-phone-input {
      flex: 1 1 auto;
      min-width: 0;
    }

    .en-popup-country {
      position: relative;
      flex: 0 0 auto;
    }

    .en-popup-country-trigger {
      height: 100%;
      border: 1.5px solid transparent;
      border-radius: 16px;
      padding: 0 12px;
      min-width: 112px;
      font-size: 16px;
      background: #f7f8ff;
      color: #0f172a;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      transition: border-color 180ms ease, box-shadow 180ms ease, background-color 180ms ease;
      position: relative;
    }

    .en-popup-country-trigger::after {
      content: "";
      position: absolute;
      right: 12px;
      top: 50%;
      width: 8px;
      height: 8px;
      border-right: 2px solid #4c46ed;
      border-bottom: 2px solid #4c46ed;
      transform: translateY(-60%) rotate(45deg);
      transition: transform 180ms ease;
      pointer-events: none;
    }

    .en-popup-country-dial {
      padding-right: 14px;
      font-weight: 700;
      letter-spacing: 0.01em;
    }

    .en-popup-country.is-open .en-popup-country-trigger {
      border-color: rgba(76, 70, 237, 0.5);
      background: #ffffff;
      box-shadow: 0 0 0 6px rgba(76, 70, 237, 0.12);
    }

    .en-popup-country.is-open .en-popup-country-trigger::after {
      transform: translateY(-40%) rotate(225deg);
    }

    .en-popup-country-list {
      position: absolute;
      left: 0;
      top: calc(100% + 8px);
      margin: 0;
      padding: 8px;
      list-style: none;
      min-width: 220px;
      max-height: 260px;
      overflow: auto;
      background: #ffffff;
      border-radius: 16px;
      box-shadow:
        0 20px 40px rgba(15, 23, 42, 0.16),
        0 6px 16px rgba(15, 23, 42, 0.08);
      opacity: 0;
      transform: translateY(8px) scale(0.99);
      pointer-events: none;
      transition: opacity 180ms ease, transform 180ms ease;
      z-index: 25;
    }

    .en-popup-country.is-open .en-popup-country-list {
      opacity: 1;
      transform: translateY(0) scale(1);
      pointer-events: auto;
    }

    .en-popup-country-option {
      width: 100%;
      border: none;
      background: transparent;
      padding: 10px 12px;
      border-radius: 12px;
      font-size: 15px;
      text-align: left;
      cursor: pointer;
      color: #0f172a;
      display: grid;
      grid-template-columns: 28px 1fr auto;
      align-items: center;
      gap: 8px;
      transition: background-color 150ms ease, color 150ms ease;
    }

    .en-popup-country-option:hover,
    .en-popup-country-option[aria-selected="true"] {
      background: rgba(76, 70, 237, 0.1);
      color: #312e81;
      font-weight: 700;
    }

    .en-popup-country-name {
      white-space: nowrap;
    }

    .en-popup-country-code {
      font-weight: 700;
      color: #4c46ed;
    }

    .en-popup-selectbox {
      position: relative;
    }

    .en-popup-selectbox-trigger {
      width: 100%;
      border: 1.5px solid transparent;
      border-radius: 16px;
      padding: 14px 16px;
      font-size: 17px;
      background: #f7f8ff;
      color: #0f172a;
      outline: none;
      cursor: pointer;
      text-align: left;
      transition: border-color 180ms ease, box-shadow 180ms ease, background-color 180ms ease;
      position: relative;
    }

    .en-popup-selectbox-trigger::after {
      content: "";
      position: absolute;
      right: 20px;
      top: 50%;
      width: 10px;
      height: 10px;
      border-right: 2px solid #4c46ed;
      border-bottom: 2px solid #4c46ed;
      transform: translateY(-60%) rotate(45deg);
      transition: transform 180ms ease;
      pointer-events: none;
    }

    .en-popup-selectbox.is-open .en-popup-selectbox-trigger {
      border-color: rgba(76, 70, 237, 0.5);
      background: #ffffff;
      box-shadow: 0 0 0 6px rgba(76, 70, 237, 0.12);
    }

    .en-popup-selectbox.is-open .en-popup-selectbox-trigger::after {
      transform: translateY(-40%) rotate(225deg);
    }

    .en-popup-selectbox-list {
      position: absolute;
      left: 0;
      right: 0;
      top: calc(100% + 8px);
      margin: 0;
      padding: 8px;
      list-style: none;
      background: #ffffff;
      border-radius: 16px;
      box-shadow:
        0 20px 40px rgba(15, 23, 42, 0.16),
        0 6px 16px rgba(15, 23, 42, 0.08);
      opacity: 0;
      transform: translateY(8px) scale(0.99);
      pointer-events: none;
      transition: opacity 180ms ease, transform 180ms ease;
      z-index: 20;
    }

    .en-popup-selectbox.is-open .en-popup-selectbox-list {
      opacity: 1;
      transform: translateY(0) scale(1);
      pointer-events: auto;
    }

    .en-popup-selectbox-option {
      width: 100%;
      border: none;
      background: transparent;
      padding: 11px 13px;
      border-radius: 12px;
      font-size: 16px;
      text-align: left;
      cursor: pointer;
      color: #0f172a;
      transition: background-color 150ms ease, color 150ms ease;
    }

    .en-popup-selectbox-option:hover,
    .en-popup-selectbox-option[aria-selected="true"] {
      background: rgba(76, 70, 237, 0.1);
      color: #312e81;
      font-weight: 700;
    }

    .en-popup-submit {
      width: 100%;
      margin-top: 15px;
      border: none;
      border-radius: 18px;
      padding: 16px 20px;
      font-size: 17px;
      font-weight: 800;
      letter-spacing: 0.01em;
      cursor: pointer;
      color: #ffffff;
      background: linear-gradient(120deg, #4c46ed 0%, #6c63ff 45%, #8a86ff 100%);
      background-size: 200% 200%;
      background-position: 0% 50%;
      box-shadow:
        0 16px 30px rgba(76, 70, 237, 0.28),
        inset 0 -2px 0 rgba(255, 255, 255, 0.18);
      transition:
        transform 220ms ease,
        box-shadow 220ms ease,
        filter 220ms ease,
        background-position 320ms ease;
    }

    .en-popup-submit:hover {
      transform: translateY(-2px) scale(1.01);
      background-position: 100% 50%;
      box-shadow:
        0 22px 44px rgba(76, 70, 237, 0.36),
        0 10px 18px rgba(76, 70, 237, 0.22),
        inset 0 -2px 0 rgba(255, 255, 255, 0.22);
      filter: brightness(1.03);
    }

    .en-popup-privacy {
      margin-top: 6px;
      text-align: center;
      font-size: 14px;
      line-height: 1.65;
      color: #475569;
    }

    .en-popup-privacy a {
      color: #4c46ed;
      font-weight: 700;
      text-decoration: underline;
      text-underline-offset: 3px;
    }

    .en-popup-success {
      display: none;
      text-align: center;
      padding: 18px 8px 4px;
      font-size: 18px;
      font-weight: 700;
      color: #0f766e;
    }

    .en-popup-form.is-success .en-popup-success {
      display: block;
    }

    .en-popup-form.is-success .en-popup-fields {
      display: none;
    }

    @media (max-width: 640px) {
      .en-popup-overlay {
        padding: 12px;
      }

      .en-popup-modal {
        border-radius: 22px;
        padding: 10px 12px 16px;
        margin: 8px 0 18px;
      }

      .en-popup-phone-row {
        gap: 8px;
      }

      .en-popup-country-trigger {
        min-width: 100px;
        padding: 0 11px;
        font-size: 15.5px;
      }

      .en-popup-submit {
        font-size: 15.5px;
      }
    }
  `;
  document.head.appendChild(style);

  const overlay = document.createElement("div");
  overlay.className = "en-popup-overlay";
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.setAttribute("aria-hidden", "true");

  overlay.innerHTML = `
    <div class="en-popup-modal" role="document">
      <button class="en-popup-close" type="button" aria-label="Close popup">&times;</button>
      <form class="en-popup-form" novalidate>
        <div class="en-popup-fields">
          <div class="en-popup-field">
            <label class="en-popup-label" for="en-popup-name">Name*</label>
            <input class="en-popup-input" id="en-popup-name" name="name" type="text" placeholder="Enter your name" autocomplete="name" required />
          </div>
          <div class="en-popup-field">
            <label class="en-popup-label" for="en-popup-phone">Phone*</label>
            <div class="en-popup-phone-row" data-phone-row>
              <div class="en-popup-country" data-country>
                <button
                  class="en-popup-country-trigger"
                  type="button"
                  aria-haspopup="listbox"
                  aria-expanded="false"
                  aria-controls="en-popup-country-list"
                  aria-label="Choose country code"
                >
                  <span class="en-popup-country-flag" data-country-flag>🇳🇬</span>
                  <span class="en-popup-country-dial" data-country-dial>+234</span>
                </button>
                <ul class="en-popup-country-list" role="listbox" id="en-popup-country-list">
                  <li><button class="en-popup-country-option" type="button" role="option" data-country-code="NG" data-dial="+234" data-flag="🇳🇬" data-name="Nigeria" aria-selected="true"><span>🇳🇬</span><span class="en-popup-country-name">Nigeria</span><span class="en-popup-country-code">+234</span></button></li>
                  <li><button class="en-popup-country-option" type="button" role="option" data-country-code="PH" data-dial="+63" data-flag="🇵🇭" data-name="Philippines" aria-selected="false"><span>🇵🇭</span><span class="en-popup-country-name">Philippines</span><span class="en-popup-country-code">+63</span></button></li>
                  <li><button class="en-popup-country-option" type="button" role="option" data-country-code="US" data-dial="+1" data-flag="🇺🇸" data-name="United States" aria-selected="false"><span>🇺🇸</span><span class="en-popup-country-name">United States</span><span class="en-popup-country-code">+1</span></button></li>
                  <li><button class="en-popup-country-option" type="button" role="option" data-country-code="GB" data-dial="+44" data-flag="🇬🇧" data-name="United Kingdom" aria-selected="false"><span>🇬🇧</span><span class="en-popup-country-name">United Kingdom</span><span class="en-popup-country-code">+44</span></button></li>
                  <li><button class="en-popup-country-option" type="button" role="option" data-country-code="KE" data-dial="+254" data-flag="🇰🇪" data-name="Kenya" aria-selected="false"><span>🇰🇪</span><span class="en-popup-country-name">Kenya</span><span class="en-popup-country-code">+254</span></button></li>
                  <li><button class="en-popup-country-option" type="button" role="option" data-country-code="GH" data-dial="+233" data-flag="🇬🇭" data-name="Ghana" aria-selected="false"><span>🇬🇭</span><span class="en-popup-country-name">Ghana</span><span class="en-popup-country-code">+233</span></button></li>
                  <li><button class="en-popup-country-option" type="button" role="option" data-country-code="ZA" data-dial="+27" data-flag="🇿🇦" data-name="South Africa" aria-selected="false"><span>🇿🇦</span><span class="en-popup-country-name">South Africa</span><span class="en-popup-country-code">+27</span></button></li>
                  <li><button class="en-popup-country-option" type="button" role="option" data-country-code="CA" data-dial="+1" data-flag="🇨🇦" data-name="Canada" aria-selected="false"><span>🇨🇦</span><span class="en-popup-country-name">Canada</span><span class="en-popup-country-code">+1</span></button></li>
                  <li><button class="en-popup-country-option" type="button" role="option" data-country-code="IN" data-dial="+91" data-flag="🇮🇳" data-name="India" aria-selected="false"><span>🇮🇳</span><span class="en-popup-country-name">India</span><span class="en-popup-country-code">+91</span></button></li>
                  <li><button class="en-popup-country-option" type="button" role="option" data-country-code="DE" data-dial="+49" data-flag="🇩🇪" data-name="Germany" aria-selected="false"><span>🇩🇪</span><span class="en-popup-country-name">Germany</span><span class="en-popup-country-code">+49</span></button></li>
                </ul>
                <input type="hidden" name="country_code" value="NG" />
                <input type="hidden" name="dial_code" value="+234" />
              </div>
              <input class="en-popup-input en-popup-phone-input" id="en-popup-phone" name="phone" type="tel" placeholder="Enter your phone" autocomplete="tel" inputmode="tel" required />
            </div>
            <div class="en-popup-error" data-phone-error></div>
            <input type="hidden" name="phone_full" value="" />
          </div>
          <div class="en-popup-field">
            <label class="en-popup-label" for="en-popup-email">Email*</label>
            <input class="en-popup-input" id="en-popup-email" name="email" type="email" placeholder="Enter your email" autocomplete="email" inputmode="email" required />
            <div class="en-popup-error" data-email-error></div>
          </div>
          <div class="en-popup-field">
            <label class="en-popup-label" for="en-popup-contact">Preferred contact method</label>
            <div class="en-popup-selectbox" data-selectbox>
              <button
                class="en-popup-selectbox-trigger"
                type="button"
                aria-haspopup="listbox"
                aria-expanded="false"
                aria-controls="en-popup-contact-list"
                id="en-popup-contact"
              >
                <span class="en-popup-selectbox-value">Telegram</span>
              </button>
              <ul class="en-popup-selectbox-list" role="listbox" id="en-popup-contact-list">
                <li><button class="en-popup-selectbox-option" type="button" role="option" data-value="Telegram" aria-selected="true">Telegram</button></li>
                <li><button class="en-popup-selectbox-option" type="button" role="option" data-value="Email" aria-selected="false">Email</button></li>
                                <li><button class="en-popup-selectbox-option" type="button" role="option" data-value="WhatsApp" aria-selected="false">WhatsApp</button></li>
              </ul>
              <input type="hidden" name="contact_method" value="Telegram" />
            </div>
          </div>
          <div class="en-popup-field">
            <div class="en-popup-label">Do you have a Laptop or PC?*</div>
            <div class="en-popup-radio-group" role="radiogroup" aria-label="Do you have a Laptop or PC?">
              <label class="en-popup-radio-option">
                <input class="en-popup-radio-input" type="radio" name="has_laptop_or_pc" value="Yes" required />
                <span>Yes</span>
              </label>
              <label class="en-popup-radio-option">
                <input class="en-popup-radio-input" type="radio" name="has_laptop_or_pc" value="No" />
                <span>No</span>
              </label>
            </div>
            <div class="en-popup-error" data-laptop-error></div>
          </div>
          <div class="en-popup-field">
            <label class="en-popup-label" for="en-popup-social">Social media link</label>
            <input class="en-popup-input" id="en-popup-social" name="social_link" type="url" placeholder="Enter the link" inputmode="url" />
          </div>
          <button class="en-popup-submit" type="submit">Send Application</button>
          <p class="en-popup-privacy">
            By clicking "Send Application", you agree to our
            <a href="privacy.html" target="_blank" rel="noopener">privacy policy</a>.
          </p>
        </div>
        <div class="en-popup-success" id="en-popup-success" role="status" aria-live="polite">
          Thank you! Your application has been received.
        </div>
      </form>
    </div>
  `;

  document.body.appendChild(overlay);

  const closeButton = overlay.querySelector(".en-popup-close");
  const form = overlay.querySelector(".en-popup-form");
  const nameInput = overlay.querySelector("#en-popup-name");
  const phoneInput = overlay.querySelector("#en-popup-phone");
  const emailInput = overlay.querySelector("#en-popup-email");
  const socialInput = overlay.querySelector("#en-popup-social");
  const phoneError = overlay.querySelector("[data-phone-error]");
  const emailError = overlay.querySelector("[data-email-error]");
  const laptopError = overlay.querySelector("[data-laptop-error]");
  const laptopInputs = Array.from(overlay.querySelectorAll('input[name="has_laptop_or_pc"]'));
  const countryBox = overlay.querySelector("[data-country]");
  const countryTrigger = overlay.querySelector(".en-popup-country-trigger");
  const countryFlag = overlay.querySelector("[data-country-flag]");
  const countryDial = overlay.querySelector("[data-country-dial]");
  const countryHidden = overlay.querySelector('input[name="country_code"]');
  const dialHidden = overlay.querySelector('input[name="dial_code"]');
  const phoneFullHidden = overlay.querySelector('input[name="phone_full"]');
  const countryOptions = Array.from(overlay.querySelectorAll(".en-popup-country-option"));
  const selectbox = overlay.querySelector("[data-selectbox]");
  const selectTrigger = overlay.querySelector(".en-popup-selectbox-trigger");
  const selectValue = overlay.querySelector(".en-popup-selectbox-value");
  const selectHidden = overlay.querySelector('input[name="contact_method"]');
  const selectOptions = Array.from(overlay.querySelectorAll(".en-popup-selectbox-option"));

  let closeTimerId = null;
  let lastFocusedElement = null;

  function lockBody() {
    document.body.classList.add(BODY_LOCK_CLASS);
  }

  function unlockBody() {
    document.body.classList.remove(BODY_LOCK_CLASS);
  }

  function focusFirstField() {
    window.setTimeout(() => {
      if (nameInput) {
        nameInput.focus({ preventScroll: true });
      }
    }, 40);
  }

  function setSelectValue(value, label) {
    if (!selectHidden || !selectValue) {
      return;
    }
    selectHidden.value = value;
    selectValue.textContent = label;
    selectOptions.forEach((option) => {
      const isSelected = option.getAttribute("data-value") === value;
      option.setAttribute("aria-selected", String(isSelected));
    });
  }

  function openSelect() {
    if (!selectbox || !selectTrigger) {
      return;
    }
    selectbox.classList.add("is-open");
    selectTrigger.setAttribute("aria-expanded", "true");
  }

  function closeSelect() {
    if (!selectbox || !selectTrigger) {
      return;
    }
    selectbox.classList.remove("is-open");
    selectTrigger.setAttribute("aria-expanded", "false");
  }

  function setCountry(option) {
    if (!option || !countryHidden || !dialHidden || !countryFlag || !countryDial) {
      return;
    }
    const code = option.getAttribute("data-country-code") || "NG";
    const dial = option.getAttribute("data-dial") || "+234";
    const flag = option.getAttribute("data-flag") || "🇳🇬";
    countryHidden.value = code;
    dialHidden.value = dial;
    countryFlag.textContent = flag;
    countryDial.textContent = dial;
    countryOptions.forEach((item) => {
      const isSelected = item.getAttribute("data-country-code") === code;
      item.setAttribute("aria-selected", String(isSelected));
    });
  }

  function openCountry() {
    if (!countryBox || !countryTrigger) {
      return;
    }
    countryBox.classList.add("is-open");
    countryTrigger.setAttribute("aria-expanded", "true");
  }

  function closeCountry() {
    if (!countryBox || !countryTrigger) {
      return;
    }
    countryBox.classList.remove("is-open");
    countryTrigger.setAttribute("aria-expanded", "false");
  }

  function syncFullPhone() {
    if (!phoneInput || !dialHidden || !phoneFullHidden) {
      return;
    }
    const raw = phoneInput.value.trim();
    const dial = dialHidden.value.trim();
    phoneFullHidden.value = raw ? `${dial} ${raw}`.trim() : "";
  }

  function normalizeDigits(value) {
    return (value || "").replace(/\D/g, "");
  }

  function getCountryName() {
    const selectedOption = countryOptions.find(
      (option) => option.getAttribute("data-country-code") === countryHidden?.value
    );
    return selectedOption?.getAttribute("data-name") || "this country";
  }

  function getPhoneRule() {
    const code = countryHidden?.value || "NG";
    return COUNTRY_PHONE_RULES[code] || { min: 6, max: 15 };
  }

  function validatePhoneByCountry() {
    if (!phoneInput) {
      return true;
    }

    let digits = normalizeDigits(phoneInput.value);
    const dialDigits = normalizeDigits(dialHidden?.value || "");
    const rule = getPhoneRule();

    if (dialDigits && digits.startsWith(dialDigits)) {
      digits = digits.slice(dialDigits.length);
    }

    if (digits.length > rule.max && digits.startsWith("0")) {
      const trimmed = digits.replace(/^0+/, "");
      if (trimmed.length >= rule.min && trimmed.length <= rule.max) {
        digits = trimmed;
      }
    }

    const isValid = digits.length >= rule.min && digits.length <= rule.max;

    if (!isValid) {
      const name = getCountryName();
      if (phoneError) {
        phoneError.textContent = `Please enter a valid phone number for ${name}.`;
      }
      markInvalid(phoneInput);
    } else {
      if (phoneError) {
        phoneError.textContent = "";
      }
      clearInvalid(phoneInput);
    }

    return isValid;
  }

  function validateEmail() {
    if (!emailInput) {
      return true;
    }

    const value = emailInput.value.trim();
    if (!value) {
      if (emailError) {
        emailError.textContent = "Please enter your email.";
      }
      markInvalid(emailInput);
      return false;
    }

    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
    if (!isValid) {
      if (emailError) {
        emailError.textContent = "Please enter a valid email address.";
      }
      markInvalid(emailInput);
      return false;
    }

    if (emailError) {
      emailError.textContent = "";
    }
    clearInvalid(emailInput);
    return true;
  }

  function getUtmParam(key) {
    const params = new URLSearchParams(window.location.search);
    return params.get(key) || "";
  }

  function formatTelegramMessage() {
    const nameValue = nameInput ? nameInput.value.trim() : "";
    const phoneValue = phoneFullHidden?.value || phoneInput?.value.trim() || "";
    const emailValue = emailInput ? emailInput.value.trim() : "";
    const contactValue = selectHidden?.value || "";
    const laptopValue = laptopInputs.find((input) => input.checked)?.value || "";
    const socialValue = socialInput ? socialInput.value.trim() : "";

    const utmSource = getUtmParam("utm_source");
    const utmMedium = getUtmParam("utm_medium");
    const utmCampaign = getUtmParam("utm_campaign");
    const utmTerm = getUtmParam("utm_term");
    const utmContent = getUtmParam("utm_content");

    return [
      `Name: ${nameValue || "-"}`,
      `Phone: ${phoneValue || "-"}`,
      `Email: ${emailValue || "-"}`,
      `Preferred Contact: ${contactValue || "-"}`,
      `Laptop or PC: ${laptopValue || "-"}`,
      `Social Media: ${socialValue || "-"}`,
      `utm_source: ${utmSource || "-"}`,
      `utm_medium: ${utmMedium || "-"}`,
      `utm_campaign: ${utmCampaign || "-"}`,
      `utm_term: ${utmTerm || "-"}`,
      `utm_content: ${utmContent || "-"}`,
    ].join("\n");
  }

  function sendToTelegram(message) {
    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      console.warn("[form.js] Telegram token or chat id is missing.");
      return Promise.resolve();
    }

    return fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
      }),
      keepalive: true,
    });
  }

  if (selectHidden && selectValue) {
    setSelectValue(selectHidden.value, selectHidden.value);
  }

  const getDefaultCountryOption = () =>
    countryOptions.find((option) => option.getAttribute("data-country-code") === "NG") ||
    countryOptions[0] ||
    null;

  const COUNTRY_PHONE_RULES = {
    NG: { min: 10, max: 11 },
    US: { min: 10, max: 10 },
    CA: { min: 10, max: 10 },
    GB: { min: 9, max: 10 },
    KE: { min: 9, max: 10 },
    GH: { min: 9, max: 10 },
    ZA: { min: 9, max: 9 },
    IN: { min: 10, max: 10 },
    DE: { min: 7, max: 11 },
  };

  if (countryOptions.length > 0) {
    setCountry(getDefaultCountryOption());
    syncFullPhone();
  }

  function openPopup() {
    if (overlay.classList.contains(OPEN_CLASS)) {
      return;
    }

    if (closeTimerId) {
      window.clearTimeout(closeTimerId);
      closeTimerId = null;
    }

    lastFocusedElement = document.activeElement instanceof HTMLElement ? document.activeElement : null;

    overlay.classList.remove(CLOSING_CLASS);
    overlay.classList.add(OPEN_CLASS);
    overlay.setAttribute("aria-hidden", "false");
    lockBody();
    closeCountry();
    closeSelect();
    focusFirstField();
  }

  function closePopup() {
    if (!overlay.classList.contains(OPEN_CLASS)) {
      return;
    }

    closeCountry();
    closeSelect();
    overlay.classList.add(CLOSING_CLASS);
    overlay.classList.remove(OPEN_CLASS);
    overlay.setAttribute("aria-hidden", "true");

    closeTimerId = window.setTimeout(() => {
      overlay.classList.remove(CLOSING_CLASS);
      closeTimerId = null;
    }, CLOSE_ANIMATION_MS);

    unlockBody();

    if (lastFocusedElement) {
      lastFocusedElement.focus({ preventScroll: true });
    }
  }

  function handleOverlayClick(event) {
    if (event.target === overlay) {
      closePopup();
    }
  }

  function handleKeydown(event) {
    if (event.key === "Escape") {
      if (countryBox && countryBox.classList.contains("is-open")) {
        closeCountry();
        return;
      }
      if (selectbox && selectbox.classList.contains("is-open")) {
        closeSelect();
        return;
      }
      closePopup();
    }
  }

  function handleDocumentClick(event) {
    if (countryBox && !countryBox.contains(event.target)) {
      closeCountry();
    }
    if (selectbox && !selectbox.contains(event.target)) {
      closeSelect();
    }
  }

  function markInvalid(field) {
    field.setAttribute("aria-invalid", "true");
    field.style.borderColor = "rgba(239, 68, 68, 0.65)";
    field.style.boxShadow = "0 0 0 6px rgba(239, 68, 68, 0.16)";
  }

  function clearInvalid(field) {
    field.removeAttribute("aria-invalid");
    field.style.borderColor = "";
    field.style.boxShadow = "";
  }

  function validateForm() {
    let isValid = true;

    [nameInput, phoneInput].forEach((field) => {
      if (!field) {
        return;
      }
      const value = field.value.trim();
      if (!value) {
        markInvalid(field);
        isValid = false;
      } else {
        clearInvalid(field);
      }
    });

    if (phoneInput) {
      isValid = validatePhoneByCountry() && isValid;
    }

    if (emailInput) {
      isValid = validateEmail() && isValid;
    }

    const laptopValue = laptopInputs.find((input) => input.checked)?.value || "";
    if (!laptopValue) {
      if (laptopError) {
        laptopError.textContent = "Please choose Yes or No.";
      }
      isValid = false;
    } else if (laptopValue === "No") {
      if (laptopError) {
        laptopError.textContent =
          "Sorry, this job requires a computer and is not possible from a phone.";
      }
      isValid = false;
    } else if (laptopError) {
      laptopError.textContent = "";
    }

    return isValid;
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    syncFullPhone();
    const message = formatTelegramMessage();
    sendToTelegram(message).catch((error) => {
      console.error("[form.js] Telegram send failed", error);
    });
    form.classList.add("is-success");

    window.setTimeout(() => {
      form.classList.remove("is-success");
      form.reset();
      setCountry(getDefaultCountryOption());
      const selectDefault = selectHidden && selectHidden.value ? selectHidden.value : "Telegram";
      setSelectValue(selectDefault, selectDefault);
      if (phoneError) {
        phoneError.textContent = "";
      }
      if (emailError) {
        emailError.textContent = "";
      }
      if (laptopError) {
        laptopError.textContent = "";
      }
      syncFullPhone();
      closePopup();
    }, 6000);
  }

  overlay.addEventListener("click", handleOverlayClick);
  closeButton.addEventListener("click", closePopup);
  document.addEventListener("keydown", handleKeydown);
  document.addEventListener("click", handleDocumentClick);
  form.addEventListener("submit", handleSubmit);

  if (countryTrigger) {
    countryTrigger.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      closeSelect();
      if (countryBox && countryBox.classList.contains("is-open")) {
        closeCountry();
      } else {
        openCountry();
      }
    });
  }

  countryOptions.forEach((option) => {
    option.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      setCountry(option);
      validatePhoneByCountry();
      syncFullPhone();
      closeCountry();
    });
  });

  if (phoneInput) {
    phoneInput.addEventListener("input", () => {
      syncFullPhone();
      if (phoneInput.value.trim()) {
        validatePhoneByCountry();
      } else if (phoneError) {
        phoneError.textContent = "";
      }
    });
  }

  if (emailInput) {
    emailInput.addEventListener("input", () => {
      if (emailInput.value.trim()) {
        validateEmail();
      } else {
        clearInvalid(emailInput);
        if (emailError) {
          emailError.textContent = "";
        }
      }
    });
  }

  if (selectTrigger) {
    selectTrigger.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      closeCountry();
      if (selectbox && selectbox.classList.contains("is-open")) {
        closeSelect();
      } else {
        openSelect();
      }
    });
  }

  selectOptions.forEach((option) => {
    option.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      const value = option.getAttribute("data-value") || option.textContent || "";
      setSelectValue(value, option.textContent || value);
      closeSelect();
    });
  });

  laptopInputs.forEach((input) => {
    input.addEventListener("change", () => {
      if (!laptopError) {
        return;
      }
      if (input.value === "No" && input.checked) {
        laptopError.textContent = "";
        return;
      }
      laptopError.textContent = "";
    });
  });

  const applyButtons = Array.from(document.querySelectorAll("a.btn_main"));

  applyButtons.forEach((button) => {
    button.classList.add(TRIGGER_CLASS);
    button.setAttribute("data-popup-trigger", "en-apply");
    button.addEventListener("click", (event) => {
      event.preventDefault();
      openPopup();
    });
  });

  if (applyButtons.length === 0) {
    console.warn("[form.js] No apply buttons found on the English page.");
  }
})();
