const express = require('express')
const mysql = require('mysql2/promise')
const dotenv = require('dotenv')

const PORT = process.env.PORT || 3001
dotenv.config()

const app = express()
app.listen(PORT, () => {
	console.log(`listening on port ${PORT}`)
})

const connCreate = async () => {
	try {
		const connection = await mysql.createConnection({
			port: process.env.PORT,
			user: 'gen_user',
			host: process.env.HOST,
			database: process.env.DB,
			password: process.env.PASSWORD,
		})

		console.log('Успешное подключение к базе данных')
		await connection.end()
		return 'Успешное подключение к базе данных'
	} catch (error) {
		console.error('Ошибка подключения к базе данных:', error)
	}
}

app.get('/api', async (req, res) => {
	res.json({ message: await connCreate() })
})
