const fetchMessages = async () => {
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

    let channelMessages = []
    if (data && data.result) {
      channelMessages = data.result.filter(
        update => update.channel_post && update.channel_post.text
      )
    }
    return {data_members, channelMessages}
  } catch (error) {
    // console.error("Error fetching messages:", error);
    return 'Nothing here'
  }
}

module.exports = {
  fetchMessages,
}
