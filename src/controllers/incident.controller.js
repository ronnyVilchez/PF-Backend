import path from 'node:path'
import { pool } from '../config/db.js'
import { IncidentModel } from '../models/incidentModel.js'
import fs from 'node:fs/promises'

export const incidentAll = async (req, res) => {
  try {
    const inci = await IncidentModel.incdAll()
    if (inci.length === 0) return res.status(400).json({ message: 'No hay incidentes' })
    res.status(200).json(inci)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const incidentId = async (req, res) => {
  try {
    const { id } = req.params
    const incId = await IncidentModel.incdId(id)
    if (incId.length === 0) return res.status(400).json({ message: 'No se encontro incidente' })
    res.status(200).json(incId)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const incidentCreate = async (req, res) => {
  try {
    const { userId, title, description, ubication, type, status, date } = req.body

    const files = req.files
    const arrayImg = await files.map((im) => im.originalname)
    const imagens = JSON.stringify(arrayImg)
    if (userId && title && description && ubication && type && status && date) {
      const incinew = await IncidentModel.incdCreate({ userId, title, imagens, description, ubication, type, status, date })
      if (incinew.affectedRows === 1) return res.status(200).json({ message: 'Incidente creado con exito' })
      if (incinew.affectedRows === 0) return res.status(400).json({ message: 'Error al crear el incidente' })
    }

    res.status(400).json({ message: 'Faltan datos relevantes' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const incidenUpdate = async (req, res) => {
  try {
    const { title, description, ubication, type, status, date } = req.body
    const { id } = req.params

    let imagens
    if (req.files && req.files.length > 0) {
      const files = req.files
      const arrayImg = await files.map((im) => im.originalname)
      imagens = JSON.stringify(arrayImg)

      const incidentImg = await pool.execute('SELECT imagens FROM incident WHERE id = ?', [id])
      const totalImages = await JSON.parse(incidentImg[0][0].imagens)

      const imgDelt = totalImages.filter((img) => !arrayImg.includes(img))

      await Promise.all(imgDelt.map(async (image) => {
        try {
          await fs.unlink(`./public/images/${image}`)
          console.log(`Imagen ${image} eliminada correctamente.`)
        } catch (err) {
          if (err.errno === -4058) {
            console.error(`No se encuentra la imagen ${image}`)
          } else {
            console.error(`Error al eliminar la imagen ${image}:`, err)
            throw err
          }
        }
      }))
    } else {
      const incidentImg = await pool.execute('SELECT imagens FROM incident WHERE id = ?', [id])
      imagens = incidentImg[0][0].imagens
    }

    if (title || description || ubication || type || status || date || id) {
      const incinew = await IncidentModel.incdUpdate({ title, imagens, description, ubication, type, status, date, id })
      if (incinew.affectedRows === 1) return res.status(200).json({ message: 'Incidente actualizado con exito' })
      if (incinew.affectedRows === 0) return res.status(400).json({ message: 'Error al actualizar el incidente' })
    }

    res.status(400).json({ message: 'Faltan datos relevantes' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
export const incidentFromUs = async (req, res) => {
  try {
    const { id } = req.params
    const incfrUs = await IncidentModel.incdFrUs(id)
    if (incfrUs.length === 0) return res.status(400).json({ message: 'No hay incidentes para este usuario' })
    res.status(200).json(incfrUs)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
export const getImg = async (req, res) => {
  try {
    const { name } = req.params
    const ruta = path.resolve(`./public/images/${name}`)
    await fs.access(ruta)

    res.sendFile(ruta)
  } catch (error) {
    if (error.errno === -4058) { return res.status(404).json({ message: 'La foto no se pudo encontrar' }) }

    res.status(500).json({ message: error.message })
  }
}
export const incidentDelete = async (req, res) => {
  try {
    const { id } = req.params
    const incIdDel = await IncidentModel.incdDel(id)
    if (incIdDel.affectedRows === 1) return res.status(200).json({ message: 'Incidente eliminado con exito' })
    if (incIdDel.affectedRows === 0) return res.status(400).json({ message: 'Error al eliminar el incidente' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
