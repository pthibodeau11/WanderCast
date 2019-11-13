SELECT 
purchases.purchase_id, purchases.streamer_id, streams.stream_desc, purchases.stream_id, stream_price, stream_title, stream_time, stream_hours, stream_city, stream_live_link, stream_video_link, purchase_timestamp
FROM purchases
INNER JOIN streams ON streams.stream_id = purchases.stream_id
WHERE purchases.user_id = $1
ORDER BY stream_time DESC