UPDATE streams
SET 
stream_category = $2,
stream_title = $3,
stream_desc = $4,
stream_time = $5,
stream_hours = $6,
stream_country = $7,
stream_street = $8,
stream_city = $9,
stream_state = $10,
stream_zip = $11
WHERE stream_id = $1;