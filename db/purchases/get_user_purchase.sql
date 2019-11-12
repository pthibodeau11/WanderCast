SELECT 
purchases.user_id, purchases.stream_id, stream_title, stream_desc, stream_date, stream_hours, purchases.streamer_id, purchase_timestamp, purchases.purchase_price, purchases.purchase_id
FROM purchases
INNER JOIN streams ON streams.stream_id = purchases.stream_id
WHERE purchases.user_id = $1 AND purchases.stream_id = $2