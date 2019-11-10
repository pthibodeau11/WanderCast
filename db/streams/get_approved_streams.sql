SELECT * FROM streams
WHERE isapproved = 'true' AND user_id = $1 AND purchase_id IS NULL
ORDER BY
stream_id DESC

-- SELECT * 
-- FROM streams
-- FULL [OUTER] JOIN purchases ON streams.stream_id = purchases.stream_id
-- WHERE isapproved = 'true' AND streams.user_id = $1 AND purchases.purchase_id = null;