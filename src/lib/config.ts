export const config = {
  webhook: {
    url: process.env.WEBHOOK_URL || '',
    secret: process.env.WEBHOOK_SECRET || '',
  }
}; 