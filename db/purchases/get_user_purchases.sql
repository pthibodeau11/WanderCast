SELECT 
purchases.purchase_id, stream_price, stream_title, stream_date, stream_hours, stream_city, stream_live_link, stream_video_link, purchase_timestamp
FROM purchases
INNER JOIN streams ON streams.stream_id = purchases.stream_id
WHERE purchases.user_id = $1