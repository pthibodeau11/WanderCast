INSERT INTO streams (
  user_id,
  stream_title,
  stream_desc,
  stream_date,
  stream_time,
  stream_hours, 
  stream_category,
  stream_country,
  stream_street,
  stream_state,
  stream_city,
  stream_zip,
  isApproved
)
VALUES (
    $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13
)