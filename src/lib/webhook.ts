import { config } from './config';
import crypto from 'crypto';

export interface WebhookData {
  name: string;
  email: string;
  phone: string;
  message: string;
  timestamp: string;
  source: string;
}

export async function sendWebhook(data: WebhookData): Promise<boolean> {
  if (!config.webhook.url) {
    console.error('Webhook URL not configured');
    return false;
  }

  try {
    // Generate signature if secret is configured
    let signature = '';
    if (config.webhook.secret) {
      const hmac = crypto.createHmac('sha256', config.webhook.secret);
      hmac.update(JSON.stringify(data));
      signature = hmac.digest('hex');
    }

    const response = await fetch(config.webhook.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Webhook-Signature': signature,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return true;
  } catch (error) {
    console.error('Error sending webhook:', error);
    return false;
  }
} 