const webhookUrl = 'https://webhook.botpress.cloud/6e754e46-3d33-4189-ac30-298e74e60255'
const botId = 'aa11ad34-deac-4cda-a96e-59f61f6c63ae'
const botpressApiUrl = 'https://api.botpress.cloud/v1/chat/conversations' // Botpress API endpoint for listing conversations
const botpressApiKey = env.access_Token

const response = await axios.get(botpressApiUrl, {
  headers: {
    Authorization: `Bearer ${botpressApiKey}`, // Authorization header with API key
    'x-bot-id': botId // Fixed header key to use quotes for consistency
  }
})

console.log(response.data) // Log the response data from the Botpress API (optional)

// Iterate over each conversation in the response
response.data.conversations.forEach((conversation) => {
  const conversationId = conversation.id // Extract the conversation ID
  // Send a webhook with the conversation ID
  axios.post(webhookUrl, { 'conversationId': conversationId }) // Send the conversation ID to the webhook
})