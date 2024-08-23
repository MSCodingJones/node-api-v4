const express = require('express')
const router = express.Router()
const con = require('../../config/dbconfig')



// path => /api/album
router.get('/', (req, res)=> {
    con.query(
        `SELECT al.album_id, al.title,
        CASE
        WHEN ar.fName IS NULL THEN ''
        ELSE ar. fName
        END fName,
        CASE
        WHEN ar.lName IS NULL THEN ''
        ELSE ar. lName
        END lName,
        CASE
        WHEN ar.alias IS NULL THEN ''
        ELSE ar. alias
        END alias,
        CASE
        WHEN b.band IS NULL THEN ''
        ELSE b.band
        END b.band,
        al.yr_released,
        al.album_cover,
        l.label
        FROM labum al
        LEFT OUTER JOIN artist ar USING (artist_id)
        LEFT OUTER JOIN band b USING (band_id)
        JOIN LABEL L USING (label_id);`,
        (error, rows)=> {
            if (!error) {
                if (rows.length === 1) {
                    res.json(...rows)
                } else {
                    res.json(rows)
                }
            } else {
                    console.log('ERROR', error)
            }
        }
    )
})

router.get('/:id', (req, res)=> {
const id = req. params.id

    con.query(
        `SELECT al.album_id, al.title,
        CASE
        WHEN ar.fName IS NULL THEN ''
        ELSE ar. fName
        END fName,
        CASE
        WHEN ar.lName IS NULL THEN ''
        ELSE ar. lName
        END lName,
        CASE
        WHEN ar.alias IS NULL THEN ''
        ELSE ar. alias
        END alias,
        CASE
        WHEN b.band IS NULL THEN ''
        ELSE b.band
        END b.band,
        al.yr_released,
        al.album_cover,
        l.label
        FROM labum al
        LEFT OUTER JOIN artist ar USING (artist_id)
        LEFT OUTER JOIN band b USING (band_id)
        JOIN LABEL L USING (label_id)
        WHERE al.album_id = ${id};`,
        (error, rows)=> {
            if (!error) {
                if (rows.length === 1) {
                    res.json(...rows)
                } else {
                    res.json(rows)
                }
            } else {
                    console.log('ERROR', error)
            }
        }
    )
})

module.exports =router