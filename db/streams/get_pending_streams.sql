SELECT * FROM streams
WHERE isapproved = 'false' AND user_id = $1
ORDER BY
stream_id DESC