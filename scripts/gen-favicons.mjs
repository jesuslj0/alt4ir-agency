import sharp from 'sharp'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const src = path.join(__dirname, '../public/favicons/noBGpropus1024.png')
const out = path.join(__dirname, '../public/favicons')

async function generateIco(sizes) {
  const buffers = await Promise.all(
    sizes.map(s => sharp(src).resize(s, s).png().toBuffer())
  )
  const count = buffers.length
  const headerSize = 6
  const dirSize = count * 16
  const total = headerSize + dirSize + buffers.reduce((a, b) => a + b.length, 0)
  const ico = Buffer.alloc(total)

  ico.writeUInt16LE(0, 0)
  ico.writeUInt16LE(1, 2)
  ico.writeUInt16LE(count, 4)

  let offset = headerSize + dirSize
  buffers.forEach((buf, i) => {
    const s = sizes[i]
    const d = headerSize + i * 16
    ico.writeUInt8(s >= 256 ? 0 : s, d)
    ico.writeUInt8(s >= 256 ? 0 : s, d + 1)
    ico.writeUInt8(0, d + 2)
    ico.writeUInt8(0, d + 3)
    ico.writeUInt16LE(1, d + 4)
    ico.writeUInt16LE(32, d + 6)
    ico.writeUInt32LE(buf.length, d + 8)
    ico.writeUInt32LE(offset, d + 12)
    buf.copy(ico, offset)
    offset += buf.length
  })

  return ico
}

async function main() {
  const jobs = [
    { file: 'favicon-32x32.png',          size: 32  },
    { file: 'apple-touch-icon.png',        size: 180 },
    { file: 'android-chrome-192x192.png',  size: 192 },
    { file: 'android-chrome-512x512.png',  size: 512 },
  ]

  for (const { file, size } of jobs) {
    await sharp(src).resize(size, size).png().toFile(path.join(out, file))
    console.log(`✓ ${file} (${size}x${size})`)
  }

  const ico = await generateIco([16, 32, 48])
  fs.writeFileSync(path.join(out, 'favicon.ico'), ico)
  console.log('✓ favicon.ico (16, 32, 48px embebidos)')
}

main().catch(err => { console.error(err); process.exit(1) })
