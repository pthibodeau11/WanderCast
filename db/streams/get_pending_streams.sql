SELECT * FROM streams
WHERE isapproved = 'false' AND user_id = $1 AND purchase_id IS NULL
ORDER BY
stream_id DESC