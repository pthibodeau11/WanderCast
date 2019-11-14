UPDATE streams
SET 
streamer_id = $2,
stream_price = $3,
stream_live_link = $4,
stream_equipment = $5,
isapproved = $6
WHERE stream_id = $1;