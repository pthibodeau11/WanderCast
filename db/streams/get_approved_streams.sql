SELECT *
-- (streams.stream_id, 
-- streams.stream_id, 
-- streams.streamer_id, 
-- streams.stream_title,
-- streams.stream_desc,
-- streams.stream_date,
-- streams.stream_time,
-- streams.stream_hours,
-- streams.stream_category,
-- streams.stream_country,
-- streams.stream_street,
-- streams.stream_state,
-- streams.stream_city,
-- streams.stream_zip,
-- streams.stream_price,
-- streams.stream_img,
-- streams.stream_live_link,
-- streams.stream_video_link,
-- streams.stream_equipment,
-- streams.isapproved,
-- streams.purchase_id,
-- purchases.purchase_id,
-- purchases.stream_id,
-- purchases.purchase_timestamp,
-- purchases.purchase_price
-- ) 
FROM streams
-- JOIN purchases ON purchases.stream_id = streams.stream_id
WHERE streams.isapproved = 'true' AND streams.user_id = $1 AND streams.purchase_id IS NULL
ORDER BY
streams.stream_id DESC

-- SELECT * 
-- FROM streams
-- FULL [OUTER] JOIN purchases ON streams.stream_id = purchases.stream_id
-- WHERE isapproved = 'true' AND streams.user_id = $1 AND purchases.purchase_id = null;