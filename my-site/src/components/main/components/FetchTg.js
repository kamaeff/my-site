const fetchMessages = async setMessages => {
	try {
		const botToken = '6479825152:AAGSUcS0m1idMrJ-LqTn9lABI62LfbpsaaI'
		const channelId = '-1001963687312'

		const response = await fetch(
			`https://api.telegram.org/bot${botToken}/getUpdates?chat_id=${channelId}`
		)
		const data = await response.json()

		console.log(data)

		const channelPostUpdates = data.result.filter(
			update => update.channel_post.text
		)

		const channelMessages = channelPostUpdates.map(update => {
			return {
				id: update.channel_post.message_id,
				text: update.channel_post.text || 'Привет',
			}
		})

		setMessages(channelMessages)
	} catch (error) {
		console.error('Error fetching messages:', error)
		return 'Nothing here'
	}
}

export default fetchMessages
