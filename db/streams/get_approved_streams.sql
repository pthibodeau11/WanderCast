SELECT * FROM streams
WHERE streamer_id <> null AND user_id = $1

-- SELECT * 
-- FROM streams
-- INNER JOIN purchases ON streams.stream_id = purchases.stream_id
-- WHERE isapproved = 'true' AND streams.user_id = $1 AND purchases.purchase_id = null;