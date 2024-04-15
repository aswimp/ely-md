import ytdl from 'ytdl-core'
import { niceBytes } from '../../lib/func.js'
import { youtubedl } from '@bochilteam/scraper-sosmed'

let handler = async (m, { conn, args, usedPrefix, command, text }) => {
	if(!text) throw 'Masukkan Link'
	try {
		let anu = await (await fetch(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${api.lol}&url=${text[0]}}`)).json()
		await conn.sendFile(m.chat, anu.result.link, `${anu.result.title}.mp4`, txt, m)
	} catch (e) {
		m.reply('invalid url / internal server error.')
	}
}

handler.menudownload = ['ytvideo <url>']
handler.tagsdownload = ['search']
handler.command = /^(yt(v(ideo)?|mp4))$/i

handler.premium = true
handler.limit = true

export default handler
