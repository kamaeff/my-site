function formatTime(date) {
	const hours = date.getHours()
	const minutes = date.getMinutes()
	const seconds = date.getSeconds()

	return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`
}

function padZero(value) {
	return value < 10 ? `0${value}` : value
}

const fetchMessages = async (setMessages, setCount) => {
	try {
		const botToken = '6479825152:AAGSUcS0m1idMrJ-LqTn9lABI62LfbpsaaI'
		const channelId = '-1001963687312'

		const response = await fetch(
			`https://api.telegram.org/bot${botToken}/getUpdates?chat_id=${channelId}`
		)
		const count_members = await fetch(
			`https://api.telegram.org/bot${botToken}/getChatMembersCount?chat_id=${channelId}`
		)

		const data = await response.json()
		const data_members = await count_members.json()

		const channelPostUpdates = data.result.filter(
			update => update.channel_post && update.channel_post.text
		)

		const channelMessages = channelPostUpdates.map(update => {
			const timestampInSeconds = update.channel_post.date
			const timestampInMilliseconds = timestampInSeconds * 1000

			const date = new Date(timestampInMilliseconds)
			return {
				date: formatTime(date),
				id: update.channel_post.message_id,
				text: update.channel_post.text,
			}
		})

		setCount(data_members.result)
		setMessages(channelMessages)
	} catch (error) {
		console.error('Error fetching messages:', error)
		return 'Nothing here'
	}
}

export default fetchMessages
